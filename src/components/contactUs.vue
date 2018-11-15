<template>
    		<div class="contact-content">
				<headers></headers>
			<div class="contact-banner">
				<img src="../assets/images/contact_banner.png"/>
			</div>
             <div class="content-center">
             	<h4>无论您想与我们合作还是想更多的了解我们的工作 <br />我们都乐意听取您的意见</h4>
               <div class="our-information">
               	<div class="info-us">
               		<h3>业务联系</h3>
               		<span>0551-65260260</span>
               	</div>
               	  	<div class="info-us">
               		<h3>电子邮箱</h3>
               		<span>service@ahjinjie.cn</span>
               	</div>  
               		<div class="info-us">
               		<h3>联系地址</h3>
               		<span>安徽省合肥市经开区中环城A座1623室</span>
               	</div>
               </div>
               <h6>我们的工作时间是 9：00~18：00（周一至周五）</h6>
             </div>
            <div class="customer-info">
             <div class="reg-customer-info">
				 <div>

				
             	<div class="customer-info-ipt">
             		<i></i>
             		<span>您的姓名</span>
             	<input type="text"  v-model="fromdata.name" @blur='nameBlurReg'/>			 
                  <span v-show="showNameErr" class="nextspring"> 用户名不能为空</span>	
             	</div>
             		<div class="customer-info-ipt">
             		<i></i>
             		<span>您的电话</span>
             	<input type="text" name='phone' v-model="fromdata.phone" @blur='phoneBlurReg'/>
				 <span v-show="showPhoneErr" class="nextspring"> 手机号不能为空 </span>		
             	</div>
             		<div class="customer-info-ipt">
             		<i></i>
             		<span>您的邮件</span>
             	<input type="text" v-model="fromdata.email" @blur='emailBlurReg'/>	
				 <span v-show="showEmailErr" class="nextspring" > 邮箱不能为空 </span>	
             	</div>
				  </div>
             		<div class="customer-info-ipt">
             		<i></i>
             		<span>您的需求/描述</span>
             
				 <textarea row="5" cols="5" v-model="fromdata.need" @blur='needBlurReg'></textarea>
				 <span v-show="showNeedErr" class="nextspring" >需求不能为空</span>	
             	</div>
             	 
             	<input type="button" id="btn-submit" value="提交" @click='submitbtn()'/>
             </div>
           
             	
            
            </div>
             <!--地图-->
              <div class="info-map">
              	
              </div>
			<footers></footers>
		</div>
</template>
<style scoped>
textarea{
	width: 496px;
	height: 210px;
	background: #D9EDFF;
	border-radius: 8px;
	border: none;
}
.contact-content{
	width: 100%;
	height: 100%;
	overflow: hidden;
	
}
.contact-banner{
	width: 1920px;
	height: 750px;
}


h3{
	font-size: 36px;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.content-center{
	width: 100%;
	overflow: hidden;
}
.content-center h4{
	font-size: 36px;
	line-height: 72px;
	color: #666666;
	font-family: "microsoft yahei";
	text-align: center;
	margin-top: 80px;
	margin-bottom: 120px;
	letter-spacing: 3px;
}
.our-information{
	display: flex;
	justify-content: space-around;
	margin: 0 482px;
}
.our-information span{
	display: block;
	color: #666666;
	margin-top: 42px;
	margin-bottom: 120px;
	font-size: 18px;
}
 .content-center h6{
	text-align: center;
	color: #999999;
	font-size: 18px;
	margin-bottom: 80px;
}
.customer-info{
	position: absolute;
	z-index: 99;
	width: 100%;
	height: 600px;
	background: #F2F9FF;
	overflow: hidden;
}
.reg-customer-info{
	width: 1200px;
	flex-wrap: wrap;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 120px;
}
.customer-info-ipt{
	margin-right: 50px;
	margin-bottom: 40px;
	width: 500px;
	height: 60px;
	background: #D9EDFF;
	border-radius: 10px;
	
}
.customer-info-ipt i{
    width: 4px;
    height: 4px;
    border: 2px solid #FF9626; 
    background: #FF9626;
    border-radius: 50%;
	display: inline-block;
	margin-right: 10px;
	margin-left: 5px;

}
.customer-info-ipt span{
	display: inline-block;
	margin-top: 20px;
	font-size: 18px;
	color: #333333;
}

.customer-info-ipt input {
	border: none;
	display: inline-block;
     background: none;
	width: 300px;
	height: 30px;
	margin-bottom: 25px;
	font-size: 18px;
	color: #333333;
}

.customer-info-ipt .nextspring{
	color: pink;
	margin-top:-30px;
	
}
#btn-submit{
	margin: 0 auto;
	width: 200px;
	height: 50px;
	border: none;
	background: #FF9626;
	border-radius: 10px;
	color: #FFFFFF;
	font-size: 24px;
}
</style>
<script>
import footers from './footers';
import headers from './headers';
// import VeeValidate, {Validayor} from 'vee-validate';
import {isChn,isPoneAvailable,isEmail,isneed} from '@/assets/js/jschn';

export default{
	name:'contactUs',
    data(){
         return{
			fromdata:{
                name:"",
			phone:"",
			email:"" ,
			need:"" // 描述
            },
            showNameErr:false,
            showPhoneErr:false,
            showEmailErr:false,
            showNeedErr:false
		 }
	},
	components:{
		footers,
		headers
	},
	methods:{
         nameBlurReg(e){
		        if(!isChn(e.target.value)){
                    this.showNameErr  = true
                }else{
                    this.showNameErr  = false
                }
            },
             phoneBlurReg(e){
		        if(!isPoneAvailable(e.target.value)){
                    this.showPhoneErr  = true
                }else{
                    this.showPhoneErr  = false
                }
            },
                emailBlurReg(e){
		        if(!isEmail(e.target.value)){
                    this.showEmailErr  = true
                }else{
                    this.showEmailErr  = false
                }
            },
                needBlurReg(e){
		        if(!isneed(e.target.value)){
                    this.showNeedErr  = true
                }else{
                    this.showNeedErr  = false
                }
            },
	        	submitbtn(){
		        	   if(this.formData.name==''||this.showNameErr){
                    toast('请输入正确的用户名');
                    return;
                }
                if(this.formData.phone==''||this.showPhoneErr){
                    toast('请输入正确的手机号');
                    return;
                }
                if(this.formData.email==''||this.showEmailErr){
                    toast('请输入正确的邮箱地址');
                    return;
				}
				 if(this.formData.need==''||this.showNeedErr){
                    toast('请输入正确的需求/描述');
                    return;
                }
		}
	}
}
</script>
