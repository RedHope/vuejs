<template>
    <div>
        <h1>The User page</h1>
        <hr>
        <p>The loaded ID: {{id}}</p>
        <button class="btn btn-primary" @click="goHome">Go to Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push({
                path: '/'
            });
        }
    },
    data() {
        return {
            id: this.$route.params.id
        };
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id;
        }
    }
};
</script>

<style>
</style>
