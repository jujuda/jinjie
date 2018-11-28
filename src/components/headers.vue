<template>
 
			<div class="headers">
				<div class="logo" >
					<img src="../assets/img/home_logo.png"/>
				</div>
				<div class="right-navlist-button">
						<div  class="menu" @click="isShow()" >
							<img src="../assets/img/home_icon_unselected.png" alt="" v-show="isimg" class="animated rotateIn">
							<img src="../assets/img/home_icon_selected.png" alt="" v-show='!isimg' class="animated rotateIn">
						<span></span>
					</div>
					</div>
				<div class="head-right animated fadeInRight" id="head-right" v-show="toShow">
					
					
					
					<ul class="right-navlist" id="show-navlist" >
						<router-link tag="li" to="/home"><span class="showmenu">首页</span></router-link>
							
						<router-link tag="li" to='/aboutUs'><span>关于进阶</span></router-link>
						<li >
							<span class="showmenu" @click="btnShow()">解决方案</span>
							<transition 
							 enter-active-class = "bounceIn"
                             leave-active-class = "bounceOut"
							
							>
							
						
							<ul class="right-navlist-child" v-if="btShow" >
								<li @click="linktoMarketing">电商互动营销</li>
								<li @click="linktoNewretail">新零售解决方案</li>
								<li @click="linktoSoftware">软件服务</li>
								<li @click="linktoService">客服托管</li>
							</ul>
								</transition>
						</li>
						
						<router-link  tag="li" to='/caseShow'><span class="showmenu">案例</span></router-link>
						<router-link tag="li" to='/jionUs'><span class="showmenu">加入进阶</span></router-link>
						<router-link tag="li" to='/contactUs'><span class="showmenu">联系进阶</span></router-link>
					</ul>
					</div>
					</div>
			
</template>

<style scoped>
.active{
	color: #FF9626;
}
ul{
	list-style: none;
}
a{
	text-decoration: none;
}
 .bounceIn{
      animation: .8s bounceIn ease
    }
    .bounceOut{
      animation: .8s bounceOut ease-in-out
    }
    @keyframes bounceIn{
      0%{height:0 ;}
      100%{height:130px;}
    }
    @keyframes bounceOut{
      0%{height:130px;}
      100%{height:0px}
    }
.logo {
	width:2.39rem;
	height: 0.65rem;
	position: absolute;
	/* top: 0.2rem; */
	left: 0.7rem;
	z-index: 999;
	position: fixed;
	
}
.logo img{
	width:2.39rem;
	height: 0.65rem;	
}
.head-right{
	width: 6rem;
	height: 10.8rem;
	
	position: absolute;
	z-index: 2;
	position: fixed;
	right: 0;
	top:0;
}
.right-navlist-button{
	position: absolute;
	right: 0.7rem;
	position: fixed;
	z-index: 9999;
	cursor: pointer;
}
.menu { 
	width: 0.3rem; 
	height: 0.25rem;
	position: relative;
	transition: 1s all ease-in;

}
.menu img{
	position: absolute;
	right: 0;
	top: 0.4rem;
	width:0.3rem ;
	height: 0.25rem;
}
#navbtn-img{
	position: absolute;
	z-index: 9999;
	position: fixed;
}
.right-navlist{
	width: 6rem;
	height: 10.8rem;
	position: absolute;
	
	position: fixed;
	font-size: 24px;
	background-color:rgba(10,10,20,.5);
	font-family: "MicrosoftYaHei-Bold";
	
}
.right-navlist li{
	text-align: center;
	line-height: 1rem;
	cursor: pointer;
}
.right-navlist >li:nth-child(1){
	margin-top: 1.6rem;
}
.right-navlist li span{
	color: #FFFFFF;
}
.right-navlist li span:hover{
	color: #FF9626;
}
.right-navlist-child{
    height: 130px;
	font-size: 14px;
	line-height: 28px;
	text-align: center;
	color: #B3B3B3;
	font-family:"microsoft yahei";
	overflow: hidden;
	}
	
			
.right-navlist-child li{
	height: 36px;
	line-height: 30px;
}
.right-navlist-child li:hover{
	color: #FF9626;
}
</style>
<script>
export default{
	name:'headers',
	data(){
		return{
			toShow:false,
			btShow:true,
			isimg:true,
		}
	},
	methods:{
		isShow(){
			  this.toShow=!this.toShow;
			  this.isimg=!this.isimg
		},
		btnShow(){
              this.btShow=!this.btShow
		},
		linktoMarketing(){
			
				this.$router.push('/solutionMarketing')
				console.log(this.$route.path)
			},
			linktoNewretail(){
				this.$router.push('/solutionNewretail')
			},
			linktoService(){
				this.$router.push('/solutionService')
			},
			linktoSoftware(){
				this.$router.push('/solutionSoftware')
			}

	}
	
}
</script>