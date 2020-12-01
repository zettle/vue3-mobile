# vue3-project

# vue3.0 项目

## 修改

### stylelint
- 引入 `stylelint-config-rational-order`，不用自己再写顺序规范



## 遇到的问题
#### scss遇到calc变量的问题
[解决问题方法](https://www.jianshu.com/p/399dde3763c9)
```css
.entrance-page {
    height: calc(100% - $appFooterHeight);
}
```
应该使用下面写法
```css
.entrance-page {
    height: calc(100% - #{$appFooterHeight});
}
```


#### iphone不触发:active的问题
第1种方法: document.addEventListener('touchstart', () => {});
```js
document.addEventListener('touchstart', () => { /* empty */ });
```

第2种方法：在<body>标签写ontouchstart
```html
<body ontouchstart>
    <div id="app"></div>
</body>
```

这里采用第2种写法



## vue3 v-model的自定义实现


## vue3 transiton组件命名的更改
以前是 `v-enter` -> `v-enter-active` -> `v-enter-to`

改为是 `v-enter-from` -> `v-enter-active` -> `v-enter-to`


## `transition` 和 `keep-alive`等不能写在 `router-view` 外面
以前是
```vue
<transition>
    <router-view></router-view>
</transition>
```

改为
```vue
<router-view v-slot="{ Component }">
    <transition>
        <component :is="Component"></component>
    </transition>
</router-view>
```

`keep-alive`类似



## inheritAttrs会影响class等属性
```vue
<m-button class="mt-30">主要按钮111</m-button>
```
在vue2.0中，即使加了`inheritAttrs:false`，class会自动加到子级上，到了vue3就不会了

[解答](https://github.com/vuejs/vue-next/pull/457)

![](./readmeImg/yy.png)



## vue-router配置404页面
在vue2中，用下面的写法
```js
{
    path: "*", // 此处需特别注意置于最底部
    component: () => import('../pages/error/404.vue')
}
```

在vue3中，要用下面的写法
```js
{
    path: '/:pathMatch(.*)', // 可以在任何位置
    component: () => import('../pages/error/404.vue')
},
```
如果使用
```js
{
    path: '/:pathMatch(.*)', // 配置404
    redirect: '/error/notFound'
}
```
会提示`{Vue Router warn]: Path "/error/notFound" was passed with params but they will be ignored. Use a named route alongside params instead.`

暂未找到对应解决方法
