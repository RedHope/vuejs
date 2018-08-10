<template>
    <div>
        <h1>The User page</h1>
        <hr>
        <p>The loaded ID:</p>
        <button class="btn btn-primary" @click="goHome">Go to Home</button>
        <router-view></router-view>
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
    }
};
</script>

<style>
</style>
