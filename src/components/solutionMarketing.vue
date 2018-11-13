<template>
   <div class="solution-content">
	   <headers></headers>
			<div class="solution-banner">
				<img src="../assets/images/interactivemarketing_banner.png"/>
			</div>
			<div class="interactive">	
				<div class="inter-cont">
					<h3>为什么要做互动营销</h3>
				<p></p>			
				<div class="interactive-content">
					现今，互联网技术在生活中的应用尤为广泛，互动营销成为我们必不可少的一个重要组成部分，也是无线时代的一个主流趋势。消费者浏览载体也逐渐多样化，大众视野也逐渐从PC端转向各种移动设备，手机和ipad最为常见。
时代在变化，电商营销手段也与时俱进，变得更加多样化，从以前单纯的平面视觉展示和简单的购物流程演变到如今更多的平面互动流程，通过进一步的与消费者的互动来打动消费者，互动本身的趣味性和易用性更利于品牌的传播，以此来加深消费者对产品或品牌的印象。进阶凭借着在电商行业多年的经验积累，在与各电商平台的合作中积累了丰富的电商互动经验，已为众多类目TOP商家成功提供互动营销的解决方案。
				</div>
				</div>
				<div class="inter-cont">
					<h3>互动营销玩起来</h3>
				    <p style="width: 280px;right: 42.5%;"></p>	
				   
				</div>
				</div>
				<div class="scene-marketing">
					<div class="bg-images"></div>
					<div class="scene-content">
						<h3>场景营销</h3>
					<p>  利用真实场景让用户有代入感以及购物的真实感受刺激用户对商品选择的兴趣和消费</p>
					<img src="../assets/images/interactivemarketing_changjing.png"/>
					<div class="img-icon">
						<img src="../assets/img/solutionicon3.png" class="img-icon-left"/>
						<img src="../assets/img/solutionicon4.png" class="img-icon-right"/>
					</div>
					</div>
					<div class="intelligent">
						<img src="../assets/images/interactivemarketing_tuijian.png"/>
							<h3>智能推荐</h3>
					<p>通过用户的购物记录快速推荐相关产品帮助用户选择合适自己的产品增强用户的体验感</p>
					
				
					</div>
				</div>
			
			<div class="scene-marketing">
					<div class="bg-images"></div>
					<div class="scene-content">
						<h3>场景营销</h3>
					<p>  利用真实场景让用户有代入感以及购物的真实感受刺激用户对商品选择的兴趣和消费</p>
					<img src="../assets/images/interactivemarketing_html5.png"/>
					<div class="img-icon">
						<img src="../assets/img/solutionicon3.png" class="img-icon-left"/>
						<img src="../assets/img/solutionicon4.png" class="img-icon-right"/>
					</div>
					</div>
					<div class="intelligent">
						<img src="../assets/images/interactivemarketing_ar.png"/>
							<h3>智能推荐</h3>
					<p>通过用户的购物记录快速推荐相关产品帮助用户选择合适自己的产品增强用户的体验感</p>
					
				
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
}
.solution-banner{
	width: 1920px;
	height: 750px;
}
.interactive{

	background-color: #F2F9FF;
}
.inter-cont{
		position: relative;
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
	right:41%;
	top: 200px;
	width: 343px;
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
top:41%;
background-color: #F2F9FF;
	
}

.scene-content h3{
	margin-left: 420px;
	padding-top: 215px;
}
.scene-content p{
	width: 316px;
	font-size: 18px;
	line-height: 36px;
	color: #666666;
	margin-left: 324px;
	font-family: "microsoft yahei";
	
}
.img-icon .img-icon-left{
	width: 94px;
	height: 132px;
	position: absolute;
	top: 49%;
	left: 34.5%;
}
.img-icon .img-icon-right{
	width: 94px;
	height: 132px;
	position: absolute;
	top: 52%;
	left: 62.5%;
}
.scene-content img{
	width: 800px;
	height: 600px;
	position: absolute;
	left: 760px;
	top: 90px;
	
}
.intelligent{
	position: relative;
}
.intelligent img{
	position: absolute;
	left: 360px;
	top: 390px;
}
.intelligent h3{
	position: absolute;
	right: 490px;
	top: 550px;
}
.intelligent p{
	width: 255px;
	position: absolute;
	right: 385px;
	top: 640px;
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
	padding-top: 100px;
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
	name:'solutionMarketing',
	components:{
		footers,
		headers
	}
}
</script>