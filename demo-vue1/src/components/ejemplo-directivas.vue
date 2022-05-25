<template>
    <div>
        <ul> <!--debe seguir poniendose la llave que en este caso seria el index i -->
            <li v-for="(p,i) in pasatiempos" :key="i"> <!--nuevamente (p,i) pueden tener el nombre que sea, p seria el elemento del arreglo y la i seria solo el index o el identifiador para el key-->
                {{i+1}}.{{p}}
            </li>
            <li v-for="(p,f) in personas" :key="`loop-2${f}`"> <!--nuevamente (p,i) pueden tener el nombre que sea, p seria el elemento del arreglo y la i seria solo el index o el identifiador para el key-->
                Nombre: {{p.nombre}} Pasatiempo: {{p.pasatiempo}}
            </li>
        </ul>

        <ul>
            <li v-for="n in 5" :key="n"> <!--:key="n" es parte de la sintaxis cada elemento necesita un indentificador en este caso el identificador en la n-->
                {{n}} <!--no puede haber elementos dinamicos sin un identificador unico que va a ser el key-->
            </li>
            <!-- si quisiera anidar otro for necesitaria tener otra key, esa notacion es necesario si haba mas de un ciclo en un mismo elemento en este caso el elemento es el ul-->
            <li v-for="n in 5" :key="'loop-2'+n"> 
                {{n}} 
            </li>
            <li v-for="n in 5" :key="`loop-3-${n}`"> <!--se prefiere usar los backticks para evitar la concatenacion-->
                {{n}} 
            </li>
        </ul>
             


        <section>
            <div class="form">
                <label>
                    Name
                    <input type="text" v-model="name" />
                </label>
                <label>
                    Preferred javascript style
                    <select name="language" v-model="language">
                        <option value="Javascript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="CoffeeScript">CoffeeScript</option>
                        <option value="Dart">Dart</option>
                    </select>
                </label>
            </div>
            <ul class="overview">
                <li><strong>Overview</strong></li>
                <li>Name: {{ name }}</li>
                <li>Preference: {{ language }}</li>
            </ul>
        </section>

        <h1>{{text}}</h1> <!-- v-once sirve para bindear un valor solo una vez sirve con el vtext y sin el vtext como ahi <h1 v-once>{{variable}}</h1>-->
        <h1 v-if="false" v-once v-text="text">Loading...</h1>
        <h2 v-else-if="false" v-html="html"></h2>
        <!--es parte de la sintaxis el ":" antes de las propiedades, esto es para poder bindear las propiedades al objeto 
        (en este caso ese el objeto link) y que lea lo que hay ahi, si no lo va a tomar literal como texto y no como una 
        propiedad bindeada a un objeto.
        Sirve para cualquier elemento html y sus propiedades-->
        <a v-else
            :href="link.url"
            :target="link.target"
            :tabindex="link.tabindex"
            v-text="link.title"
        ></a>
        <button @click="actualizaTexto">Click Me♥</button>
        <input type="number" v-model="cantidad"/>
        <p v-if="cantidad>100">{{cantidad}} es mayor que 100</p>
        <p v-else-if="cantidad<100">{{cantidad}} es menor que 100</p>
        <p v-else>Los numeros son iguales</p>

    </div>
        
</template>
<script>
    export default {
        data() {
            return {
                // v-text
                personas:[{"nombre": "Paola", "pasatiempo":"pixel-art"},{nombre: "Abel", pasatiempo:"video-juegos"},{nombre: "Paty", pasatiempo:"Manualidades"}],
                pasatiempos: ["bordado","baile","dibujo","videojuegos","pixel-art","lectura"],
                name: "",
                language:"",
                cantidad:0,
                text: 'Directive text ☻',
                html: 'Stylise</br>HTML in<br/><b>your data</b>',
                link: {
                    url: "https://es.wikipedia.org/wiki/Hyuna",
                    target: "_blank",
                    tabindex: "",
                    title: "Best Biography♥"
                }
            }
        },
        methods:{
            actualizaTexto: function(){
                console.log("se apreto el boton ☻")
                this.text="☺ nuevo texto";
            }
        }
    }
</script>

<style lang="scss">
    h2 {
        margin: 40px 0 0;
        font-weight: normal;
    }
    .form {
        display: flex;
        justify-content: space-evenly;
        max-width: 800px;
        padding: 40px 20px;
        border-radius: 10px;
        margin: 0 auto;
        background: #ececec;
    }
    .overview {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 300px;
        margin: 40px auto;
        padding: 40px 20px;
        border-radius: 10px;
        border: 1px solid #ececec;
        > li {
            list-style: none;
            + li {
            margin-top: 20px;
            }
        }
}
</style>