<template>
    <div>
        <p><input type="text" v-model="palabritas" @keyup="cuentaCaracteres"></p>
        <p>Has escrito {{caracteres}} caracteres</p>
    </div>
</template>

<script>
export default { 
  props: { 
  },

  beforeCreate(){ //antes de que se cree | no accesible a data, eventos metodos | no visible en DOM

  },

  created(){ // creado pero no montado | accesible a data, eventos metodos | no visible en DOM

  },
  beforeMounted(){ //ya rendereado | accesible a data, eventos metodos 

  },
  mounted(){ //ya rendereado | accesible a data, eventos metodos | visible en el DOM
    this.cuentaCaracteres();
  },
  beforeUpdated(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){

  },
  data(){ 
    return {
        caracteres: 0,
        palabritas:"TEXTO DEFAULT"
    }
  },
  methods: { 
    cuentaCaracteres: function(){
        this.caracteres= this.palabritas.length;
    }
  }
}
</script>

