---
title: Promise浅谈
pageInfo: false
date: 2023-05-02
category:
  - 前端
tag:
  - JavaScript
---

::: info 介绍
Promise 是为了解决异步回调导致的“回调地狱”问题而产生的，它可以通过.then 的链式调用方式来处理异步编程，让代码更加清晰易懂。
:::

## Promise 的三种状态

### Pending（等待状态）

Promise 对象刚被创建时的初始状态，此时还没有返回结果

### Fulfilled（成功状态）

当 Promise 对象返回结果时，进入成功状态，并把结果作为参数传递给后续的 then 方法。

### Rejected（失败状态）

当 Promise 对象返回错误结果时，进入失败状态，并把错误信息作为参数传递给后续的 catch 方法

## Promise 的基本用法

Promise 是一个构造函数，它接收 resolve 和 reject 两个回调函数作为参数，resolve 会把 Promise 的状态从等待改变为成功（Pending => Fulfilled），并将异步操作的结果作为参数传递给 then 方法，reject 会把 Promise 的状态从等待改变为失败（Pending => Rejected），并将失败的原因作为参数传递给 catch 方法或 then 方法的第二个参数

### .then .catch

返回成功的回调和失败的回调

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 1000);
})
  .then((result) => {
    console.log(result); // 输出: 'Hello, Promise!'
  })
  .catch((error) => {
    console.log(error);
  });
```

### .all

Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被 reject 失败状态的值。

```js
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})

let p = Promise.all([Promise1, Promise2, Promise3])

p.then(funciton(){
  // 三个都成功则成功
}, function(){
  // 只要有失败，则失败
})
```

### .race

race 有赛跑的意思，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed");
  }, 500);
});

Promise.race([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // 打开的是 'failed'
  });
```

## Promise 简易实现

```js
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        const result = onFulfilled(this.value);
        resolve(result);
      } else if (this.state === "rejected") {
        const result = onRejected(this.value);
        resolve(result);
      } else if (this.state === "pending") {
        this.onFulfilledCallbacks.push((value) => {
          const result = onFulfilled(value);
          resolve(result);
        });

        this.onRejectedCallbacks.push((reason) => {
          const result = onRejected(reason);
          resolve(result);
        });
      }
    });
  }
}

// 示例用法
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.error(error)
);
```
