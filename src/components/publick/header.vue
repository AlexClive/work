<template>
  <div id="header">
    <div class="item_header">
      <div class="title">
        <el-link href="#/index" :underline="false" class="index"><h2>四川省医学重点学科(实验室、专科)管理平台</h2></el-link>

      </div>
      <ul>
        <li title="全屏" class="el-icon-full-screen fullScreen" @click="fullScreen()"></li>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <img src="/static/img/login-bg.e418eb4.jpg" alt="头像">
                <span>admin</span>
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,key) in UserInfo" :key="key">
                <el-link :href="item.path" :underline="false">{{item.text}}</el-link>
              </el-dropdown-item>
              <el-dropdown-item command="logout">
                  退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import screenfull from 'screenfull'
    export default {
        name: "Header",
        data(){
            return{
                isFullscreen:true,
                UserInfo:[
                    {
                        text:'个人中心',
                        path:'#/index',
                    }, {
                        text:'修改头像',
                        path:'#/modifyAvatar',
                    },{
                        text:'项目仓库',
                        path:'#/projectWarehouse',
                    }
                ]
            }
        },
        methods:{
            fullScreen(){
                screenfull.toggle();
            },
            handleCommand(command){
                if(command == "logout"){
                    this.$store.commit('Hidden',false);
                    sessionStorage.removeItem('isHidden');
                    this.$router.push('/login');
                }

            }

        }
    }
</script>

<style scoped lang="less">
  #header {
    border-bottom: none !important;
    background-image: linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);

    .item_header {
      padding: 20px;
      overflow: hidden;

      .title {
        color: #fff;
        float: left;
        .index{
          color: #ffffff;
        }
      }

      ul {
        float: right;

        li {
          list-style: none;
          cursor: pointer;
          color: #ffffff;
          margin: 0 0 0 10px;
          float: left;

          .el-dropdown{
            color: #ffffff;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              vertical-align: middle;
            }
          }


        }

        .fullScreen {
          font-size: 30px;
        }
      }
    }
  }
</style>
