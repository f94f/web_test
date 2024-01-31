<template>
  <div class="scuola">
    <van-row :gutter="[0, 5]" justify="center">
      <van-col call="logo_box" span="100">
        <LogoBox/>
      </van-col>
      <van-col class="" span="11">
        <van-row :gutter="[0, 5]">
          <van-col class="box-2" span="24">
            <IntroBox/>
          </van-col>
          <van-col class="box-3" span="24">
            <ContactBox/>
          </van-col>
        </van-row>
      </van-col>
      <van-col class="box-1" span="11" offset="1">
        <!-- <TestOne/> -->
      </van-col>
    </van-row>
  </div>
</template>

<script>
import IntroBox from "@/components/scuola/IntroBox.vue";
import LogoBox from "@/components/scuola/LogoBox.vue";
import ContactBox from "@/components/scuola/ContactBox.vue";
// import TestOne from "@/componentsw/test/TestOne.vue";

export default {
  name: "ScuolaView",
  components: {
    IntroBox, LogoBox, ContactBox
  },
};
</script>

<style scoped>
  .scuola {
    background-color: #ddd4ba;
  }
/* .scuola-body{
  padding: 0px 50px;
}
.box {
  background-color: orange;
  height: 90vh;
} */
.box-1 {
  background-color: white;
  height: 82vh;
  border: 1px solid rgb(0, 0, 0);
}
.box-2 {
  /* background-color: blue; */
  /* border: 1px solid rgb(0, 0, 0); */
  height: 350px;
}
.box-3 {
  border: 1px solid rgb(0, 0, 0);
  height: 350px;
}
</style>
