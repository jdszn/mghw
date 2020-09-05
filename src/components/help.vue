<template>
	<main>
		<mt-header title="帮助中心">
		  <router-link to="/me" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right"></mt-button>
		</mt-header>

		<div>
			<ul>
				<li v-for="(item,index) in list">
					{{item.num}}{{item.con}}
					<img src="../assets/images/down.png">
				</li>
			</ul>
			<p>仍然无法解决您的问题？可尝试联系客服</p>
			<p>「芒果tv文创好物」微信公众号</p>
			<p>客服时间：周一至周五9：00—21：00</p>
		</div>
	</main>
</template>
<script>
	export default{
		data(){			
			return{
				selected:'/help',
				list:[
					{
						con:'定金可以退吗？',
						num:'1.'
					},
					{
						con:'为什么我查不到我的订单？',
						num:'2.'
					},
					{
						con:'产品一般什么时候发货呢？',
						num:'3.'
					},
					{
						con:'为什么都是预售产品，别人发货了，我的还没有发货呢？',
						num:'4.'
					},
					{
						con:'实物和图片是一模一样吗？',
						num:'5.'
					},
					{
						con:'为什么付尾款没有人提醒我？',
						num:'6.'
					},
					{
						con:'申请售后的期限是多久？',
						num:'7.'
					},
					{
						con:'收到货之后发现有质量问题怎么办？',
						num:'8.'
					},
					{
						con:'怎么退换货？运费谁来承担呢？',
						num:'9.'
					},
					{
						con:'怎么申请退款？',
						num:'10.'
					},
					{
						con:'退款多久会到账？',
						num:'11.'
					},
					{
						con:'我可以选择快递公司吗？',
						num:'12.'
					},
					{
						con:'可以修改地址或者尺码颜色吗，在哪里修改？',
						num:'13.'
					}
				]
			}
		}
	}
</script>

<style scoped>
	div{
		width:90%;
		margin:0 5%;
	}
	div li{
		line-height:5vh;
		font-size:13px;
	}
	div p{
		font-size:13px;
		line-height:3.5vh;
		color:#7a7a7a;
	}
	div img{
		float:right;
		width:5%;
		margin-top:10px;
	}
	.mint-header{
        background-color:white;
        color:black;
    }
</style>