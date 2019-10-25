<template>
<div id="uploadForm">解析表格
  <input type="file" ref="upload" accept=".xls,.xlsx" class="outputlist_upload">
  <el-table
    id="mytable"
    :data="outputs"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      :formatter="dateFormat"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template>
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    import XLSX from 'xlsx'
    export default {
        name: "uploadForm",
        data() {
            return {
                outputs: []
            }
        },
        mounted() {
            this.$refs.upload.addEventListener('change', e => {//绑定监听表格导入事件
                this.readExcel(e);
            })
        },
        methods: {
            readExcel(e) {//表格导入
                let that = this;
                const files = e.target.files;
                console.log(files);
                if(files.length<=0){//如果没有文件名
                    return false;
                }else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
                    this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
                    return false;
                }

                const fileReader = new FileReader();
                fileReader.onload = (ev) => {
                    try {
                        const data = ev.target.result;
                        const workbook = XLSX.read(data, {
                            type: 'binary', cellDates: true, dateNF: 'yyyy/mm/dd;@'
                        });
                         const wsname = workbook.SheetNames[0];//取第一张表
                         const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname],{ raw: true });//生成json表格内容
                        that.outputs = [];//清空接收数据
                        for(let i= 0;i<ws.length;i++){
                            let sheetData = {
                                date: ws[i]["日期"],
                                name: ws[i]["姓名"],
                                province: ws[i]["省份"],
                                city: ws[i]["市区"],
                                address: ws[i]["地址"],
                                zip: ws[i]["邮编"],
                            };
                            that.outputs.push(sheetData);
                        }
                        this.$refs.upload.value = '';

                    } catch (e) {

                        return false;
                    }
                };
                fileReader.readAsBinaryString(files[0]);

            },
            handleClick(){

            },
            dateFormat(row, column){
                //时间戳序列化
                console.log(column)
                let date = row[column.property];
                console.log(date);
                if (date == undefined) {
                    return "";
                }
                date = new Date(date);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                let D = date.getDate() + ' ';
                let h = date.getHours() + ':';
                let m = date.getMinutes() + ':';
                let s = date.getSeconds();
                console.log(Y+M+D+h+m+s);
                return Y+M+D+h+m+s;
            }

        },
    }
</script>

<style scoped>

</style>
