<template>
    <v-container>

            <v-card v-for="product in DataStore.products" :key="product.id"  class="rounded-xl mt-10 mb-10">
        <ProductsTools :product="product"/>
    </v-card>
    </v-container>
</template>
<script>
import ProductsTools from './ProductsTools.vue';
import { useDataStore } from '../store/DataStore';

    export default{
    name: 'products-list',
    components: { ProductsTools },

        data(){
            return{
                DataStore: useDataStore()
            }
        }
    }

</script>
<style>
</style>