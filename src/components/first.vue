<template>
    <main>
        <main class="lbt">
            <router-link to="/details">
                <mt-swipe :auto="2000">
                  <mt-swipe-item>
                    <img src="../assets/images/h1.png">
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../assets/images/h2.png">
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../assets/images/h3.png">
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../assets/images/h4.png">
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../assets/images/h5.png">
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../assets/images/h6.png">
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../assets/images/h7.png">
                  </mt-swipe-item>
                </mt-swipe>
            </router-link>
        </main>
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="item.path">
                    <img :src="item.src" alt="">
                    <span>{{item.con}}</span>
                </router-link>
            </li>
        </ul>
        <div class="a">
            <router-link to='/login'><img src="../assets/images/b0.gif" alt=""></router-link>
        </div>
        <div class="b">
            <router-link to="/details">
                <img src="../assets/images/c1.png" alt="">
                <img src="../assets/images/c2.png" alt="">
                <img src="../assets/images/c3.png" alt="">
            </router-link>
        </div>
        <div class="c">
            <img src="../assets/images/c9d8.gif" alt="">            
            <ul>
                
                <li>
                    <router-link to="/details">
                        <img src="../assets/images/c_l.png" alt="">
                    </router-link>                    
                </li>
                <li>
                    <router-link to="/details">
                        <img src="../assets/images/c_rt.png" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link to="/details">
                        <img src="../assets/images/c_rb.png" alt="">
                    </router-link>
                </li>
            </ul>
            <img src="../assets/images/18eb.gif" alt="">
        </div>
        <div id="open">
            <img src="../assets/images/open.png" alt="">
        </div>
        <div id="re">
            <p class="w">热卖单品</p>
            <ul>
                <li><router-link to="/details"><img src="../assets/images/r1.png" alt=""></router-link></li>
                <li><router-link to="/details"><img src="../assets/images/r2.png" alt=""></router-link></li>
                <li><router-link to="/details"><img src="../assets/images/r3.png" alt=""></router-link></li>
                <li><router-link to="/details"><img src="../assets/images/r4.png" alt=""></router-link></li>
            </ul>
        </div>
        <div id="hw">
            <p class="w">好物热推</p>
            <ul>
                <li v-for="(item,index) in list1">
                    <router-link to="/details"><img :src="item.src" alt=""></router-link>
                    <p class="con">{{item.con}}</p>
                    <p class="des">{{item.des}}</p>
                    <p class="ps">{{item.price}} {{item.s}}</p>
                </li>
            </ul>
        </div>
        <img src="../assets/images/d1.png">
        <div id="hd">
            <ul>
                <li v-for="(item,index) in list2">
                    <router-link to="/details"><img :src="item.src" alt=""></router-link>
                    <p class="con">{{item.con}}</p>
                    <p class="des">{{item.des}}</p>
                    <p class="ps">{{item.price}} {{item.s}}</p>
                </li>
            </ul>
        </div>
        <img src="../assets/images/hd2.png">
        <div id="hz">
            <ul>
                <li v-for="(item,index) in list3">
                    <router-link to="/details"><img :src="item.src" alt=""></router-link>
                    <p class="con">{{item.con}}</p>
                    <p class="des">{{item.des}}</p>
                    <p class="ps">{{item.price}} {{item.s}}</p>
                </li>
            </ul>
        </div>
        <div id="new">
            <p class="w">新品推荐</p>
            <ul>
                <li v-for="(item,index) in list4">
                    <router-link to="/details"><img :src="item.src" alt=""></router-link>
                    <p class="con">{{item.con}}</p>
                    <p class="des">{{item.des}}</p>
                    <p class="ps">{{item.price}} {{item.s}}</p>
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
    import 'mint-ui/lib/style.css';
    import { Swipe, SwipeItem } from 'mint-ui';
    import { Tabbar, TabItem } from 'mint-ui';
    export default{
        data(){
            return{
                selected:'/index',
                list:[
                    {
                        src:'./src/assets/images/nav1.png',
                        con:'乘风破浪的姐姐',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/nav2.png',
                        con:'明星大侦探',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/nav3.png',
                        con:'天天向上',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/nav4.png',
                        con:'说唱听我的',
                        path:'/details'
                    },
                    {
                        src:'./src/assets/images/nav5.png',
                        con:'密室大逃脱',
                        path:'/details'
                    }
                ],
                list1:[
                    {
                        src:'./src/assets/images/hw1.png',
                        con:'元气满满的哥哥',
                        des:'【天才躲藏羊】元气小哥 杨小满生日水晶球八音盒 元气满满的哥哥官方周边',
                        price:'￥159',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/hw2.png',
                        con:'密室大逃脱',
                        des:'【预售】密逃六子成长历险  限定PB套盒 密室大逃脱官方周边【第一季】',
                        price:'￥139',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/hw3.png',
                        con:'乘风破浪的姐姐',
                        des:'【原价1880 上新特价1680】周大福✖️芒果TV足金芒果崽吊坠',
                        price:'￥1688.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/hw4.png',
                        con:'芒果崽',
                        des:'【芒果崽限定】呆萌吹风！夏日芒果味小风扇！（8月中旬陆续发货）',
                        price:'￥69',
                        s:''
                    },
                    {
                        src:'./src/assets/images/hw5.png',
                        con:'快乐大本营',
                        des:'【满满桃花运】快本Mi桃莫吉托 蜜桃女孩耳饰/发饰',
                        price:'￥59',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/hw6.png',
                        con:'芒果崽',
                        des:'【全新系列】12星座芒果崽盲盒/单盒（8月中旬陆续发货）',
                        price:'￥58',
                        s:''
                    }
                ],
                list2:[
                    {
                        src:'./src/assets/images/d2.png',
                        con:'乘风破浪的姐姐',
                        des:'【原价1880 上新特价1680】周大福✖️芒果TV足金芒果崽吊坠',
                        price:'￥1680.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d3.png',
                        con:'乘风破浪的姐姐',
                        des:'乘风破浪的姐姐LED化妆镜',
                        price:'￥199.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d4.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】18k金叁伍柒项链',
                        price:'￥980.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d5.png',
                        con:'乘风破浪的姐姐',
                        des:'乘风破浪系列925银手链',
                        price:'￥349.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d6.png',
                        con:'乘风破浪的姐姐',
                        des:'【预售】乘风破浪的姐姐们官方周边口红乘风系列哑光唇膏 7月发货',
                        price:'￥129.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d7.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】乘风破浪系列925银戒指',
                        price:'￥449.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d8.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】乘风破浪系列925银耳环',
                        price:'￥649.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d9.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】乘风破浪系列925银项链',
                        price:'￥449.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d10.png',
                        con:'乘风破浪的姐姐',
                        des:'【预售】乘风破浪的姐姐官方周边逐浪系列四色眼影大地色 7月发货',
                        price:'￥149.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/d11.png',
                        con:'',
                        des:'',
                        price:'',
                        s:''
                    }
                    
                ],
                list3:[
                    {
                        src:'./src/assets/images/z1.png',
                        con:'中餐厅4',
                        des:'【预售】形「颖」不离 控制成本徽章 中餐厅官方周边',
                        price:'￥49.00',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/z2.png',
                        con:'中餐厅4',
                        des:'【预售】#绿水青山中国味#  牛仔背带围裙  中餐厅4官方限定周边',
                        price:'￥99.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/z3.png',
                        con:'中餐厅3',
                        des:'#《明学》之明言明语# “听我的”语录手机壳  中餐厅官方周边',
                        price:'￥49.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/z4.png',
                        con:'',
                        des:'',
                        price:'',
                        s:''
                    }
                ],
                list4:[
                    {
                        src:'./src/assets/images/n1.png',
                        con:'乘风破浪的姐姐',
                        des:'【优惠】18k金项链',
                        price:'￥899.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n2.png',
                        con:'密室大逃脱',
                        des:'「节目同款」蜜桃少女系列·队长BUFF套装 密室大逃脱官方周边',
                        price:'￥149.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n3.png',
                        con:'密室大逃脱',
                        des:'「节目同款」蜜桃少女系列·蜜桃表情眼罩 密室大逃脱官方周边',
                        price:'￥39.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n4.png',
                        con:'快乐大本营',
                        des:'【满满桃花运】快本Mi桃莫吉托 蜜桃女孩耳饰/发饰',
                        price:'￥59',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n5.png',
                        con:'中餐厅4',
                        des:'财务总监上线！流水记账本 中餐厅官方周边',
                        price:'￥99',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n6.png',
                        con:'说唱听我的',
                        des:'[预售] #走南闯北# 心系小鬼 潮流鸭舌帽 说唱听我的官方周边',
                        price:'￥79',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n7.png',
                        con:'妻子的浪漫旅行',
                        des:'【预售】七夕情侣对杯— 妻子的浪漫旅行官方周边',
                        price:'￥66',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n8.png',
                        con:'奇妙小森林',
                        des:'【预售】《奇妙小森林》相亲相爱限定手链 橙子哥哥/小七姐姐',
                        price:'￥79',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n9.png',
                        con:'乘风破浪的姐姐',
                        des:'【原价1880 上新特价1680】周大福✖️芒果TV足金芒果崽吊坠',
                        price:'￥1680.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n10.png',
                        con:'密室大逃脱',
                        des:'【预售】密室大逃脱大神版·「爆梗ACE」金句镭射贴纸包',
                        price:'￥29',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n11.png',
                        con:'密室大逃脱',
                        des:'【预售】大显神通！密逃大神同款T恤  密室大逃脱节目官方周边',
                        price:'109',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n12.png',
                        con:'密室大逃脱',
                        des:'【预售】密室大逃脱大神版·「Escape Puzzle」妙趣拼图',
                        price:'￥69',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n13.png',
                        con:'天天向上',
                        des:'WYB鼠年徽章 2020新年限定款 天天向上官方周边',
                        price:'￥49.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n14.png',
                        con:'说唱听我的',
                        des:'[预售] #走南闯北# 心系小鬼 潮流挂饰 说唱听我的官方周边',
                        price:'￥69',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n15.png',
                        con:'元气满满的哥哥',
                        des:'【天才躲藏羊】元气小哥 杨小满生日水晶球八音盒 元气满满的哥哥官方周边',
                        price:'￥159',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n16.png',
                        con:'天天向上',
                        des:'【王炸舞者】酷盖WYB 潮流炫酷反光T恤 天天向上官方周边',
                        price:'￥119.00',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n17.png',
                        con:'明星大侦探5',
                        des:'学院同款！PVC警戒线追凶包（补货中，预计8月22号左右发货）',
                        price:'￥49.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n18.png',
                        con:'《向往的生活》',
                        des:'H Family动物家族夏日清凉T恤【向往的生活H Family】官方周边',
                        price:'￥128.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n19.png',
                        con:'奇妙小森林',
                        des:'【预售】《奇妙小森林》猫咪哥哥&小元宝 随手杯',
                        price:'￥59.00',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n20.png',
                        con:'......',
                        des:'9月中旬发货 【学长绝美剧照】Lucky7刮刮楽剧照卡套盒 名侦探学院官方周边',
                        price:'￥89.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n1.png',
                        con:'乘风破浪的姐姐',
                        des:'【优惠】18k金项链',
                        price:'￥899.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n2.png',
                        con:'密室大逃脱',
                        des:'「节目同款」蜜桃少女系列·队长BUFF套装 密室大逃脱官方周边',
                        price:'￥149.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n3.png',
                        con:'密室大逃脱',
                        des:'「节目同款」蜜桃少女系列·蜜桃表情眼罩 密室大逃脱官方周边',
                        price:'￥39.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n4.png',
                        con:'快乐大本营',
                        des:'【满满桃花运】快本Mi桃莫吉托 蜜桃女孩耳饰/发饰',
                        price:'￥59',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n5.png',
                        con:'中餐厅4',
                        des:'财务总监上线！流水记账本 中餐厅官方周边',
                        price:'￥99',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n6.png',
                        con:'说唱听我的',
                        des:'[预售] #走南闯北# 心系小鬼 潮流鸭舌帽 说唱听我的官方周边',
                        price:'￥79',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n7.png',
                        con:'妻子的浪漫旅行',
                        des:'【预售】七夕情侣对杯— 妻子的浪漫旅行官方周边',
                        price:'￥66',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n8.png',
                        con:'奇妙小森林',
                        des:'【预售】《奇妙小森林》相亲相爱限定手链 橙子哥哥/小七姐姐',
                        price:'￥79',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n9.png',
                        con:'乘风破浪的姐姐',
                        des:'【原价1880 上新特价1680】周大福✖️芒果TV足金芒果崽吊坠',
                        price:'￥1680.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n10.png',
                        con:'密室大逃脱',
                        des:'【预售】密室大逃脱大神版·「爆梗ACE」金句镭射贴纸包',
                        price:'￥29',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n11.png',
                        con:'密室大逃脱',
                        des:'【预售】大显神通！密逃大神同款T恤  密室大逃脱节目官方周边',
                        price:'109',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n12.png',
                        con:'密室大逃脱',
                        des:'【预售】密室大逃脱大神版·「Escape Puzzle」妙趣拼图',
                        price:'￥69',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n13.png',
                        con:'天天向上',
                        des:'WYB鼠年徽章 2020新年限定款 天天向上官方周边',
                        price:'￥49.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n14.png',
                        con:'说唱听我的',
                        des:'[预售] #走南闯北# 心系小鬼 潮流挂饰 说唱听我的官方周边',
                        price:'￥69',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n15.png',
                        con:'元气满满的哥哥',
                        des:'【天才躲藏羊】元气小哥 杨小满生日水晶球八音盒 元气满满的哥哥官方周边',
                        price:'￥159',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n16.png',
                        con:'天天向上',
                        des:'【王炸舞者】酷盖WYB 潮流炫酷反光T恤 天天向上官方周边',
                        price:'￥119.00',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n17.png',
                        con:'明星大侦探5',
                        des:'学院同款！PVC警戒线追凶包（补货中，预计8月22号左右发货）',
                        price:'￥49.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n18.png',
                        con:'《向往的生活》',
                        des:'H Family动物家族夏日清凉T恤【向往的生活H Family】官方周边',
                        price:'￥128.00',
                        s:''
                    },
                    {
                        src:'./src/assets/images/n19.png',
                        con:'奇妙小森林',
                        des:'【预售】《奇妙小森林》猫咪哥哥&小元宝 随手杯',
                        price:'￥59.00',
                        s:'预售'
                    },
                    {
                        src:'./src/assets/images/n20.png',
                        con:'.....',
                        des:'9月中旬发货 【学长绝美剧照】Lucky7刮刮楽剧照卡套盒 名侦探学院官方周边',
                        price:'￥89.00',
                        s:''
                    }
                ]
            }
        }
    }
    
</script>


<style  scoped>
    
    #re li{
        width:25%;
        float:left;
    }
    .mint-tabbar{
        position:fixed;
    }
    #hw li{
        width:33.33%;
        float:left;
    }
    #hw .con,#hd .con,#hz .con,#new .con{
        color:gray;
        font-size:12px;
    }
    #hw .ps,#hd .ps,#hz .ps,#new .ps{
        color:#ff5400;
    }
    #hw .des,#hd .des,#hz .des,#new .des{
        font-size:12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    #hd{
        width:100%;
    }
    #hd ul{
        width:300%;
    }
    #hd li{
        float:left;
        width:10%;
    }
    #hz{
        width:100%;
    }
    #hz ul{
        width:120%;
    }
    #hz li{
        float:left;
        width:25%;
    }
    #new{
        width:100%;
    }
    #new ul{
        width:100%;
    }
    #new li{
        float:left;
        width:50%;
    }
    main>img{
        width:100%;
    }
    li img{
        width:100%;
    }
    li{
        float:left;
        width:20%;
    }
    .w{
        font-weight:bold;
    }
    span{
        font-size:12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        color:gray;
    }
    a:-webkit-any-link{
        text-decoration-line:none;
    }
    .a{
        margin:15vh 4% 0vh;
    }
    .a img{
        width:92%;
    }
    .b{
        margin:0px 4%;
        width:92%;
        background:#7a2cff;
    }
    .b img{
        width:32.38%;
    }
    .c{
        width:100%;
        margin:0px 2%;
    }
    .c ul li{
        width:46%;
    }
    .c>img{
        width: 100%;
    }
    #open{
        position:fixed;
        right:2vw;
        bottom:20vh;
    }
    #open img{
        width:10%;
        float:right;
    }
</style>

<style>
    .mint-header{
        background-color:white;
        color:black;
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        color:#ff5400;
    }
    .lbt img{
        width:100%;
    }
    .lbt .mint-swipe-items-wrap{
        padding-bottom:53.62%;
    }
    .pic{
        display:inline-block;
    }
    .src{
        display:none;
    }
     .router-link-active .pic{
        display: none;
    }
    .router-link-active .src{
        display: inline-block;
    }
</style>