<template>
<div id="personalInformation">
  <el-card class="box-card">
    <div slot="header">
      <span>{{msg}}</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div class="item_info_user">
      <div v-for="(item, key) in userInfo" :key="key">
        <span>{{item.text}}：</span>
        <el-image v-show="item.img != null" style="width: 100px; height: 100px" :src="item.img" fit="fill"></el-image>
        <span v-show="item.img == null">{{item.cont}}</span>
        <el-divider></el-divider>
      </div>

    </div>
  </el-card>
</div>
</template>

<script>
    export default {
        name: "personalInformation",
        data(){
            return{
                msg:"个人资料",
                userInfo:[
                    {
                        text:'头像',
                        img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                    },{
                        text:'用户名',
                        cont:'admin'
                    }
                    ,{
                        text:'职位',
                        cont:'管理员'
                    }
                    ,{
                        text:'公司',
                        cont:'万方'
                    },{
                        text:'个人介绍',
                        cont:''
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
  #personalInformation{
    .box-card{
        width: 800px;
    }
  }
</style>
