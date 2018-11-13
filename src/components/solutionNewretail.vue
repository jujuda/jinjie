<template>
    <div class="solution-content">
		<headers></headers>
			<div class="solution-banner">
				<img src="../assets/images/newretail_banner.png"/>
			</div>
			<div class="interactive">	
				<div class="inter-cont">
					<h3>新零售智慧门店的优势</h3>
				<p></p>			
				<div class="interactive-content">
					线上流量红利日益缩减，传统零售净利逐渐下滑。面对线上线下都无力增加利益的困境，线上线下同时进行，联动，重新组织零售场景是必经之路。
用人——货——场模式打造出新的突破口，用数字化的方式同步完成品牌的重塑，推广，营销。让消费者接到消息的同事能够产生双向互动，迸发进一步的行为，获取消费者的数据，进而帮助品牌更好的识别和服务消费者，在对消费者徐子的进一步洞悉之上，提高商品的生产和服务的质量。
				</div>
				</div>
				<div class="inter-cont" style="background: #F2F9FF;">
					<h3>数字化门店不得不说的全景规划</h3>
				    <p style="width: 530px;right: 36%;"></p>	
				  <div class="h3-content">
				  	   <h4>橱窗互动</h4>
						<h4>+</h4>
						<h4>可移动性广告位互动</h4>
						<span> 互动体验吸引用户定制化流程传递品牌理念</span>	
						 <img src="../assets/images/newretail_chuchuang.png"/>
				  </div> 
				 
				</div>
				</div>
				<div class="scene-marketing">
					<div class="bg-images"></div>
					<div class="scene-content">
						<h3>磁石点/中岛体验</h3>
						<h3>+</h3>
						<h3>店门口分流</h3>
					<p> 利用游戏互动增强用户体验定制化分流手段指引用户逛店</p>
					<img src="../assets/images/newretail_zhongdao.png"/>
					<div class="img-icon">
						<img src="../assets/img/squareicon.png" class="img-icon-left"/>
						<img src="../assets/img/squareicon2.png" class="img-icon-right"/>
					</div>
					</div>
					<div class="intelligent">
						<img src="../assets/images/newretail_huogui.png"/>
							<h3>壁面/柜台货架互动体验</h3>
							
					<p>店内商品智能化呈现节省展示空间精准推荐高效购物权益引导帮助销售转化</p>
					
				
					</div>
				</div>
			
			<div class="scene-marketing">
					<div class="bg-images"></div>
					<div class="scene-content">
						<h3>智能、自助收银台便捷付款</h3>
					<p> 智能化支付方式提供便捷支付体验更短的时间，更安全的方式利用3D视觉技术更加直观更加真实的表现商品</p>
					<img src="../assets/images/newretail_zhifu.png"/>
					<div class="img-icon">
						<img src="../assets/img/squareicon.png" class="img-icon-left"/>
						<img src="../assets/img/squareicon2.png" class="img-icon-right"/>
					</div>
					</div>
					<div class="intelligent">
						<img src="../assets/images/newretail_baobiao.png" style="top: 500px;"/>
							<h3 style="width: 265px;">门店全域转化数据可视化报表</h3>							
					<p>线下人货场全链路触点数据统计追溯线下触点引导全域延伸转化</p>				
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
	overflow: hidden;
}
.solution-banner{
	width: 1920px;
	height: 750px;
}

.inter-cont{
		position: relative;
}
.h3-content{
	margin-top: 195px;
	margin-bottom: 400px;
}
.h3-content h4{
	text-align: right;
	width: 330px;
	margin-left: 300px;
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.h3-content span{
	display: block;
	font-size: 18px;
	line-height: 36px;
	color: #666666;
    width: 256px;
    height: 47px;
    margin-left: 370px;
    padding-bottom: 40px;
    text-align: right;
}
.h3-content img{
	position: absolute;
	left: 760px;
	top: 300px;

}
h3{
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.interactive h3{
	box-sizing: border-box;
	
	text-align: center;
	padding-top: 120px;
	padding-bottom: 40px;
}
.interactive-content{
	width: 990px;
	font-size: 18px;
	line-height: 36px;
	text-align: center;
	color: #999999;
	margin-left: 25%;
	margin-top: 78px;
	padding-bottom: 153px;
	font-family: "microsoft yahei";
}
.inter-cont p{
	position: absolute;
	right:39%;
	top: 200px;
	width: 400px;
	height: 2px;
	 background: linear-gradient(to right, white,black,black,black,black,white);
}
.interactive .inter-cont:nth-child(2){
	background-color: #FFFFFF;
}

.scene-marketing{
	position: relative;
	margin-bottom: 100px;
	height: 1350px;
	
}
.bg-images{
width: 1920px;
height: 700px;
position: absolute;
z-index: -1;
top:36%;
background-color: #F2F9FF;
	
}

.scene-content h3{
	margin-left: 1280px;

}
.scene-content p{
	width: 316px;
	font-size: 18px;
	line-height: 36px;
	color: #666666;
	margin-left: 1280px;
	margin-top: 60px;
	font-family: "microsoft yahei";
	
}
.img-icon .img-icon-left{
	width: 94px;
	height: 132px;
	position: absolute;
	top: 45.5%;
	left: 34%;
}
.img-icon .img-icon-right{
	width: 94px;
	height: 132px;
	position: absolute;
	top: 42%;
	left: 62%;
}
.scene-content img{
	width: 800px;
	height: 600px;
	position: absolute;
	left: 360px;
	top: 0;
	
}
.intelligent{
	position: relative;
}
.intelligent img{
	position: absolute;
	left: 760px;
	top: 440px;
}
.intelligent h3{
	text-align: right;
	width: 245px;
	position: absolute;
	left: 395px;
	top: 600px;
}
.intelligent p{
	width: 195px;
	position: absolute;
	left: 455px;
	top: 740px;
	font-size: 18px;
	line-height: 36px;
	color: #666666;
	font-family: "microsoft yahei";
}
.footer-content{
	widows: 920px;
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