<template>
  <div id="index">
     <div v-html="msg"></div>
    <RichText v-model="msg" :disabled="disabled" @onClick="onClick" ref="editor"></RichText>
  </div>
</template>

<script>
import RichText from "./publick/richText";
    export default {
        name: 'index',
        components:{
            RichText
        },
        data() {
            return {
                msg: '',
                disabled: false
            }
        },
        methods:{
            //鼠标单击的事件
            onClick(e, editor) {
                // console.log('Element clicked');
                // console.log(e);
                // console.log(editor)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
