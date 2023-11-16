<template>
  <v-container class="pt-16">
    <v-card 
    class="pt-8 rounded-xl" 
    bg-color="white"
    >
      <v-card-title
      class="text-center pb-6 font"
      > 
        Ну что, давай делить чек!
      </v-card-title><br/>
      <v-card-text
      class="text-center pt-8 fontSmall"
      >
        Делить чеки - реально просто))
      </v-card-text>

    <div class="pt-6 text-center pb-6" >
        <router-link :to="{ name: 'GeneralForm' }" class="btn">
          <my-button >
            жми сюда, чтобы начать
          </my-button>
        </router-link>
    </div>
    </v-card>
  </v-container>
  <v-layout>
    <MyFooter/>
  </v-layout>
</template>

<script>
import MyButton from '../UI/MyButton.vue';
import MyFooter from '../UI/MyFooter.vue';
export default{
    components: { MyButton, MyFooter },
    name: "HelloCard",
}
</script>

<style scoped>
.font{
    font-size: 40px;
}
.fontSmall{
  font-size: 20px;
}
.btn{
  color: inherit;
  text-decoration: inherit; 
}
</style>