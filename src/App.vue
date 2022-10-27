<script setup>
import {ref} from 'vue';
import MsgBox from './components/MsgBox.vue';
import {useModal} from './modalStore';

const store=useModal();


</script>


<template>
  <h1>彈出視窗測試</h1>
  <button @click="store.pop()">彈出視窗</button>
  <MsgBox v-show="store.show"/>
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
