<template>
    <div>
    <div>
    <add-products-form/>
    <div style="text-align: center;">
            <h3 v-if="DataStore.showPr">{{DataStore.scoreProducts()}}</h3>
            <div  v-else>
                <v-btn href="#/check">{{ DataStore.scoreProducts() }}</v-btn>
            </div>
    </div>     
    <products-list/>
    </div>
    <v-layout>
        <MyFooter/>
    </v-layout>
</div>
<my-dialog 
        v-model:show="DataStore.dialogVisible"
        >
            <div >{{ DataStore.textDialog }}</div>
        </my-dialog>
</template>

<script>
import AddProductsForm from '../AddProductsForm.vue';
import ProductsList from '../ProductsList.vue';
import MyButton from '../UI/MyButton.vue';
import MyFooter from '../UI/MyFooter.vue';
import MyDialog from '../UI/MyDialog.vue';
import { useDataStore } from '../../store/DataStore';
export default{
        components: {
            AddProductsForm,
            ProductsList,
            MyButton,
            MyFooter,
            MyDialog
        },
        data(){
            return{
                DataStore: useDataStore()
            }
        },
    }
</script>
<style>
</style>