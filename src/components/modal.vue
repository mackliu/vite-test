<script setup>
import { ref } from 'vue'
const title=ref('訊息視窗')

const props=defineProps({show:false});
const emit=defineEmits(['close']);

const close=()=>{
  emit('close');
}

</script>

<template>
<div class="modal">
<div class="wall" v-show="show" @click="close"></div>
<div class="box" v-show="show">
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
