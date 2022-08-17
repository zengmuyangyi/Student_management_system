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
                    <el-button type="primary" @click="login('form')" @keyup.enter="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        
    </div>
</template>

<script>
    import { nameRule, passwordRule } from "../utils/vaildate";
    import { setToken } from "@/utils/setToken.js";
    import { login } from "@/api/api.js";
    import { Message } from "element-ui";
    export default {
        name: "Login",
        data() {
            return {
                form:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[{validator: nameRule, trigger: 'blur'}],
                    password:[{validator: passwordRule, trigger: 'blur'}]
                }
            }
        },
        methods: {
            login(form){
                this.$refs[form].validate((valid) => {
                    if(valid) {
                        // console.log(this.form);
                        /* 把这个登录封装成api进行调用
                        this.service.post('/login', this.form)
                        .then(res => {
                            if(res.data.status === 200) {
                                setToken('username', res.data.username);
                                setToken('token', res.data.token);
                                this.$message({message: res.data.message, type: 'success'});
                                this.$router.replice('/home')
                            }
                        }) */
                        login(this.form).then(res => {
                            if(res.data.status === 200) {
                                setToken('username', res.data.username);
                                setToken('token', res.data.token);
                                Message({message: res.data.message, type: 'success'});
                                this.$router.push('/home')
                            }
                        })
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
        background: url('../assets/bg.webp') center no-repeat;
        .box-card{
            width: 450px;
            margin: 200px auto;
            background: rgba(207, 76, 15, 0.341);
            color: #fff;
            .el-form .el-form-item__label{
                width: 100px;
                color: #fff;
            }
            .el-card__header{
                font-size: 30px;
            }
            .el-button{
                width: 100%;
            }
        }
    }

</style>