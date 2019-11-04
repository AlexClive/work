<template>
    <div id="brief">
       技术栈：{{technologyStack}}
    </div>
</template>

<script>
    export default {
        name: "brief",
        data(){
            return{
                technologyStack:'vue、vuex、ElementUI、socket.io、tinymce（富文本）、echartsjs'
            }
        }
    }
</script>

<style scoped>

</style>

