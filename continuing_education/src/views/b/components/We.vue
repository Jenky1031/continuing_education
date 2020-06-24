<template>
    <div class="a_con_rc">
        <div></div>
        <div class="MyContent">
            学生及家长：
            <p>为服务考生，我院在广东省各地、市设立招生宣传人员,负责考生咨询、宣传、报名等各项工作，除按招生简章标准收取报名费外，不得收取其他任何费用。我校招生宣传人员均佩带我院“工作证”，均持有我院“招生授权书”，请广大考生仔细甄别。对于我院招生宣传人员，我院严格要求、真实宣传、诚信招生，招生期间不得违反国家有关法律、法规和学校的招生规定。 同时提醒考生及家长要从正规渠道了解我院招生信息，对招生人员注意甄别，切勿上当受骗，遇到一些不正规的现象及时向我院反映。</p>
        </div>
        <Table />
    </div>
</template>

<script>
import Table from "./we/Table";
export default {
    name: "We",
    components: {
        Table
    },
    data() {
        return {
            bg_img: require("@/assets/neiye_bg.jpg"),
            left_img: require("@/assets/neiye_left_first.jpg"),
            icon_img: require("@/assets/icon.jpg")
        };
    }
};
</script>

<style lang="stylus" scoped>
.a_con_rc
    width: 100%
    margin-top: 5px
    line-height: 24px
    font-family: '宋体'
    color: #000000
    .MyContent
        margin: 30px 0 30px 0
        font-size: 14px
        font-family: 'Microsoft YaHei', '微软雅黑'
        color: #666
        p
            text-indent: 2em
</style>