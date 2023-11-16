<template>
    <div class="inputTool">
        <input 
        type="checkbox" 
        class="bord" 
        @change="AddPerson" 
        v-model="checked" 
        label={{user.name}}
        />
        <h4>{{ user.name }}</h4>
    </div> 
</template>

<script>
import {useDataStore} from '../store/DataStore.js'
export default{
    data(){
        return{
            checked: false,
            DataStore: useDataStore()
        }
    },
    name: 'product-user-list',
    props:{
        user:{
            type: Object,
            required: true
        },
        click: {
            type: Boolean,
            required: true
        }
    },
     methods:{
        AddPerson(){
            if(this.checked == true){
                this.$emit('checked', this.user.name)
            }else{
                this.$emit('clean', this.user.name)
            }
},
     }
}
</script>

<style scoped>
.bord{
    border: 2px solid grey
}
.bord{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: greenyellow;
    color: greenyellow;
}
</style>