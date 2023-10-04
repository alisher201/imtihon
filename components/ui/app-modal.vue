<template>
    <div class="app-modal" :class="{ 'app-modal-show': modelValue }">
      <app-transation>
        <div v-if="modelValue" class="app-modal_body">
          <slot></slot>
        </div>
      </app-transation>
    </div>
    <app-transation>
      <span
        @click="$emit('update:modelValue', false)"
        v-if="modelValue"
        class="app-modal-shadow"
      >
      </span>
    </app-transation>
  </template>
  
  <script setup>
  import appTransation from "../ui/app-transation.vue";
  const props = defineProps({
    modelValue: { type: Boolean, default: false },
    width: {
      type: String,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .app-modal{
      position: fixed;
      transform: translate(-50%, -50%);
      left:50%;
      width:50%;
      max-height: 600px;
      top: 50%;
      background-color: white;
      z-index: -1;
      opacity: 0;
      overflow: auto;
      border-radius: 0.5rem;
  }
  .app-modal-show{
      opacity:1;
      z-index:100;
  }
  ::-webkit-scrollbar{
      display: none;
  }
  .app-modal_body{
      padding: 20px;
  }
  .app-modal-shadow{
      background-color: rgb(0,0,0,0.5);
      position:absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
  }
  @media(max-width:990px){
      .app-modal{
          width: 70%;
      }
  }
  @media(max-width:768px){
      .app-modal{
          width: 80%;
      }
  }
  @media(max-width:576px){
      .app-modal{
          width: 90%;
      }
  }
  </style>