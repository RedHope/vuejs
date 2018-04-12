<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-12">
              <h1>Routing</h1>
              <hr>
              <Header/>
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  components: {
    Header
  }
};
</script>

<style>

</style>
