<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">20</span>
            <span class="text-success fs-3">Abril</span>
            <span class="mx-2 fs-4 fw-light">2022, miercoles</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2"> 
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary"> 
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Notas del dia ..."></textarea>
    </div>

    <Fab icon="fa-save"/>
    <img src="https://caracoltv.brightspotcdn.com/dims4/default/ade1783/2147483647/strip/true/crop/923x515+0+0/resize/1200x669!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F31%2Fac%2Fe9579c3d4b2ba642a8d7959cf2ec%2Fmuross.png" 
    alt="berlin"
    class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components : {
        Fab : defineAsyncComponent( () => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>