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
				    <p style="width: 280px"></p>	
				   
				</div>
				</div>

               <div class="scene-marketing imgs-backgrund">
					<div class="flexview">
						<div class="ivewright">
	                     <h3>场景营销</h3>
					<p> 利用真实场景让用户有代入感<br/>以及购物的真实感受刺激用户<br/>对商品选择的兴趣和消费</p>
						</div>	
					<img src="../assets/images/interactivemarketing_changjing.png"/>					
					</div>
					<div class="intelligent">
						<img src="../assets/images/interactivemarketing_tuijian.png"/>
						<div class="intelligent-c">
	                        <h3>智能推荐</h3>	
				        	<p>通过用户的购物记录快速推荐<br/>相关产品帮助用户选择合适自己<br/>的产品增强用户的体验感</p>
						</div>	
					</div>
				</div>
               <div class="scene-marketing imgs-backgrund">
					<div class="flexview">
						<div class="ivewright">
	                     <h3>HTML5</h3>
					<p> 让店铺的个性张扬活力四射<br>外观上更有吸引力</p>
						</div>	
					<img src="../assets/images/interactivemarketing_html5.png"/>					
					</div>
					<div class="intelligent">
						<img src="../assets/images/interactivemarketing_ar.png"/>
						<div class="intelligent-c">
	                        <h3>A R</h3>	
				        	<p>利用3D视觉技术更加直观<br>更加真实的表现商品</p>
						</div>	
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
	width: 19.2rem;
	height: 7.5rem;
	margin: 0 auto;
}
.solution-banner img{
	width: 19.2rem;
	height: 7.5rem;
}
.interactive{
		background: url(../assets/img/solutionbg2.png) no-repeat center top;
}
h3{
	font-size: 0.36rem;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.interactive h3{
	box-sizing: border-box;
	
	text-align: center;
	padding-top: 0.9rem;
	padding-bottom: 0.4rem;
}
.interactive-content{
	width: 9.9rem;
	font-size: 0.14rem;
	line-height: 0.28rem;
	text-align: center;
	color: #999999;
    margin: 0 auto;
	margin-top: 0.58rem;
	padding-bottom: 1.53rem;
	font-family: "microsoft yahei";
}
.inter-cont p{
	margin: 0 auto;
	text-align: center;
	width: 3.43rem;
	height: 0.02rem;
	 background: linear-gradient(to right, white,black,black,black,black,white);
}
.interactive .inter-cont:nth-child(2){
	background-color: #FFFFFF;
}

.flexview{
	display: flex;
	justify-content: center;
	margin-top: 0.9rem;
}
.flexview h3{
		width: 3.3rem;
	text-align: right;
	font-size: 0.36rem;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.flexview p{
     font-size: 0.14rem;
	line-height: 0.28rem;
	color: #666666;
    height: 0.47rem;  
    text-align: right;
	margin-top: 0.4rem;
}
.ivewright{
	margin-top: 1.2rem;
}
.flexview img{
	width: 8rem;
	height: 6rem;
	margin-left: 1.2rem;
}
.imgs-backgrund{
	width: 100%;
	background: url(../assets/img/solutionmk3.png) no-repeat center;
	background-size: 19.2rem 7rem;
	background-position-y:4.4rem;
	
}
.scene-content{

padding-top: 1rem;
}
.scene-content p{
	width: 3.16rem;
	font-size: 0.14rem;
	line-height: 0.28rem;
	color: #666666;
	margin-top: 0.4rem;
	font-family: "microsoft yahei";
	
}

.intelligent{
	display: flex;
	justify-content: center;
	margin-top: 1.2rem;
}
.intelligent-c{
    margin-top: 1rem;
}
.intelligent img{
	width: 8rem;
	height: 6rem;
  margin-right: 1.2rem;
}
.intelligent h3{
	 margin-bottom: 0.4rem;
	line-height: 0.48rem;
	text-align: left;
	width: 2.45rem;
}
.intelligent p{
	text-align: left;
	font-size: 0.14rem;
	line-height: 0.28rem;
	color: #666666;
	font-family: "microsoft yahei";
}
.footer-content h3{
	text-align: center;
	padding-top: 1rem;
}
.footer-img{
	display: flex;
	justify-content:center;
	margin-top: 0.8rem;
	margin-bottom: 1.5rem;
	
}
.footer-img img{
	width: 2.2rem;
	height:1.6rem ;
	margin-right: 0.2rem;
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