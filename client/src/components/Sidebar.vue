<template>
  <div class="topbar">
    <a class="active" href="#home">Home</a>
    <a href="#about" @click="changeContext('about')">About</a>
    <a href="#info" @click="changeContext('info')">Info</a>
    <a href="#contact" @click="changeContext('contact')">Contact</a>
  </div>
</template>

<style>
/* Add a black background color to the top navigation */
.topbar {
  height: 180px; /* Height de la barra */
  width: 160px; /* Width de la batta */
  position: fixed; /* Fixeo la posicion de la barra que siga el scroll */
  z-index: 10; /* ??? */
  top: 200px; /* separacion con la parte alta de la pagina */
  left: 10px; /* separacion con la parte izq de la pagina */
  background-color: #111; /* Color - Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px; /* separacion con la parte alta de la misma barra */
}

/* Style the links inside the navigation bar */
.topbar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* Change the color of links on hover */
.topbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topbar a.active {
  background-color: #04AA6D;
  color: white;
}
</style>

<script>
// console.log('hello script setup')
// document.getElementById('test').onclick = function () { alert('invalid input') }

// function nombre () { alert('invalid input') }

// document.on('click', 'a', function () {
//   if ((this).attr('targetLink')) { alert('You are going to the following page: ') }
// })

export default {
  data () {
    let arreglo = 'home'
    return {
      arreglo
    }
  },
  methods: {
    // changeContext: function (event, id) { this.arreglo = id }
    changeContext () { this.$emit('change-context'); console.log('clickeanndo') }
  }
  // mounted () {
  //   document.getElementById('test').onclick = function () { alert('invalid input') }
  //   $(document).ready(function () { console.log('ready!') })
  // }

}
</script>
