<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <quote :quote="'New Quote here'">
                    <!-- <h2 slot="title">The quote</h2> -->
                    <p slot="content">A wonderful quote</p>
                </quote>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  components: {
    Quote
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
