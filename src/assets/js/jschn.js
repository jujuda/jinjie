/*全为中文正则*/
export const isChn = (str)=>{
    var reg=/^[\u4e00-\u9fff\w]{3,18}$/
    
    if (!reg.test(str)){
        return false
    }else{
        return true
    }
};
/*不包含中文正则*/
export const hasChn = (str)=>{
    var reg = /.*[\u4e00-\u9fa5]+.*$/
    if(!reg.test(str)) {//不能包含中文
        return false;
    }
    return true;
}
/*手机号验证*/
export const isPoneAvailable = (pone) =>{
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
        return false;
    } else {
        return true;
    }
}

/* 邮箱验证*/
export const isEmail= (email) =>{
    var isreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!isreg.test(email)) {
        return false;
    } else {
        return true;
    }
}

/* 输入内容*/
export const isneed = (need) =>{
    var mereg = /^\w{200}$/;
    if (!mereg.test(need)) {
        return false;
    } else {
        return true;
    }
}