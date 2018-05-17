<template>
  <div>
    <h3>Some user details</h3>
    <p>User loaded: {{$route.params.id}}</p>
    <router-link :to="route" class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
export default {
    computed: {
        route() {
            return `/user/${this.$route.params.id}/edit`;
        }
    }
};
</script>

<style>
</style>
