<template>
  <section class="loader-section">
    <b-spinner class="loader"></b-spinner>
  </section>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
  .loader{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
</style>
