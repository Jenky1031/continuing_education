<template>
    <div class="a" :style="{backgroundImage:`url(${bg_img})`}">
        <div class="a_con">
            <div class="a_con_l">
                <div class="a_nav">
                    <div class="item title" :style="{backgroundImage:`url(${left_img})`}">
                        <div class="item_t">News Center</div>
                        <div class="item_b">录取查询</div>
                    </div>
                </div>
            </div>
            <div class="a_con_r">
                <div class="a_con_rt">
                    <div
                        class="a_con_rtl"
                        :style="{background:`url(${icon_img}) no-repeat left center`}"
                    >录取查询</div>
                    <div class="a_con_rtr">
                        您当前位置:
                        中山大学南方学院
                        >>
                        录取查询
                        >> 频道首页
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "A",
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.a
    background-color: #f8f6f6
    background-repeat: no-repeat
    background-position: center top
    padding-top: 140px
    padding-bottom: 40px
    .a_con
        display: flex
        justify-content: space-around
        width: 1200px
        height: 410px
        margin: 0px auto 0px auto
        background-color: #FFFFFF
        padding-top: 20px
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
            
</style>