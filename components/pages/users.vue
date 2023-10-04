<template>
    <AppModal v-model="dialog">
        <h1 v-if="!forms.id">Add Country</h1>
        <h1 v-else>Edit Country</h1>
        <form >
            <input type="text" v-model="forms.name" class="form-control my-2" placeholder="Name">
            <input type="text" v-model="forms.surname" class="form-control my-2" placeholder="surname">
            <input type="number" v-model="forms.age" class="form-control my-2" placeholder="age">
            <input type="boolean" v-model="forms.is_diploma" class="form-control my-2" placeholder="isdiploma">
            <input type="text" v-model="forms.address" class="form-control my-2" placeholder="adress">

            <button class="btn btn-info" @click="save">save</button>
        </form>
    </AppModal>
</template>

<script setup>
import AppModal from '../ui/app-modal.vue'
import {ref,watch} from 'vue'
import Natification from '../../plugins/Nutification'
import http from '../../plugins/api'
const dialog = ref(false)

const forms = ref({
    name:"",
    surname:"",
    age:null,
    is_diploma:false,
    address:"",
});
watch(dialog,(value)=>{
    if(!value) {
        forms.value = {};
    }
});
const openModal1 = (value) => {
    if(value) forms.value = {...value}
    dialog.value = true
    
}
const save = (e)=>{
    e.preventDefault()
    try{
        if(!forms.value._id){
                console.log(forms.value);

            http.post("/api/users/add",{
                name:forms.value.name,
                surname:forms.value.surname,
                age:forms.value.age,
                is_diploma:forms.value.is_diploma,
                address:forms.value.address,

            }).then(res=>{
                console.log('salomlar 11');

                console.log(res);

                location.reload();

                 Natification("users add")


            }).catch(err => console.log("Err",err))
        }else{
            http.patch(`/api/users/update/${forms.value._id}`,{
                name:forms.value.name,
                surname:forms.value.surname,
                age:forms.value.age,
                is_diploma:forms.value.is_diploma,
                address:forms.value.address,
            }).then(res=>{
                location.reload();

                console.log(res);
            })
        }
    }catch(err){
        console.log("+++", err);
    }
}
defineExpose({openModal1})
</script>

<style lang="scss" scoped>

</style>