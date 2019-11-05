<template>
  <div id="PDF">
    <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
    <button @click="rotate += 90">&#x27F3;</button>
    <button @click="rotate -= 90">&#x27F2;</button>
    <button @click="$refs.pdf.print()">打印</button>
    <div v-show="false">
      <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
      <pdf ref="pdf" style="border: 1px solid red" :src="src" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event"></pdf>
    </div>
    <div>
      <el-card class="box-card" v-for="item in numPages">
        <pdf style="width: 100%" :src="src" :page="item" :rotate="rotate" @password="password"></pdf>
      </el-card>
    </div>
  </div>
</template>

<script>
    import pdf from 'vue-pdf'

    export default {
        name: "PDF",
        components:{
          pdf
        },
        data(){
            return{
                src: 'http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf',
                loadedRatio: 0,
                page: 1,
                numPages: 0,
                rotate: 0,
            }
        },
        methods:{
            password: function(updatePassword, reason) {

                updatePassword(prompt('password is "test"'));
            },
            error: function(err) {

                console.log(err);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
  #PDF{
    background-color: rgb(82, 86, 89);
    color: var(--primary-text-color);
    line-height: 154%;
    margin: 0;
    .box-card{
      width: 60%;
      display: block;
      margin: 10px auto;
    }
  }
</style>
