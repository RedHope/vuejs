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
              <hr>
              <button class="btn btn-primary" @click="getData">Get Data</button>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item" v-for="(user, key) in usersArray" :key="key">{{user.username}} - {{user.email}}</li>
              </ul>
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
      },
      usersArray: []
    };
  },
  methods: {
    async submit() {
      //   console.log('submit', this.user, ENVIRONMENT.FIREBASE_URL);
      const result = await this.$http.post(``, this.user);
    },
    async getData() {
      const result = await this.$http.get(``);
      this.usersArray = result.body;
    }
  }
};
</script>

<style>

</style>
