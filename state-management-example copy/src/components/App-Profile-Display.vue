<template>
    <section class="md:w-1/3 flex flex-col p-12">
    <!-- Profile Card -->
        <h3 class="font-bold font-lg">{{ formData.name }}</h3>
        <p class="mt-2">{{ formData.occupation }}</p>
    </section>
</template>

<script>
import eventBus from '../event-bus'; // se importa el bus de eventos
export default {
    mounted(){ // nos suscribimos al evento 'profileUpdate', ponemos el metodo que se va a triggerear cuando pase el evento
        eventBus.$on('profileUpdate', this.update);
    },
    beforeDestroy(){
        eventBus.$off('profileUpdate');
        //aqui le digo de que evento me estoy desuscribiendo
    },
    data(){
        return{
            formData: {} //formData antes era un prop para cuando la comunicacion entre display y form se
        }//hacia por medio del padre, ahora sera un data
    },
    props:{ // se quito esta prop porque ya no se necesita con el bus de eventos
        // formData:{
        //     type: Object,
        //     default(){
        //         return {};
        //     },
        // },
    },
    methods: {
        update(formData){
            this.formData=formData; //simplemente updateamos cuando ocurra el evento
        },
    }
};
</script>
