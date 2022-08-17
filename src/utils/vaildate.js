// 用户名匹配
export function nameRule(rule, value, callback) {
    // 请输入4-10位昵称
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (value.trim() === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入4-10位用户名'))
    } else {
        callback()
    }
}

// 密码匹配
export function passwordRule(rule, value, callback) {
    // 请输入6-12位密码需要包含大小写字母和数字以及特殊符号
    let password = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{6,12}/
    if (value.trim() === '') {
        callback(new Error('请输入密码'))
    } else if (!password.test(value)) {
        callback(new Error('请输入6-12位密码需要包含大小写字母和数字和特殊符号'))
    } else {
        callback()
    }
}

// 姓名校验
export function studentNameRule(rule, value, callback) {
    let name = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
    if (value.trim() === '') {
        callback(new Error('请输入姓名'))
    } else if (!name.test(value)){
        callback(new Error('请输入正确的中文姓名'))
    } else {
        callback()
    }
}

// 联系方式验证
export function phoneRule(rule, value, callback) {
    let name = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
    if (value.trim() === '') {
        callback(new Error('请输入手机号码'))
    } else if (!name.test(value)){
        callback(new Error('请输入正确的手机号码'))
    } else {
        callback()
    }
}
