<template>
    <div>
<headers></headers>
	<div class="main-head">		
	  <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
		   <swiper-slide class="swiper-slide" style="overflow: hidden">	
			    <div class="page">				
		<div class="inner-content">
			<div class="head-nav">
				
			    
				<div class="swiper-container bannerimg">
					
				    <div class="swiper-wrapper">
						<div class="toheight">
					        <div class="scroll" :class="{show:isAct}"> 
								<div class="below-icon-h" @click="toclient">			
									<div class="below-icon" ></div>
								</div>     
								
					        </div>
					    </div>
				    	
				        <div class="swiper-slide banner-midea">
							<img src="../assets/img/homebanner1.png"/>
							<span class="animate animated fadeInDown ">我懂你的了不起</span><h5 class="h5 swiper-h5 animated fadeInDown ">跟自己作对，才能把难题做对</h5><p class="swiper-p animated fadeInDown"></p><h3 class="swiper-h3 animated fadeInDown"></h3></div>
				        <div class="swiper-slide banner-midea">
							<img src="../assets/img/homebanner2.png"/>
							<span class=" animate animated fadeInDown ">电商互动营销</span><h5 class=" h5 swiper-h5 animated fadeInDown ">给品牌带来前所未见的体验与延展</h5><p class="swiper-p animated fadeInDown"></p><h3 class="swiper-h3 animated fadeInDown"></h3></div>
				        <div class="swiper-slide banner-midea">
							<img src="../assets/img/homebanner3.png"/>
							<span class=" animate animated fadeInDown ">新零售智慧门店</span><h5 class="h5 swiper-h5 animated fadeInDown ">感受科技的力量，拉近你我的距离</h5><p class="swiper-p animated fadeInDown" ></p><h3 class="swiper-h3 animated fadeInDown"></h3></div>
				        	
				        
				    </div>				   
				</div>
			
			</div>
		</div>
	    </div>
			</swiper-slide>
		<!--关于我们-->
		  <swiper-slide class="swiper-slide" style="overflow: hidden">
			   <div class="page">
  <div class="about-as" id="about-us">
  	<div class="about-left-img">
  		<img src="../assets/img/homeaboutleft.png"/>
  	</div>
  <div class="about-right">
  		<h3 :class="view1_show==1?' animated bounceInRight ' : ''">关于我们</h3>

  		<p class="about-p" :class="view1_show==1?' animated bounceInLeft delay-.5s ' : ''"></p>
  		<div class="company-introduction" :class="view1_show==1?' animated bounceInUp delay-1s ' : ''">
  			安徽进阶信息技术有限公司成立于2018年。是一家专注于利用云计算、移动计算、互联网、大数据、人工智能等高新技术以及增强实现、虚拟实现等可视化技术为企业提供创新互动服务的高科技公司。目前公司主要有三大核心业务领域电商互动解决方案、新零售解决方案、软件技术服务。
  		</div>
		  
                     <input type="button" name="more-btn" id="more-btn" value="MORE" :class="view1_show==1?' animated zoomInUp delay-1s ' : ''"  @click="linkto"/>
		
  
  	</div>
  </div>
</div>
  </swiper-slide>
  <!--电商互动营销-->
   <swiper-slide class="swiper-slide" >
	    <div class="page">
  <div class="online-retailers">
  	<div class="retailers-left">
  		<h3 class="retailers-left-title" :class=" view2_show==2?' animated bounceInDown delay-2s': ''">电商互动营销</h3>
  		<p class="retailers-left-content " :class=" view2_show==2?' animated bounceInDown delay-2s' : ''">进阶通过生动有趣的感官互动来实现与消费者的沟通，从而达到消费者对品牌或者商品的深度了解，提升品牌与消费者之间的粘性。</p>
  	  	<h3 class="retailers-left-title " :class="view2_show==2?' animated zoomInDown delay-2s' : ''">软件服务</h3>
  		<p class="retailers-left-content " :class="view2_show==2?' animated zoomInDown delay-2s' : ''">以云计算、物联网、大数据以及人工智能等技术为主，具备自主知识产权，拥有较高的技术水平和能力，主要为电商行业及国家电网提供技术服务与支持工作。</p>
        
  	</div>
    
     
      <div class="retailers-center">
           <img src="../assets/img/home_dot.png" class="img-round"  :class=" view2_show==2?' animated fadeIn delay-1s' : ''"/>
  	      <img src="../assets/img/home_auxiliaryline.png" class="img-line" :class=" view2_show==2?' animated fadeIn delay-1s' : ''"/>
           <img src="../assets/img/home_dot.png" class="img-round2" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
  	      <img src="../assets/img/home_auxiliaryline_left.png" class="img-line2" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
          <img src="../assets/img/home_dot.png" class="img-round4" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
		 <img src="../assets/img/home_dot.png" class="img-round5" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
		  <img src="../assets/img/home_auxiliaryline.png" class="img-line5" :class=" view2_show==2?' animated fadeIn delay-1s' : ''"/>
      </div>


  	 <div class="retailers-right">
  		<h3 class="retailers-left-title " :class="view2_show==2?' animated zoomInDown delay-2s' : ''">新零售解决方案</h3>
  		<p class="retailers-left-content" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验，为线下零售提供更丰富更有价值的数据支持。</p>
      <h3 class="retailers-left-title totop-title" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">客服托管</h3>
  		<p class="retailers-left-content" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">专业的客服团队，快速响应，优质的服务能力，完善的绩效考核，有效提升店铺客服转化的同时为电商企业节省管理成本和财务成本。</p>
  	</div>
  </div>
</div>
  </swiper-slide>
  <!--关于新零售我们有话说-->
  <swiper-slide class="swiper-slide" >
	   <div class="page clearfix" style="height:10.8rem">
	   	<div class="fl" @click="handlerShowImg(1)" :style="{width:currentClick==1?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des" v-show="btnwordshow1"><h4>智能数据大屏</h4></div>
			   <div class="btnclick" v-show="bottomBanner1">
				   <h4 class="clickImg">关于新零售我们有话说</h4>
				   <div class="clickcontent">
                        <p class="animated bounceInDown ">智能数据大屏</p>
						<h5 class="animated bounceInUp">整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验</h5>
				   </div>
			   </div>
			<div class="newbanner" :style="{backgroundImage:newbanner1,backgroundPosition:currentClick==1?'0':'-700px'}" ></div>
				
	   	</div>
	   	<div class="fl"  @click="handlerShowImg(2)" :style="{width:currentClick==2?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des" v-show="btnwordshow2"><h4 style="margin-left:9%">云货架</h4></div>

            <div class="btnclick" v-show="bottomBanner2">
				   <h4 class="clickImg">关于新零售我们有话说</h4>
				   <div class="clickcontent">
                        <p class="animated bounceInDown ">智能数据大屏</p>
						<h5 class="animated bounceInUp" >整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验</h5>
				   </div>
			   </div>
			<div class="newbanner" :style="{backgroundImage:newbanner2,backgroundPosition:currentClick==2?'0':'-400px'}"></div>	
	   	</div>
	   	<div class="fl" @click="handlerShowImg(3)" :style="{width:currentClick==3?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des" v-show="btnwordshow3"><h4>互动智慧大屏</h4></div>
			   <div class="btnclick" v-show="bottomBanner3">
				   <h4 class="clickImg">关于新零售我们有话说</h4>
				   <div class="clickcontent">
                        <p class="animated bounceInDown ">智能数据大屏</p>
						<h5 class="animated bounceInUp">整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验</h5>
						
				   </div>
			   </div>
			<div class="newbanner" :style="{backgroundImage:newbanner3,backgroundPosition:currentClick==3?'0':'-300px'}"></div>	
	   	</div>
	   	<div class="fl" @click="handlerShowImg(4)" :style="{width:currentClick==4?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des" v-show="btnwordshow4"><h4>体验智慧大师</h4></div>

			   <div class="btnclick" v-show="bottomBanner4">
				   <h4 class="clickImg">关于新零售我们有话说</h4>
				   <div class="clickcontent">
                        <p class="animated bounceInDown ">智能数据大屏</p>
						<h5 class="animated bounceInUp">整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验</h5>
				   </div>
			   </div>
			<div class="newbanner" :style="{backgroundImage:newbanner4,backgroundPosition:currentClick==4?'0':'-900px'}"></div>	
	   	</div>
			
		</div>
		</swiper-slide>
		  <swiper-slide class="swiper-slide" >
			   <div class="page">
		<div class="footer-home">
			<div class="footer-home-title">
				<h3>我们的合作伙伴</h3>
			</div>
			<div class="partner-foot-img">
				
				<img src="../assets/img/home_apple.png"/>
				<img src="../assets/img/home_morefun.png"/>
				<img src="../assets/img/home_fairwhale.png"/>
				<img src="../assets/img/home_fotile.png"/>
				<img src="../assets/img/home_smith.png"/>
			</div>
			<div class="footer-phone">
				<div>电话：0551-6526026</div>
				<div>邮箱：service@ahjinjie.cn</div>
				<div class="address">地址：安徽省合肥市经开区中环城A座1623室</div>
			</div>
		</div>
	</div>
	</swiper-slide>	
	</swiper>

</div>

	</div>
</template>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}
.fl{
	float: left;
	width: 19.2rem;
	height: 10.8rem;
}
.fr{
	float: right;
}

.clearfix:after{
	content: '';
	display: block;
	height: 0;
	clear: both;
	zoom: 1;
}

ul{
	list-style: none;
}
.main-head{
	width: 100%;
	overflow: hidden;
}

.head-nav{
	position: relative;
	
}
.swiper-container{
	width: 100%;
	margin: 0 auto;
}
.bannerimg .swiper-slide {
  width: 19.2rem;
  height: 10.8rem;
  overflow: hidden;
}

	.banner-midea img{
		width: 19.2rem;
		height: 10.8rem;
	}
.h5{
    animation-duration:8s;animation-iteration-count:Infinite;animation-delay: 1s;
}

.swiper-p {
	animation-duration:8s;animation-iteration-count:Infinite;animation-delay: 1s;
}
.swiper-h3{
	animation-duration:8s;animation-iteration-count:Infinite;animation-delay: 1s;
}
.animate{
	animation-duration:8s; animation-iteration-count:Infinite;animation-delay: 1s;
}

.swiper-wrapper .swiper-slide span{
	display: inline-block;
	font-size: 0.3rem;
	color: #ffffff;
	position: absolute;
	/* z-index: 1; */
	top: 51%;
	left: 20%;
}
.swiper-wrapper .swiper-slide .swiper-h5{
	position: absolute;
	z-index: 9999;
	top: 57%;
	left: 20%;
	font-size: 0.14rem;
	color: #FFFFFF;
}
.swiper-wrapper .swiper-slide .swiper-p{
	position: absolute;
	z-index: 9999;
	top: 60%;
	left: 20%;
	width:0.5rem;
	height: 3px;
	border-bottom: #FFFFFF solid 2px;
}
.swiper-wrapper .swiper-slide .swiper-h3{
	position: absolute;
	z-index: 9999;
	top: 61%;
	left: 20%;
	width:0.3rem;
	height: 0.03rem;
	border-bottom: #FFFFFF solid 2px;
}
 .swiper-wrapper .below-icon-h{
	 width: 0.55rem;
	height: 2rem;
	position: absolute;
	left: 49%;
	bottom: 0;
	z-index: 9999;
 }
.swiper-wrapper .below-icon{
	background: url(../assets/img/home_dropdown.png) center no-repeat; 
	width: 0.55rem;
	height: 0.3rem;
	position: absolute;
	bottom: 1.8rem;
	/* left: 48%; */
	z-index: 9999;
	-webkit-transform:translate3d(0,0,0);
    -moz-transform:translate3d(0,0,0);
    transform:translate3d(0,0,0);
    -webkit-animation:play 1.5s linear infinite;
    -moz-animation:play 1.5s linear infinite;
    animation:play 1.5s linear infinite;
}
@-webkit-keyframes play{
    0%  {
        -webkit-transform:translateY(0);
    }
    100% {
        -webkit-transform:translateY(30px);
    }
}
@-moz-keyframes play{
    0%  {
        -moz-transform:translateY(0);
    }
    100% {
        -moz-transform:translateY(30px);
    }
}
@keyframes play{
    0%  {
        transform:translateY(0);
    }
    100% {
        transform:translateY(30px);
    }
}


.about-as{
	display: flex;
	width: 100%;
	overflow: hidden;
	height: 10.8rem;
	
}
.about-left-img{
	flex: 1;
}
.about-as .about-left-img img {
		width: 9.8rem;
		height: 10.8rem;
	}
.about-right{
	flex: 1;
}
.about-right h3{
	text-align: center;
	font-size: 0.36rem;
	color: #333333;
	margin-bottom: 0.1rem;
	margin-top: 2.4rem;
}
.about-right .about-p{
	margin: 0 auto;
   text-align: center;
	width: 1.6rem;
	height: 0.02rem;
margin-bottom: 0.6rem;
	 background: linear-gradient(to right, white,black,black,black,black,white);
}
.company-introduction{
	width:3.3rem;
	height: 2rem;
	font-size: 14px;
	line-height: 0.3rem;
	font-family:"microsoft yahei";
	color: #999999;
	text-align: left;
	margin: 0 auto;
	margin-bottom: 0.5rem;
	
}
#more-btn{
	width: 0.6rem;
	height: 0.24rem;
	border: none;
	text-align: center;
	margin-left: 45%;
	background: orange;
	border-radius: 0.12rem;
	color: #FFFFFF;
	cursor: pointer;	
}
.online-retailers{
    margin: 0 auto;
	width: 10rem;
	height: 10.8rem;
    display: flex;
    justify-content:center;

}
.retailers-left-title{
    width: 3.5rem;
    text-align: center;
    font-size: 0.24rem;
    color: #333333;
    font-family: 'MicrosoftYaHei-Bold';
    margin-bottom: 0.3rem;
	margin-top: 1rem;
}
.retailers-left-content{
    width: 3.3rem;
	padding-left: 0.2rem;
    font-size: 0.14rem;
    line-height: 0.28rem;
    color:#999999 ;
    font-family: 'MicrosoftYaHei';
}
.retailers-left .retailers-left-content:nth-child(2){
    margin-bottom: 3rem;
}
.retailers-left{
	flex: 1;
}

.retailers-center{
	position: relative;
	flex: 1;
}
.img-round{
	position: absolute;
	top: 1.7rem;
	left: 0.65rem;
	width: 0.24rem;
	height: 0.24rem;
}
.img-line{
	position: absolute;
	top: 1.95rem;
	left: 0.9rem;
	height: 2rem;
}
.img-round2{
	position: absolute;
	top: 3.95rem;
	right: 0.7rem;
	width: 0.24rem;
	height: 0.24rem;
}
.img-line2{
	position: absolute;
	top: 4.2rem;
	left: 0.9rem;
	height: 2rem;
}
.img-round4{
    position: absolute;
	top: 6.15rem;
	left: 0.65rem;
	width: 0.24rem;
	height: 0.24rem;	
}

.img-round5{
	position: absolute;
	top:8.38rem;
	right: 0.7rem;
	width: 0.24rem;
	height: 0.24rem;
}
.img-line5{
	position: absolute;
	top: 6.35rem;
	left: 0.9rem;
	height: 2rem;
}
.retailers-right .retailers-left-title{
	margin-top: 3.25rem;
}
.retailers-right .totop-title{
	margin-top: 2.9rem;
}


.fl .newbanner {
	width: 100%;
    height: 10.8rem;
    transition:all 1s;
    background-position: top center;
	background-repeat: no-repeat;
	cursor: pointer;
 }



.fl .des h4{color: #fff;
    font-size: 0.3rem;
     text-align: center;
     position: absolute;
     bottom: 1.2rem;
     margin-left: 6%;
     z-index: 999;
 }
.newbanner:hover{ transform: scale(1.1);}
.footer-home{
	width: 100%;
	height: 10.8rem;
	overflow: hidden;
	background-image: url(../assets/img/homefooter.png);
}
.footer-home-title{
	box-sizing: border-box;
	color: #FFFFFF;
	font-size: 0.36rem;
	font-family: "microsoft yahei";
	text-align: center;
	padding-top: 1.7rem;
	padding-bottom: 1.2rem;
	}

.partner-foot-img{
	display: flex;
	justify-content: center;
	margin-bottom: 1.3rem;
}
.partner-foot-img img{
	margin-right: 0.2rem;
}
.footer-phone{
	color: #B3B3B3;
	font-family: "microsoft yahei";
	font-size: 0.16rem;
	text-align: center;
	line-height: 0.36rem;
	padding-bottom: 1rem;
}
.address{
	margin-bottom: 1.35rem;
}
.btnclick{
	width: 100%;
	height: 10.8rem;
	color: #ffffff;
    position: absolute;
	z-index: 9;
	font-family:'microsoft yahei';

}
.btnclick .clickImg{
	font-size: 0.36rem;
	text-align: center;
	margin-top: 1.2rem;
	margin-bottom: 32%;
	letter-spacing: 0.04rem;
}
.clickcontent p{
	font-size: 0.3rem;
	font-family:'microsoft yahei';
	text-align: center;
	margin-bottom: 0.2rem;

}

.clickcontent h5{
	font-size: 0.14rem;
	line-height: 0.28rem;
	text-align: center;
	margin-bottom: 1.2rem;
}

</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
 import Swiper from 'swiper';
import headers from './headers';


import 'swiper/dist/css/swiper.min.css';


export default{
	name:'home',
	
	data(){
		let self=this;
	
		return{
          newbanner1:'url(' + require('../assets/img/homesuju.png') + ')',
		  newbanner2:'url(' + require('../assets/img/homeyunhuojia.png') + ')',
		  newbanner3:'url(' + require('../assets/img/homehudong.png') + ')',
		  newbanner4:'url(' + require('../assets/img/hometiyan.png') + ')',
		  btnwordshow1:true,
		  btnwordshow2:true,
		  btnwordshow3:true,
		  btnwordshow4:true,
		  bottomBanner1:false,
		  bottomBanner2:false,
		  bottomBanner3:false,
		  bottomBanner4:false,
		  currentClick:0,
		  widthImg:false,
		 currentSwiperView_index:0,
		 view0_show:false,
		  view1_show:false,
		   view2_show:false,
		 isAct:false,
		  list: [], 
		 swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: false, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0.6, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
			// console.log(swiper.activeIndex); //滑动打印当前索引
			self.currentSwiperView_index=swiper.activeIndex;//获取当前view索引
			//  console.log(self.currentSwiperView_index)
			 	 if(swiper.activeIndex>0){
			   this.$emit('childFu',{backTopShow:true})
               }else{
                 this.$emit('childFu',{backTopShow:false})
                 }
			 //动画在当前页面只执行一次
				setTimeout(()=>{
				switch (swiper.activeIndex) {
							case 0:
									self.view0_show=swiper.activeIndex;
									break;
							case 1:
									self.view1_show=swiper.activeIndex;
									break;
							case 2:
									self.view2_show=swiper.activeIndex;
									break;
								
							}
				},100)
			
		  if (swiper.activeIndex === this.list.length - 1) {
              //到最后一个加载更多数据
              let newList = [];
              let listLength = this.list.length;
              for (let i = 0; i < 10; i++) {
                newList.push(listLength + i);
              }
              this.list = this.list.concat(newList);
            }
          }
        }
      },

		}
	},
	created() {
   
    //从后台获取数据
    this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  },
	components:{
		 swiper,
	swiperSlide,
	headers
		
	},
	mounted(){
		 var mySwiper = new Swiper ('.bannerimg', {
				loop: true, // 循环模式选项
				speed:3000, 
				autoplay: {
				delay: 1000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
				},
				effect : 'fade',
				fadeEffect: {
				crossFade: true,
			}
			
			})
		
			
		
	},
	methods:{

	    GotoSwiperPage(index){
      this.$refs.mySwiper.swiper.slideTo(index, 1000, false)
    },
	handlerShowImg(val){
		if(this.currentClick!=val){
			this.currentClick = val;
			this.bottomBanner1=true;
			this.bottomBanner2=true;
			this.bottomBanner3=true;
			this.bottomBanner4=true;

			this.btnwordshow1=false;
			this.btnwordshow2=false;
			this.btnwordshow3=false;
			this.btnwordshow4=false;
		}else{
			this.currentClick = 0
			this.bottomBanner1=false;
			this.bottomBanner2=false;
			this.bottomBanner3=false;
			this.bottomBanner4=false;

			this.btnwordshow1=true;
			this.btnwordshow2=true;
			this.btnwordshow3=true;
			this.btnwordshow4=true;
		}
		// console.log(this.currentClick)
	},
	    

	toclient(){
		console.log(this);
		//点击按钮滚动到下一屏
             this.$refs.mySwiper.swiper.slideTo(1, 500, false)
             
    },
	linkto(){
		this.$router.push('/aboutUs')
	}

},
computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }, 

	
}
</script>