<template>
    <div class="container">
        <h1>Async fetch</h1>
        <button @click="getApi()">Learn something profound</button>
        <blockquote v-if="quote">{{ quote }}</blockquote>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                axiosResponse:{}
            }
        },
        methods: {
            async getApi() {
                return axios.get('https://api.adviceslip.com/advice').
                    then((response) => {
                    console.log(response)
                    this.axiosResponse =response.data;
                })
            },
        },
        computed: {
            quote() {
                return this.axiosResponse && this.axiosResponse.slipcd
                    ? this.axiosResponse.slip.advice
                    : null
            },
        }
    }
 </script>   
