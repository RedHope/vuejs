<template>
    <div>
         {{message}}

        <health-bar></health-bar>
    </div>
</template>


<script>
import Vue from "vue";
import HealthBar from "./HealthBar.vue";

export default {
    name: 'app',
    data() {
        return {
            message: 'Hello Vue'
        }
    },
    components: {
        HealthBar
    }
}
</script>
