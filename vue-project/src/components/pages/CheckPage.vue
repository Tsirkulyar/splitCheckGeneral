<template>
    <v-container>
    <v-card 
    class="rounded-xl"
    style="margin-top: 70px;"
    >
        <v-card-title style="font-size:40px; text-align: center; padding-top: 70px;">
            Ну что! пора расчитаться !
        </v-card-title>
        <v-card-text style="font-size:20px; text-align: center; padding-top: 20px;">
            Ну что, накушали вы на сумму {{ DataStore.TotalSum()}} 
        </v-card-text>
        <div style="display: none;">{{ DataStore.RecountDuty() }}</div>
        <div style="display: none;">{{ DataStore.reverseDuty() }}</div>
        <credit-list/>
    </v-card>
     </v-container>
     <v-layout>
        <MyFooter/>
    </v-layout>
</template>

<script>
import { useDataStore } from '../../store/DataStore';
import CreditList from '../CreditList.vue';
import MyFooter from '../UI/MyFooter.vue';

    export default{
        components:{CreditList, MyFooter},
        name: 'CheckPage',
        data(){
            return{
                DataStore: useDataStore()
            }
        }
    }
</script>
<style>

</style>