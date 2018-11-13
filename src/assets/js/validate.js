import Vue from 'vue'
import VeeValidate, {Validator}  from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';

Validator.addLocale(zh);

const config = {
  locale: 'zh_CN',
  events: 'input|blur',
};

Vue.use(VeeValidate,config);
 
// 自定义的内置提示信息
const dictionary = {
   zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: (field)=> field + "此选项是必填项"
      },
      attributes:{
        email:'邮箱',
        need:'需求/描述',
        name: '用户名',
        phone: '手机'
      }
  }
};
 
// Validator.updateDictionary(dictionary);
//  使用自定义的校验规则方法代码
Validator.extend('phone', {
  messages: {
    zh_CN:field => '手机号码不正确!',
  },
  validate:( value) => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

Validator.extend('email', {
    messages: {
      zh_CN:field =>  '例：123456@qq.com',
    },
    validate: value => {
      return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
    }
  });

  Validator.extend('need', {
    messages: {
      zh_CN:field => '请输入您的需求',
    },
    validate: value => {
      return /^\w{200}$/.test(value)
    }
  });
  Validator.extend('name', {
    messages: {
      zh_CN:field => '用户名可为中文数字字母下划线',
    },
    validate: value => {
      return /^[\u4e00-\u9fff\w]{3,18}$/.test(value)
    }
  });
