<template>
  <div id="RowNav">
    <el-col :span="3">
      <el-scrollbar wrapClass="yf-container" viewClass="yf-content" wrapStyle="color:'#fff';fontSize:'16px';" viewStyle="color:'#fff';fontSize:'16px';" :native="false" :noresize="true" tag="ul">
        <el-menu :default-active="active" class="el-menu-vertical" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :style="height">
          <div  v-for="(item,key) in directory" :key="key">
            <el-menu-item
              v-if="item.child===false"
              :index="item.path" @click="jump(item.path)">
              <i class="iconfont" v-html="item.text"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu
              v-if="item.child!==false" :index="item.path">
              <template slot="title">
                <i class="iconfont" v-html="item.text"></i><span>{{item.title}}</span>
              </template>
              <el-menu-item-group >
                <el-menu-item v-for="(Citem,Ckey) in item.child" :key="Ckey" :index="Citem.path" @click="jump(Citem.path)">
                  <i class="iconfont" v-html="Citem.text"></i><span>{{Citem.title}}</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>


        </el-menu>
      </el-scrollbar>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: "RowNav",
        data() {
            return {
                directory:[
                    {
                        title:'简述',path:"/brief",child:false,text:'&#xe681;'
                    },
                    {
                        title:"账户管理", path:"/account",text:'&#xe666;', child: [
                            {
                                title:"个人资料",
                                path:"/personalInformation",text:''
                            },   {
                                title:"修改密码",
                                path:"/changePassword",text:''
                            },   {
                                title:"管理员管理",
                                path:"/adminManagement",text:''
                            },   {
                                title:"用户管理",
                                path:"/userManagement",text:''
                            }
                        ]
                    },{
                        title:'富文本',path:"/richText",child:false
                    },{
                        title:"表格", path:"/table",text:'&#xe866;', child:[
                            {
                                title:"导出表格", path:"/exportForm",text:''
                            },{
                                title:"解析表格", path:"/uploadForm",text:''
                            }
                        ]
                    },{
                    title:'可视化',path:"/echarts",text:'&#xe91c;',child:[
                            {
                                title:"数据统计", path:"/count",text:''
                            },{
                                title:"Gallery", path:"/Gallery",text:''
                            }
                        ]
                    },{
                        title:'组件',path:"/module",text:'&#xe652;',child:[
                            {
                                title:"树形结构", path:"/treeShape",text:'&#xe69b;'
                            },{
                                title:"锚点定位", path:"/anchor",text:'&#xe62b;'
                            },{
                                title:"时间组件", path:"/timeComponent",text:'&#xe651;'
                            }
                        ]
                    }
                ],
                height: {
                    height: '500px',
                },
                active: this.$route.path
            }
        },
        methods: {
            hh() {
                this.height.height = window.innerHeight - 70 + 'px';
            },
            handleOpen(key, keyPath) {
                //console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                //console.log(key, keyPath);
            },
            jump(href) {
                if(href != this.$route.path){
                    this.$router.push(href);
                }
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
  #RowNav{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .el-menu-vertical {
      overflow: inherit;

      .iconfont {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

</style>
