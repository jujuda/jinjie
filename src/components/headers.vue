<template>
 
			<div class="headers">
				<div class="logo" >
					<img src="../assets/img/home_logo.png"/>
				</div>
				<div class="head-right" id="head-right">
					<div class="right-navlist-button">
						<div  class="menu" @click="isShow()" >
							<img src="../assets/img/home_icon_unselected.png" alt="" v-if="isimg" class="animated rotateIn">
							<img src="../assets/img/home_icon_selected.png" alt="" v-if='!isimg' class="animated rotateIn">
						<span></span>
					</div>
					</div>
					
					
					<ul class="right-navlist" id="show-navlist" v-show="toShow">
						<router-link tag="li" to='/home'><a href="#" class="showmenu" >首页</a></router-link>
							
						<router-link tag="li" to='/aboutUs'><a href="#">关于进阶</a></router-link>
						<li >
							<a href="#" class="showmenu" @click="btnShow()">解决方案</a>
							<transition 
							 enter-active-class = "bounceIn"
                             leave-active-class = "bounceOut"
							
							>
							
						
							<ul class="right-navlist-child" v-if="btShow" >
								<li>电商互动营销</li>
								<li>新零售解决方案</li>
								<li>软件服务</li>
								<li>客服托管</li>
							</ul>
								</transition>
						</li>
						
						<router-link tag="li" to='/caseShow'><a href="#" class="showmenu">案例</a></router-link>
						<router-link tag="li" to='/jionUs'><a href="#" class="showmenu">加入进阶</a></router-link>
						<router-link tag="li" to='/contactUs'><a href="#" class="showmenu">联系进阶</a></router-link>
					</ul>
					</div>
					</div>
			
</template>

<style scoped>
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
	width: 239px;
	height: 65px;
	position: absolute;
	top: 20px;
	left: 70px;
	z-index: 999;
	position: fixed;
	
}
.head-right{
	width: 600px;
	height: 1080px;
	
	position: absolute;
	z-index: 2;
	position: fixed;
	right: 0;
	top:0;

}
.right-navlist-button{
	position: absolute;
	right: 70px;
	top: 45px;
	position: fixed;
	z-index: 9999;
}
.menu { 
	width: 30px; 
	height: 25px;
	position: relative;
	margin-top: 47px; 
	transition: 1s all ease-in
}


#navbtn-img{
	position: absolute;
	z-index: 9999;
	position: fixed;
}

.right-navlist{
	width: 600px;
	height: 1080px;
	position: absolute;
	
	position: fixed;
	font-size: 24px;
	background-color:rgba(10,10,20,.5);
	font-family: "MicrosoftYaHei-Bold";
	
}
.right-navlist li{
	text-align: center;
	line-height: 100px;
}

.right-navlist >li:nth-child(1){
	margin-top: 180px;
}
.right-navlist li a{
	color: #FFFFFF;
}
.right-navlist-child{
    height: 130px;
	font-size: 12px;
	text-align: center;
	color: #B3B3B3;
	font-family:"microsoft yahei";
	overflow: hidden;
	}
	
			
.right-navlist-child li{
	height: 30px;
	line-height: 30px;
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
		}
		
	
		
	}
}

</script>