<template>
    <div>
        <v-card-text style="font-size: 30px;">{{ credit.who }} должен {{ credit.whon }}: {{ Math.round(credit.sum) }}</v-card-text>
    </div>
</template>
<script>
import { useDataStore } from '../store/DataStore';
export default{
    name: 'CreditItem',
    data(){
        return{
            DataStore: useDataStore()
        }
    },
    props : {
        credit:{
            type: Object,
            required: true
        }
    }
}
</script>
