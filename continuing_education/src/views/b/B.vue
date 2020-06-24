<template>
    <div class="b">
        <div class="a_banner">
            <img src="@/assets/banner.jpg" alt />
        </div>
        <div class="a_con">
            <div class="a_con_l">
                <div class="a_nav">
                    <div class="item title" :style="{backgroundImage:`url(${bg_img})`}">
                        <div class="item_t">News Center</div>
                        <div class="item_b">
                            <span>{{this.data.text}}</span>
                        </div>
                    </div>
                    <div class="item cont">学院新闻</div>
                    <div class="item cont">学院通告</div>
                </div>
            </div>
            <div class="a_con_r">
                <div class="a_con_rt">
                    <div
                        class="a_con_rtl"
                        :style="{background:`url(${icon_img}) no-repeat left center`}"
                    >
                        <span>{{this.data.text}}</span>
                    </div>
                    <div class="a_con_rtr">
                        <!-- 您当前位置:
                        中山大学南方学院
                        >>
                        学院新闻
                        >> 频道首页-->
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/b/Profile' }">
                                <span>{{this.data.text}}</span>
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
                <Profile v-show="data.show=='Profile'" />
                <New v-show="data.show=='New'" />
                <Recruitment v-show="data.show=='Recruitment'" />
                <Search v-show="data.show=='Search'" />
                <Scenery v-show="data.show=='Scenery'" />
                <Life v-show="data.show=='Life'" />
                <We v-show="data.show=='We'" />
            </div>
        </div>
    </div>
</template>

<script>
import New from "./components/New";
import Recruitment from "./components/Recruitment";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Scenery from "./components/Scenery";
import Life from "./components/Life";
import We from "./components/We";

export default {
    name: "B",
    components: {
        Profile,
        New,
        Recruitment,
        Search,
        Scenery,
        Life,
        We
    },
    data() {
        return {
            bg_img: require("@/assets/neiye_left_first.jpg"),
            icon_img: require("@/assets/icon.jpg"),
            data: {
                show: "",
                text: ""
            }
        };
    },
    mounted() {
        this.data.show = this.$route.params.part;
        switch (this.data.show) {
            case "Profile":
                this.data.text = "学院概况";
                break;
            case "New":
                this.data.text = "学院新闻";
                break;
            case "Recruitment":
                this.data.text = "招生信息";
                break;
            case "Search":
                this.data.text = "录取查询";
                break;
            case "Life":
                this.data.text = "校园生活";
                break;
            case "Scenery":
                this.data.text = "校园风光";
                break;
            case "We":
                this.data.text = "联系我们";
                break;
        }
    },
    watch: {
        $route(to, from) {
            this.data.show = to.params.part;
            switch (this.data.show) {
                case "Profile":
                    this.data.text = "学院概况";
                    break;
                case "New":
                    this.data.text = "学院新闻";
                    break;
                case "Recruitment":
                    this.data.text = "招生信息";
                    break;
                case "Search":
                    this.data.text = "录取查询";
                    break;
                case "Life":
                    this.data.text = "校园生活";
                    break;
                case "Scenery":
                    this.data.text = "校园风光";
                    break;
                case "We":
                    this.data.text = "联系我们";
                    break;
            }
            console.log(this.data.text);
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.b
    flex: 1
    background-color: #F8F6F6
    .a_banner
        width: 1200px
        margin: 0 auto
        background-color: #FFFFFF
        height: auto
    .a_con
        display: flex
        justify-content: space-around
        width: 1200px
        margin: 0px auto 0px auto
        background-color: #FFFFFF
        padding-top: 20px
        padding-bottom: 30px
        .a_con_l
            width: 200px
            .a_nav
                display: flex
                flex-direction: column
                .item
                    width: 200px
                    height: 67px
                    font-size: 16px
                    background-color: $color1
                    color: #fff
                    padding-right: 20px
                .title
                    text-align: right
                    padding-top: 5px
                .cont
                    display: flex
                    flex-direction: row-reverse
                    align-items: center
                    margin-top: 5px
        .a_con_r
            width: 900px
            .a_con_rt
                display: flex
                justify-content: space-between
                width: 100%
                font-size: 12px
                line-height: 16px
                border-bottom: #f7f4ee 1px solid
                padding-bottom: 10px
                .a_con_rtl
                    font-weight: normal
                    padding-left: 19px
                    color: #333
                .a_con_rtr
                    color: #999
                .fengye_left
                    font-size: 12px
                    margin-left: 15px
                .fengye_right
                    display: flex
                    justify-content: flex-end
                    font-size: 12px
                    span
                        color: #666
                        margin: 0 5px
</style>