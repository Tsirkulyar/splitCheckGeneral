<template>
    <div>
        <add-form />
        <v-card-title class="text-center" v-if="DataStore.showUs">
            {{DataStore.scoreUser()}}
        </v-card-title>
        <div v-else class="center">
            <router-link :to="{ name: 'AddProducts' }" class="btn">
          <my-button >
            {{ DataStore.scoreUser() }}
          </my-button>
        </router-link>
            <!-- <v-btn href="#/products">{{ DataStore.scoreUser() }}</v-btn> -->
        </div>
        <user-list/>
    </div>
    <v-layout>
        <MyFooter/>
    </v-layout>
    <my-dialog v-model:show="DataStore.dialogVisible">
        <div>{{ DataStore.textDialog }}</div>
    </my-dialog>
</template>

<script>
import MyDialog from '../UI/MyDialog.vue'
import AddForm from '../AddForm.vue';
import UserList from '../UserList.vue';
import MyButton from '../UI/MyButton.vue';
import MyFooter from '../UI/MyFooter.vue';
import {useDataStore} from '../../store/DataStore';

export default{
    name:"general-form",
    components:{AddForm, UserList, MyButton, MyDialog, MyFooter},
    data(){
        return{
            DataStore: useDataStore()
        }
    }
}
</script>

<style scoped>
.center{
    text-align: center;
    padding: 30px 30px;
}
.btn{
  color: inherit;
  text-decoration: inherit; 
}
</style>