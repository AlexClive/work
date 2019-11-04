<template>
  <div id="uploadForm">解析表格
    <input type="file" ref="upload" accept=".xls,.xlsx" class="outputlist_upload">
    <el-table
      id="mytable"
      :data="outputs"
      :row-class-name="tableRowClassName"
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
        width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="editTable(scope.$index,scope.row)">编辑</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, outputs)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改表格数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="省份" :label-width="formLabelWidth">
          <el-select v-model="form.province" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="市区" :label-width="formLabelWidth">
          <el-select v-model="form.city" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
        <el-form-item label="邮编" :label-width="formLabelWidth">
          <el-input v-model="form.zip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="determine()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import XLSX from 'xlsx'

    export default {
        name: "uploadForm",
        data() {
            return {
                outputs: [],
                dialogFormVisible: false,
                form: {},
                formLabelWidth: '120px',
                index:''
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
                if (files.length <= 0) {//如果没有文件名
                    return false;
                } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
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
                        const wsnameArry = workbook.SheetNames;
                        that.outputs = [];//清空接收数据
                        for(let i = 0; i < wsnameArry.length; i++){
                            const wsname = wsnameArry[i];//取第一张表
                            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {raw: true});//生成json表格内容
                            for (let i = 0; i < ws.length; i++) {
                                let sheetData = {
                                    date: ws[i]["日期"],
                                    name: ws[i]["姓名"],
                                    province: ws[i]["省份"],
                                    city: ws[i]["市区"],
                                    address: ws[i]["地址"],
                                    zip: ws[i]["邮编"]
                                };
                                that.outputs.push(sheetData);
                            }
                            this.$refs.upload.value = '';
                        }
                    } catch (e) {

                        return false;
                    }
                };
                fileReader.readAsBinaryString(files[0]);

            },
            tableRowClassName({row, rowIndex}) {
                if (row.zip == undefined) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            handleClick(e) {

            },
            editTable(index,e) {
                console.log(e);
                this.dialogFormVisible = true;
                this.form = e;
                this.index = index;
            },
            dateFormat(row, column) {
                //时间戳序列化
                let date = row[column.property];
                if (date == undefined) {
                    return "";
                }
                date = new Date(date);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1) + ' ';
                let h = date.getHours() + ':';
                let m = date.getMinutes() + ':';
                let s = date.getSeconds();
                return Y + M + D + h + m + s;
            },
            determine(){
                this.dialogFormVisible = false;
                this.outputs[this.index] = this.form
            }

        },
    }
</script>

<style>
  .el-table .warning-row {
    background: #f56c6c;
  }

  .el-table .success-row {
    background: #ffffff;
  }
</style>
