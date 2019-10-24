<template>
  <div id="app">
    <Header v-show="isHidden != this.$store.state.isHidden"></Header>
    <RowNav v-show="isHidden != this.$store.state.isHidden"></RowNav>
    <el-col :span="21">
    <router-view/>
    </el-col>
  </div>
</template>

<script>
    import Header from "./components/publick/header";
    import RowNav from "./components/publick/RowNav";

    export default {
        name: 'App',
        components: {
            Header,
            RowNav
        },
        data() {
            return {
                isHidden: false
            }
        },
        created() {
            if (sessionStorage.getItem("isHidden")) {
                this.$store.commit('Hidden',true);
            }
        }
    }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
