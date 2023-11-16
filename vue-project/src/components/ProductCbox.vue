<template>
    <div style="height: 1px; width: 550px; margin: auto; background: rgb(144, 142, 142);"></div>
    <div class="center">
        <v-row no-gutters class="m-auto">
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <v-card-title>Кто из вас за это платил?</v-card-title>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <select v-model="selected" class="input">
                <option hidden disabled selected value >--Выбери друга--</option>
            <option v-for="(user, id) in DataStore.users"
            :value="user.name"
            :key="id"
            >
                {{ user.name }}
            </option>
        </select>
        </v-sheet>
      </v-col>
    </v-row>
    <v-card-title>Кто употреблял это все?</v-card-title>
            <v-row
        align="center"
        no-gutters
      >
        <v-col
          v-for="user in DataStore.users"
          :key="user.id"
        >
          <v-sheet class="pa-2 ma-2">
                       <product-users-list 
            :user="user"
             :click="click"
            @checked="AddCheked"
            @clean="ClearChecked" /> 
          </v-sheet>
        </v-col>
      </v-row>

        <div style="text-align: center; padding-bottom: 50px;">
            <my-button @click="CreateObj(), isClick()">Добавляем в заказ</my-button>
        </div>
    </div>
</template>
<script>
import ProductUsersList from './ProductUsersList.vue';
import { useDataStore } from '../store/DataStore';
import MyButton from './UI/MyButton.vue';


export default{
    name: 'product-cbox',
    props:{
        inputSum:{
            type: String,
            required: true
        }
    },
  data(){
    return{
        selected: '',
        DataStore: useDataStore(),
        CheckedNames: [],
        CheckedNamesObj: [],
        CreditObjArr1:[],
        click: false,
        credit:{
            id: '',
            who: '',
            whon: '',
            sum: ''
        }
    }
  },
    components: { ProductUsersList, MyButton },
    methods:{
        isClick(){
            this.click = !this.click
        },
        CreateObj(){
  this.CheckedNames.forEach((el)=>{
      this.credit.id = Math.random()
      this.credit.who = el
      this.credit.whon = this.selected
      this.credit.sum = this.inputSum / this.CheckedNames.length
      this.CreditObjArr1.push(this.credit)
      this.credit={
          id: '',
          who: '',
          whon: '',
          sum: ''
      }
  })
  this.DataStore.CommonDuty = this.DataStore.CommonDuty.concat(this.CreditObjArr1)
  console.log(this.CreditObjArr1)
  console.log(this.DataStore.CommonDuty)
},
AddCheked(name){
    this.CheckedNames.push(name)
  },
  ClearChecked(name){
    this.CheckedNames = this.CheckedNames.filter(p => p !== name)
  }
}
    }

</script>
<style scoped>
.pt-28{
    height: 500px;
}
.input{
    width: 250px;
    height: 40px;
    border: 1px solid grey;
    border-radius: 7px;
}
</style>