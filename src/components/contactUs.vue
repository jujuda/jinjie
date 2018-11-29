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
               		<h3 style="	text-align: center">电子邮箱</h3>
               		<span>service@ahjinjie.cn</span>
               	</div>  
               		<div class="info-us">
               		<h3 style="	text-align: center">联系地址</h3>
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
             		<span>您的姓名:</span>
             	<input type="text"  v-model="fromnum.name" @blur='nameBlurReg'/>			 
                  <span v-show="showNameErr" class="nextspring"> 用户名不能为空</span>	
             	</div>
             		<div class="customer-info-ipt">
             		<i></i>
             		<span>您的电话:</span>
             	<input type="text" name='phone' v-model="fromnum.phone" @blur='phoneBlurReg'/>
				 <span v-show="showPhoneErr" class="nextspring"> 手机号不能为空 </span>		
             	</div>
             		<div class="customer-info-ipt">
             		<i></i>
             		<span>您的邮件:</span>
             	<input type="text" v-model="fromnum.email" @blur='emailBlurReg'/>	
				 <span v-show="showEmailErr" class="nextspring" > 邮箱不能为空 </span>	
             	</div>
				  </div>
             		<div class="customer-info-ipt" style="height:2.6rem">
             		<i></i>
             		<span>您的需求/描述:</span>
             
				 <textarea row="5" cols="5" v-model="fromnum.need" @blur='needBlurReg'></textarea>
				 <div contenteditable="true"></div>
				 <span v-show="showNeedErr" class="nextspring" >需求不能为空</span>	
             	</div>
             	 
             	<input type="button" id="btn-submit" value="提交" @click='submitbtn()'/>
             </div>
           
             	
            
            </div>
    		
             <!--地图-->
             <div class="contact-map">
             <div class="amap-page-container">
      <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
      <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events"
		  >
        </el-amap-info-window>
	 
	  </el-amap>
    </div>
	  
			 </div>
			<footers></footers>
		</div>
		
</template>
<style scoped>
textarea{
	width: 4.5rem;
	height: 1.9rem;
	background: #D9EDFF;
	border-radius: 0.08rem;
	border: none;
	resize: none;
	margin-top: 0.1rem;
	margin-bottom: 0.3rem;
	margin-left: 0.2rem;
	outline: none;
	font-size: 0.18rem;
}
.contact-content{
    width: 100%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden; 

	
}
.contact-banner{
	width: 19.2rem;
	margin: 0 auto;
}
.contact-banner img{
	width: 19.2rem;
	height: 7.5rem;

}

h3{
	font-size: 0.36rem;
	color: #333333;
	font-family: 'MicrosoftYaHei-Bold';
}
.content-center{
	width: 100%;
	overflow: hidden;
}
.content-center h4{
	font-size: 0.36rem;
	line-height: 0.72rem;
	color: #666666;
	font-family: "microsoft yahei";
	text-align: center;
	margin-top: 0.8rem;
	margin-bottom: 1.2rem;
	letter-spacing: 3px;
}
.our-information{
	display: flex;
	justify-content: center;
}
.info-us{
	margin-right: 2.45rem;
}
.our-information .info-us:nth-child(3){
	margin-right:0;
}
.our-information span{
	display: block;
	color: #666666;
	margin-top: 0.42rem;
	margin-bottom: 1.2rem;
	font-size: 0.18rem;
}
 .content-center h6{
	text-align: center;
	color: #999999;
	font-size: 0.18rem;
	margin-bottom: 0.8rem;
}
.customer-info{
	width: 19.2rem;
	margin: 0 auto;
	background: #F2F9FF;
	overflow: hidden;
	padding-bottom: 1.2rem;
}
.reg-customer-info{
	width: 12rem;
	flex-wrap: wrap;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 1.2rem;
	overflow: hidden;
}
.customer-info-ipt{
	font-size: 0;
	margin-right: 0.5rem;
	margin-bottom: 0.4rem;
	width: 5rem;
	height: 0.6rem;
	background: #D9EDFF;
	border-radius: 0.1rem;
	
	
}
.customer-info-ipt i{
    width: 0.04rem;
    height: 0.04rem;
    border: 0.02rem solid #FF9626; 
    background: #FF9626;
    border-radius: 50%;
	display: inline-block;
	margin-right: 0.08rem;
	margin-left: 0.1rem;
	margin-top: 0.3rem;

}
.customer-info-ipt span{
	margin-top: 0.2rem;
	font-size: 0.18rem;
	color: #333333;
}

.customer-info-ipt input {
	border: none;
	display: inline-block;
     background: none;
	width: 3rem;
	height: 0.3rem;
	margin-bottom: 0.25rem;
	font-size: 0.18rem;
	color: #333333;
	margin-left: 0.2rem;
	outline: none;
}

.customer-info-ipt .nextspring{
	display: block;
	font-size: 0.18rem;
	color: pink;
	margin-top:-0.05rem;
	
}
#btn-submit{
	margin: 0 auto;
	width: 2rem;
	height: 0.5rem;
	border: none;
	background: #FF9626;
	border-radius: 0.1rem;
	color: #FFFFFF;
	font-size: 0.24rem;
	cursor: pointer;
	margin-top: 0.3rem;
}
.contact-map{
	width: 19.2rem;
	height: 6rem;
	margin: 0 auto;
	color: rebeccapurple;
}
 .amap-demo {
    height: 6rem;
	font-size: 0.14rem;
	text-align: center;
    
  }
</style>
<script>

import headers from './headers';
import footers from './footers';
// import VeeValidate, {Validayor} from 'vee-validate';
import {isChn,isPoneAvailable,isEmail,isneed} from '@/assets/js/jschn';
import VueAMap from 'vue-amap';
import { AMapManager } from 'vue-amap';
 let amapManager = new VueAMap.AMapManager();
export default{
	name:'contactUs',
    data(){
		 const self = this;
         return{
			fromnum:{
                name:"",
			phone:"",
			email:"" ,
			need:"" // 描述
			
            },
            showNameErr:false,
            showPhoneErr:false,
            showEmailErr:false,
			showNeedErr:false,
			center: [117.208345,31.781755],
              zoom: 16,
			 amapManager,
			  windows: [
            {
              position: [117.208500,31.782200],
              content: '安徽省合肥市经开区中环城A座1623室',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow1');
                }
              }
			}
			]
			,
              events: {
            init(map) {
              AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                const marker = new SimpleMarker({
                  iconLabel: '1',
                  iconStyle: 'red',
                  map: map,
                  position: map.getCenter()
                });
              });
            }
          
			  },
			   currentWindow: {
            position: [0, 0],
            content: '',
            events: {},
            visible: false
          } 
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
					  let formdata = new FormData();
						   formdata.append('name',this.fromnum.name);
						 formdata.append('tel',this.fromnum.phone);
						  formdata.append('email',this.fromnum.email);
						   formdata.append('demand',this.fromnum.need);
						   let config = {
						            headers: {
						                'Content-Type': 'multipart/form-data'
						            }
						        };
					  this.$http.post('/www.test.com/index.php/?c=pchome&m=set_info', formData, config).then( (res) => {
						   
						    }).catch((error) =>{						       
						    });
					
		        // 	   if(this.formData.name==''||this.showNameErr){
                //     toast('请输入正确的用户名');
                //     return;
                // }
                // if(this.formData.phone==''||this.showPhoneErr){
                //     toast('请输入正确的手机号');
                //     return;
                // }
                // if(this.formData.email==''||this.showEmailErr){
                //     toast('请输入正确的邮箱地址');
                //     return;
				// }
				//  if(this.formData.need==''||this.showNeedErr){
                //     toast('请输入正确的需求/描述');
                //     return;
                // }
		}
	},
	  mounted() {
        this.currentWindow = this.windows[0];
      },
}
</script>
