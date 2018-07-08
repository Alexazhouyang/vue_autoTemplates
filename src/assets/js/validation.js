var validatePass = (rule, value, callback) => {
    if(value === '') {
        callback(new Error('请输入密码'));
    } else {
        if(this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
        }
        callback();
    }
};
var validatePass2 = (rule, value, callback) => {
    if(value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.form.pass) {
        callback(new Error('两次输入的密码不一致'));
    } else {
        callback();
    }
};
var validateEmail = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入邮箱'));
    } else if (!Util.emailReg.test(this.form.email)){
        callback(new Error('请输入正确的邮箱'));
    } else {
        callback();
    }
};
var validatePhone = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入手机号'));
    } else if (!Util.phoneReg.test(this.form.phone)){
        callback(new Error('请输入正确的手机号'));
    } else {
        callback();
    }
};