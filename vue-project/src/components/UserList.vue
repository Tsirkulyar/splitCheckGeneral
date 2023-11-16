<template>
    <v-container>

    <div 
        class="
        pb-20
        "
     v-for="user in DataStore.users"
      :key="user.id"
      >
        <user-item 
        :user="user" 
        />
    </div>
<!-- </v-card> -->
    </v-container>
</template>
<script>
    import UserItem from './UserItem.vue';
import {useDataStore} from '../store/DataStore';

export default{
    components: {UserItem},
    name: 'UserList',
        data(){
            return{
                DataStore : useDataStore()
            }
        }
    }
</script>
<style scoped>
.pb-20{
    padding-bottom: 30px;
}
</style>