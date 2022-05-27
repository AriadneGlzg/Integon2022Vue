<template>
  <div id="app">
    <AppHeader/>
    <div class="flex flex-col md:flex-row">
      <AppProfileForm @submit="update($event)"/>
      <AppProfileDisplay :formData="formData" /> <!--formData es una prop dentro de Profile display, y un data aqui en APP.VUE-->
    </div>
  </div>
</template>

<script>
import AppHeader from './components/App-Header.vue';
import AppProfileForm from './components/App-Profile-Form.vue';
import AppProfileDisplay from './components/App-Profile-Display.vue'


export default {
  name: 'App',
  data() {
    return{
      formData:{}
    }
  },
  components: {
    AppHeader,
    AppProfileForm,
    AppProfileDisplay
  },
  methods: {
    update(formData) {
      this.formData = formData
      console.log(`evento 'submit' arroja: ${this.formData.name}, ${this.formData.occupation}`);
    }
  }
}
</script>

<style>

</style>
