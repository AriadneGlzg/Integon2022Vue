<template>
    <div>
        <p>{{ '7 char' | ellipsis }}</p>
        <p>{{ '14 characters' | ellipsis }}</p>
        <p>{{ 'More than 14 characters' | ellipsis }}</p>
        <p>{{ null | ellipsis }}</p>
        <p>{{ 55 | ellipsis }}</p>
    </div>
</template>

<script>
    export default {
        filters: {                
                ellipsis(value) {
                    if (!value) return //si es nulo entonces solo se sale del filter
                    return value.length > 14 ? `${value.slice(0, 11)}...` : value //aqui hay un ternario, value es la variable donde se guarda lo que estamos filtreando
                    //si lo que se mete es mayor de 14 entonces se corta hasta el 11 caracter y se agrega el ...
            }
        }
    }
</script>