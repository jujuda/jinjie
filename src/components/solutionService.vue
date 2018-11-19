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
				<div class="inter-cont" style="background:none">
					<h3>客服服务理念</h3>
				    <p style="width: 238px"></p>	
				   <div class="four-icont">
				   	  <img src="../assets/img/icon8.png"/>
				   	  <img src="../assets/img/icon5.png"/>
				   	  <img src="../assets/img/icon9.png"/>
				   	  <img src="../assets/img/icon6.png"/>
				   </div>				 
				</div>

             <div class="inter-cont" style="padding-top:120px">
					<h3>进阶客服类型</h3>
				    <p style="width: 238px"></p>	
				  <div class="h3-content">
					  <div class="flex-left">
                       <h4>售前客服</h4>
						<span>在商品销售前为客户提供<br/>服务引导客户购买并促成交易</span>	
					  </div>
				  	  
						  <img src="../assets/images/service_pre_sale.png"/>
						
				  </div>  
				</div>
				</div>

				<div class="scene-marketing imgs-backgrund">
					<div class="flexview">
						<img  src="../assets/images/service_aftersale.png"/>
						<div class="ivewright">
	                     <h3>售后客服</h3>
					<p> 在商品销售完成后为客户提供服务<br/>减少纠纷， 优化服务</p>
						</div>					
					</div>

				
					<div class="intelligent">
						<div class="intelligent-c">
	                        <h3>临时客服</h3>	
				        	<p>承接各电商平台活动<br/>应急时所需要的客服服务</p>
						</div>	
				        <img src="../assets/images/serivce_temporary.png"/>
					</div>
				</div>
				<div class="scene-marketing imgs-backgrund">
					<div class="flexview">
						<img  src="../assets/images/service_onetoone.png"/>
						<div class="ivewright">
	                     <h3>一对一客服</h3>
					<p>客户专属客服有针对性的只服务于<br/>某一客户的客服</p>
						</div>					
					</div>

				
					<div class="intelligent">
						<div class="intelligent-c">
	                        <h3>大促客服</h3>	
				        	<p>在双十一或其它一些大型<br/>促销活动时所需要的客服</p>
						</div>	
				        <img src="../assets/images/service_promotion.png"/>
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
	color: #999999;
    margin: 0 auto;
	margin-top: 58px;
	padding-bottom: 153px;
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
.four-icont{
	width: 605px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 auto;
	margin-top: 80px;
	
}
.four-icont img{
	width: 300px;
	height: 300px;
	margin-right: 1px;
	margin-top: 1px;
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
	name:'solutionService',
	components:{
		footers,
		headers
	}
}
</script>