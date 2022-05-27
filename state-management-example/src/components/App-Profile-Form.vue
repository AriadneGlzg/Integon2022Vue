<template>
<section class="md:w-2/3 flex flex-col p-12 items-center">
    <!-- Inputs -->
    <div class="flex flex-col">
        <label class="flex text-gray-800 mb-2" for="name">Name</label>
        <input
            id="name"
            type="text"
            name="name"
            class="border-2 border-solid border-blue-200 rounded px-2 py-1"
            v-model="name"
        />
        <div class="flex flex-col mt-2">
            <label class="flex text-gray-800 mb-2" for="occupation">Occupation</label>
            <input
                id="occupation"
                type="text"
                name="occupation"
                v-model="occupation"
                class="border-2 border-solid border-blue-200 rounded
                px-2 py-1"
            />
        </div>
        
        <div class="flex flex-col mt-2">
            <label class="flex text-gray-800 mb-2" for="organization">Organization</label>
            <input
                id="occupation"
                type="text"
                name="organization"
                v-model="organization"
                class="border-2 border-solid border-blue-200 rounded px-2 py-1"
            />
        </div>
    </div>
    <div class="flex align-center mt-12">
        <!--
        <button
            class="flex md:w-1/2 justify-center"
            type="button"
            @click="clear()" 
        >
        Clear
        </button>
        -->
        <button
            class="flex md:w-1/2 justify-center"
            type="submit"
            @click="submitForm()"
        >
        Submit
        </button>
    </div>
</section>
</template>

<script>
//import eventBus from '../event-bus';

export default {
    data() {
        return{
            name: '',
            occupation: '',
            organization: ''
        }        
    },
    created() {
        this.$store.subscribe((mutation) => {
            if (mutation.type === 'profileClear') {
                this.resetProfileForm()
            }
        })
    },    
    // mounted(){
    //     eventBus.$on('profileUpdate',this.handleProfileUpdate);
    // },
    // beforeDestroyed(){
    //     eventBus.$off('profileUpdate',this.handleProfileUpdate);
    // },
    methods: {
        submitForm() {
            // this.$emit('submit', {
            //     name: this.name,
            //     occupation: this.occupation
            // })
            // eventBus.$emit('profileUpdate',{ // esta es la forma de hacer lo de arriba con el bus de eventos
            //     name: this.name, //aqui estamos emitiendo un evento 'profileUpdate'
            //     occupation: this.occupation // los datos a mandar van en formato json por eso las {}
            //  });
            this.$store.commit('profileUpdate', {
                    name: this.name,
                    occupation: this.occupation,
                    organization: this.organization
            })
        },
        resetProfileForm() {
            this.name = '';
            this.occupation = '';
            this.organization = ''
        }        
        
        // clear() {
        // //     // rest of the clear() method
        // //     this.$emit('submit', {})
        //     eventBus.$emit('profileUpdate',{});
        //  //objeto .$accion ('evento',{data en JSON});
        // },
        // handleProfileUpdate(formData) { // con este metodo agregado, podemos ver como si se emite un evento en un componente sea cual sea padre,
        //     this.name = formData.name || '' //  hijo, hermano, todo componente que este subscrito al evento va a reaccionar a dicho evento
        //     this.occupation = formData.occupation || '' // que triggereara algun metodo propio del componente.
        // } // esa notacion podra el primero que no sea nulo, si es nulo pondra '' y si trae un nombre pondra lo que traiga el formData

    }
};
</script>
