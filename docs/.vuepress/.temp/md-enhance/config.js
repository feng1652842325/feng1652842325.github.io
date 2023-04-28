import { defineClientConfig } from "@vuepress/client";
import VPCard from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import ChartJS from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-shared@2.0.0-beta.206@vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_reveal.js@4.5.0@reveal.js/dist/reveal.css";
import Presentation from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Tabs from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/admin/Desktop/项目/blog/node_modules/_katex@0.16.6@katex/dist/katex.min.css";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});
