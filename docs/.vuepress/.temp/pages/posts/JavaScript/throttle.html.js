export const data = JSON.parse("{\"key\":\"v-37f59702\",\"path\":\"/posts/JavaScript/throttle.html\",\"title\":\"防抖和节流\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"防抖和节流\",\"icon\":\"page\",\"order\":1,\"date\":\"2022-06-28T00:00:00.000Z\",\"category\":[\"前端\"],\"tag\":[\"JavaScript\"],\"description\":\"防抖和节流可谓是老生常谈了，其目的都是为了防止高频率的js代码的执行 防抖 当一个函数连续触发，只执行最后一次。 // fn是你要调用的函数，delay是防抖的时间 function debounce(fn, delay) { // timer是一个定时器 let timer = null; // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器 return function () { // 保存事件参数，防止fn函数需要事件参数里的数据 let arg = arguments; // 调用一次就清除上一次的定时器 clearTimeout(timer); // 开启这一次的定时器 timer = setTimeout(() =&gt; { // 若不改变this指向，则会指向fn定义环境 fn.apply(this, arg); }, delay) } }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/JavaScript/throttle.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Destiny's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"防抖和节流\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"防抖和节流可谓是老生常谈了，其目的都是为了防止高频率的js代码的执行 防抖 当一个函数连续触发，只执行最后一次。 // fn是你要调用的函数，delay是防抖的时间 function debounce(fn, delay) { // timer是一个定时器 let timer = null; // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器 return function () { // 保存事件参数，防止fn函数需要事件参数里的数据 let arg = arguments; // 调用一次就清除上一次的定时器 clearTimeout(timer); // 开启这一次的定时器 timer = setTimeout(() =&gt; { // 若不改变this指向，则会指向fn定义环境 fn.apply(this, arg); }, delay) } }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2022-09-13T08:32:00.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Destiny\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JavaScript\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-28T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2022-09-13T08:32:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"防抖和节流\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-06-28T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2022-09-13T08:32:00.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Destiny\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1658308589000,\"updatedTime\":1663057920000,\"contributors\":[{\"name\":\"sihangfeng\",\"email\":\"1652842325@qq.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":1.2,\"words\":359},\"filePathRelative\":\"posts/JavaScript/throttle.md\",\"localizedDate\":\"2022年6月28日\",\"excerpt\":\"<p>防抖和节流可谓是老生常谈了，其目的都是为了防止高频率的js代码的执行</p>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">防抖</p>\\n<p>当一个函数连续触发，只执行最后一次。</p>\\n</div>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token comment\\\">// fn是你要调用的函数，delay是防抖的时间</span>\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">debounce</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">fn<span class=\\\"token punctuation\\\">,</span> delay</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// timer是一个定时器</span>\\n  <span class=\\\"token keyword\\\">let</span> timer <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">null</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token comment\\\">// 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token comment\\\">// 保存事件参数，防止fn函数需要事件参数里的数据</span>\\n    <span class=\\\"token keyword\\\">let</span> arg <span class=\\\"token operator\\\">=</span> arguments<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token comment\\\">// 调用一次就清除上一次的定时器</span>\\n    <span class=\\\"token function\\\">clearTimeout</span><span class=\\\"token punctuation\\\">(</span>timer<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token comment\\\">// 开启这一次的定时器</span>\\n    timer <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">setTimeout</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token comment\\\">// 若不改变this指向，则会指向fn定义环境</span>\\n      <span class=\\\"token function\\\">fn</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">apply</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">,</span> arg<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span> delay<span class=\\\"token punctuation\\\">)</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
