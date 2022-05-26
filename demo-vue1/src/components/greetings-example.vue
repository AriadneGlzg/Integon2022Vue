<template>

  <div>
      <h1>{{ greeting }} {{ who }}</h1>
      <slot/>
  </div>
</template>
<script>
export default {
  //props: ['greeting', 'who'] aqui estan poniendo las propiedades como un arreglo
  //por lo tanto pueden ser de cualquier tipo 

  props: { //con la siguiente sintaxys podemos añadirle rquerimientos por asi decirlo a las propiedades
    greeting: {
        type: String, // el tipo
        required: true, //si es obligatoria o no
        default: 'Buen Dia' //un valor default si no se pasa nada a la prop
    },
    who: {
        type: String,
        required: true,
        default: "APG"
    }
  }
  
}
</script>