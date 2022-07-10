<script setup>
import {ref} from 'vue';
import modal from './modal.vue';
import {useModal} from '../modalStore';

const store=useModal();
const title="訊息視窗";

</script>
<template>
<modal v-show="store.show">
  <div class="msg-box">
    <div class="header">
      {{ title }}
    </div>
    <div class="body">

    </div>
    <div class="footer">
        <button class="btn btn-blue">確定</button>
        <button class="btn btn-yellow" @click="store.close()">取消</button>
    </div>
  </div>
</modal>
</template>
<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.msg-box{
  width:100%;
  height:20rem;
  background:white;
  border-radius:1rem;
  box-shadow:3px 3px 15px #999;
  margin-top:10%;
  position:relative;
  z-index:999;
}
.msg-box .footer{
  position: absolute;
  bottom:0.5rem;
  width:100%;
  display: flex;
  justify-content: end;
  padding:0.5rem 1rem;
}
.btn{
  padding:0.5rem 1rem;
  border-radius:0.5rem;
  border:0;
  margin:0.25rem;
  box-shadow: 0 0 5px #ccc;
}
.btn-blue{
  background:rgb(72, 135, 252);
  color:blue;
  font-size:1rem;
  font-weight: bolder;
}
.btn-yellow{
  background:rgb(248, 231, 48);
  color:rgb(141, 119, 0);
  font-size:1rem;
  font-weight: bolder;
}
</style>