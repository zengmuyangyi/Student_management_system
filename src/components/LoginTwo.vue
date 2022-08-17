<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            const validateName = (rule, value, callback) => {
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
            const validatePassword = (rule, value, callback) => {
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
            return {
                form:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[{validator: validateName, trigger: 'blur'}],
                    password:[{validator: validatePassword, trigger: 'blur'}]
                }
            }
        },
        methods: {
            login(form){
                this.$refs[form].validate((valid) => {
                    if(valid) {
                        console.log(this.form);
                        /* this.axios.post('https://rapserver.sunmi.com/app/mock/304/login', this.form)
                        .then(res => {
                            console.log(res);
                            if (res.data.status === 200) {
                                localStorage.setItem('username', res.data.username)
                                this.$message({message:res.data.message, type: 'success'})
                                this.$router.replice('/home')
                            }
                        })
                        .catch(err => {
                            console.error(err);
                        }) */
                    } else {
                        console.error(this.form)
                    }
                })
            }
        },
    };
</script>

<style lang="less">
    .login{
        width: 100%;
        height: 100%;
        position: absolute;
        background: #409eff;
        .box-card{
            width: 450px;
            margin: 200px auto;
            .el-card__header{
                font-size: 30px;
            }
            .el-button{
                width: 100%;
            }
        }
    }

</style>