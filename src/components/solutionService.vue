<template>
    	<div class="solution-content">
			<headers></headers>
			<div class="solution-banner">
				<img src="../assets/images/service_banner.png"/>
			</div>
			<div class="interactive">	
				<div class="inter-cont">
					<h3>电商客服外包</h3>
				<p></p>			
				<div class="interactive-content">
					进阶电商客服团队是由一批专业客服人才组成，有着完善的管理、考核和培训体系，目前已为众多品牌提供了客服服务，并一致得到好评。进阶客服团队在整个服务的过程中坚持客户第一的原则，深入挖掘客服本身价值，从而提高客服质量。
				</div>
				</div>
				<div class="inter-cont">
					<h3>客服服务理念</h3>
				    <p style="width: 238px;right: 43.6%;"></p>	
				   <div class="four-icont">
				   	  <img src="../assets/img/icon8.png"/>
				   	  <img src="../assets/img/icon5.png"/>
				   	  <img src="../assets/img/icon9.png"/>
				   	  <img src="../assets/img/icon6.png"/>
				   </div>				 
				</div>
				<div class="inter-cont" style="background-color:#F2F9FF;">
					<h3>进阶客服类型</h3>
				    <p style="width: 238px;right: 43.6%;"></p>	
				  <div class="h3-content">
				  	   <h4>售前客服</h4>
						<span>在商品销售前为客户提供服务引导客户购买并促成交易</span>	
						 <img src="../assets/images/service_pre_sale.png"/>
				  </div> 				 
				</div>
			</div>
				<div class="scene-marketing">
					<div class="bg-images"></div>
					<div class="scene-content">
						<h3>售后客服</h3>
					<p> 在商品销售完成后为客户提供服务减少纠纷， 优化服务</p>
					<img src="../assets/images/service_aftersale.png"/>
					<div class="img-icon">
						<img src="../assets/img/squareicon.png" class="img-icon-left"/>
						<img src="../assets/img/squareicon2.png" class="img-icon-right"/>
					</div>
					</div>
					<div class="intelligent">
						<img src="../assets/images/serivce_temporary.png" class="imgCenter"/>
							<h3>临时客服</h3>
							
					<p>承接各电商平台活动应急时所需要的客服服务</p>
					
				
					</div>
				</div>
			
			<div class="scene-marketing">
					<div class="bg-images"></div>
					<div class="scene-content">
						<h3>一对一客服</h3>
					<p> 客户专属客服有针对性的只服务于<br>某一客户的客服</p>
					<p></p>
					<img src="../assets/images/service_onetoone.png"/>
					<div class="img-icon">
						<img src="../assets/img/squareicon.png" class="img-icon-left" />
						<img src="../assets/img/squareicon2.png" class="img-icon-right"/>
					</div>
					</div>
					<div class="intelligent">
						<img src="../assets/images/service_promotion.png"/>
							<h3>大促客服</h3>							
					<p>在双十一或其它一些大型促销活动时所需要的客服</p>				
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
	margin-bottom: 40px;
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.h3-content span{
	display: block;
	font-size: 14px;
	line-height: 28px;
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
	font-size: 14px;
	line-height: 28px;
	text-align: center;
	color: #999999;
	margin-left: 25%;
	margin-top: 58px;
	padding-bottom: 153px;
	font-family: "microsoft yahei";
}
.inter-cont{
	background-color: #F2F9FF;
}
.inter-cont p{
	margin: 0 auto;
	text-align: center;
	width: 235px;
	height: 2px;
	 background: linear-gradient(to right, white,black,black,black,black,white);
}
.interactive .inter-cont:nth-child(2){
	background-color: #FFFFFF;
}
.four-icont{
	width: 605px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-left: 660px;
	margin-top: 80px;
	margin-bottom: 120px;
	
}
.four-icont img{
	width: 300px;
	height: 300px;
	margin-right: 1px;
	margin-top: 1px;
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
.scene-content{
	box-sizing: border-box;
}

.scene-content h3{

	margin-left: 1280px;
	padding-top: 100px;

}
.scene-content p{
	width: 316px;
	font-size: 14px;
	line-height: 28px;
	color: #666666;
	margin-left: 1280px;
	margin-top: 40px;
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
.intelligent .imgCenter{
	top:480px;
	position: absolute;
	left: 755px;
}
.intelligent img{
	position: absolute;
	left: 755px;
	top:450px;
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
	top: 680px;
	font-size: 14px;
	line-height: 28px;
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
	name:'solutionService',
	components:{
		footers,
		headers
	}
}
</script>