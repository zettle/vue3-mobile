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