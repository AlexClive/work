<template>
    <div id="treeShape">
      <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    export default {
        name: "treeShape",
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3'
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    }
</script>

<style lang="less">
  #treeShape{
    .el-tree-node__expand-icon.expanded {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    .el-icon-caret-right:before {
      content: "\e6d9";
      font-size: 18px;
      border: 1px solid #cccccc;
    }
    .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
      content: "\e6d8";
      font-size: 18px;
      border: 1px solid #cccccc;
    }
    .el-tree-node__expand-icon.is-leaf:before{
      border: 0;
    }
  }

</style>
