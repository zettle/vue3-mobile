<template>
    <m-layout>
        组件调用 <br />
        <button @click="isShowAS001 = true">组件调用</button>
        <br />
        <p>v-mode: {{curAs001}}</p>
        <p>@choose: {{dataAS001}}</p>
        <m-action-sheet
            v-model="curAs001"
            v-model:isShow="isShowAS001"
            :list="as001List"
            @choose="chooseItemAS001">
        </m-action-sheet>
        <hr />

        组件调用 各种slot<br />
        <button @click="isShowAS002 = true">组件调用</button>
        <br />
        <p>value: {{curAS002}}</p>
        <p>json: {{dataAS002}}</p>
        <m-action-sheet v-model:isShow="isShowAS002">
            <template #header>
                <div><span class="font-color-meiblue mr-20">slot</span>header</div>
            </template>
            <template #default>
                <li
                    v-for="(item, $index) of as002List"
                    :key="$index"
                    class="action-sheet-item white-click-active"
                    @click="chooseItemAS002(item)">
                    <span class="font-color-meiblue mr-20">第1项</span>: {{item.name}}
                    <i v-if="curAS002 === item.value" class="iconfont-checked"></i>
                </li>
            </template>
        </m-action-sheet>
        <hr />

        promise-api调用 <br />
        <button @click="showAS003">api调用</button>
        <hr />

        promise-api调用自定义字段 <br />
        <button @click="showAS004">api调用</button>
        <hr />
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import MActionSheet from '@com/plugins/actionSheet/MActionSheet.vue';
import { useActionSheet } from '@com/plugins/actionSheet';
interface As001ItemType {
    code: string;
    text: string;
}
interface As002ItemType {
    value: string;
    name: string;
}
interface As003ItemType {
    code: string;
    text: string;
}
export default defineComponent({
    components: { MActionSheet },
    setup () {
        // 最简单的组件demo
        const isShowAS001 = ref(false);
        const curAs001 = ref();
        const as001List: As001ItemType[] = [
            { code: 'c001', text: '系统001' },
            { code: 'c002', text: '系统002' },
            { code: 'c003', text: '系统003' }
        ];
        const dataAS001 = reactive({ code: '', text: '' });
        const chooseItemAS001 = (item: As001ItemType) => {
            dataAS001.code = item.code;
            dataAS001.text = item.text;
        };

        // 组件demo配合slot
        const isShowAS002 = ref(false);
        const curAS002 = ref('p002');
        const dataAS002 = reactive({ value: '', name: '' });
        const as002List: As002ItemType[] = [
            { value: 'p001', name: '北京' },
            { value: 'p002', name: '上海' },
            { value: 'p003', name: '广东' }
        ];
        const chooseItemAS002 = (item: As002ItemType) => {
            curAS002.value = item.value;
            dataAS002.value = item.value;
            dataAS002.name = item.name;
            isShowAS002.value = false;
        };

        const showAS003 = () => {
            useActionSheet({
                list: [
                    { code: 'p001', text: '北京' },
                    { code: 'p002', text: '上海' },
                    { code: 'p003', text: '广东' }
                ]
            }).then((item) => {
                console.log('page', item);
            });
        };

        let as004Value = 'sys002';
        const showAS004 = () => {
            useActionSheet({
                modelValue: as004Value,
                filedLabelName: 'name',
                filedCodeName: 'sysId',
                list: [
                    { sysId: 'sys001', name: '读书' },
                    { sysId: 'sys002', name: '写字' },
                    { sysId: 'sys003', name: '画画' }
                ]
            }).then((item) => {
                as004Value = item.sysId;
            });
        };

        return {
            isShowAS001,
            curAs001,
            chooseItemAS001,
            dataAS001,
            as001List,

            isShowAS002,
            as002List,
            curAS002,
            dataAS002,
            chooseItemAS002,

            showAS003,

            showAS004

        };
    }
});
</script>
