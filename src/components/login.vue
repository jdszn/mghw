<template>
	<main>
		<mt-header title="手机验证码登陆">
		  <router-link to="/me" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right"></mt-button>
		</mt-header>

		<div id="login">
			<div class="logo">
				<img src="../assets/images/logo-tv.png">
			</div>

			<div class="tel">
				<label for="tel"></label><input type="text" id="tel" placeholder="请输入手机号"/>
			</div>
			<div class="pass">
				<label for="pass"></label><input type="text" id="pass" placeholder="请输入校验码"/><button>获取校验码</button>
			</div>

			<div class="btn">
				<button class="logins" @click="go()">登录</button>
				<p class="dl">账号密码登录</p>
				<p class="text">登录过程中会用到短信，请注意您的手机提示，我们将保护您个人手机号信息</p>
				<p>
					<div @click="change()" class="o"></div>同意
					<a>用户协议</a></span>和<a>版权声明</a><span class="back">返回首页</span>
				</p> 
			</div>
			<div class="san">
				第三方登陆
				<router-link to="/me"><img src="../assets/images/qq.png"></router-link>
				<router-link to="/me"><img src="../assets/images/sina.png"></router-link>
			</div>
		</div>
	</main>
</template>
<script>
	import { Field } from 'mint-ui';
</script>
<style scoped>
	input{
    	padding-left: 10px;
    	height: 52px;
    	color: #98989f;
    	border: 0;
    	outline: none;
    }
    #login .tel,.pass{
    	box-sizing: border-box;
    	padding-left: 10px;
    	border-bottom: 1px solid #e7e7e7;
    }
    #login .pass>button{
    	padding-left: 35px;
    	height: 52px;
    	border: 0;
    	background: white;
    	color: #ff5400;
    }

    #login .btn>.logins{
    	display: inline-block;
    	margin-bottom: 20px;
    	width: 100%;
    	height: 40px;
    	line-height: 40px;
    	background: #f0f0f0;
    	border-radius: 30px;
    	border: none;
    	color: afa4a4;
    }
    #login .btn{
    	margin: 2vh auto;
    	width: 100%;
    	font-size:14px;    	
    }
    #login .btn .dl{
    	text-align:center;
    	margin-bottom:1.25vh;
    	text-decoration: underline;
    }
    .o{
    	width:15px;
    	height:15px;
    	border-radius:50%;
    	border:1px solid #666;
    	float:left;
    }
    #login a{
    	color: #666666;
    	text-decoration: underline;    	
    }
    .text{
    	font-size: 0.33333rem;
    	color: #666666;
    	margin-bottom:1vh;
    }
    .back{
    	float:right;
    	color:#ff5400;
    }
    .san{
    	margin:10vh 0;
    	font-size:14px;
    }
    .san img{
    	float:right;
    	width:10%;
    	margin-left:5%;
    }
	#login{
		width:86%;
		margin:0 7%;
	}
	.logo{
		height:10vh;
	}
	.logo img{
		width:60%;
	}
	.mint-header{
        background-color:white;
        color:black;
        margin-bottom:1vh; 
        font-size:18px;
        font-weight:1000;       
    }
</style>