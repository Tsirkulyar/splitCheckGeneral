<template>
    <v-container >
        <v-card
         class="rounded-xl"
         bg-color="white"
         >
            <div
             class="text-center pb-10"
            >
            <div class="pt-16">
            <v-case-title class="font pb-7">
                Добавляй всех друзей!
            </v-case-title><br/>
            <v-case class="center">
                <v-case-text class="text-center font-weight-light">*советую писать имена целиком, потому что под вечер уже забудете кто есть кто</v-case-text>
            </v-case>
        </div>
    </div>
    <form @submit.prevent
    class="center"
    >
    <v-case 
    class="center pb-10">
    <!--            @input="DataStore.user.name = $event.target.value"
            :value="DataStore.user.name"  -->
        <my-input 
            label="имя"
            v-model="DataStore.user.name"
            type="text"
            plaseholder="Вводи своего друга"
        />
        <my-button @click="DataStore.AddFormCreateUser()" class="w-100">
            Добавить
        </my-button>
    </v-case>
    </form>
</v-card>
    </v-container>
</template>

<script>
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import { useDataStore } from '../store/DataStore';
export default{
    components:{MyButton, MyInput},
    name:'AddForm',
  data(){
    return{
        DataStore: useDataStore()
    }
  },
    }
</script>
<style scoped>
.text-center{
    width: 75%;
    margin: auto;
}
.center{
    text-align: center;
margin: auto;
    width: 50%;
    padding-bottom: 20px;
}
.font{
    font-size: 40px;
}
</style>