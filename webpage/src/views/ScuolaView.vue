<template>
  <div class="scuola">
    <h3>Installed CLI Plugins</h3>
    <Scuola msg="Benvenuti" />
  </div>
</template>

<script>
import Scuola from "@/components/scuola/ScuolaBody.vue";

export default {
  name: "ScuolaView",
  components: {
    Scuola,
  },
};
</script>

<style></style>
