<template>
    <AppModal v-model="dialog">
      <h1>Modal</h1>
      <form >
        <input
          type="text"
          v-model="forms.name"
          class="form-control my-2"
          placeholder="Name"
        />
        <input
          type="text"
          v-model="forms.price"
          class="form-control my-2"
          placeholder="Price"
        />
        <select class="form-control my-2" v-model="forms.brand">
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="redmi">Redmi</option>
        </select>
        <select class="form-control my-2" v-model="forms.group">
          <option value="laptop">Laptop</option>
          <option value="phone">Phone</option>
        </select>
        <textarea
          cols="30"
          rows="10"
          class="form-control my-2"
          v-model="forms.desc"
          placeholder="description "
        ></textarea>
        <button class="btn btn-info" @click="saveForm">Save</button>
      </form>
    </AppModal>
  </template>
  
  <script setup>
  import AppModal from "../ui/app-modal.vue";
  import Notification from "../plugins/Nutification"
  import { ref ,watch} from "vue";
  const dialog = ref(false);
  const forms = ref({
    name: "",
    price: null,
    brand: "",
    group: "",
    desc: "",
  });
  const products = ref([]);
  const openModal = (value,title) => {
    if(title=='array'){
      products.value = value
    }else if(title == 'object'){
      forms.value = {...value}
    }
    dialog.value = true;
  };
  
  watch(dialog,(value)=>{
    if(!value){
      forms.value = {}
    }
  })
  const saveForm = (e) => {
    e.preventDefault();
    if(!forms.value.id){
      products.value.push({ id: products.value.length + 1, ...forms.value });
      Notification("Product qo'shildi", "success")
    }else{
      console.log(forms.value.id, 'edit');
      Notification("Product edit qilindi", "warning")
  
    }
  
  
    dialog.value = false;
    forms.value={};
  };
  defineExpose({ openModal });
  </script>
  <style lang="scss" scoped>
  </style>