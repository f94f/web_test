<template>
  <div id="app">
    <div>
      <Title/>
    </div>
    <div class='float-parent-element'>
      <div class='float-child-element'>
        <div class='child_1'>
          <IntroBox/>
          <MailBox/>
        </div>
      </div>
      <div class='float-child-element'>
        <div class = 'child_2'>
          <InfoBox/>
        </div>
      </div>
    </div>
    <!-- <Sidebar/> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue'
import Title from './components/Title.vue'
import IntroBox from './components/IntroBox.vue'
import MailBox from './components/MailBox.vue'
import InfoBox from './components/InfoBox.vue'

export default {
  name: 'App',
  components: { IntroBox, Title, MailBox, InfoBox }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c5661;
}
.float-parent-element {
    width: 100%;
}
.float-child-element {
    float: left;
    width: 50%;
}
.child_1 {
    width: 80%;
    /* margin-left: 50%; */
    height: 50px;
}
.child_2 {
    width: 80%;
    margin-left: 10%;
    height: 50px;
}
</style>
