<template>
  <div id="RowNav">
    <el-col :span="3">
      <el-menu
        :default-active="active"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="/brief" @click="jump('/brief')">
            <i class="el-icon-orange"></i>
            <span slot="title">简述</span>
        </el-menu-item>
        <el-submenu index="account">
          <template slot="title">
            <i class="el-icon-user-solid"></i><span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/personalInformation" @click="jump('/personalInformation')">个人资料</el-menu-item>
            <el-menu-item index="/changePassword" @click="jump('/changePassword')">修改密码</el-menu-item>
            <el-menu-item index="/adminManagement" @click="jump('/adminManagement')">管理员管理</el-menu-item>
            <el-menu-item index="/userManagement" @click="jump('/userManagement')">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/timeComponent" @click="jump('/timeComponent')">
          <i class="el-icon-menu"></i>
          <span slot="title">时间组件</span>
        </el-menu-item>
        <el-menu-item index="/richText" @click="jump('/richText')">
          <i class="el-icon-document"></i>
          <span slot="title">富文本</span>
        </el-menu-item>
        <el-submenu index="table">
          <template slot="title">
            <i class="el-icon-s-grid"></i><span>表格</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/exportForm" @click="jump('/exportForm')"><i class="el-icon-download"></i>导出表格</el-menu-item>
            <el-menu-item index="/uploadForm" @click="jump('/uploadForm')"><i class="el-icon-edit-outline"></i>解析表格</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="echarts">
          <template slot="title">
            <i class="el-icon-s-grid"></i><span>可视化</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/count" @click="jump('/count')"><i class="el-icon-finished"></i>数据统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: "RowNav",
        data() {
            return {
                active: this.$route.path
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            jump(href){
                this.$router.push(href);
            }
        },

        watch:{
            $route(to, from) {
                this.active = this.$route.path;
            }
        },
        created(){

        }
    }
</script>

<style scoped>

</style>
