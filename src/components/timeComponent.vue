<template>
  <div id="timeComponent">
    <div class="calendar">
      <el-calendar>
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <div>
            {{ data.day.split('-').slice(1).join('-') }}
            <p>{{task[data.day]}}</p>
          </div>
        </template>
      </el-calendar>
    </div>


    <div class="block">
      <span class="demonstration">选择时间:</span>
      <el-date-picker
        v-model="addTime"
        type="date"
        placeholder="选择日期时间"
        format="yyyy-MM-dd">
      </el-date-picker>
      <br/>
      <span class="demonstration">事件内容:</span>
      <el-input v-model="eventContent" placeholder="请输入内容"></el-input>
      <br/>

      <el-button type="primary" @click="addEvent()">添加事件</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "timeComponent",
        data() {
            return {
                task: {
                    "2019-09-24": 'ok',
                    "2019-10-24": 'ok',
                    "2019-10-25": "事件"
                },
                addTime: '',
                eventContent: ''
            }
        },
        methods: {
            GMTToStr(time) {
                let date = new Date(time);
                let Month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
                let today = date.getDate()  >= 10 ? date.getDate()  : "0" + date.getDate();
                let Str = date.getFullYear() + '-' +
                    Month + '-' +
                    today;
                return Str
            },
            addEvent() {
                this.addTime = this.GMTToStr(this.addTime);
                this.task[this.addTime] = this.eventContent;
                let arr = Object.keys(this.task);
                //通知数据发生了改变
                this.$set(this.task, arr.length, this.task[this.addTime]);
            }
        }
    }
</script>

<style scoped lang="less">
  #timeComponent {
    /**/

    .calendar {
      display: flex;
    }

    .el-input {
      width: 220px;
      margin: 10px 0;
    }
  }
</style>
