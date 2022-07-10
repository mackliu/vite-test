<script setup>
import { ref } from 'vue';
import {useModal} from '../modalStore';
const title=ref('訊息視窗')
const store=useModal();

</script>

<template>
<div class="modal">
<div class="wall" v-show="store.show" @click="store.close()"></div>
<div class="box" v-show="store.show">
  <slot></slot>
</div>
</div>
</template>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.modal{
  display:flex;
  justify-content: center;
}
.wall{
  width:100vw;
  height:100vh;
  background:rgba(150,150,150,0.5);
  position:absolute;
  top:0;
  left:0;
  z-index:99;
}
.box{
  width:50%;
}
</style>
