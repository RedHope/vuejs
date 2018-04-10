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
            usersArray: [],
            resource: {}
        };
    },
    methods: {
        async submit() {
            await this.resource.saveAlt(this.user);
        },
        async getData() {
            const result = await this.$http.get(`data.json`);
            this.usersArray = result.body;
        }
    },
    created() {
        const customActions = {
            saveAlt: { method: 'POST', url: 'alternative.json' }
        };
        this.resource = this.$resource('data.json', {}, customActions);
    }
};
</script>

<style>

</style>
