<template>
    <div id="app" class="app">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./views/header/Header.vue";
import Footer from "./views/footer/Footer.vue";
export default {
    name: "app",
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="stylus" scoped>
.app
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    // background: rgba(7, 17, 27, 0.8)
    /* 必须 */
    display: flex
    /* 必须，规定元素的排列方向 */
    flex-direction: column
    /* 必须占满屏 */
    height: 100%
    /* 没有这个就不能滚动了 */
    overflow: auto
</style>
