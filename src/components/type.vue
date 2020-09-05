<template>
    <main>
    	<div id="head">
    		<mt-header title="分类">
			  <router-link to="/index" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			  <mt-button slot="right"></mt-button>
			</mt-header>
    	</div>

		<section>
			<mt-navbar v-model="selected">
				<div id="left">
					<mt-tab-item id="1">为您推荐</mt-tab-item>
					<mt-tab-item id="2">天天</mt-tab-item>
					<mt-tab-item id="3">姐姐</mt-tab-item>
					<mt-tab-item id="4">芒果崽</mt-tab-item>
					<mt-tab-item id="5">明侦</mt-tab-item>
					<mt-tab-item id="6">官方周边</mt-tab-item>
					<mt-tab-item id="7">综艺</mt-tab-item>
					<mt-tab-item id="8">电视剧</mt-tab-item>
					<mt-tab-item id="9">品类</mt-tab-item>
					<mt-tab-item id="10">服装</mt-tab-item>
					<mt-tab-item id="11">鞋帽箱包</mt-tab-item>
					<mt-tab-item id="12">首饰/配饰</mt-tab-item>
					<mt-tab-item id="13">生活家居</mt-tab-item>
					<mt-tab-item id="14">玩具手办</mt-tab-item>
					<mt-tab-item id="15">3C数码</mt-tab-item>
					<mt-tab-item id="16">电脑办公</mt-tab-item>
					<mt-tab-item id="17">美妆个护</mt-tab-item>
					<mt-tab-item id="18">生活家居</mt-tab-item>
					<mt-tab-item id="19">家用电器</mt-tab-item>
					<mt-tab-item id="20">影音图书</mt-tab-item>
					<mt-tab-item id="21">医疗医药</mt-tab-item>
				</div>
			</mt-navbar>

			<!-- tab-container -->
			<div id="right">
				<mt-tab-container v-model="selected">				
					<mt-tab-container-item id="1">
						<img src="../assets/images/f-h.gif">
					    <ul>
		                	<li v-for="(item,index) in list1">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
					    <ul>
		                	<li v-for="(item,index) in list2">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
					    <ul>
		                	<li v-for="(item,index) in list3">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="5">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="7">
						<img src="../assets/images/f-h.gif">
					    <ul class="no7">
		                	<li v-for="(item,index) in list7">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="8">
						<img src="../assets/images/f-h.gif">
					    <ul class="no7">
		                	<li v-for="(item,index) in list8">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="10">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="11">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="12">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="13">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="14">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="15">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="16">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="17">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="18">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="19">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="20">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="21">
					    <ul>
		                	<li v-for="(item,index) in list5">
		                		<router-link to="/details">
				                    <img :src="item.src" alt="">
				                    <span>{{item.con}}</span>
				                    <p class="des">{{item.des}}</p>
				                    <p class="price">{{item.price}}</p>
				                </router-link>
		                	</li>
		                </ul>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
        </section>


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
	import { Header } from 'mint-ui';
	import { Navbar, TabItem } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import 'mint-ui/lib/style.css'
	import 'mint-ui/lib/style.css'
	export default{
		data(){			
			return{
				selected:'1',
				num:0,
	            list1:[
	            	{
	            		src:'./src/assets/images/f1.jpg',
                        con:'天天向上',
                        des:'【现货】酷盖吸管冷饮杯 夏日限定 天天向上官方周边 【禁止盛装热水】',
                        price:'￥69.00'
	            	},
	            	{
	            		src:'./src/assets/images/f2.jpg',
                        con:'下一站是幸福',
                        des:'【威龙辣条】SWL 潮流飘带鸭舌帽 ',
                        price:'￥79.00'
	            	},
	            	{
	            		src:'./src/assets/images/f3.jpg',
                        con:'天天向上',
                        des:'一起趁热耍酷 柔软防滑85沙滩鞋 天天向上官方周边 预计6月底发货',
                        price:'￥99.00'
	            	},
	            	{
	            		src:'./src/assets/images/f4.jpg',
                        con:'快乐大本营',
                        des:'#犬兔一豹#  “帝王兴”限定专属徽章   快乐大本营官方周边',
                        price:'￥59.00'
	            	},
	            	{
	            		src:'./src/assets/images/f5.png',
                        con:'天天向上',
                        des:'WYB鼠年徽章 2020新年限定款 天天向上官方周边',
                        price:'￥49.00'
	            	},
	            	{
	            		src:'./src/assets/images/f6.jpg',
                        con:'明星大侦探5',
                        des:'山东鸡！侦探动物园涂鸦帆布袋',
                        price:'￥66.00'
	            	},
	            	{
	            		src:'./src/assets/images/f7.jpg',
                        con:'快乐大本营',
                        des:'#犬兔一豹#  “霸王兴”潮流挂件配饰  快乐大本营官方周边',
                        price:'￥39.00'
	            	}
	            ],
	            list2:[
	            	{
	            		src:'./src/assets/images/f1.jpg',
                        con:'天天向上',
                        des:'【现货】酷盖吸管冷饮杯 夏日限定 天天向上官方周边 【禁止盛装热水】',
                        price:'￥69.00'
	            	},
	            	{
	            		src:'./src/assets/images/f3.jpg',
                        con:'天天向上',
                        des:'一起趁热耍酷 柔软防滑85沙滩鞋 天天向上官方周边 预计6月底发货',
                        price:'￥99.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt3.png',
                        con:'天天向上',
                        des:'【出货中】#Day day up# 酷盖85滑板街头T恤 天天向上官方周边',
                        price:'￥109.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt4.png',
                        con:'天天向上',
                        des:'WYB鼠年徽章 2020新年限定款 天天向上官方周边',
                        price:'￥49.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt5.png',
                        con:'天天向上',
                        des:'酷盖WYB  85cap 兄弟款渔夫帽【最后100现货】 天天向上官方周边',
                        price:'￥89.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt6.png',
                        con:'天天向上',
                        des:'【加单 月底发货 】COOL GUY 85 官方定制帆布袋  天天向上官方周边',
                        price:'￥59.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt7.png',
                        con:'天天向上',
                        des:'#酷盖WYB# TRACER 85 鸭舌帽 天天向上官方周边',
                        price:'￥79.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt8.png',
                        con:'天天向上',
                        des:'【现货】COOL GUY限定款工装外套  天天向上官方周边  ',
                        price:'￥295.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt9.png',
                        con:'天天向上',
                        des:'围你所爱 酷盖围巾（随机抽送绝版徽章） 天天向上官方周边',
                        price:'￥119.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt10.png',
                        con:'天天向上',
                        des:'DAY DAY UP 官方限定款帆布袋 天天向上官方周边',
                        price:'￥79.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt11.png',
                        con:'天天向上',
                        des:'限定款酷盖暖冬连帽卫衣 天天向上官方周边',
                        price:'￥199.00'
	            	},
	            	{
	            		src:'./src/assets/images/tt12.png',
                        con:'天天向上',
                        des:'限定款酷盖暖冬套头卫衣 天天向上官方周边',
                        price:'￥199.00'
	            	}
	            ],
	            list3:[
	            	{
	            		src:'./src/assets/images/d4.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】18k金叁伍柒项链',
                        price:'￥980.00'
	            	},
	            	{
	            		src:'./src/assets/images/d3.png',
                        con:'乘风破浪的姐姐',
                        des:'乘风破浪的姐姐LED化妆镜',
                        price:'￥199.00'
	            	},
	            	{
	            		src:'./src/assets/images/d9.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】乘风破浪系列925银项链',
                        price:'￥449.00'
	            	},
	            	{
	            		src:'./src/assets/images/d5.png',
                        con:'乘风破浪的姐姐',
                        des:'乘风破浪系列925银手链 . ',
                        price:'￥349.00'
	            	},
	            	{
	            		src:'./src/assets/images/d7.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】乘风破浪系列925银戒指',
                        price:'￥449.00'
	            	},
	            	{
	            		src:'./src/assets/images/d8.png',
                        con:'乘风破浪的姐姐',
                        des:'【特惠价】乘风破浪系列925银耳环',
                        price:'￥649.00'
	            	},
	            	{
	            		src:'./src/assets/images/d6.png',
                        con:'乘风破浪的姐姐',
                        des:'【预售】乘风破浪的姐姐们官方周边口红乘风系列哑光唇膏 7月发货',
                        price:'￥129.00'
	            	}
	            ],
	            list5:[
	            	{
	            		src:'./src/assets/images/mz1.png',
                        con:'明星大侦探5',
                        des:'【加单中】学院不毕业！南波万T恤 学长官方同款 预计8月中旬发货',
                        price:'￥109.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz2.png',
                        con:'明星大侦探',
                        des:'（预售，8月底左右发货）【学长同款】课间游戏Time！名学游戏套盒 名侦探学院官方周边',
                        price:'￥129.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz3.png',
                        con:'明星大侦探5',
                        des:'学院同款！PVC警戒线追凶包（补货中，预计8月22号左右发货）',
                        price:'￥49.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz4.png',
                        con:'明星大侦探',
                        des:'全员南波万！学长专属卡套+双用挂绳套装 名侦探学院官方周边',
                        price:'￥49.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz5.png',
                        con:'明星大侦探',
                        des:'（预售8月中下旬发货）学院象征！名学专属金属院徽 名侦探学院官方周边',
                        price:'￥59.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz6.png',
                        con:'明星大侦探',
                        des:'【现货】全员上线！明侦全四季侦探凶手嫌疑人全员角色卡 ',
                        price:'￥89.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz7.png',
                        con:'明星大侦探',
                        des:'#编号D7星体# starry night侦探学长流星杯【预计7月中上旬发货】',
                        price:'￥79.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz8.png',
                        con:'明星大侦探',
                        des:'【现货】#明星大侦探#和纸胶带/防水贴纸/书签套装 官方周边',
                        price:'￥36.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz9.png',
                        con:'明星大侦探5',
                        des:'山东鸡！侦探动物园涂鸦帆布袋',
                        price:'￥66.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz10.png',
                        con:'明星大侦探5',
                        des:'【补货350本】#五重梦境#绝密全五季角色剧照档案PB',
                        price:'￥188.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz11.png',
                        con:'明星大侦探',
                        des:'【现货】狼人后传！侦探助理 狼人杀卡牌套盒 明星大侦探官方周边 ',
                        price:'￥129.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz12.png',
                        con:'明星大侦探5',
                        des:'NZND何撒白插画卫衣',
                        price:'￥269.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz13.png',
                        con:'明星大侦探5',
                        des:'NZND全员写真集PB',
                        price:'￥169.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz14.png',
                        con:'明星大侦探',
                        des:'【现货】珍藏剧照！限量款2020侦探日历 明星大侦探官方周边',
                        price:'￥129.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz15.png',
                        con:'明星大侦探5',
                        des:'WARNING！警戒线追凶长袖T恤',
                        price:'￥129.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz16.png',
                        con:'明星大侦探5',
                        des:'【MGQ】甄主编案情线索香水套装',
                        price:'￥69.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz17.png',
                        con:'明星大侦探',
                        des:'【现货】Rich！DAY TOY专属小红帽 明星大侦探官方周边',
                        price:'￥89.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz18.png',
                        con:'明星大侦探',
                        des:'【少量现货】白开水白大神白rap亚克力钥匙扣透卡 明星大侦探官方周边',
                        price:'￥39.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz19.png',
                        con:'明星大侦探',
                        des:'【少量现货】唯有敬亭山 明侦不加糖BJT白侦探斜挎潮包',
                        price:'￥119.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz20.png',
                        con:'明星大侦探5',
                        des:'谜案追踪！凶手小白BJT玫瑰签字围巾',
                        price:'￥129.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz21.png',
                        con:'明星大侦探5',
                        des:'线索迷踪！侦氏家族关系网涂鸦牛仔外套',
                        price:'￥299.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz22.png',
                        con:'明星大侦探5',
                        des:'白RAP另外的价钱笔记本 明星大侦探官方周边',
                        price:'￥69.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz23.png',
                        con:'明星大侦探5',
                        des:'白RAP专属另外的价钱保温杯 明星大侦探官方周边',
                        price:'￥89.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz24.png',
                        con:'明星大侦探5',
                        des:'【现货】NZND《不放弃》手势系列防护帽 现货可发',
                        price:'￥99.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz25.png',
                        con:'明星大侦探',
                        des:'【少量现货】#明星大侦探# 第五季官方限定 黑金桌垫鼠标垫',
                        price:'￥79.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz26.png',
                        con:'明星大侦探',
                        des:'【少量现货】#明星大侦探# 第五季官方限定 黑金桌垫鼠标垫',
                        price:'￥69.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz27.png',
                        con:'明星大侦探',
                        des:'【现货】正义VS邪恶撞色长柄伞 明星大侦探官方周边',
                        price:'￥99.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz28.png',
                        con:'明星大侦探',
                        des:'【包邮】2020你一定行！来自明星大侦探的祝福红包套装 限量2020套',
                        price:'￥29.00'
	            	},
	            	{
	            		src:'./src/assets/images/mz29.png',
                        con:'明星大侦探',
                        des:'【少量现货】明侦灵魂！可DIY拆卸重工合金 典藏模型摆件 明星大侦探官方周边',
                        price:'￥199.00'
	            	}
	            ],
	            list7:[
	            	{
	            		src:'./src/assets/images/zy1.png',
	            		con:'乘风破浪的姐姐'
	            	},
	            	{
	            		src:'./src/assets/images/zy2.png',
	            		con:'奇妙小森林'
	            	},
	            	{
	            		src:'./src/assets/images/zy3.png',
	            		con:'快乐大本营'
	            	},
	            	{
	            		src:'./src/assets/images/zy4.png',
	            		con:'天天向上'
	            	},
	            	{
	            		src:'./src/assets/images/zy5.png',
	            		con:'明星大侦探'
	            	},
	            	{
	            		src:'./src/assets/images/zy6.png',
	            		con:'朋友请听好'
	            	},
	            	{
	            		src:'./src/assets/images/zy7.png',
	            		con:'歌手'
	            	},
	            	{
	            		src:'./src/assets/images/zy8.png',
	            		con:'我们的乐队'
	            	},
	            	{
	            		src:'./src/assets/images/zy9.png',
	            		con:'妻子的浪漫旅行'
	            	},
	            	{
	            		src:'./src/assets/images/zy10.png',
	            		con:'中餐厅'
	            	},
	            	{
	            		src:'./src/assets/images/zy11.png',
	            		con:'密室大逃脱'
	            	},
	            	{
	            		src:'./src/assets/images/zy12.png',
	            		con:'向往的生活'
	            	},
	            	{
	            		src:'./src/assets/images/zy13.png',
	            		con:'我们的师父'
	            	},
	            	{
	            		src:'./src/assets/images/zy14.png',
	            		con:'我是大美人'
	            	},
	            	{
	            		src:'./src/assets/images/zy15.png',
	            		con:'声入人心'
	            	}
	            ],
	            list8:[
	            	{
	            		src:'./src/assets/images/tv1.png',
	            		con:'三千鸦杀'
	            	},
	            	{
	            		src:'./src/assets/images/tv2.png',
	            		con:'初恋那件小事'
	            	},
	            	{
	            		src:'./src/assets/images/tv3.png',
	            		con:'热血同行'
	            	},
	            	{
	            		src:'./src/assets/images/tv4.png',
	            		con:'流星花园'
	            	},
	            	{
	            		src:'./src/assets/images/tv5.png',
	            		con:'楚乔传'
	            	},
	            	{
	            		src:'./src/assets/images/tv6.png',
	            		con:'只为遇见你'
	            	}
	            ]
			}
		}
	}
</script>

<style  scoped>
	.mint-tabbar{
        position:fixed;
    }
    .mint-header{
        background-color:white;
        color:black;
    }
    a:-webkit-any-link{
		color:#ef5f00;
		text-decoration-line:none;
	}
    main{
        width: 100%;
        overflow:auto;
    }
    #head{
        position:fixed;
    }
    section{
    	margin-top:6vh;
    }

    .mint-navbar{
		width:23%;
<<<<<<< HEAD
        height:85vh;
=======
		height:85vh;
>>>>>>> 第二次上传
	}
	#left{
		width:100%;	
	}
	.mint-navbar .mint-tab-item.is-selected{
		color:#ff5f00;
		border-bottom:none;
		border-left:3px solid #ff5f00;
	}
    .mint-navbar .mint-tab-item.is-selected{
		color:#ff5f00;
		border-bottom:none;
		border-left:3px solid #ff5f00;
	}
	div{
		float:left;
	}
	#right{
		float:right;
		width:75%;
<<<<<<< HEAD
        height:85vh;
=======
		height:85vh;
>>>>>>> 第二次上传
	}
	ul{
    	width:100%;
    }
    li{
    	width:49%;
    	float:left;
    }
    ul li:nth-of-type(n){
    	margin-right:1%;
    }
    img{
    	width:100%;
    }
    .des{
    	font-size:12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        color:black;
        height:32px;
    }
    span{
    	font-size:0.293333rem;
    	color:grey;
    }
    .price{
    	font-weight:bold;
    	color:#ff4c00;
    }
    .no7 li{
    	width:32.34%;
    }
    .no7 span{
    	font-size:12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        color:black;
        text-align:center;
    }
</style>