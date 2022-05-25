<template lang="pug"> <!--se tuvo que agregar el pug en el powershell con vue add pug -->
    div
        h1(class='title') {{ title }}
</template>

<script>
    export default {
        data() {
            return {
                title: 'PUG component!♥',
            }
        },
    };
</script>