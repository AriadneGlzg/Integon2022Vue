<template>
    <div>
        <slot name="image" /> <!--si hay mas de un slot es forzono ponerles un identificador unico con la propiedad name-->
        <slot name="title" />
        <slot name="description" />       
    </div>
</template