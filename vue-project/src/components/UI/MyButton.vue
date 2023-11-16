<template>
    <v-btn variant="outlined" class="btn">
        <slot></slot>
    </v-btn>
</template>


<script>
export default {
  name: "my-button"
}
</script>



<style>
.btn{
  border-radius: 20px;
}
</style>