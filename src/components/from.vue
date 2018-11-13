<template>
 <!--   <flyPage
        hasNav
        ref="inquiry"
        @getIScroll="getIscroll"
    >-->
    <div>
        <!--<navheader slot="fixed"  :className = "'navHeader_bg'" back  :label="">

        </navheader>-->
        <section >
            <div>
                <div class="header_banner inquiry_dec">
                    <p style="width:4.64rem;">{{this.$store.state.inquiryItemData.description}}</p>

                   <p v-for="(item,index) in this.$store.state.inquiryItemData.tags" :key="index"><!--<span class="p_circle"></span>-->{{item}}</p>

                    <div class="scanning">
                        <img :src="scanning" alt="" style="width: 1.65rem">
                        <div class="sanxing mobile_gpu_speed">
                            <div class="sx1"></div>
                            <div class="sx2"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div style="padding: 0 0.72rem;">
                <div style="font-size: 0.28rem;color:#666;height: 1.08rem;line-height: 1.08rem;">
                    请输入查询对象身份信息
                </div>
                <!--输入框-->
                <div>
                    <div class="inputArea">
                        <img src="" alt="">
                        <input v-model="formData.realname" type="text" placeholder="请输入真实姓名" @blur="nameBlurReg">
                        <transition name="inputErrtips">
                            <span class="inputErrtips" v-show="showNameErr">姓名格式不正确</span>
                        </transition>

                    </div>
                    <div class="inputArea">
                        <img src="" alt="">
                        <input  v-model="formData.phone" type="text" placeholder="请输入手机号码" @blur="phoneBlurReg" >
                        <transition name="inputErrtips">
                            <span class="inputErrtips" v-show="showPhoneErr">手机号格式不正确</span>
                        </transition>
                    </div>
                    <div class="inputArea">
                        <img src="" alt="">
                        <input  v-model="formData.id_card" class="" type="text" placeholder="请输入有效身份证号" @blur="idcardBlurReg">
                        <transition name="inputErrtips">
                            <span class="inputErrtips" v-show="showIdErr">身份证格式不正确</span>
                        </transition>
                    </div>
                    <div class="agree" >
                        <img :src="agreeIqXy?select_icon:selectNo_icon" alt="" @click="agreeProtocol">
                        <span @click="$goRouter('/dataAnalysisAgreement')">同意 <i style="color:#39B2FF">网信专家数据分析授权协议</i> </span>
                    </div>
                    <div class="detection" @click="Inquire" >立即检测</div>
                    <div style="color:#39B2FF;font-size:0.2rem;text-align: center;margin-top: 0.3rem" @click="$goRouter({name:'report',query:{category_id:formData.category_id,order_no:'default'}})">
                        报告样例
                    </div>
                </div>
            </div>
        </section>

    </div>
   <!-- </flyPage>-->
</template>

<script>
    import {Order} from '@/api/api'
    import {testIdCard,isPoneAvailable,isChn} from  '@/js/util'
	export default {
		name: "inquiry",
        data(){
		    return {
		        banner_bg:require('@/assets/banner_bg.png'),
                scanning:require('@/assets/img/home_back.png'),
                select_icon:require('@/assets/img/home_back.png'),
                selectNo_icon:require('@/assets/img/home_back.png'),
                agreeIqXy:true,
                formData:{
                    realname:'',
                    id_card:'',
                    phone:'',
                    bankcard_no:'',
                    category_id:0
                },
                showIdErr:false,
                showPhoneErr:false,
                showNameErr:false,
            }
        },
        activated(){//keepalive进入
        },
        deactivated(){},//keepalive离开
        beforeRouteLeave(to,from,next){
            next()
        },
        mounted(){

            this.formData.category_id = this.$route.query.category_id;
            this.$store.dispatch('setCurrentTitle',this.$store.state.inquiryItemData.category_name)
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
            idcardBlurReg(e){
                if(!testIdCard(e.target.value)){
                    this.showIdErr  = true
                }else{
                    this.showIdErr  = false
                }
            },
            agreeProtocol(){
                this.agreeIqXy = !this.agreeIqXy
            },
            Inquire(){//下单检测
                var self = this
                function toast(message) {
                    self.$toast({
                        type:'fail',
                        position:'center',
                        mask:false,
                        message:message,
                        duration:2000
                    });
                }
                if(!this.agreeIqXy){
                    toast('同意注册协议')
                    return;
                }
                if(this.formData.realname==''||this.showNameErr){
                    toast('请输入合法的姓名');
                    return;
                }
                if(this.formData.phone==''||this.showPhoneErr){
                    toast('请输入正确的手机号');
                    return;
                }
                if(this.formData.id_card==''||this.showIdErr){
                    toast('请输入正确的身份证号');
                    return;
                }
                var params = this.formData
                Order(params).then((res)=>{
                    if(res.code==1){
                        if(this.$route.query.category_id==1||this.$route.query.category_id==2){
                            this.$goRouter({name:'check_order',query:{order_no:res.data.order_no,category_id:this.formData.category_id}})
                        }else{
                            location.href = res.data.jump_url
                        }

                    }
                })
            }
        }
	}
</script>

<style scoped lang="less">
    .inquiry_dec{
        position: relative;
        p{
            position: absolute;
            left: 0.72rem;
            .p_circle{
                display: inline-block;
                width:0.1rem;
                height: 0.1rem;
                border-radius:50%;
                background: #fff;
                margin-right: 0.1rem;
            }
        }
        p:nth-of-type(1){
            font-size: 0.36rem;
            font-weight: bold;
            color:#ccf2ff;
            top:0.2rem
        }
     /*   p:nth-of-type(2){
            font-size: 0.36rem;
            font-weight: bold;
            color:#ccf2ff;
            top:0.86rem
        }*/
        p:nth-of-type(2){
            font-size: 0.28rem;
            color:#fff;
            top:1.52rem;
        }
        p:nth-of-type(3){
            font-size: 0.28rem;
            color:#fff;
            top:2.02rem;
        }
        .scanning{
            position: absolute;
            bottom: 0.14rem;
            right: 0.4rem;

            .sanxing{
                position: absolute;
                top:0;
                left:0;
                width:0.825rem;
                height: 1.65rem;
                overflow: hidden;
                transform-origin: right center;
                -webkit-animation: run 2s infinite linear;
                -o-animation: run 2s infinite linear;
                animation:run 2s infinite linear ;
                .sx1{
                    position: absolute;
                    width:  1.65rem;
                    height: 1.65rem;
                    top:0;
                    left:0;
                    transform: rotate(50deg);
                    clip: rect(0px,0.825rem, 1.65rem,0px);
                    border-radius: 50%;
                    background: -webkit-linear-gradient(#A3FBFF, rgba(255, 255, 255, 0)); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(#A3FBFF, rgba(255, 255, 255, 0)); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(#A3FBFF, rgba(255, 255, 255, 0)); /* Firefox 3.6 - 15 */
                    background: linear-gradient(#A3FBFF, rgba(255, 255, 255, 0)); /* 标准的语法 */
                }
                @keyframes run{
                    0%{
                        transform:rotate(0deg);
                    }
                    100%{
                        transform:rotate(360deg);
                    }
                }
            }


        }
    }
    .inputArea{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 0.88rem;
        background: #fff;
        margin-bottom: 0.3rem;
        position: relative;
        &>img{
            width:0.22rem;
            margin: 0 0.2rem;
        }
        input{
            height: 0.88rem;
            flex-grow: 1;
        }
        .inputErrtips{
            position: absolute;
            bottom:-0.3rem;
            left: 0.3rem;
            display: inline-block;
            height: 0.3rem;
            color:red
        }
    }
    .inputErrtips-enter-active,.inputErrtips-leave-active{
        transition: all .5s linear;
    }
    .inputErrtips-enter{
        transform: translateY(-0.3rem);
    }
    .inputErrtips-leave{
        transform: translateY(0);
     }
    .detection{
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        border-radius:0.44rem;
        font-size: 0.36rem;
        color:#fff;
        background: -webkit-gradient(left, #FFC68C,#FF5F3B );
        background: -moz-linear-gradient(right,  #FFC68C,#FF5F3B);
        background: -o-linear-gradient(right, #FFC68C,#FF5F3B);
        background: linear-gradient(to right, #FFC68C,#FF5F3B);
    }
    .agree{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0.3rem 0 0.4rem;
        &>img{
            width:0.22rem;
            margin: 0 0.2rem;
        }
    }
    .navHeader{
        height: 0.88rem;
        line-height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.36rem;
        color:#fff;
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        z-index: 99;
    }


</style>
