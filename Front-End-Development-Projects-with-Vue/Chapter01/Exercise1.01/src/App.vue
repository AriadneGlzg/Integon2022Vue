<template>
  <div> <!--solo puede haber un elemento raiz en el template-->
      <Exercise/>
      <Mimensaje/>
  </div>
</template>

<script>
import Exercise from './components/Exercise1-01'
import Mimensaje from './components/mensaje.vue' //el nombre del componente a diferencia de en angular es el que no le ponga justo ahi en 
//en la importacion

export default {
  components: {
    Exercise,
    Mimensaje
  }
}
</script>

<style lang="scss">
@import 'styles/global';
</style>
