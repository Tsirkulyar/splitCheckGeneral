<template>
    <div class=" center">
        <v-row no-gutters 
        class="items"
        align="center"
    >
    <v-col>
        <v-sheet class="pa-2 ma-2 text-right">
            <v-card-title  class="inputTool text-right" style="font-size:20px">{{ product.title }}</v-card-title>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <my-input
            label="сколько деняк"
     class="inputTool  width" 
      type="number" 
       @input="inputSum = $event.target.value"
       style="padding-top: 29px;"
       align="center"
      />
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <my-button @click="showTools"
            style="height: 56px"
            >
            ≡
     </my-button>
        </v-sheet>
      </v-col>
    </v-row>
     <div v-if="show">
        <product-cbox 
        :inputSum="inputSum"
         />
     </div>
    </div>
</template>
<script>
import MyButton from './UI/MyButton.vue';
import ProductCbox from './ProductCbox.vue';
import { useDataStore } from '../store/DataStore';
import MyInput from './UI/MyInput.vue';

    export default{
    name: 'products-tools',
    props: {
        product: {
            type: Object,
            required: true
        },

    },
    data(){
        return{
            show: false,
            DataStore :useDataStore(),
            inputSum: ''
        }
    },
    components: { MyButton, ProductCbox, MyInput },
    methods:{
        showTools(){
            this.show = !this.show
        }
    }
}
</script>
<style scoped>
.items{
    display: flex;
    align-items: center;
    
}
.width{
    width: 300px;
}
.center{
    /* display: flex ;
    justify-content: center; */
    text-align: center;
    margin: auto;
    width: 80%;
    /* display: inline-block; */
}
.pad{
    padding: 29px 10px;
}
.inputTool{
    display: inline-block;
}
</style>