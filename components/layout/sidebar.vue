<template>
    <div class="sidebar">
      <router-link
        class="sidebar_link" :to="item.path" v-for="(item, index) in items" :key="index">{{ item.title }}</router-link
      >
      <!-- <h1>da</h1> -->
      <!-- <router-link dlass="sidebar_link" :to="item.path" v-for="(item,index) in items" :key="index">{{item.title}}</router-link> -->
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    items: {
      type: Array,
    },
  });  
  </script>
  
  <style lang="scss" scoped>
  $color: #000016;
  $color1: #ffff;
  .sidebar {
    width: 100%;
    height: 100%;
    background-color: $color;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .sidebar_link {
      width: 100%;
      padding: 10px 15px;
      text-decoration: none;
      border-radius: 5px;
      background-color: $color1;
      color: $color;
    }
  }
  </style>