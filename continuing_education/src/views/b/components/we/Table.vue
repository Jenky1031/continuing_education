<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="pic" label="照片">
            <template slot-scope="scope">
                <img :src="scope.row.pic" style="width: 100px" />
            </template>
        </el-table-column>
        <el-table-column prop="name" label="驻地老师" align="center"></el-table-column>
        <el-table-column prop="address" label="驻地区域"></el-table-column>
        <el-table-column prop="tel" label="联系电话"></el-table-column>
        <el-table-column prop="wx" label="微信二维码">
            <template slot-scope="scope">
                <img :src="scope.row.wx" style="width: 100px" />
            </template>
        </el-table-column>
        <el-table-column prop="id" label="授权书编号"></el-table-column>
        <el-table-column prop="idCard" label="身份证号"></el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    pic: require("@/assets/p_pic.jpg"),
                    name: "张小华",
                    address: "汕头、汕尾、广东省外",
                    tel: `020-61787172 15521006450 （微信同号）`,
                    wx: require("@/assets/p_wx.jpg")
                },
                {
                    pic: require("@/assets/p_pic.jpg"),
                    name: "张小华",
                    address: "汕头、汕尾、广东省外",
                    tel: `020-61787172 15521006450 （微信同号）`,
                    wx: require("@/assets/p_wx.jpg")
                },
                {
                    pic: require("@/assets/p_pic.jpg"),
                    name: "张小华",
                    address: "汕头、汕尾、广东省外",
                    tel: `020-61787172 15521006450 （微信同号）`,
                    wx: require("@/assets/p_wx.jpg")
                },
            ]
        };
    }
};
</script>