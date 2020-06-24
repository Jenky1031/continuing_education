<template>
    <div class="picMarquee-left">
        <div class="hd">校园风景</div>
        <div class="my-outbox">
            <div class="my-inbox" ref="box">
                <div class="my-list" v-for="(item,index) in picList" :key="index">
                    <img :src="item" alt />
                    <div>校园风光{{index+1}}</div>
                </div>
                <div class="my-list" v-for="(item,index) in picList" :key="(index+1)*100">
                    <img :src="item" alt />
                    <div>校园风光{{index+1}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Marquee",
    data() {
        return {
            picList: [
                require("@/assets/move.jpg"),
                require("@/assets/move.jpg"),
                require("@/assets/move.jpg"),
                require("@/assets/move.jpg"),
                require("@/assets/move.jpg"),
                require("@/assets/move.jpg"),
                require("@/assets/move.jpg")
            ]
        };
    },
    mounted: function() {
        var that = this;
        var target = this.$refs.box;
        var initLeft = 0;
        setInterval(function() {
            initLeft++;
            if (initLeft >= target.offsetWidth / 2) {
                initLeft = 0;
            }
            target.style = "transform: translateX(-" + initLeft + "px)";
        }, 50);
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.picMarquee-left
    width: 1140px
    overflow: hidden
    margin: 0 auto
    .hd
        width: 1200px
        margin-bottom: 13px
        margin-top: 33px
        line-height: 30px
        padding: 0 10px
        border-bottom: $color1 2px solid
        font-size: 18px
        color: $color1
        font-weight: normal
    .my-outbox
        padding-bottom: 10px
        .my-inbox
            display: flex
            .my-list
                text-align: center
                color: #666
                font-size: 12px
                img
                    width: 126px
                    height: 90px
                    padding: 2px
                    margin: 0 8px
                    border: 1px solid #ccc
</style>