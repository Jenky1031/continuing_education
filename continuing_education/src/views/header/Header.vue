<template>
    <div class="header">
        <div class="topout">
            <div class="top">
                <div class="logo">
                    <img src="@/assets/logo.jpg" alt />
                </div>
                <div class="serach">
                    <!-- <img src="@/assets/tel.jpg" alt /> -->
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="nav">
                <router-link to="/">
                    <div class="item">网站首页</div>
                </router-link>
                <router-link to="/b/Profile">
                    <div class="item">学院概况</div>
                </router-link>
                <router-link to="/b/New">
                    <div class="item">学院新闻</div>
                </router-link>
                <router-link to="/b/Recruitment">
                    <div class="item">招生信息</div>
                </router-link>
                <router-link to="/b">
                    <div class="item">在线报名</div>
                </router-link>
                <router-link to="/b/Search">
                    <div class="item">录取查询</div>
                </router-link>
                <router-link to="/b/Scenery">
                    <div class="item">校园风光</div>
                </router-link>
                <router-link to="/b/Life">
                    <div class="item">校园生活</div>
                </router-link>
                <router-link to="/b/We">
                    <div class="item">联系我们</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                loop: true
            }
        };
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.topout
    height: 100px
    background-color: #fff
.top
    display: flex
    justify-content: space-between
    align-items: center
    width: 1200px
    height: 100%
    margin: auto
.logo .search
    width: 300px
.menu
    height: 38px
    background-color: $color2
.nav
    display: flex
    justify-content: space-around
    width: 1200px
    margin: auto
.item
    flex: 1
    height: 38px
    line-height: 38px
    color: #ffffff
    text-align: center
    font-size: 14px
</style>
