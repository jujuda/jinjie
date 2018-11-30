/*全为中文正则*/
export const isChn = (str)=>{
    var reg=/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/;
    
    if (!reg.test(str)){
        return false
    }else{
        return true
    }
};
/*不包含中文正则*/
export const hasChn = (str1)=>{
    var reg1 = /.*[\u4e00-\u9fa5]+.*$/
    if(!reg1.test(str1)) {//不能包含中文
        return false;
    }
    return true;
}
/*手机号验证*/
export const isPoneAvailable = (pone) =>{
    var myreg = /^(0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8})|(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
    if (!myreg.test(pone)) {
        return false;
    } else {
        return true;
    }
}

/* 邮箱验证*/
export const isEmail= (email) =>{
    var isreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!isreg.test(email)) {
        return false;
    } else {
        return true;
    }
}

/* 输入内容*/
export const isneed = (need) =>{
    var mereg = /^[\s\S]{1,100}$/;
    if (!mereg.test(need)) {
        return false;
    } else {
        return true;
    }
}