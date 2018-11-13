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
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nike.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_hotair.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            	<div class="img-show">
            		<img src="../assets/images/case_nba.png"/>
            		<h3>NIKE速度挑战赛互动</h3>
            	</div>
            </div>
           
          
			<footers></footers>
		</div>
</template>

<style scoped>
.case-content{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.case-banner{
	width: 100%;
	height: 750px;
	overflow: hidden;
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
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 120px;
}
.img-show{
	width: 465px;
	height: 465px;
	margin-bottom: 20px;
}
.img-show h3{
	position: absolute;
	width: 465px;
	height: 75px;
	margin-top: -80px;
	line-height: 70px;
	text-align: center;
	font-size: 24px;
	color: #FFFFFF;
	z-index: 999;
	background-color:rgba(2,2,1,.3)
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
	}
}
</script>