<template>
    <div class="users">
      <div class="users_item">
        <div class="users_item-table">
          <Apptable :headers="headers" :body="users">
            <!-- <template #body_company="{ item }">
              <div>
                  <span>{{ item.company.name }}</span>
              </div>
            </template> -->
            <template #body_is_diploma="{ item }">
              <div>
                  <span>{{ item.is_diploma ? 'yes' : 'no' }}</span>
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
          <user ref="countries_modal"/>
        <button class="btn btn-success" @click="createItem">create countries</button> 
        </div>
      </div>
    </div>  
  </template>
  
  <script setup>
  import user from '../../components/pages/users.vue'
  import Apptable from "../../components/ui/app-table.vue";
  import { ref } from "vue";
import Notification from '../../plugins/Nutification'

  import http from '../../plugins/api'
  const users = ref([]);
  const countries_modal = ref()

  const headers = ref([
    { title: "Name", value: "name" },
    { title: "Surname", value: "surname" },
    { title: "Age", value: "age" },
    { title: "Is_diploma", value: "is_diploma" },
    { title: "Address", value: "address" },
    {title:"Edit", value: "edit" },
    {title:"Delete", value: "delete"}
  ]);
  
  const getUser = () => {
    http
      .get("/api/users")
      .then((res) => {
        console.log(res.data);

        users.value = res.data.users
        // location.reload();
        Notification()
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
  getUser()
  const createItem = () =>{
    countries_modal.value.openModal1()
}
const editItem = (item) =>{
    countries_modal.value.openModal1(item)
}
const deleteItem = (id) =>{
  console.log(id);
  http.delete(`api/users/${id}`).then(() => {
    location.reload()
  }).catch(err => console.log(err))
}
  </script>
  
  <style >
  
  </style>