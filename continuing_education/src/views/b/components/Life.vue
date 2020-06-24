<template>
    <div class="a_con_rc">
        <div class="picList">
            <div class="picItem" v-for="(item,index) in picList" :key="index">
                <img :src="item.src" alt />
                <div class="text">{{item.text}}</div>
            </div>
        </div>
        <div class="fengye">
            <div class="fengye_left">
                共
                <span>38</span>篇 页次:
                <span style="color:red">1</span>/
                <span>4</span>页
                <span>10</span>篇/页
            </div>
            <div class="fengye_right">
                <span>首页</span>
                <span>上一页</span>
                <span>下一页</span>
                <span>尾页</span>
                转到：
                <select name id>
                    <option value>第1页</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Life",
    data() {
        return {
            bg_img: require("@/assets/neiye_left_first.jpg"),
            icon_img: require("@/assets/icon.jpg"),
            picList: [
                {
                    src: require("@/assets/way.png"),
                    text: "来院路线"
                },
                {
                    src: require("@/assets/way.png"),
                    text: "来院路线"
                },
                {
                    src: require("@/assets/way.png"),
                    text: "来院路线"
                },
                {
                    src: require("@/assets/way.png"),
                    text: "来院路线"
                }
            ]
        };
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.a_con_rc
    width: 100%
    margin-top: 5px
    line-height: 24px
    font-family: '宋体'
    color: #000000
    .picList
        display: flex
        flex-wrap: wrap
        .picItem
            box-sizing: border-box
            width: 33%
            padding: 0 30px
            img
                width: 100%
            .text
                margin-top: -5px
                margin-bottom: 5px
                text-align: center
                font-size: 12px
                color: #666
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