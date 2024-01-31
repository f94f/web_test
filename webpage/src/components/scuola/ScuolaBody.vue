<template>
    <div class="scuola-body">
      <!-- <h1>{{ msg }}</h1> -->
      <img alt="Web Page logo" src="../../assets/piliLogo.png">
      <van-row gutter="20">
        <van-col class="" span="10">
          <van-row :gutter="[0, 40]">
            <van-col class="box-2" span="24">
              <h2>Bienvenivos a nuestra pagina web PAROLE IN LINGUA ITALIANA</h2>
              <p>Junto a mi marido hemos acumulado màs de 20 anios de experiencia como docentes y enseniantes de italiano como segundo idioma.</p>
              <p>Hemos formado a màs de 2000 personas acompaniandolos en su recorrido que es el idioma italiano y la adquisicion de los titulos de reconocimiento.</p>
              <p>"XX" es una joven y pekenia realidad con la cual queremos ayudar en el conocimiento de la lengua italiana y su cultura.</p>
              <p>Te invitamos a interactuar con el menù de la izquierda para entrar màs en detalle con lo que te interesa. Exàmenes, Cursos, Consejos, etc.</p>
            </van-col>
            <van-col class="box-3" span="24"></van-col>
          </van-row>
        </van-col>
        <!-- <van-col class="" span="1"></van-col> -->
        <van-col class="box-1" span="13">
          <!-- <TestOne/> -->
        </van-col>
      </van-row>
    </div>
</template>

<script>
// import TestOne from "@/components/test/TestOne.vue";

export default {
  name: "ScuolaBody",
  props: {
    msg: String,
  },
  // components: {
  //   TestOne,
  // },
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
  /* background-color: blue; */
  border: 1px solid rgb(0, 0, 0);
  height: 350px;
}
.box-3 {
  background-color: green;
  height: 400px;
}
</style>