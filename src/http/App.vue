<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-12">
              <h1>Http</h1>
              <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" v-model="user.username">
              </div>
              <div class="form-group">
                  <label for="mail">Mail</label>
                  <input type="email" class="form-control" v-model="user.email">
              </div>
              <button class="btn btn-primary" type="submit" @click="submit">Submit</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    };
  },
  methods: {
    async submit() {
    //   console.log('submit', this.user, ENVIRONMENT.FIREBASE_URL);
        const result = await this.$http.post(`${ENVIRONMENT.FIREBASE_URL}/data.json`, this.user);
        console.log(result);
    }
  }
};
</script>

<style>

</style>
