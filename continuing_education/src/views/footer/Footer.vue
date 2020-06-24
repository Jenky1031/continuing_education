<template>
    <div class="footer">
        <div class="bottom">
            <div class="copyright">
                <div class="copyright_left">
                    <div>
                        <img src="@/assets/logo2.png" alt />
                    </div>
                    <div class="copy_l">
                        地址：广州市从化温泉镇中山大学南方学院2号行政楼208 （510970）
                        <br />联系电话：020-61787172 020-61787173
                        <br />联系人：张老师 梁老师
                        <br />版权所有：2016 中山大学南方学院 粤ICP备06002985号-1
                        <br />学院官网链接：
                        <a
                            href="http://www.nfu.edu.cn/"
                            target="_blank"
                            title="中山大学南方学院"
                            style="color:#ffffff;"
                        >中山大学南方学院</a>
                    </div>
                </div>
                <div class="copy_r">
                    <img class="copy_r_img" src="@/assets/wx.jpg" />
                    <br />手机版
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.footer
    display: flex
    justify-content: center
    width: 100%
    background: $color1
    font-size: 12px
.bottom
    display: flex
    width: 1200px
    .copyright
        display: flex
        justify-content: space-between
        width: 1200px
        overflow: hidden
        margin: 0 auto
        padding: 20px 0 20px 0
    .copyright_left
        display: flex
        .copy_l
            width: 570px
            line-height: 24px
            color: #fff
            padding-left: 20px
            background-repeat: no-repeat
    .copy_r
        text-align: center
        color: #ffffff
        padding-right: 10px
        margin-top: 5px
        .copy_r_img
            width: 102px
            margin-bottom: 5px
</style>