<template>
  <div id="RowNav">
    <el-col :span="3">
      <el-menu
        :default-active="active"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :style="height">
        <el-menu-item index="/brief" @click="jump('/brief')">
          <i class="iconfont">&#xe681;</i>
          <span slot="title">简述</span>
        </el-menu-item>
        <el-submenu index="account">
          <template slot="title">
            <i class="iconfont">&#xe666;</i><span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/personalInformation" @click="jump('/personalInformation')">个人资料</el-menu-item>
            <el-menu-item index="/changePassword" @click="jump('/changePassword')">修改密码</el-menu-item>
            <el-menu-item index="/adminManagement" @click="jump('/adminManagement')">管理员管理</el-menu-item>
            <el-menu-item index="/userManagement" @click="jump('/userManagement')">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/timeComponent" @click="jump('/timeComponent')">
          <i class="iconfont">&#xe651;</i>
          <span slot="title">时间组件</span>
        </el-menu-item>
        <el-menu-item index="/richText" @click="jump('/richText')">
          <i class="iconfont">&#xe66f;</i>
          <span slot="title">富文本</span>
        </el-menu-item>
        <el-submenu index="table">
          <template slot="title">
            <i class="iconfont">&#xe866;</i><span>表格</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/exportForm" @click="jump('/exportForm')"><i class="el-icon-download"></i>导出表格
            </el-menu-item>
            <el-menu-item index="/uploadForm" @click="jump('/uploadForm')"><i class="el-icon-edit-outline"></i>解析表格
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="echarts">
          <template slot="title">
            <i class="iconfont">&#xe91c;</i><span>可视化</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/count" @click="jump('/count')"><i class="el-icon-finished"></i>数据统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="module">
          <template slot="title">
            <i class="iconfont">&#xe652;</i><span>组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/treeShape" @click="jump('/treeShape')"><i class="iconfont">&#xe69b;</i>树形结构</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/anchor" @click="jump('/anchor')"><i class="iconfont">&#xe62b;</i>锚点定位</el-menu-item>
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
                height:{
                    height:'500px',
                },
                active: this.$route.path
            }
        },
        methods: {
            hh(){
                this.height.height=window.innerHeight-70+'px';
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            jump(href) {
                this.$router.push(href);
            }
        },
        watch: {
            $route(to, from) {
                this.active = this.$route.path;
            }
        },
        created() {
            this.hh()
        }
    }
</script>

<style scoped lang="less">
  .el-menu-vertical{
    overflow: auto;
    .iconfont{
      vertical-align: middle;
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
    }
  }
</style>
