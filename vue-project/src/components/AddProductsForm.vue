<template>
    <v-container>
            <v-card
            style="margin-top: 70px"
        class="
        rounded-xl
        center
        "
         bg-color="white"
         >
         <v-card-title class="pt-10">Давай добавлять продукты!</v-card-title>
         <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <MyInput
            label="Заказы"
            v-model="DataStore.product.title"
            type="text"
            placeholder="«Ну что я могу предложить вам, господа»(с)"
            class="text-right"
            />  
        </v-sheet>
      </v-col>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
            <my-button @click="DataStore.createProducts()" 
            style="height: 56px;"
            >
                берём!
            </my-button>
        </v-sheet>
      </v-col>
    </v-row>
        </v-card>
        </v-container>

</template>
<script>
import { useDataStore } from '../store/DataStore';
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
    export default{
    name: 'add-products-form',
    components: { MyButton, MyInput },
    data(){
        return{
            DataStore: useDataStore()
            }
        },
    
    methods:{

    }
    }
</script>
<style scoped>
.center{
    text-align: center;
}
</style>