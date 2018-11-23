<template>
    <div class="solution-content">
		<headers></headers>
			<div class="solution-banner">
				<img src="../assets/images/about_banner.png"/>
			</div>
			<div class="interactive">	
				<div class="inter-cont">
					<h3>关于进阶</h3>
				<p></p>			 
				<div class="interactive-content">
					  安徽进阶信息技术有限公司成立于2018年，是一家专注于利用云计算、移动计算、互联网、大数据、人工智能等高新技术以及增强现实、虚拟现实等可视化技术为企业提供创新互动服务的高科技公司。<br />
                                          目前公司主要有三大核心业务领域：<span>电商互动解决方案、新零售解决方案、软件技术服务。</span>
				</div>
				</div>
				
						<img src="../assets/images/about_us.png"/>
							
				
			</div>
				<div class="banner-center">
					<h3>轻松开放的工作氛围</h3>
					<span>我们是一群对工作爱到狂热的人，也是一个年轻有活力的团队。
在这里，我们畅所欲言、各抒己见、求同存异、互帮互助、协同进步。
博学，深知，信任，积极，责任感，对细节的尊重，挑战权威是我们的关键词。</span>
				</div>
				<div class="core-areas">
					<h3>进阶核心领域</h3>
					<p></p>
					<span>在我们的领域里，我们是认真的</span>
				</div>
				<div class="foot-banner-img">

				     <span class="foot-banner-bg" 
					 v-for="(item) in content"
					  :key="item.id" >
               <div class="marker"></div>
						  <img :src="item.img" alt="">
				     	<h3 @mouseover="bgShow(item)">{{item.title}}</h3>						
						  <transition name='bounce'>						
                <p v-show="item.bl">{{item.word}}</p>
              </transition>
			     </span>				
				</div>
			<div class="footer-content">
				<div class="core-areas">
					<h3>进阶合作伙伴</h3>
					<p></p>
				</div>
				<span>对待我们的伙伴，我们是真心的</span>
				<div class="footer-img">
					<img src="../assets/images/about_apple.png"/>
					<img src="../assets/images/about_morefun.png"/>
					<img src="../assets/images/about_fairwhale.png"/>
					<img src="../assets/images/about_fotile.png"/>
					<img src="../assets/images/about_smith.png"/>
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
	width: 19.2rem;
	margin: 0 auto;
}
.solution-banner img {
	width: 19.2rem;
	height: 7.5rem;
}
.interactive{
   display: flex;
   justify-content:center;
}

.interactive img{
   /* flex: 1; */
   width:6rem ;
   height:6rem ;
   padding-left: 1rem;
   padding-top: 0.8rem;
   padding-bottom: 0.8rem;
}
h3{
	font-size: 0.36rem;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.inter-cont h3{
	padding-top: 2rem;
	text-align: center;
	padding-bottom: 0.4rem;
	margin: 0 auto;
}
.interactive-content{
	width: 3.9rem;
	font-size: 0.14rem;
	line-height: 0.28rem;
	text-align: left;
	color: #999999;
	
	margin-top: 0.78rem;
	padding-bottom: 1.53rem;
	font-family: "microsoft yahei";
}
.interactive-content span{
	background-color: #333333;
	color: #FFFFFF;
}

.inter-cont p{
	width: 1.58rem;
	height: 0.02rem;
	text-align: center;
	margin: 0 auto;
	 background: linear-gradient(to right, white,black,black,black,black,white);
}
 .banner-center{
 	width: 100%;
 	margin-bottom: 0.8rem;
 	background: url(../assets/images/about_relaxe_backeground.png) no-repeat center;
 }
 .banner-center h3{
 	text-align: center;
 	padding-top: 2.17rem;
 	margin-bottom: 0.4rem;
 	color: #FFFFFF;
 }
  .banner-center span{
  	font-size: 0.18rem;
  	line-height: 0.36rem;
  	display: block;
  	color: #FFFFFF;
  	width: 6.95rem;
  	margin: 0 auto;
	padding-bottom: 2.1rem;
  	text-align: center;
  }
  .core-areas h3{
  	text-align: center;
  	margin-bottom: 0.4rem;
  }
  .core-areas p{
  	width: 2.4rem;
  	
	height: 2px;
	text-align: center;
	margin: 0 auto;
	margin-bottom: 0.4rem;
	 background: linear-gradient(to right, white,black,black,black,black,white);
  }
  .core-areas span{
  	display: block;
  	font-size: 0.18rem;
  	color: #999999;
  	text-align: center;
  	margin-bottom: 0.8rem;
  }
  .foot-banner-img{
	  width: 100%;
  	display: flex;
  	overflow: hidden;
	  justify-content: center;

  }
  .foot-banner-bg{
    position: relative;
  }

  .foot-banner-img img{ 
	width:6.38rem ;
	height:7.5rem ;  
   	margin-right: 0.01rem;
   	margin-bottom: 0.8rem;
   }
   .foot-banner-img span{
   	 display: block;
   	 margin-right: 1px;
   	 width: 6.4rem;
  	 height:7.5rem;
  	 margin-bottom: 0.8rem;
   }
  .foot-banner-img h3{
	  position: relative;
	  z-index: 99;
  	color:#FFFFFF;
  	text-align: center;
	  bottom: 2rem;
	  z-index: 99999;
  	transition: all .5s ease-in;
  }
.foot-banner-img :hover h3{
  transform: translateY(-200px);

}
.foot-banner-bg .marker{
	width:6.38rem ;
	height:7.5rem ;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right:0;
  background: rgba(0,0,0,.4);
  opacity: 0;


}
.foot-banner-img :hover .marker{
  opacity: 1;
  transition-duration: 1s;
  
}
.foot-banner-img :hover p{
	transition-duration: 1s;
  transform: translateY(-3.5rem);
  	padding: 0.3rem 0.75rem 0.7rem 0.7rem;
}
  .foot-banner-img p{
   	overflow: hidden;
   	font-size: 0.14rem;
	line-height: 0.28rem;
   	position: relative;
   	bottom: 0.5rem;
   	color:#FFFFFF;
   	padding: 0.3rem 0.75rem 0.7rem 0.7rem;

   }

.footer-content h3{
	text-align: center;
}
.footer-content span{
	text-align: center;
	display: block;
  	font-size: 0.18rem;
  	color: #999999;
}
.footer-img{
	display: flex;
	justify-content:center;
	margin-top: 0.8rem;
	margin-bottom: 1.5rem;
	
}
.footer-img img{
	width: 2.2rem;
	height: 1.6rem;
	margin-right: 0.2rem;
}
</style>
<script>
import footers from './footers';
import headers from './headers';
export default{
	name:'aboutUs',
	data(){
		return{

			content:[
    {id:1,
  img:require("../assets/images/about_yingxiao.png"),
  word:"在电商互动营销解决方案方面，安徽进阶信息技术有限公司真正做到赋能商家、创变未来。在服务的过程当中一直秉承“客户第一”的服务理念。在技术层面，我们研发了一批具有自主知识产权的技术，其中包括图形图像、VR、AR、等技术，在业内我们一直保持着领先的技术实力。我们拥有的一切能力只为更好的为我们的服务对象赋能和提能，通过实战能力的提升来进一步的优化我们对客户的服务能力。",
  title:"互动营销",
	bl:false
},
{id:2,
    img:require("../assets/images/about_lingshou.png"),
    word:"在电商互动营销解决方案方面，安徽进阶信息技术有限公司真正做到赋能商家、创变未来。在服务的过程当中一直秉承“客户第一”的服务理念。在技术层面，我们研发了一批具有自主知识产权的技术，其中包括图形图像、VR、AR、等技术，在业内我们一直保持着领先的技术实力。我们拥有的一切能力只为更好的为我们的服务对象赋能和提能，通过实战能力的提升来进一步的优化我们对客户的服务能力。",
    title:"新零售",
	bl:false
  },
  { id:3,
    img:require("../assets/images/about_sofeware.png"),
    word:"在电商互动营销解决方案方面，安徽进阶信息技术有限公司真正做到赋能商家、创变未来。在服务的过程当中一直秉承“客户第一”的服务理念。在技术层面，我们研发了一批具有自主知识产权的技术，其中包括图形图像、VR、AR、等技术，在业内我们一直保持着领先的技术实力。我们拥有的一切能力只为更好的为我们的服务对象赋能和提能，通过实战能力的提升来进一步的优化我们对客户的服务能力。",
    title:"软件服务",
	bl:false
  }
]
		}
	},
	components:{
		footers,
		headers
	},
	methods:{
		bgShow(item){
			// 	
			//  this.bl=!this.content[index].bl
			item.bl=!item.bl
		}
	}
}
</script>
