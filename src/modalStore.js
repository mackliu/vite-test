
import { defineStore } from 'pinia';

export const useModal=defineStore('modalState',{
    state:()=>({
        show:false,
    }),
    actions:{
        pop(){
            this.show=true
        },
        close(){
            this.show=false
        }
    }
})

