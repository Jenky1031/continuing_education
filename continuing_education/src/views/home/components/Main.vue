<template>
    <div>
        <!-- 轮播图 -->
        <div class="slider">
            <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide>
                    <img class="banner-img" src="@/assets/ban1.png" alt />
                </swiper-slide>
                <swiper-slide>
                    <img class="banner-img" src="@/assets/ban2.png" alt />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar" slot="scrollbar"></div>-->
            </swiper>
        </div>
        <!-- 首页主体 -->
        <div class="main-content">
            <div class="wrap">
                <!-- 报考指南 -->
                <div>
                    <div class="content-header">
                        <div class="guide-title">2020年报考指南</div>
                        <div class="guide-title">Application Guide</div>
                    </div>
                    <div class="guide-item">
                        <router-link to="/b/Recruitment">
                            <div class="item">
                                <div>面试入学</div>
                                <br />
                                <div>全日制授课</div>
                            </div>
                        </router-link>
                        <router-link to="/b/Recruitment">
                            <div class="item">
                                <div>面试入学</div>
                                <br />
                                <div>全日制授课</div>
                            </div>
                        </router-link>
                        <router-link to="/b/Recruitment">
                            <div class="item">
                                <div>面试入学</div>
                                <br />
                                <div>全日制授课</div>
                            </div>
                        </router-link>
                        <router-link to="/b/Recruitment">
                            <div class="item">
                                <div>面试入学</div>
                                <br />
                                <div>全日制授课</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- 招生信息 -->
                <div>
                    <!-- 招生信息头部 -->
                    <div class="content-header">
                        <div class="guide-title">招生信息</div>
                    </div>
                    <!-- 招生信息主体 -->
                    <div class="vedio-list">
                        <!-- 招生三个盒子之一 -->
                        <div class="list-item-box">
                            <!-- 招生盒子图片 -->
                            <div class="list-item-img">
                                <img class="list-img" src="@/assets/list1.jpg" alt />
                            </div>
                            <!-- 招生盒子主体 -->
                            <div class="list-container">
                                <!-- 招生盒子标题 -->
                                <div class="list-title-box">
                                    <div class="list-title">高等教育</div>
                                    <div class="more">
                                        <img src="@/assets/more.jpg" alt />
                                    </div>
                                </div>
                                <!-- 招生盒子列表 -->
                                <div class="list-detail">
                                    <dl>
                                        <dt>2019年高等教育自学考</dt>
                                        <dd>04/29</dd>
                                    </dl>
                                    <dl>
                                        <dt>广东2018年普通高校本</dt>
                                        <dd>04/23</dd>
                                    </dl>
                                    <dl>
                                        <dt>广东省教育考试院发布</dt>
                                        <dd>11/21</dd>
                                    </dl>
                                    <dl>
                                        <dt>我院师生代表前往中山</dt>
                                        <dd>08/08</dd>
                                    </dl>
                                    <dl>
                                        <dt>2017年中国大学生就业</dt>
                                        <dd>07/16</dd>
                                    </dl>
                                    <dl>
                                        <dt>“专业不对口”不是什</dt>
                                        <dd>07/10</dd>
                                    </dl>
                                    <dl>
                                        <dt>2017年专插本怎么考？送</dt>
                                        <dd>07/03</dd>
                                    </dl>
                                    <dl></dl>
                                </div>
                            </div>
                        </div>
                        <!-- 招生三个盒子之一 -->
                        <div class="list-item-box">
                            <div class="list-item-img">
                                <img class="list-img" src="@/assets/list2.jpg" alt />
                            </div>
                            <div class="list-container">
                                <div class="list-title-box">
                                    <div class="list-title">本硕连读</div>
                                    <div class="more">
                                        <img src="@/assets/more.jpg" alt />
                                    </div>
                                </div>
                                <div class="list-detail">
                                    <dl>
                                        <dt>2019年高等教育自学考</dt>
                                        <dd>04/29</dd>
                                    </dl>
                                    <dl>
                                        <dt>广东2018年普通高校本</dt>
                                        <dd>04/23</dd>
                                    </dl>
                                    <dl>
                                        <dt>广东省教育考试院发布</dt>
                                        <dd>11/21</dd>
                                    </dl>
                                    <dl>
                                        <dt>我院师生代表前往中山</dt>
                                        <dd>08/08</dd>
                                    </dl>
                                    <dl>
                                        <dt>2017年中国大学生就业</dt>
                                        <dd>07/16</dd>
                                    </dl>
                                    <dl>
                                        <dt>“专业不对口”不是什</dt>
                                        <dd>07/10</dd>
                                    </dl>
                                    <dl>
                                        <dt>2017年专插本怎么考？送</dt>
                                        <dd>07/03</dd>
                                    </dl>
                                    <dl></dl>
                                </div>
                            </div>
                        </div>
                        <!-- 招生三个盒子之一 -->
                        <div class="list-item-box">
                            <div class="list-item-img">
                                <img class="list-img" src="@/assets/list3.jpg" alt />
                            </div>
                            <div class="list-container">
                                <div class="list-title-box">
                                    <div class="list-title">民航管理</div>
                                    <div class="more">
                                        <img src="@/assets/more.jpg" alt />
                                    </div>
                                </div>
                                <div class="list-detail">
                                    <dl>
                                        <dt>2019年高等教育自学考</dt>
                                        <dd>04/29</dd>
                                    </dl>
                                    <dl>
                                        <dt>广东2018年普通高校本</dt>
                                        <dd>04/23</dd>
                                    </dl>
                                    <dl>
                                        <dt>广东省教育考试院发布</dt>
                                        <dd>11/21</dd>
                                    </dl>
                                    <dl>
                                        <dt>我院师生代表前往中山</dt>
                                        <dd>08/08</dd>
                                    </dl>
                                    <dl>
                                        <dt>2017年中国大学生就业</dt>
                                        <dd>07/16</dd>
                                    </dl>
                                    <dl>
                                        <dt>“专业不对口”不是什</dt>
                                        <dd>07/10</dd>
                                    </dl>
                                    <dl>
                                        <dt>2017年专插本怎么考？送</dt>
                                        <dd>07/03</dd>
                                    </dl>
                                    <dl></dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 更多 -->
                <div class="more-detail-btn">
                    <router-link to="/c">
                        <div class="btn">查看更多详情</div>
                    </router-link>
                </div>
                <!-- 学院新闻/通告 校园风景 -->
                <div class="cont_c1">
                    <!-- 学院新闻 -->
                    <div class="cont_c1r">
                        <div class="cont_c1rt">
                            <div class="cont_c1rtt">学院新闻</div>
                            <div>
                                <img src="@/assets/more.jpg" alt />
                            </div>
                        </div>
                        <div class="cont_c1rc">
                            <div class="newsfirst">
                                <div class="newsfirstleft">
                                    <img src="@/assets/box1.jpg" alt />
                                </div>
                                <div class="newsfirstright">
                                    <div class="newsfirstright_t">2020年我院驻各市招生老师信息</div>
                                    <div
                                        class="newsfirstright_c"
                                    >2019年我院驻各市招生老师信息学生及家长：为服务考生，我院在广东省各地、市设立招生宣传人员,负责考生咨询</div>
                                </div>
                            </div>
                            <dl>
                                <dt>2020年我院驻各市招生老师信息</dt>
                                <dd>2020-05-20</dd>
                            </dl>
                            <dl>
                                <dt>商学院开展电子商务省级特色重点学科企业大</dt>
                                <dd>2019-05-07</dd>
                            </dl>
                            <dl>
                                <dt>​广东省高考综合改革方案出台情况综述</dt>
                                <dd>2019-04-27</dd>
                            </dl>
                            <dl>
                                <dt>复旦大学宓詠教授来我校作智慧校园建设专题</dt>
                                <dd>2019-04-27</dd>
                            </dl>
                            <dl>
                                <dt>重实践，推转型&nbsp;——货币与金融市场、网店运</dt>
                                <dd>2019-03-14</dd>
                            </dl>
                            <dl>
                                <dt>继续教育学院团总支学生会干部学习会</dt>
                                <dd>2018-05-17</dd>
                            </dl>
                            <dl>
                                <dt>2018届艺术设计与创意产业系毕业展开幕式顺</dt>
                                <dd>2018-04-23</dd>
                            </dl>
                            <dl></dl>
                        </div>
                    </div>
                    <!-- 学院通知 -->
                    <div class="cont_c1r">
                        <div class="cont_c1rt">
                            <div class="cont_c1rtt">学院通知</div>
                            <div>
                                <img src="@/assets/more.jpg" alt />
                            </div>
                        </div>
                        <div class="cont_c1rc">
                            <div class="newsfirst">
                                <div class="newsfirstleft">
                                    <img src="@/assets/box1.jpg" alt />
                                </div>
                                <div class="newsfirstright">
                                    <div class="newsfirstright_t">中山大学南方学院关于开展学生宿</div>
                                    <div
                                        class="newsfirstright_c"
                                    >各有关单位：为进一步做好学生宿舍的治安、防火、用电、秩序管理等工作，及时发现学生宿舍各类安全隐患，有效预</div>
                                </div>
                            </div>
                            <dl>
                                <dt>关于2018届第三批新生录取通知书发放的通知</dt>
                                <dd>2018-07-27</dd>
                            </dl>
                            <dl>
                                <dt>关于2018届第二批新生录取通知书发放时间的</dt>
                                <dd>2018-07-17</dd>
                            </dl>
                            <dl>
                                <dt>​关于2018届第一批新生录取通知书发放的通知</dt>
                                <dd>2018-07-02</dd>
                            </dl>
                            <dl>
                                <dt>未录取学生公示</dt>
                                <dd>2018-06-25</dd>
                            </dl>
                            <dl>
                                <dt>关于2018年端午节假期后勤服务保障工作安排</dt>
                                <dd>2018-06-09</dd>
                            </dl>
                            <dl>
                                <dt>关于2018年5月、6月普通话水平测试的通知</dt>
                                <dd>2018-04-23</dd>
                            </dl>
                            <dl>
                                <dt>关于2018年劳动节假期后勤服务工作安排的通</dt>
                                <dd>2018-04-19</dd>
                            </dl>
                            <dl></dl>
                        </div>
                    </div>
                </div>
                <div class="cont_c1 mt0">
                    <Marquee />
                </div>
            </div>
        </div>
        <!-- 侧边栏 -->
        <div class="topbar">
            <img class="topbar_img" src="@/assets/qq1.jpg" alt />
            <img class="topbar_img" src="@/assets/qq2.jpg" alt />
            <img class="topbar_img" src="@/assets/qq3.jpg" alt />
            <img class="topbar_img" src="@/assets/wx.jpg" alt />
            <span style="font-size:14px;margin-right: 20px">微信公众号</span>
        </div>
    </div>
</template>
<script>
import Marquee from "./Marquee.vue";
export default {
    name: "Main",
    components: {
        Marquee
    },
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                loop: true,
                autoplay: true,
                autoplay: 3000
            }
        };
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.banner-img
    width: 100%
.main-content
    background-color: #e9e9e9
    padding-bottom: 10px
.wrap
    width: 1200px
    margin: 0 auto
    margin-top: 15px
.content-header
    display: flex
    justify-content: space-between
    align-items: center
    height: 43px
    width: 1200px
    margin-bottom: 13px
    margin-top: 33px
    border-bottom: 4px solid $color1
.guide-title
    font-size: 30px
    color: $color1
.guide-item
    display: flex
    justify-content: space-between
.item
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 280px
    height: 100px
    background: $color1
    color: #ffffff
    font-size: 18px
.vedio-list
    display: flex
    justify-content: space-between
.list-item-box
    width: 380px
    background: #fff
    border: #ccc solid 1px
    margin-bottom: 16px
.list-img
    width: 380px
.list-container
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 10px
.list-title-box
    display: flex
    justify-content: space-between
    width: 368px
    line-height: 30px
    height: 30px
    border-bottom: $color1 2px solid
.list-title
    font-size: 18px
    color: $color1
    font-weight: normal
.list-detail
    width: 368px
    margin-top: 8px
    line-height: 24px
    float: left
    font-size: 14px
    color: #666
.list-detail dl
    width: 368px
    line-height: 30px
    float: left
    border-bottom: #cfcdcd 1px dashed
.list-detail dt
    width: 288px
    float: left
.more-detail-btn
    display: flex
    justify-content: center
    padding: 10px 0 20px
.more-detail-btn .btn
    width: 178px
    height: 38.8px
    line-height: 38px
    text-align: center
    font-size: 16px
    color: #333
    border: 1px solid #ccc
    border-radius: 4px
.cont_c1
    display: flex
    justify-content: space-around
    background-color: #fff
    margin-top: 10px
    padding-top: 10px
.mt0
    margin-top: 0px
    padding-top: 0px
.cont_c1r
    width: 548px
    margin-bottom: 10px
.cont_c1rt
    display: flex
    justify-content: space-between
    width: 548px
    line-height: 30px
    height: 30px
    border-bottom: $color1 2px solid
.cont_c1rtt
    font-size: 18px
    color: $color1
    font-weight: normal
.cont_c1rc
    width: 548px
    margin-top: 8px
    line-height: 24px
    font-size: 14px
.newsfirst
    display: flex
    justify-content: space-between
    border-bottom: #cfcdcd 1px dashed
    height: 108px
    font-size: 18px
    margin-top: 5px
.newsfirstleft
    width: 155px
.newsfirstleft img
    border: #cfcdcd 2px solid
    width: 150px
    height: 100px
.newsfirstright
    width: 370px
.newsfirstright_t
    color: #666
.newsfirstright_c
    color: #c2c0c1
    font-size: 12px
    font-weight: normal
    margin-left: 0px
    text-align: left
    width: 275px
    height: 30px
    line-height: 30px
.cont_c1rc dl
    width: 548px
    line-height: 30px
    float: left
    border-bottom: #cfcdcd 1px dashed
.cont_c1rc dt
    width: 330px
    float: left
    color: #666
.cont_c1rc dd
    width: 80px
    color: #999
    float: right
.topbar
    position: fixed
    width: 114px
    z-index: 100
    top: 150px
    right: 5px
    text-align: center
.topbar_img
    vertical-align: top
    width: 100px
    margin-right: 20px
</style>