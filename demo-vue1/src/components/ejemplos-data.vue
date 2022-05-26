<template>
<div>
    <h4>{{fullname}}</h4>
    <input v-model ="firstName" placeholder="First Name"/>
    <input v-model ="lastName" placeholder="Last Name"/>
    <div class="container">
        <input type="number" v-model="incrementOne" />
        <h3>Get input: {{ incrementOne }}</h3>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                firstName: "",
                lastName: "",
                count: -1
            };
        },
        computed: {
            fullname(){
                return `${this.firstName} ${this.lastName}`;
            },
            incrementOne: {
                // getter
                get() {
                    console.log(`se puso el valor${this.count +1}`);
                    return this.count + 1
                },
                // setter
                set(val) {
                    console.log(`se recibio el valor${val}`);
                    this.count = val - 1
                },
            },
        },
    };
</script>
<style>
    
</style>

