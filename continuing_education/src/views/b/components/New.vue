<template>
    <div class="a_con_rc">
        <div class="newslist_li">
            <img class="newslist_li_img" src="@/assets/list_1.png" alt />
            <div class="newslist_li_right">
                <div class="newslist_li_right1">2020年我院驻各市招生老师信息</div>
                <div
                    class="newslist_li_right2"
                >2019年我院驻各市招生老师信息学生及家长：为服务考生，我院在广东省各地、市设立招生宣传人员,负责考生咨询、宣传、报名等各项工作。</div>
            </div>
        </div>
        <div class="newslist_li">
            <img class="newslist_li_img" src="@/assets/list_1.png" alt />
            <div class="newslist_li_right">
                <div class="newslist_li_right1">2020年我院驻各市招生老师信息</div>
                <div
                    class="newslist_li_right2"
                >2019年我院驻各市招生老师信息学生及家长：为服务考生，我院在广东省各地、市设立招生宣传人员,负责考生咨询、宣传、报名等各项工作。</div>
            </div>
        </div>
        <div class="newslist_li">
            <img class="newslist_li_img" src="@/assets/list_1.png" alt />
            <div class="newslist_li_right">
                <div class="newslist_li_right1">2020年我院驻各市招生老师信息</div>
                <div>2019年我院驻各市招生老师信息学生及家长：为服务考生，我院在广东省各地、市设立招生宣传人员,负责考生咨询、宣传、报名等各项工作。</div>
            </div>
        </div>
        <div class="newslist_li">
            <img class="newslist_li_img" src="@/assets/list_1.png" alt />
            <div class="newslist_li_right">
                <div class="newslist_li_right1">2020年我院驻各市招生老师信息</div>
                <div
                    class="newslist_li_right2"
                >2019年我院驻各市招生老师信息学生及家长：为服务考生，我院在广东省各地、市设立招生宣传人员,负责考生咨询、宣传、报名等各项工作。</div>
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
    name: "New"
};
</script>

<style lang="stylus" scoped>
.a_con_rc
    width: 100%
    margin-top: 5px
    line-height: 24px
    font-family: '宋体'
    color: #000000
    .newslist_li
        display: flex
        justify-content: space-between
        height: 162px
        margin-top: 10px
        width: 100%
        .newslist_li_img
            width: 127px
            height: 127px
            margin-top: 15px
            margin-left: 15px
            border: 2px solid #f0f0f0
        .newslist_li_right
            display: flex
            flex-direction: column
            justify-content: space-between
            float: right
            width: 730px
            height: 140px
            margin-top: 5px
            .newslist_li_right1
                font-size: 16px
                color: #77213b
                height: 40px
                line-height: 40px
            .newslist_li_right2
                font-size: 14px
                padding-right: 10px
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