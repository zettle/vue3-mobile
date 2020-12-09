<template>
    <transition name="fade">
        <div v-if="isShow" class="m-area-picker-com">
            <div class="m-mask" @click="close"></div>
            <div class="m-area-picker-container">
                <h2 class="m-area-picker-title">{{title}}</h2>
                <ul class="ams-tab">
                    <li
                        v-for="n in list.length"
                        :key="n"
                        :class="{active: tabIndex === n - 1}"
                        @click="switTab(n - 1)">
                        {{curRegions[n - 1] ? curRegions[n - 1].regionName : '请选择'}}
                    </li>
                </ul>
                <section class="ams-content">
                    <!-- 省 市 区 -->
                    <div
                        v-for="(region, $i) of list"
                        :key="$i"
                        :class="['ams-content-item', {active: tabIndex === $i}]">
                        <ul>
                            <li
                                v-for="item of region"
                                :key="item.regionCode"
                                :class="{active: curRegions[$i] && curRegions[$i].regionCode === item.regionCode}"
                                @click="chooseRegionHandler(item)">
                                {{item.regionName}}
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue';
import { useStore } from 'vuex';
import { StoreState } from '@/store';
import { FetchRegion } from '@/types';

export default defineComponent({
    props: {
        isShow: Boolean, // 是否展示
        title: { type: String, default: '请选择省市区' }, // 头部标题
        level: { type: Number, default: 3 } // 要选择最多到第几级，默认3级（即省市区），如果查了后台数据没有则直接返回
    },
    emits: ['choose', 'close', 'update:isShow'],
    setup (props, { emit }) {
        const tabIndex = ref(0); // 第几个tab，默认0，即第1个
        const store = useStore<StoreState>();

        const list: FetchRegion[][] = reactive([]);
        const curRegions: FetchRegion[] = reactive([]);

        const close = () => {
            emit('update:isShow', false);
            emit('close');
        };

        const fetchRegion = (parentId = '0') => {
            // 获取省市区 0-省份 其他-上一级的regionCode
            store.dispatch('getProCityAction', parentId).then((regionList: FetchRegion[]) => {
                if (regionList.length) {
                    if (parentId !== '0') {
                        tabIndex.value += 1;
                    }
                    list[tabIndex.value] = regionList;
                }
            });
        };
        fetchRegion(); // 获取省份数据

        const chooseRegionHandler = async (info: FetchRegion) => {
            curRegions[tabIndex.value] = info;
            if (props.level > tabIndex.value + 1) {
                fetchRegion(info.regionCode);
            } else {
                emit('choose', toRaw(curRegions));
                close();
            }
        };
        const switTab = (i: number) => {
            tabIndex.value = i;
        };
        return { curRegions, tabIndex, list, close, chooseRegionHandler, switTab };
    }
});
</script>

<style lang="scss" scoped>
.m-area-picker-com {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $areaPickerZindex;
    width: 100%;
    height: 100%;
}

// 内容的标题
.m-area-picker-title {
    padding: 20px 0;
    color: #aaa;
    font-size: 26px;
    line-height: 1;
    text-align: center;
}

// 下拉框内容
.m-area-picker-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    font-size: 28px;
    background-color: #fff;
    transform: translateY(0);
    transition: transform 0.1s ease-out;
}

// 出现瞬间 .fade-enter 出现过程 vux-picker-box fade-enter-active fade-enter-to
// 消失过程 .fade-leave vux-picker-box fade-leave-active fade-leave-to
// 运动结束后 .fade 的都消失
.fade-enter-from > .m-area-picker-container,
.fade-leave-to > .m-area-picker-container {
    transform: translateY(100%);
}

.fade-enter-to > .m-area-picker-container {
    transform: translateY(0);
}

// 选中的展示在这里
.ams-tab {
    li {
        display: inline-block;
        margin-left: 20px;
        padding-bottom: 10px;
        line-height: 1;

        &.active {
            color: $meiBlue;
            border-bottom: 1px solid $meiBlue;
        }
    }
}
// 省市区活动区域
.ams-content {
    position: absolute;
    top: 142px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #39393b;
}

.ams-content-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #fff;

    &.active {
        display: block;
    }

    ul {
        padding-bottom: 160px;
    }

    li {
        padding-bottom: 30px;
        padding-left: 24px;
        line-height: 1;

        &.active {
            color: $meiBlue;
        }
    }
}
</style>
