<template>
	<main>
		<div id="head">
			<mt-header title="商品详情">
			  <router-link to="/details" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>
			  <mt-button slot="right"></mt-button>
			</mt-header>
		</div>
		<div id="xqt">
			<mt-swipe :auto="0">
			  <mt-swipe-item><img src="../assets/images/xq1.png" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/xq2.png" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/xq3.png" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/xq4.png" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/xq5.png" alt=""></mt-swipe-item>
			</mt-swipe>
		</div>		
		<p id="xqy">
			【预售】密室大逃脱大神版·「爆梗ACE」金句镭射贴纸包
		</p>
		<p class="one">29 <img src="../assets/images/ysj.png"></p>
		<p class="two">定金 ￥5.6</p>
		<p class="three">支付尾款时间: 2020-09-18 20:00:00 ~ 2020-10-07 00:00:00</p>
		<p class="three">2020-10-10 00:00:00 开始发货</p>
		<p class="four">快递：包邮</p>
		<div class="five">
			<p><span class="sp">•</span> 预定到达3000件，即可成功出道哦~</p>
			<span class="sp">已预订349件</span><span class="right">3000件</span>
			<mt-progress :value="12" :bar-height="7"></mt-progress>
		</div>
		<div class="six">
			<p>购前需知<span>常见问题汇总</span></p><img src="../assets/images/rgt.png">
			
			<p>订单查询<span>芒果TV App-个人中心-芒果好物内查询订单</span></p>
		</div>
		<img src="../assets/images/b1e1.png">
		<img src="../assets/images/b2e1.png">
		<img src="../assets/images/b3e1.png">
		<img src="../assets/images/b4e1.png">
		<img src="../assets/images/b5e1.png">
		<router-link to="/login">
			<div id="footer">
				<div id="ig"><img src="../assets/images/kf.png"><br>联系客服</div>
				<div id="ig"><img src="../assets/images/gwc.png"><br>购物车</div>
				<div id="fdj">
					09-18 20:00 定金期结束
					<p>立即付定金 ￥5.6</p>
				</div>
			</div>
		</router-link>
	</main>
</template>
<script>
	import 'mint-ui/lib/style.css';
    import { Swipe, SwipeItem } from 'mint-ui';
</script>

<style scoped>
	#head{
        position:fixed;
        z-index:100;
    }
	.mint-header{
        background-color:white;
        color:black;

    }
    .mint-swipe{
    	position:absolute;
    }
    .mint-swipe-items-wrap > div{
    	position:absolute;
    	top:5vh;
    	bottom:2vh;
    }
    #xqt .mint-swipe-items-wrap{
    	padding-bottom:71.46%;
    }
    #xqt img{
    	width:100%;
    }
    #xqy{
    	width:94%;
    	margin:47vh 3% 0;
    }
    .one{
    	margin:0 3%;
    	font-size:20px;
    	color:#ff5400;
    }
    .one img{
    	width:10%;
    }
    .two{
    	margin:0 3%;
    	font-size:0.346667rem;
    	font-weight: 700;
    	color:#ff8315;
    }
    .three{
    	margin:0 3%;
    	font-size:0.293333rem;
    	color:#999999;
    }
    .four{
    	margin:0 3%;
    	font-size:0.346667rem;
    	color:#666666;
    }
    .five{
    	margin:1vh 3%;
    	font-size:0.346667rem;
    	border-top:1vh solid #f2f2f2;
    	border-bottom:1vh solid #f2f2f2;
    }
    .six{
    	margin:1vh 3%;
    	font-size:0.346667rem;
    	border-bottom:1vh solid #f2f2f2;
    }
    .six p{   	
    	color:#9a9a9a;
    	float:left;
    	line-height:20px;
    }
    .six span{
    	margin-left:8vw;
    	color:black;
    }
    .six img{
    	width:2%;
    	float:right;
    	margin-right:4vw;
    }
    .sp{
    	color:#ff5400;
    }
    .right{
    	float:right;
    }
    .mt-progress-progress{
    	background-color:#ff5400;
    }
    main>img{
    	width:100%;
    }
    #footer{
    	position:fixed;
    	height:8vh;
    	bottom:0;
    	background:white;
    }
    #ig{
    	float:left;
    	width:18%;
    	font-size:0.333333rem;
    	text-align:center;
    	padding-top:1vh;
    }
    #ig img{
    	width:30%;
    }
    #fdj{
    	float:right;
    	width:62%;
    	margin-right:2%;
    	font-size:12px;
    	background:#ff5400;
    	color:white;
    	border-radius:0.16rem;
    	text-align:center;
    	line-height:8vh;    	
    }
    #fdj p{
    	float:right;
    	width:34%;
    	text-align:center;
    	line-height:4vh;
    	font-size:14px;
    }
    a:-webkit-any-link{
    	color:#000;
    }
</style>