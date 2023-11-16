<template>
  <v-card class="pt-8 pb-8
        rounded-xl"
        bg-color="white"
        >
    <v-row no-gutters
    
    >
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-card-title class="font text-right">{{user.name}}</v-card-title>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
              <my-button
        @click="DataStore.removeUser(user)"
        >
          удаляй этого типа
        </my-button>
        </v-sheet>
      </v-col>
    </v-row>
      </v-card>
</template>
<script>
import MyButton from './UI/MyButton.vue';
import {useDataStore} from '../store/DataStore'
    export default{
      components:{MyButton},
      name:'UserItem',
      props:{
            user:{
                type: Object,
                required: true
            }
        }, 
        data(){
          return{
            DataStore: useDataStore()
          }
        }

  }
</script>
<style scoped>
.font{
    font-size: 40px;
}

</style>