<template>
    <div class="case-content">
		<headers></headers>
			<div class="case-banner">
				<img src="../assets/images/case_banner.png"/>
			</div>
             <div class="case-center">
             	<h4>CASE WORK</h4>
             	<span>案例作品</span>
              
             </div>
            <div class="center-case-img">
            	<div class="img-show"
				 v-for="(item) in imgWord"
				  :key="item.id"
				>
            		<img :src="item.img"/>
            		<h3>{{item.content}}</h3>
            	</div>
            	
            </div>     
			<footers></footers>
		</div>
</template>

<style scoped>
.case-content{
	 width: 100%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden; 
}
.case-banner{
	width: 19.2rem;
	margin: 0 auto;
}
.case-banner img{
	width:19.2rem ;
	height:7.5rem ;
}

h3{
	font-size: 0.36rem;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}

.case-center h4{
	font-size: 0.48rem;
	color: #333333;
	font-family: "MicrosoftYaHei-Bold";
	text-align: center;
	margin-top: 1.2rem;
	margin-bottom: 0.4rem;
}
.case-center span{
	font-size: 0.24rem;
	color: #333333;
	font-family: "microsoft yahei";
	text-align: center;
	display: block;
	margin-bottom: 0.8rem;
}
.center-case-img{
	overflow: hidden;
	margin: 0 auto;
	width: 19.2rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 1.2rem;
}

.img-show{
	width: 4.65rem;
	height: 4.65rem;
	margin-bottom: 0.2rem;
	margin-right: 0.15rem;
	position: relative;
	z-index: 988;
}
.img-show img{
	cursor: pointer;
	width: 4.65rem;
	height: 4.65rem;
}
.img-show h3{
	display: none;
	position: absolute;
	width:  4.65rem;
	height: 0.75rem;
	bottom: 0;
	line-height: 0.7rem;
	text-align: center;
	font-size: 0.24rem;
	color: #FFFFFF;
	z-index: 999;
	background-color:rgba(0,0,0,.5)
}
.img-show:hover h3{
	display: block;
}
</style>
<script>
import footers from './footers';
import headers from './headers';
export default{
	name:'caseShow',
	components:{
		 footers,
		 headers
	},
	data(){
		return{
			imgWord:[
				{id:1,img:require('@/assets/images/case_nba.png'),content:'NIKE速度挑战赛互动'},
				{id:2,img:require('@/assets/images/case_nike.png'),content:'NIKE速度挑战赛互动'},
				{id:3,img:require('@/assets/images/case_fangtai.png'),content:'方太6周年'},
				{id:4,img:require('@/assets/images/case_vodka.png'),content:'伏特加 中国有嘻哈'},
				{id:5,img:require('@/assets/images/case_green.png'),content:'格力 全民嘻哈'},
				{id:6,img:require('@/assets/images/case_lingshi.png'),content:'凌仕皮肤测试黑科技互动'},
				{id:7,img:require('@/assets/images/case_markfairwhale.png'),content:'马克华菲店铺二楼互动'},
				{id:8,img:require('@/assets/images/case_nba.png'),content:'马克华菲店铺二楼互动'},
				{id:9,img:require('@/assets/images/case_iphone.png'),content:'iPhone8/X天猫首发'},
				{id:10,img:require('@/assets/images/case_hotair.png'),content:'热风吹口气H5'},
				{id:11,img:require('@/assets/images/case_)smith.png'),content:'A.O.史密斯记忆力大挑战'},
				{id:12,img:require('@/assets/images/case_skechers.png'),content:'斯凯奇定制礼盒'},
			],
			
		}
	},
	
}
</script>