<template>
  <div id="changePassword">
    <el-card class="box-card">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="ruleForm.confirmPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </div>

</template>

<script>
    export default {
        name: "changePassword",
        data() {
            let oldPassword = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入旧密码'));
                }
            };
            let pass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请新输入密码'));
                } else {
                    if (this.ruleForm.pass != '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let confirmPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value != this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    oldPassword: '',
                    pass: '',
                    confirmPassword: ''
                },
                rules: {
                    oldPassword: [
                        {validator: oldPassword, trigger: 'blur'}
                    ],
                    pass: [
                        {validator: pass, trigger: 'blur'}
                    ],
                    confirmPassword: [
                        {validator: confirmPassword, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
