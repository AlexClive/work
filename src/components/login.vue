<template>
  <div id="login">
    <el-card class="box-card">
      <div class="text item">
        <el-image class="logo_img" :src="login_assets.url" :fit="login_assets.fits"></el-image>
        <p class="title">{{msg}}后台管理系统</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          </el-form-item>
        </el-form>

      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            let username = (rule, value, callback) => {
                if (value == 'admin') {
                    callback();
                } else {
                    return callback(new Error('用户名错误'));
                }
            };

            let password = (rule, value, callback) => {
                if (value == "admin") {
                    callback();
                } else {
                    return callback(new Error('密码错误'));
                }
            };
            return {
                msg: '四川省学科',
                login_assets: {
                    fits: 'fill',
                    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
                },
                ruleForm: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'},
                        {min: 3, max: 5, message: '请输入正确的用户名', trigger: 'blur'},
                        {validator: username, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {validator: password, trigger: 'blur'}
                    ],
                }
            }
        },
        methods:{
            submitForm(ruleForm){
                let el = this.ruleForm;
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        this.$store.commit('Hidden',true);
                        this.$router.push('/index');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
  #login {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #45465b url("../assets/login-bg.jpg") no-repeat center;
    background-size: cover;

    .box-card {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -300px 0 0 -200px;
      width: 400px;
      height: 450px;

      .logo_img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        display: block;
        border-radius: 5px;
      }

      .title {
        font-size: 1.5em;
        text-align: center;
        border-bottom: 1px solid #ebeef5;
        padding: 20px 0;
        margin: 0 -21px;
      }

      .ruleForm{
        padding: 20px 0 0;

        .el-form-item__content{
          .el-button{
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
</style>
