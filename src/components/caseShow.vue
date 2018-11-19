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
            		<img :src="item.img" @mouseenter="showImgbtn(item)" @mouseleave="hideImgbtn(item)"/>
            		<h3 v-show="item.hideimg">{{item.content}}</h3>
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
	width: 1920px;
	margin: 0 auto;
}


h3{
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}

.case-center h4{
	font-size: 48px;
	color: #333333;
	font-family: "MicrosoftYaHei-Bold";
	text-align: center;
	margin-top: 120px;
	margin-bottom: 40px;
}
.case-center span{
	font-size: 24px;
	color: #333333;
	font-family: "microsoft yahei";
	text-align: center;
	display: block;
	margin-bottom: 80px;
}
.center-case-img{
	overflow: hidden;
	margin: 0 auto;
	width: 1920px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 120px;
}

.img-show{
	width: 465px;
	height: 465px;
	margin-bottom: 20px;
	margin-right: 15px;
	position: relative;
	z-index: 988;
}

.img-show h3{
	position: absolute;
	width: 465px;
	height: 75px;
	bottom: 0;
	line-height: 70px;
	text-align: center;
	font-size: 24px;
	color: #FFFFFF;
	z-index: 999;
	background-color:rgba(0,0,0,.5)
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
				{hideimg:false,id:1,img:require('@/assets/images/case_nba.png'),content:'NIKE速度挑战赛互动'},
				{hideimg:false,id:2,img:require('@/assets/images/case_nike.png'),content:'NIKE速度挑战赛互动'},
				{hideimg:false,id:3,img:require('@/assets/images/case_fangtai.png'),content:'方太6周年'},
				{hideimg:false,id:4,img:require('@/assets/images/case_vodka.png'),content:'伏特加 中国有嘻哈'},
				{hideimg:false,id:5,img:require('@/assets/images/case_green.png'),content:'格力 全民嘻哈'},
				{hideimg:false,id:6,img:require('@/assets/images/case_lingshi.png'),content:'凌仕皮肤测试黑科技互动'},
				{hideimg:false,id:7,img:require('@/assets/images/case_markfairwhale.png'),content:'马克华菲店铺二楼互动'},
				{hideimg:false,id:8,img:require('@/assets/images/case_nba.png'),content:'马克华菲店铺二楼互动'},
				{hideimg:false,id:9,img:require('@/assets/images/case_iphone.png'),content:'iPhone8/X天猫首发'},
				{hideimg:false,id:10,img:require('@/assets/images/case_hotair.png'),content:'热风吹口气H5'},
				{hideimg:false,id:11,img:require('@/assets/images/case_)smith.png'),content:'A.O.史密斯记忆力大挑战'},
				{hideimg:false,id:12,img:require('@/assets/images/case_skechers.png'),content:'斯凯奇定制礼盒'},
			],
			
		}
	},
	methods:{
		hideImgbtn(item){
			item.hideimg=false
		},
			showImgbtn(item){
			item.hideimg=true
		}
	}
}
</script>