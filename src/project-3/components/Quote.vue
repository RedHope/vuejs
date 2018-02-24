<template>
  <div>
      <div class="title">
          <slot name="title">Default content renders here</slot>
          <span v-translate>Inner</span>
      </div>
      <div class="content">
          <slot name="content"></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        quote: String
    }
}
</script>

<style scoped>
    div {
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    .title {
        font-style: italic;
    }
</style>
