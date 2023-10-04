<template>
  <div class="users">
    <div class="users_item">
      <div class="users_item-table">
        <Apptable :headers="headers" :body="product">
          <template #body_id="{ item }">
            <div>
              <span>{{ item._id }}</span>
            </div>
          </template>
          <template #body_edit="{item}">
            <div>
              <button @click="editItem(item)"
                style="background-color:rgb(241, 250, 78) :70px;color;border-radius: 10px;border:none"
              >
                edit
              </button>
            </div>
          </template>
          <template #body_delete="{ item }">
            <div>
              <button @click="deleteItem(item._id)"
                style="background-color:rgb(241, 250, 78);padding:7px;width:70px;color;border-radius: 10px;border:none"
              >
                delete
              </button>
            </div>
          </template>
        </Apptable>
        <countries ref="countries_modal"/>
        <button class="btn btn-success" @click="createItem">create countries</button> 
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import Apptable from '../../components/ui/app-table.vue'
import { ref } from 'vue'
import axios from 'axios'
import http from '../../plugins/api'
import countries from '../../components/pages/countries.vue'
const product = ref([])
const countries_modal = ref()


const headers = ref([
  { title: 'T/R', value: 'id' },
  { title: 'Name', value: 'name' },
  { title: 'Brand', value: 'brand' },
  { title: 'Group', value: 'group' },
  { title: 'Price', value: 'price' },
  { title: 'arrival_price', value: 'arrival_price' },
  { title: 'selling_price', value: 'selling_price' },
  { title: 'description', value: 'description' },
  { title: 'Edit', value: 'edit' },
  { title: 'Delete', value: 'delete' }
])

const getUser = () => {
  http
    .get('/api/products')
    .then((res) => {
      product.value = res.data.products
      console.log('asdfdgf')
    })
    .catch((err) => {
      console.log(err)
    })
}
getUser()


const createItem = () =>{
    countries_modal.value.openModal()
}
const editItem = (item) =>{
    countries_modal.value.openModal(item)
}
const deleteItem = (id) =>{
  console.log(id);
  http.delete(`api/products/${id}`).then(() => {
    location.reload()
  }).catch(err => console.log(err))
}
</script>
  
  <style >
</style>