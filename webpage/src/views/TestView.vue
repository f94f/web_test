<template>
  <div class="testView body-container">
    <TestOne />
  </div>
</template>

<script>
import TestOne from '@/components/test/TestOne'

export default {
  name: "testView",
  components: { TestOne }
};
</script>

<style>
.body-container {
  background-color: #222;
  height: 100vh;
  width: 100vw;
}
</style>