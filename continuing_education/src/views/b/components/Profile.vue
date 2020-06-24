<template>
    <div class="a_con_rc">
        <div class="MyContent">
            <p>中山大学南方学院是依据教育部教发[2003]8号文的精神，由中山大学与广东珠江投资集团合作，经教育部批准设立的独立学院（教发 函[2006]87号，院校代码为：12619），是一所多学科全日制应用型本科高等学校。学院占地面积1092亩，规划建筑面积45.6万平方米。 学院设有10个院系42个专业，形成以管理学、经济学、文学为主，工学、理学、医学、艺术学协调发展、结构合理、优势互补的学科体系。现有本科生19574人。办学以来，学院办学水平不断提高，社会声誉逐步上升。学院先后荣获“广东省十佳独立学院”、“广东民办教育突出贡献奖”、“最具竞争力独立学院”、“中国独立学院杰出品牌”称号。</p>
            <p>中山大学南方学院继续教育学院（以下简称：继续教育学院）隶属于中山大学南方学院。继续教育学院遵循党和国家的教育方针，适应大教育、大培训的社会趋势，致力构建终身教育体系，充分整合利用校内外资源，继往开来，着力实践“优质办学服务社会”的宗旨，为社会各界提供精诚的教育服务。 随着中山大学南方学院十年的发展，继续教育学院也随之沿革和发展。2013年3月成立对外培训部，2016年6月成立继续教育学院。</p>
            <p>继续教育学院遵循党和国家的教育方针，充分整合利用校内外优势资源，以“拓展培训项目、提升培训质量 ”为指导思想，坚持“重点突破、点面结合、全面提升”的工作思路，致力于推进继续教育培训，打造我院培训品牌项目，凸显办学特色，更好的服务学生、服务地方经济，服务社会。</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
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
@import '~@/assets/styles/variables.styl'
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