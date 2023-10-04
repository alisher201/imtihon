<template>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in headers" :key="index">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in body" :key="index">
          <td v-for="(bodyInHeader, bodyInIndex) in headers" :key="bodyInIndex">
            <slot :name="`body_${bodyInHeader.value}`" :item="item">
              {{ item[bodyInHeader.value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  const props = defineProps({
    headers: {
      type: Array,
    },
    body: {
      type: Array,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  table {
    width: 100%;
    padding: 10px;
    border-collapse: separate;
    border-spacing: 0;
    overflow-x: auto;
    thead {
      background-color: #1073a9;
      
      th {
        border-top: 1px solid #c5d2d6;
        padding: 10px 36px;
        font-size: 14px;
      border: 2px solid red;
  
      }
    }
    tbody {
      background-color: hwb(30 96% 3%);
      tr{
          // background-color: rgb(228, 111, 111);    
      
  
  
          td{
              border-radius: 10px solid green;
              padding: 10px;
              color: #1073a9;
              margin-top: 20px;
  
          }
      }
    }
  }
  </style>