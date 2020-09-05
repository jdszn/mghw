<template>
    <main>
        <div id="head">
            <mt-header title="购物车">
              <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>
              <mt-button slot="right"></mt-button>
            </mt-header>
        </div>
        <div id="pai">
            <img src="../assets/images/pai.png">
            <p>购物车还没有商品哦~</p>
        </div>
        <p>热卖</p>
        <div id="rm">
            <ul>
                <li v-for="(item,index) in list">
                    <router-link :to="item.path">
                        <img :src="item.src" alt="">
                        <p class="des">{{item.des}}</p>
                        <p class="ps">{{item.price}} <i>{{item.s}}</i></p>
                    </router-link>
                </li>
            </ul>
        </div>

        <mt-tabbar v-model="selected">
          <mt-tab-item id="/index">
            <img slot="icon" src="../assets/images/index.png">
            <router-link to="/index">首页</router-link>            
          </mt-tab-item>
          <mt-tab-item id="/type">
            <img slot="icon" src="../assets/images/type.png">
            <router-link to="/type">分类 </router-link>           
          </mt-tab-item>
          <mt-tab-item id="/buy">
            <img slot="icon" src="../assets/images/buy.png">
            <router-link to="/buy">购物车</router-link>             
          </mt-tab-item>
          <mt-tab-item id="/me">
            <img slot="icon" src="../assets/images/me.png">
            <router-link to="/me">我</router-link>                           
          </mt-tab-item>
        </mt-tabbar>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                selected:'/buy',
                list:[
                    {
                        src:'./src/assets/images/rm1.png',
                        des:'【大神王炸】密室大逃脱大神版·KeepEscaping纪念扑克牌',
                        price:'￥36',
                        s:'已预订1223件',
                        path:'/details'                       
                    },
                    {
                        src:'./src/assets/images/rm2.png',
                        des:'【预售】密室大逃脱大神版·「爆梗ACE」金句镭射贴纸包',
                        price:'￥29',
                        s:'已预订328件',
                        path:'/details'                        
                    },
                    {
                        src:'./src/assets/images/rm3.png',
                        des:'【预售】密室大逃脱大神版·「Escape Puzzle」妙趣拼图',
                        price:'￥69',
                        s:'已预订183件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm4.png',
                        des:'【天才躲藏羊】元气小哥 杨小满生日水晶球八音盒 元气满满的哥哥官方周边',
                        price:'￥159',
                        s:'已预订292件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm5.png',
                        des:'【预售】密室大逃脱·密逃小分队团魂限定金属徽章',
                        price:'￥49',
                        s:'已预订344件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm6.png',
                        des:'CoolGuy天天向上周年纪念款斜挎包',
                        price:'￥79',
                        s:'已预订445件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm7.png',
                        des:'【酷盖WYB】夏季限定版 85号高帮帆布鞋 天天向上官方周边',
                        price:'￥159',
                        s:'已预订1292件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm8.png',
                        des:'学院同款！PVC警戒线追凶包（补货中，预计8月22号左右发货）',
                        price:'￥49.00',
                        s:'已售2531件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm9.png',
                        des:'【王炸舞者】酷盖WYB 潮流炫酷反光T恤 天天向上官方周边',
                        price:'￥119',
                        s:'已预订145件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm10.png',
                        des:'【补货中，8月上旬发货】学长同款！名侦探学院学长Q版抱枕',
                        price:'￥59.00',
                        s:'已售1853件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm11.png',
                        des:'「节目同款」蜜桃少女系列·蜜桃表情眼罩 密室大逃脱官方周边',
                        price:'￥39.00',
                        s:'已售1025件',
                        path:'/details'                       
                    },
                    {
                        src:'./src/assets/images/rm12.png',
                        des:'#酷盖WYB# TRACER 85 鸭舌帽 天天向上官方周边',
                        price:'￥79.00',
                        s:'已售31958件',
                        path:'/details'                        
                    },
                    {
                        src:'./src/assets/images/rm13.png',
                        des:'【预售】密逃六子成长历险  限定PB套盒 密室大逃脱官方周边【第一季】',
                        price:'￥139',
                        s:'已预订296件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm14.png',
                        des:'【现货】酷盖吸管冷饮杯 夏日限定 天天向上官方周边 【禁止盛装热水】',
                        price:'￥69.00',
                        s:'已售8670件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm15.png',
                        des:'【预售】《奇妙小森林》相亲相爱限定手链 橙子哥哥/小七姐姐',
                        price:'￥79',
                        s:'已预订66件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm16.png',
                        des:'（预售，8月底左右发货）【学长同款】课间游戏Time！名学游戏套盒 名侦探学院官方周边',
                        price:'￥129.00',
                        s:'已售753件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm17.png',
                        des:'#编号D7星体# starry night侦探学长流星杯【预计7月中上旬发货】',
                        price:'￥79.00',
                        s:'已售1378件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm18.png',
                        des:'【预售】#绿水青山中国味#  牛仔背带围裙  中餐厅4官方限定周边',
                        price:'￥99.00',
                        s:'已售201件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm19.png',
                        des:'全员南波万！学长专属卡套+双用挂绳套装 名侦探学院官方周边',
                        price:'￥49.00',
                        s:'已售947件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm20.png',
                        des:'【平安喜乐钥匙扣】酷盖WYB 天天向上官方周边',
                        price:'￥39.00',
                        s:'已售1619件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm21.png',
                        des:'随风造浪！ 嘻哈鬼爱心吊坠链条手链  说唱听我的官方周边',
                        price:'￥119.00',
                        s:'已售1409件',
                        path:'/details'                       
                    },
                    {
                        src:'./src/assets/images/rm22.png',
                        des:'金句输出Q版钥匙扣 高能脱粉系列 密室大逃脱大神版官方周边「仅蒲熠星款出道」',
                        price:'￥39.00',
                        s:'已售912件',
                        path:'/details'                        
                    },
                    {
                        src:'./src/assets/images/rm23.png',
                        des:'【预售】夏日集结！“嘻哈鬼”爱心emoji嘻哈锁骨链choker  说唱听我的官方周边',
                        price:'￥119',
                        s:'已预订157件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm24.png',
                        des:'9月中旬发货 【学长绝美剧照】Lucky7刮刮楽剧照卡套盒 名侦探学院官方周边',
                        price:'￥89.00',
                        s:'已售622件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm25.png',
                        des:'【现货】day day up 特别定制款酷盖滑板升级款记事本（  内页升级）',
                        price:'￥69.00',
                        s:'已售2438件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm26.png',
                        des:'[预售] #走南闯北# 心系小鬼 潮流挂饰 说唱听我的官方周边',
                        price:'￥69',
                        s:'已预订59件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm27.png',
                        des:'（预售8月中下旬发货）学院象征！名学专属金属院徽 名侦探学院官方周边',
                        price:'￥59.00',
                        s:'已售527件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm28.png',
                        des:'密室大逃脱高能脱粉系列·大神版全员皆可晴雨伞',
                        price:'￥99.00',
                        s:'已售220件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm29.png',
                        des:'【预售】形「颖」不离 控制成本徽章 中餐厅官方周边',
                        price:'￥49',
                        s:'已预订62件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm30.png',
                        des:'【补货350本】#五重梦境#绝密全五季角色剧照档案PB',
                        price:'￥188.00',
                        s:'已售3215件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm31.png',
                        des:'DAY DAY UP 官方限定款帆布袋 天天向上官方周边',
                        price:'￥79.00',
                        s:'已售4638件',
                        path:'/details'                       
                    },
                    {
                        src:'./src/assets/images/rm32.png',
                        des:'【现货】狼人后传！侦探助理 狼人杀卡牌套盒 明星大侦探官方周边 ',
                        price:'￥129.00',
                        s:'已售463件',
                        path:'/details'                        
                    },
                    {
                        src:'./src/assets/images/rm33.png',
                        des:'【预售】《奇妙小森林》鸭舌帽 老虎姐姐款/狐狸姐姐款',
                        price:'￥79',
                        s:'已预订221件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm34.png',
                        des:'限定版COOL GUY 手指滑板  天天向上官方周边 (工期延误，8月初左右发货)',
                        price:'￥79.00',
                        s:'已售508件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm35.png',
                        des:'伦恐龙团子抱枕 高能脱粉系列 密室大逃脱官方周边',
                        price:'￥79.00',
                        s:'已售376件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm36.png',
                        des:'[预售] #走南闯北# 狂野badboy 小鬼潮流挂饰 说唱听我的官方周边',
                        price:'￥39',
                        s:'已预订144件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm37.png',
                        des:'【预售】“小助手” kim&海星渔夫帽— 妻子的浪漫旅行官方周边',
                        price:'￥79',
                        s:'已预订56件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm38.png',
                        des:'【现货】万物皆可贴 酷盖织麦不干胶布贴 天天向上官方周边',
                        price:'￥49.00',
                        s:'已预订577件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm39.png',
                        des:'一起趁热耍酷 柔软防滑85沙滩鞋 天天向上官方周边 预计6月底发货',
                        price:'￥99.00',
                        s:'已售757件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm40.png',
                        des:'蜜桃少女系列·桃气苏醒夏日吸管杯 密室大逃脱 官方周边',
                        price:'￥99.00',
                        s:'已售262件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm21.png',
                        des:'随风造浪！ 嘻哈鬼爱心吊坠链条手链  说唱听我的官方周边',
                        price:'￥119.00',
                        s:'已售1409件',
                        path:'/details'                       
                    },
                    {
                        src:'./src/assets/images/rm22.png',
                        des:'金句输出Q版钥匙扣 高能脱粉系列 密室大逃脱大神版官方周边「仅蒲熠星款出道」',
                        price:'￥39.00',
                        s:'已售912件',
                        path:'/details'                        
                    },
                    {
                        src:'./src/assets/images/rm23.png',
                        des:'【预售】夏日集结！“嘻哈鬼”爱心emoji嘻哈锁骨链choker  说唱听我的官方周边',
                        price:'￥119',
                        s:'已预订157件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm24.png',
                        des:'9月中旬发货 【学长绝美剧照】Lucky7刮刮楽剧照卡套盒 名侦探学院官方周边',
                        price:'￥89.00',
                        s:'已售622件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm25.png',
                        des:'【现货】day day up 特别定制款酷盖滑板升级款记事本（  内页升级）',
                        price:'￥69.00',
                        s:'已售2438件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm26.png',
                        des:'[预售] #走南闯北# 心系小鬼 潮流挂饰 说唱听我的官方周边',
                        price:'￥69',
                        s:'已预订59件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm27.png',
                        des:'（预售8月中下旬发货）学院象征！名学专属金属院徽 名侦探学院官方周边',
                        price:'￥59.00',
                        s:'已售527件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm28.png',
                        des:'密室大逃脱高能脱粉系列·大神版全员皆可晴雨伞',
                        price:'￥99.00',
                        s:'已售220件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm29.png',
                        des:'【预售】形「颖」不离 控制成本徽章 中餐厅官方周边',
                        price:'￥49',
                        s:'已预订62件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm30.png',
                        des:'【补货350本】#五重梦境#绝密全五季角色剧照档案PB',
                        price:'￥188.00',
                        s:'已售3215件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm31.png',
                        des:'DAY DAY UP 官方限定款帆布袋 天天向上官方周边',
                        price:'￥79.00',
                        s:'已售4638件',
                        path:'/details'                       
                    },
                    {
                        src:'./src/assets/images/rm32.png',
                        des:'【现货】狼人后传！侦探助理 狼人杀卡牌套盒 明星大侦探官方周边 ',
                        price:'￥129.00',
                        s:'已售463件',
                        path:'/details'                        
                    },
                    {
                        src:'./src/assets/images/rm33.png',
                        des:'【预售】《奇妙小森林》鸭舌帽 老虎姐姐款/狐狸姐姐款',
                        price:'￥79',
                        s:'已预订221件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm34.png',
                        des:'限定版COOL GUY 手指滑板  天天向上官方周边 (工期延误，8月初左右发货)',
                        price:'￥79.00',
                        s:'已售508件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm35.png',
                        des:'伦恐龙团子抱枕 高能脱粉系列 密室大逃脱官方周边',
                        price:'￥79.00',
                        s:'已售376件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm36.png',
                        des:'[预售] #走南闯北# 狂野badboy 小鬼潮流挂饰 说唱听我的官方周边',
                        price:'￥39',
                        s:'已预订144件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm37.png',
                        des:'【预售】“小助手” kim&海星渔夫帽— 妻子的浪漫旅行官方周边',
                        price:'￥79',
                        s:'已预订56件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm38.png',
                        des:'【现货】万物皆可贴 酷盖织麦不干胶布贴 天天向上官方周边',
                        price:'￥49.00',
                        s:'已预订577件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm39.png',
                        des:'一起趁热耍酷 柔软防滑85沙滩鞋 天天向上官方周边 预计6月底发货',
                        price:'￥99.00',
                        s:'已售757件',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/rm40.png',
                        des:'蜜桃少女系列·桃气苏醒夏日吸管杯 密室大逃脱 官方周边',
                        price:'￥99.00',
                        s:'已售262件',
                        path:'/details'
                    }

                ]
            }
        }
    }
</script>

<style  scoped>
    #rm{
        width:94%;
        margin:0 5%;
    }
    #rm ul li{
        width:47%;
        float:left;
        margin-bottom:2vh;
    }
    #rm .des{
        font-size:12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        color:black;
        background:white;
    }
    a:-webkit-any-link{
        text-decoration-line:none;
    }
    #rm .ps{
        color:#ff4c00;
        font-size:14px;
        font-weight:bold;
        background:white;
    }
    i{
        font-style:normal;
        font-weight:normal;
        color:gray;
        float:right;
    }
    #rm img{
        width:100%;
    }
    #rm ul li:nth-of-type(n){
        margin-right:1vh;
    }
    main{
        background:#f2f2f2;
    }
    main>p{
        text-align:center;
        height:10vh;
        line-height:10vh;
        font-size:18px;
    }
    .mint-tabbar{
        position:fixed;
    }
    .mint-header{
        background-color:white;
        color:black;
    }
    #head{
        position:fixed;
    }
    #pai{
        width:100%;
        height:28vh;
        text-align:center;
        marign-bottom:2vh;
        background:white;
    }
    #pai img{
        width:30%;
        margin:8vh 0 2vh;
    }
    #pai p{
        font-size:12px;
    }
</style>