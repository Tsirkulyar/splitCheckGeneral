<template>
  <div class="footer">
    <MyWave/>
  </div>
</template>

<script>
import MyWave from './MyWave.vue';
export default {
    name: "MyFooter",
    components: { MyWave }
}
</script>

<style>
.footer{
  margin-bottom: -50px;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100px;
  margin-top: 8%;
}
</style>