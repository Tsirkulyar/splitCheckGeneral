<template>
    <h1 value="{{ user.name }}" selected>{{ user.name }}</h1>
</template>
<script>
export default{
    name: 'products-select',
    props:{
        user:{
            type: Object,
            required: true
        }
    },
}
</script>
<style scoped>

</style>