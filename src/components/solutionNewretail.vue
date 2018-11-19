<template>
    <div class="solution-content">
		<headers></headers>
			<div class="solution-banner">
				<img src="../assets/images/newretail_banner.png"/>
			</div>
			<div class="interactive">	
				<div class="inter-cont" style="background:none">
					<h3>新零售智慧门店的优势</h3>
				<p></p>			
				<div class="interactive-content">
					线上流量红利日益缩减，传统零售净利逐渐下滑。面对线上线下都无力增加利益的困境，线上线下同时进行，联动，重新组织零售场景是必经之路。
用人——货——场模式打造出新的突破口，用数字化的方式同步完成品牌的重塑，推广，营销。让消费者接到消息的同事能够产生双向互动，迸发进一步的行为，获取消费者的数据，进而帮助品牌更好的识别和服务消费者，在对消费者徐子的进一步洞悉之上，提高商品的生产和服务的质量。
				</div>
				</div>
				<div class="inter-cont" style="padding-top:120px">
					<h3>数字化门店不得不说的全景规划</h3>
				    <p style="width: 530px"></p>	
				  <div class="h3-content">
					  <div class="flex-left">
                       <h4>橱窗互动</h4>
						<h4>+</h4>
						<h4>可移动性广告位互动</h4>
						<span> 互动体验吸引用户定制化流程<br/>传递品牌理念</span>	
					  </div>
				  	  
						 <img src="../assets/images/newretail_chuchuang.png"/>	
				  </div>  
				</div>
				</div>
				<div class="scene-marketing imgs-backgrund">
					<div class="flexview">
						<img  src="../assets/images/newretail_zhongdao.png"/>
						<div class="ivewright">
	                     <h3>磁石点/中岛体验</h3>
						<h3>+</h3>
						<h3>店门口分流</h3>
					<p> 利用游戏互动增强用户体验定制化分流手段指引用户逛店</p>
						</div>					
					</div>
					<div class="intelligent">
						<div class="intelligent-c">
	                        <h3>壁面/柜台货架互动体验</h3>	
				        	<p>店内商品智能化呈现节省<br/>展示空间精准推荐高效购物权益<br/>引导帮助销售转化</p>
						</div>	
				        <img src="../assets/images/newretail_huogui.png"/>
					</div>
				</div>

				<div class="scene-marketing imgs-backgrund">
					<div class="flexview">
						<img src="../assets/images/newretail_zhifu.png"/>
						<div class="ivewright">
	                     <h3>智能、自助收银台便捷付款</h3>
					<p> 智能化支付方式提供便捷支付体验<br/>更短的时间，更安全的方式<br/>利用3D视觉技术更加直观<br/>更加真实的表现商品</p>
						</div>					
					</div>
					<div class="intelligent">
						<div class="intelligent-c">
	                        <h3>门店全域转化数据可视化报表</h3>	
				        	<p>线下人货场全链路触点数据统计<br/>追溯线下触点引导全域延伸转化</p>
						</div>	
				        <img src="../assets/images/newretail_baobiao.png"/>
					</div>
				</div>
			
			
			<div class="footer-content">
				<h3>进阶为伙伴提供互动营销服务</h3>
				<div class="footer-img">
					<img src="../assets/img/home_apple.png"/>
					<img src="../assets/img/home_morefun.png"/>
					<img src="../assets/img/home_fairwhale.png"/>
					<img src="../assets/img/home_fotile.png"/>
					<img src="../assets/img/home_smith.png"/>
				</div>
				
			</div>
			<footers></footers>
		</div>
</template>
<style scoped>
.solution-content{
	width: 100%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden;
}
.solution-banner{
	width: 1920px;
	margin: 0 auto;
}

.inter-cont{
		background: url(../assets/img/solutionbg2.png) no-repeat center
}
.h3-content{
	display: flex;
	justify-content: center;
	margin-top: 90px;
	margin-bottom: 100px;
}
.flex-left{
	margin-top: 100px;
}
.h3-content h4{
	width: 330px;

	text-align: right;
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.h3-content span{
	display: block;
	font-size: 14px;
	line-height: 28px;
	color: #666666;
    height: 47px;  
    text-align: right;
	margin-top: 40px;
}
.h3-content img{
    margin-left: 120px;
}
h3{
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.interactive h3{
	box-sizing: border-box;
	
	text-align: center;
	padding-top: 100px;
	padding-bottom: 40px;
}
.interactive-content{
	width: 990px;
	font-size: 14px;
	line-height: 28px;
	text-align: center;
	margin: 0 auto;
	color: #999999;
	margin-top: 58px;
	font-family: "microsoft yahei";
}
.inter-cont p{
	margin: 0 auto;
	text-align: center;
	top: 200px;
	width: 400px;
	height: 2px;
	 background: linear-gradient(to right, white,black,black,black,black,white);
}

.scene-marketing{
	margin-bottom: 100px;
	overflow: hidden;
	position: relative;
	
}
.flexview{
	display: flex;
	justify-content: center;
}
.flexview h3{
		width: 330px;
	text-align: left;
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.flexview p{
     font-size: 14px;
	line-height: 28px;
	color: #666666;
	width: 230px;
    height: 47px;  
    text-align: left;
	margin-top: 40px;
}
.ivewright{
	margin-top: 120px;
}
.flexview img{
	margin-right: 120px;
}
.imgs-backgrund{
	width: 100%;
	background: url(../assets/img/solutionbg7.png) no-repeat center;
	background-position-y: 57%;
	
}
.scene-content{

padding-top: 100px;
}
.scene-content p{
	width: 316px;
	font-size: 14px;
	line-height: 28px;
	color: #666666;
	margin-top: 40px;
	font-family: "microsoft yahei";
	
}

.intelligent{
	display: flex;
	justify-content: center;
	margin-top: 120px;
}
.intelligent-c{
    margin-top: 100px;
}
.intelligent img{
  margin-left: 120px;
}
.intelligent h3{
	 
	line-height: 48px;
	text-align: right;
	width: 245px;
}
.intelligent p{
	text-align: right;
	font-size: 14px;
	line-height: 28px;
	color: #666666;
	font-family: "microsoft yahei";
}

.footer-content h3{
	text-align: center;
}
.footer-img{
	display: flex;
	justify-content:center;
	margin-top: 80px;
	margin-bottom: 150px;
	
}
.footer-img img{
	margin-right: 20px;
}
</style>
<script>
import footers from './footers';
import headers from './headers';
export default{
	name:'solutionNewretail',
	components:{
		footers,
		headers
	}
}
</script>