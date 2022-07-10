<script setup>
import {ref} from 'vue';
import MsgBox from './components/MsgBox.vue'

const emit=defineEmits(['close'])

const show=ref(false)

const pop=()=>{
    show.value=true
}

const close=()=>{
    show.value=false;
}

</script>


<template>
  <button @click="pop()">彈出視窗</button>
  <MsgBox :show="show" @close="close" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
