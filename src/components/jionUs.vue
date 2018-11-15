<template>
    	<div class="jion-content">
			<headers></headers>
			<div class="jion-banner">
				<img src="../assets/images/join_banner.png"/>
			</div>
            

      <div class="jion-center">
		  <div @click="showButton1()">
              <img src="../assets/img/requer-btn.png" class="req-btn" v-if='isMore' /> 
			    <img src="../assets/img/more-btn.png" class="req-btn" v-if='!isMore'/>
		  </div>
             	
             	<div class="recruitment-info">
             		<img src="../assets/images/join_projectmanager.png"/>
             		 <div class="recruit">
             		 	<h4>人员需求：1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、 基本职责就是确保项目目标的实现，领导项目团队准时、优质地完成全部工作。<br />
							2、 与客户沟通，了解项目的整体需求。并与客户保持一定的联系，即时反馈阶段性的成果，和即时更改客户提出的合理需求。<br />
							3、 制定项目开发计划文档，量化任务，并合理分配给相应的人员。<br />
							4、 跟踪项目的进度，协调项目组成员之间的合作。<br />
            		 	</p>
            		 	<h5>任职要求:</h5>
             		 	<p v-show="showbtn1">
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p>           		 	
             		 </div>          		 
             	</div>     
             </div>
             
              <div class="jion-center">
             	 <div @click="showButton2()">
              <img src="../assets/img/requer-btn.png" class="req-btn" v-if='isMore' /> 
			    <img src="../assets/img/more-btn.png" class="req-btn" v-if='!isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_web.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：初中级、中级；1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、根据需求完成Web前端项目开发；<br /> 
							2、前端与后台服务数据交互的开发；<br /> 
							3、分析并解决软件开发过程中的问。<br /> 
            		 	</p>
            		 	<h5>任职要求:</h5>
             		 	<p v-show="showbtn2">
             		 		1、精通HTML 5/CSS 3/Javascript等主流WEB前端技术 <br /> 
							2、熟悉angularJs、vueJs 、Reactjs至少一种框架，并能够对其特性和应用有较深的了解；<br /> 
							3、精通DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯；<br /> 
							4、熟悉webpack、gulp、grunt等至少一项前端打包工具；<br /> 
							5、熟练掌握git（或svn）的使用包括常用命令；<br /> 
							6、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；<br /> 
							7、本科以上学历，计算机相关专业，1年以上前端开发工作经验。<br /> 					
            		 	</p>           		 	
             		 </div>          		 
             	</div>     
             </div>
                   <div class="jion-center">
             	  <div @click="moreButton1()">
              <img src="../assets/img/requer-btn.png" class="req-btn" v-if='!isMore' /> 
			    <img src="../assets/img/more-btn.png" class="req-btn" v-if='isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_web.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：ReactJs方向；初中级、中级；1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、react相关技术栈搭建；<br />
							2、维护优化Html页面整体效果；<br />
							3、参与Web前端用户体验的改进。<br />
            		 	</p>
						 <div v-show="morebtn1">

						
            		 	<h5>任职要求:</h5>
             		 	<p>
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p>   
						  </div>        		 	
             		 </div>          		 
             	</div>     
             </div>
             
                   <div class="jion-center">
             	  <div @click="moreButton2()">
              <img src="../assets/img/requer-btn.png" class="req-btn" v-if='!isMore' /> 
			    <img src="../assets/img/more-btn.png" class="req-btn" v-if='isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_web_h5.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：H5动画方向；初中级、中级；1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、负责H5动画或游戏等产品前端研发；<br />
							2、负责H5动画或游戏的功能开发和性能优化；<br />
							3、负责H5前沿技术研究。<br />
            		 	</p>
						 <div v-show="morebtn2">
            		 	<h5>任职要求:</h5>
             		 	<p>
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p>   
						 </div>        		 	
             		 </div>          		 
             	</div>     
             </div>
                   <div class="jion-center">
             	  <div @click="moreButton3()">
					<img src="../assets/img/requer-btn.png" class="req-btn" v-if='!isMore' /> 
						<img src="../assets/img/more-btn.png" class="req-btn" v-if='isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_web_cw.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：Canvas、WebGL方向；初中级、中级；1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、react相关技术栈搭建；<br />
							2、维护优化Html页面整体效果；<br />
							3、参与Web前端用户体验的改进。<br />
            		 	</p>
						 <div v-show="morebtn3">
            		 	<h5>任职要求:</h5>
             		 	<p>
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p> 
						 </div>          		 	
             		 </div>          		 
             	</div>     
             </div>
                <div class="jion-center">
             	  <div @click="moreButton4()">
                   <img src="../assets/img/requer-btn.png" class="req-btn" v-if='!isMore' /> 
			        <img src="../assets/img/more-btn.png" class="req-btn" v-if='isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_web_bed.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：初中级、中级；1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1.根据客户需求,负责设计系统方案与技术方案，构建后端框架，实现服务器功能；<br />
							2.配合前端技术实现功能开发与调试；<br />
							3.调研，对接第三方api接口。<br />
            		 	</p>
						 <div v-show="morebtn4">
            		 	<h5>任职要求:</h5>
             		 	<p>
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p>   
						 </div>        		 	
             		 </div>          		 
             	</div>     
             </div>
                <div class="jion-center">
             	   <div @click="moreButton5()">
                      <img src="../assets/img/requer-btn.png" class="req-btn" v-if='!isMore' /> 
			          <img src="../assets/img/more-btn.png" class="req-btn" v-if='isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_nodejs.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：初中级、中级；1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、负责项目服务端，对Restful API开发有一定经验；<br />
							2、配合前端开发接口；<br />
							3、设计并维护数据表。<br />
            		 	</p>
						 <div v-show="morebtn5">
            		 	<h5>任职要求:</h5>
             		 	<p>
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p>  
						 </div>         		 	
             		 </div>          		 
             	</div>     
             </div>
                <div class="jion-center">
             	  <div @click="moreButton6()">
                   <img src="../assets/img/requer-btn.png" class="req-btn" v-if='!isMore' /> 
			       <img src="../assets/img/more-btn.png" class="req-btn" v-if='isMore'/>
		  </div>
             	<div class="recruitment-info">
             		<img src="../assets/images/join_ste.png"/>
             		 <div class="recruit">
             		 	<h4>级别和人员需求：ReactJs方向初中级、中级，1名</h4>
             		 	<h6>职位描述</h6>
             		 	<h5>岗位职责:</h5>
             		 	<p>
             		 		1、 在计划时间内完成对软件的功能、性能、安全等各项测试工作，定时汇报测试进度，对所测软件的质量负责；<br />
							2、 编制测试各个环节的相关文档，包括测试计划、测试用例、测试小结、测试报告<br />
            		 	</p>
						 <div v-show="morebtn6">
            		 	<h5>任职要求:</h5>
             		 	<p>
             		 		1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验；<br /> 
							2、熟悉手机软件及互联网产品研发的全过程；<br /> 
							4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神； <br />
							5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强； <br />
							6、具有H5/NODE.JS经验者优。<br />						
            		 	</p>  
						 </div>         		 	
             		 </div>          		 
             	</div>     
             </div>
          
			<footers></footers>
		</div>
</template>
<style scoped>
.jion-content{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.jion-banner{
	width: 1920px;
	height: 750px;
}
.jion-center{
	position: relative;
	width: 1200px;
	margin: 0 auto;
	margin-top: 120px;
	background:rgba(255,255,255,1);
	margin-bottom: 80px;
	box-shadow:0px 5px 15px 0px rgba(153,153,153,0.4);
}
.jion-center .req-btn{
	position: absolute;
	bottom: 85px;
	left:28%;
	cursor: pointer;
}
.recruitment-info{
	width: 1200px;
	display: flex;
	justify-content: space-around;
	
}
.recruitment-info img{
	width: 114px;
	height: 148px;
	padding: 80px 100px 0 80px;

}
.recruit{
	padding:80px 30px 130px 0;
}
.recruit h4,h6,h5{
	font-weight: normal;
	font-family: "microsoft yahei";
	color: #999999;
	font-size: 18px;
	margin-bottom: 20px;
}
.recruit h5{
	color: #333333;
	margin-top: 10px;
}
.recruit p{
	width: 830px;
	font-family: "microsoft yahei";
	font-size: 14px;
	color: #333333;
	line-height: 28px;
}
</style>
<script>
import footers from './footers';
import headers from './headers';
export default{
	name:'jionUs',
	components:{
		footers,
		headers
	},
	data(){
		return{
			showbtn1:true,
			showbtn2:true,
			morebtn1:false,
			morebtn2:false,
			morebtn3:false,
			morebtn4:false,
			morebtn5:false,
			morebtn6:false,
			isMore:true,
		}
	},
	methods:{
		showButton1(){
			this.showbtn1=!this.showbtn1;
			this.isMore=!this.isMore;
		},
		showButton2(){
			this.showbtn2=!this.showbtn2;
			this.isMore=!this.isMore;
		},
		moreButton1(){
			this.morebtn1=!this.morebtn1;
			this.isMore=!this.isMore;
		},
		moreButton2(){
			this.morebtn2=!this.morebtn2;
			this.isMore=!this.isMore;
		},
		moreButton3(){
			this.morebtn3=!this.morebtn3;
			this.isMore=!this.isMore;
		},
		moreButton4(){
			this.morebtn4=!this.morebtn4;
			this.isMore=!this.isMore;
		},
		moreButton5(){
			this.morebtn5=!this.morebtn5;
			this.isMore=!this.isMore;
		},
		moreButton6(){
			this.morebtn6=!this.morebtn6;
			this.isMore=!this.isMore;
		},
	}
}
</script>