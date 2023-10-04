<template>
    <section class="main">
      <div class="sidebar_left">
        <Sidebar :items="sidebar_items" />
      </div>
      <div class="sidebar_right">
          <router-view></router-view>
      </div>
    </section>
  </template>
  
  <script setup>
  import Sidebar from "@/components/layout/sidebar.vue";
  import { ref } from "vue";
  
  const sidebar_items = ref([
    { id: 1, title: "Product", path: "/products" },
   
  ]);
  </script>
  
  <style lang="scss" scoped>
  .main {
    border: 2px solid green;
    width: 100%;
    display: flex;
  }
  .sidebar_left {
    width: 300px;
    height: 100vh;
  }
  .sidebar_right{
    width: calc(100% - 300px);
  }
  
  </style>