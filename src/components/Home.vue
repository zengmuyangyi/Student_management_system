<template>
  <div class="home">
    <Header/>
    <el-container class="content">
      <el-container>
        <Menu/>
        <el-container>
          <el-main>
            <Breadcrumb/>
            <div class="cont">
              <router-view></router-view>
            </div>
          </el-main>
          <el-footer><Footer/></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from './commom/Header.vue';
  import Footer from './commom/Footer.vue';
  import Menu from './commom/Menu.vue';
  import Breadcrumb from './commom/Breadcrumb.vue'
  export default {
    name: 'Home',
    components:{Header,Footer,Menu,Breadcrumb}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home{
  width: 100%;
  height: 100%;
  .content{
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont{
      margin: 20px 0;
    }
  }
}
</style>
