<!-- Templates should only be responsible for mapping the state to the UI -->
<template>
  <div id="meeting-container"><h1>No esta funcionando</h1></div>
</template>

<script>
/* eslint-disable */
import JitsiMeetExternalAPI from 'lib-jitsi-meet'
//const { JitsiMeetExternalAPI } = require('lib-jitsi-meet');

export default {
  mounted() {
    const domain = 'meet.jit.si'
    const options = {
      roomName: 'your-room-name',
      parentNode: document.querySelector('#meeting-container'),
      // Additional options...
    }
    const api = new JitsiMeetExternalAPI(domain, options);
    console.log(api.getVideoQuality());
  }
}

// const { meetApp } = Vue;

// meetApp({
//   data() {
//     return {
//       message: "Hello Vue!",
//     };
//   },
// }).mount("#app");

</script>
<style scoped>
#meeting-container {
  width: 100%;
  height: 500px;
}
</style>
