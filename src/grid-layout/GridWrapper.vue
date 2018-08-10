<template>
    <div class="grid" ref="grid" :layout="layout">
        <grid-layout :layout="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">

            <grid-item v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
                {{item.i}}
            </grid-item>
        </grid-layout>

         <grid-layout :layout="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">

            <grid-item v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="`${item.i}232`">
                {{item.i}}
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout';

export default {
    name: 'grid-wrapper',
    data() {
        return {
            grid: {},
            layout: [
                { x: 0, y: 0, w: 2, h: 2, i: '0' },
                { x: 2, y: 0, w: 2, h: 4, i: '1' },
                { x: 4, y: 0, w: 2, h: 5, i: '2' },
                { x: 6, y: 0, w: 2, h: 3, i: '3' }
            ]
        };
    },
    components: {
        GridLayout,
        GridItem
    }
};
</script>

<style scoped>
.grid {
    position: relative;
}
.vue-grid-item {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 5px;
    z-index: 1;
    background: #000;
    color: #fff;
}
</style>
