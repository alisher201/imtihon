<template>
    <AppModal v-model="dialog">
        <h1 v-if="!forms.id">Add Country</h1>
        <h1 v-else>Edit Country</h1>
        <form >
            <input type="text" v-model="forms.name" class="form-control my-2" placeholder="Name">
            <input type="text" v-model="forms.brand" class="form-control my-2" placeholder="brand">
            <input type="text" v-model="forms.group" class="form-control my-2" placeholder="group">
            <input type="number" v-model="forms.price" class="form-control my-2" placeholder="price">
            <input type="number" v-model="forms.arrival_price" class="form-control my-2" placeholder="arrival_price">
            <input type="number" v-model="forms.selling_price" class="form-control my-2" placeholder="selling_price">
            <input type="text" v-model="forms.description" class="form-control my-2" placeholder="description   ">

            <button class="btn btn-info" @click="save">save</button>
        </form>
    </AppModal>
</template>

<script setup>
import AppModal from '../ui/app-modal.vue'
import {ref,watch} from 'vue'
import Notification from '../../plugins/Nutification'
import http from '../../plugins/api'
const dialog = ref(false)

const forms = ref({
    name:"",
    brand:"",
    group:"",
    price: null,
    arrival_price:null,
    selling_price:null,
    description:""
});
watch(dialog,(value)=>{
    if(!value) {
        forms.value = {};
    }
});
const openModal = (value) => {
    if(value) forms.value = {...value}
    dialog.value = true
    
}
const save = (e)=>{
    e.preventDefault()
    try{
        if(!forms.value._id){
            http.post("/api/products/add",{
                name:forms.value.name,
                brand:forms.value.brand,
                group:forms.value.group,
                price:forms.value.price,
                arrival_price:forms.value.arrival_price,
                selling_price:forms.value.selling_price,
                description:forms.value.description
                
            }).then(res=>{
                console.log('salomlar 11');

                console.log(res);  
                location.reload()  

            }).catch(err => console.log("Err",err))
        }else{
            http.patch(`/api/products/update/${forms.value._id}`,{
                name:forms.value.name,
                brand:forms.value.brand,
                group:forms.value.group,
                price:forms.value.price,
                arrival_price:forms.value.arrival_price,
                selling_price:forms.value.selling_price,
                description:forms.value.description
            }).then(res=>{
                console.log(res);
                location.reload()
            }).catch(err => console.log(err))
        }
    }catch(err){
        console.log("+++", err);
    }
}
defineExpose({openModal})
</script>

<style lang="scss" scoped>

</style>