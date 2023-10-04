<template>
    <transition name="app-transation">
      <slot></slot>
    </transition>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .app-transation-enter-active,
  .app-transation-leave-active {
    transition: opacity 0.5s ease;
  }
  .app-transation-enter-from,
  .app-transation-leave-to {
    opacity: 0;
  }
  </style>