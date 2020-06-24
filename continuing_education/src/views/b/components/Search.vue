<template>
    <div class="a_con_rc">
        <el-form :model="data" :rules="rules" class="input" ref="form">
            <el-form-item prop="user">
                <el-input class="input" v-model="data.user" placeholder="请输入身份证姓名"></el-input>
            </el-form-item>
            <el-form-item prop="id_no">
                <el-input class="input" v-model="data.id_no" placeholder="请输入身份证号码"></el-input>
            </el-form-item>
            <el-form-item class="button">
                <el-button type="primary" @click="onSubmit">录取查询</el-button>
            </el-form-item>
            <el-form-item class="button">
                <el-button type="info" @click="clean">重新输入</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            data: {
                user: "",
                id_no: ""
            },
            rules: {
                user: [
                    {
                        required: true,
                        trigger: "change",
                        message: "请填写姓名"
                    }
                ],
                id_no: [
                    {
                        required: true,
                        message: "请填写证件号码",
                        trigger: "blur"
                    },
                    {
                        pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
                        message: "证件号码格式有误！",
                        trigger: "blur"
                    }
                ]
            },
            bg_img: require("@/assets/neiye_bg.jpg"),
            left_img: require("@/assets/neiye_left_first.jpg"),
            icon_img: require("@/assets/icon.jpg")
        };
    },
    methods: {
        clean() {
            this.data = {
                user: "",
                id_no: ""
            };
        },
        onSubmit() {
            this.$refs.form.validate((isValid, errors) => {
                this.$message.success("请填写个人信息");
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
.a_con_rc
    display: flex
    justify-content: center
    width: 100%
    margin-top: 20px
    text-align: center
    line-height: 24px
    font-family: '宋体'
    color: #000000
    .input
        width: 360px
    .button
        display: inline-block
        margin: 0 20px
</style>