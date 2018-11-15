<template>
    
	<div class="main-head">
		<headers></headers>
	  <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
		   <swiper-slide class="swiper-slide" >	
			    <div class="page">				
		<div class="inner-content">
			<div class="head-nav">
				
			    
				<div class="swiper-container bannerimg">
					
				    <div class="swiper-wrapper">
						 <div class="toheight">
        <div class="scroll" :class="{show:isAct}">      
			<div class="below-icon" @click="toclient(step)"></div>
        </div>
    </div>
				    	
				        <div class="swiper-slide">
							<img src="../assets/img/homebanner1.png"/>
							<span class="animate1 animated zoomInDown slower">我懂你的了不起</span><h5 class="h51 swiper-h5 animated bounceInUp slower">跟自己作对，才能把难题作对</h5><p class="swiper-p"></p><h3 class="swiper-h3"></h3></div>
				        <div class="swiper-slide">
							<img src="../assets/img/homebanner2.png"/>
							<span class=" animate2 animated zoomInDown slower">电商互动营销</span><h5 class=" h52 swiper-h5 animated bounceInUp slower">跟自己作对，才能把难题作对</h5><p class="swiper-p"></p><h3 class="swiper-h3"></h3></div>
				        <div class="swiper-slide">
							<img src="../assets/img/homebanner3.png"/>
							<span class=" animate3 animated zoomInDown slower">新零售智慧门店</span><h5 class="h53 swiper-h5 animated bounceInUp slower">跟自己作对，才能把难题作对</h5><p class="swiper-p"></p><h3 class="swiper-h3"></h3></div>
				        	
				        
				    </div>				   
				</div>
			
			</div>
		</div>
	    </div>
			</swiper-slide>
		<!--关于我们-->
		  <swiper-slide class="swiper-slide" >
			   <div class="page">
  <div class="about-as">
  	<div class="about-left-img">
  		<img src="../assets/img/home_matching.png"/>
  	</div>
  <div class="about-right">
  		<h3 :class="view1_show==1?' animated bounceInRight ' : ''">关于我们</h3>

  		<p class="about-p" :class="view1_show==1?' animated bounceInLeft delay-.5s ' : ''"></p>
  		<div class="company-introduction" :class="view1_show==1?' animated bounceInUp delay-1s ' : ''">
  			安徽进阶信息技术有限公司成立于2018年。是一家专注于利用云计算、移动计算、互联网、大数据、人工智能等高新技术以及增强实现、虚拟实现等可视化技术为企业提供创新互动服务的高科技公司。目前公司主要有三大核心业务领域电商互动解决方案、新零售解决方案、软件技术服务。
  		</div>
		  <router-link to='/aboutUs'>
		  
                     <input type="button" name="more-btn" id="more-btn" value="MORE" :class="view1_show==1?' animated zoomInUp delay-1s ' : ''"/>
		  </router-link>
  
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
  	  	<h3 class="retailers-left-title" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">软件服务</h3>
  		<p class="retailers-left-content" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">以云计算、物联网、大数据以及人工智能等技术为主，具备自主知识产权，拥有较高的技术水平和能力，主要为电商行业及国家电网提供技术服务与支持工作。</p>
        
  	</div>
    
     
      <div class="retailers-center">
           <img src="../assets/img/home_dot.png" class="img-round"  :class=" view2_show==2?' animated fadeIn delay-1s' : ''"/>
  	      <img src="../assets/img/home_auxiliaryline.png" class="img-line" :class=" view2_show==2?' animated zoomIn delay-1s' : ''"/>
           <img src="../assets/img/home_dot.png" class="img-round2" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
  	      <img src="../assets/img/home_auxiliaryline_left.png" class="img-line2" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
          <img src="../assets/img/home_dot.png" class="img-round4" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
  	     <img src="../assets/img/home_auxiliaryline.png" class="img-line4" :class="view2_show==2?' animated zoomIn delay-1s' : ''"/>
		 <img src="../assets/img/home_dot.png" class="img-round5" :class="view2_show==2?' animated fadeIn delay-1s' : ''"/>
		  <img src="../assets/img/home_auxiliaryline.png" class="img-line5" :class=" view2_show==2?' animated fadeIn delay-1s' : ''"/>
      </div>


  	 <div class="retailers-right">
  		<h3 class="retailers-left-title " :class="view2_show==2?' animated bounceInDown delay-2s' : ''">新零售解决方案</h3>
  		<p class="retailers-left-content" :class="view2_show==2?' animated bounceInDown delay-2s' : ''">整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验，为线下零售提供更丰富更有价值的数据支持</p>
      <h3 class="retailers-left-title" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">客服托管</h3>
  		<p class="retailers-left-content" :class="view2_show==2?' animated zoomInDown delay-2s' : ''">专业的客服团队，快速响应，优质的服务能力，完善的绩效考核，有效提升店铺客服转化的同时为电商企业节省管理成本和财务成本。</p>
  	</div>
  </div>
</div>
  </swiper-slide>
  <!--关于新零售我们有话说-->
  <swiper-slide class="swiper-slide" >
	   <div class="page clearfix">
	   	<div class="fl" @click="handlerShowImg(1)" :style="{width:currentClick==1?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des"><h4>智能数据大屏</h4></div>
			<div class="newbanner" :style="{background:newbanner1}"></div>	
	   	</div>
	   	<div class="fl"  @click="handlerShowImg(2)" :style="{width:currentClick==2?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des"><h4>云货架</h4></div>
			<div class="newbanner" :style="{background:newbanner2}"></div>	
	   	</div>
	   	<div class="fl" @click="handlerShowImg(3)" :style="{width:currentClick==3?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des"><h4>互动智慧大屏</h4></div>
			<div class="newbanner" :style="{background:newbanner3}"></div>	
	   	</div>
	   	<div class="fl" @click="handlerShowImg(4)" :style="{width:currentClick==4?'100%':currentClick==0?'25%':'0'}">
	   		<div class="des"><h4>体验智慧大师</h4></div>
			<div class="newbanner" :style="{background:newbanner4}"></div>	
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
				<div>地址：安徽省合肥市经开区中环城A座1623室</div>
			</div>
		</div>
	</div>
	</swiper-slide>	
	</swiper>

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
.inner-content{
	width: 1920px;
	height: 950px;
}
.head-nav{
	position: relative;
	
}

.swiper-container{
	width: 1920px;
	height: 950px;
}
.bannerimg .swiper-slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bannerimg .swiper-slide img {
  width: 100%;
  height: 100%;
}
.h51{
    animation-duration:3s;animation-iteration-count:Infinite;animation-delay: 1s;
}
.h52{
    animation-duration:3s;animation-iteration-count:Infinite;animation-delay: 3s;
}
.h53{
	animation-duration:4s;animation-iteration-count:Infinite;animation-delay: 5s;
}

.swiper-wrapper .swiper-slide span{
	display: inline-block;
	font-size: 30px;
	color: #ffffff;
	position: absolute;
	/* z-index: 1; */
	top: 51%;
	left: 20%;
}
.animate1{
	animation-duration:3s; animation-iteration-count:Infinite;animation-delay: 1s;
}
.animate2{
	animation-duration:3s;animation-iteration-count:Infinite;animation-delay: 3s;
}
.animate3{
	animation-duration:4s;animation-iteration-count:Infinite;animation-delay: 5s;
}
.swiper-wrapper .swiper-slide .swiper-h5{
	position: absolute;
	z-index: 9999;
	top: 57%;
	left: 20%;
	font-size: 14px;
	color: #FFFFFF;
}
.swiper-wrapper .swiper-slide .swiper-p{
	position: absolute;
	z-index: 9999;
	top: 60%;
	left: 20%;
	width:50px;
	height: 3px;
	border-bottom: #FFFFFF solid 2px;
}
.swiper-wrapper .swiper-slide .swiper-h3{
	position: absolute;
	z-index: 9999;
	top: 61%;
	left: 20%;
	width:30px;
	height: 3px;
	border-bottom: #FFFFFF solid 2px;
}
.swiper-wrapper .below-icon{
	background: url(../assets/img/home_dropdown.png) center no-repeat; 
	width: 40px;
	height: 22px;
	position: absolute;
	bottom: 60px;
	left: 50%;
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
	position: relative;
}
.about-right{
	width:960px;
	height: 940px;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;
}
.about-right h3{
	position: absolute;
	right: 418px;
	top: 240px;
	text-align: center;
	font-size: 36px;
	color: #333333;
	margin-bottom: 10px;
}
.about-right .about-p{
	position: absolute;
	right: 410px;
	top: 295px;
	width: 160px;
	height: 2px;

	 background: linear-gradient(to right, white,black,black,black,black,white);
}
.company-introduction{
	width:356px;
	height: 200px;
	font-size: 14px;
	line-height: 28px;
	font-family:"microsoft yahei";
	color: #999999;
	position: absolute;
	right:300px;
	top: 324px;
	
}
#more-btn{
    position: absolute;
	z-index:999;
	right:45%;
	top:58%;
	width: 60px;
	height: 24px;
	border: none;
	background: orange;
	border-radius: 12px;
	color: #FFFFFF;
	cursor: pointer;	
}
.online-retailers{
    margin: 0 auto;
    width: 1000px;
    display: flex;
    justify-content:center;

}
.retailers-left-title{
    width: 350px;
    text-align: center;
    font-size: 24px;
    color: #333333;
    font-family: 'MicrosoftYaHei-Bold';
    margin-bottom: 30px;
	margin-top: 50px;
}
.retailers-left-content{
    width: 350px;
    font-size: 14px;
    line-height: 28px;
    color:#999999 ;
    font-family: 'MicrosoftYaHei';
}
.retailers-left .retailers-left-content:nth-child(2){
    margin-bottom: 330px;
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
	top: 105px;
	left: 65px;
}
.img-line{
	position: absolute;
	top: 135px;
	left: 90px;
}
.img-round2{
	position: absolute;
	top: 340px;
	right: 60px;
}
.img-line2{
	position: absolute;
	top: 370px;
	left: 98px;
}
.img-round4{
    position: absolute;
	top: 575px;
	left: 65px;	
}
.img-line4{
	position: absolute;
	top: 135px;
	left: 90px;
}
.img-round5{
	position: absolute;
	top: 810px;
	right: 60px;
}
.img-line5{
	position: absolute;
	top: 605px;
	left: 90px;
}
.retailers-right .retailers-left-title{
	margin-top: 285px;
}

.newbanner {width: 100%;
height: 940px;
transition:all 1s;
 background: no-repeat center;
 }



.fl .des h4{color: #fff;
font-size: 30px;
 text-align: center;
 position: absolute;
 bottom: 120px;
 margin-left: 8%;
 }
.newbanner:hover{ transform: scale(1.1);}
.footer-home{
	width: 1920px;
	height: 940px;
	background-image: url(../assets/img/home_background.png);
}
.footer-home-title{
	box-sizing: border-box;
	color: #FFFFFF;
	font-size: 36px;
	font-family: "microsoft yahei";
	text-align: center;
	padding-top: 170px;
	padding-bottom: 120px;
	}

.partner-foot-img{
	display: flex;
	justify-content: center;
	margin-bottom: 230px;
}
.partner-foot-img img{
	margin-right: 20px;
}
.footer-phone{
	color: #B3B3B3;
	font-family: "microsoft yahei";
	font-size: 16px;
	text-align: center;
	line-height: 36px;
}

</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
 import Swiper from 'swiper';
import headers from './headers';


import 'swiper/dist/css/swiper.min.css';


export default{
	name:'home',
	 props:{
            step:{   //此数据是控制动画快慢的
                type:Number,
                default:1900
            }
        },
	data(){
		let self=this;
	
		return{
          newbanner1:'url(' + require('../assets/img/home_intelligent.png') + ')',
		  newbanner2:'url(' + require('../assets/img/home_cloudshelf.png') + ')',
		  newbanner3:'url(' + require('../assets/img/home_interactive.png') + ')',
		  newbanner4:'url(' + require('../assets/img/home_sexperience.png') + ')',
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
			 console.log(self.currentSwiperView_index)
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
		headers,
		
	},
	mounted(){
		 var mySwiper = new Swiper ('.bannerimg', {
				loop: true, // 循环模式选项
				speed:3500, 
				autoplay: {
				delay: 2000,
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
    //      scrollTop(){
	//             let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	// 		   console.log(scrollTop)
	// 		   if(this.scrollTop>1){
                 
	// 		   }
	// },
	handlerShowImg(val){
		if(this.currentClick!=val){
			this.currentClick = val
		}else{
			this.currentClick = 0
		}
		console.log(this.currentClick)
	},
	    

	 toclient(i){
                var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
                var scrollHeight=document.documentElement.scrollHeight;
                var height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrolTop的值
                document.documentElement.scrollTop+=i;
                if (document.documentElement.scrollTop<height) {
                    var c=setTimeout(()=>this.toBottom(i),16);
                }else {
                    clearTimeout(c);
                }
            }

},
computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }, 

	
}
</script>