<template>
    <div class="scuola-body">
      <h1>{{ msg }}</h1>
      <van-row gutter="20">
        <van-col class="" span="10">
          <van-row :gutter="[0, 40]">
            <van-col class="box-2" span="24"></van-col>
            <van-col class="box-3" span="24"></van-col>
          </van-row>
        </van-col>
        <!-- <van-col class="" span="1"></van-col> -->
        <van-col class="box-1" span="13"></van-col>
      </van-row>
    </div>
</template>

<script>
export default {
  name: "ScuolaBody",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.scuola-body{
  padding: 0px 50px;
}
.box {
  background-color: orange;
  height: 90vh;
}
.box-1 {
  background-color: violet;
  height: 82vh;
}
.box-2 {
  background-color: blue;
  height: 350px;
}
.box-3 {
  background-color: green;
  height: 400px;
}
</style>