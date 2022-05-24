<template lang="pug">
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