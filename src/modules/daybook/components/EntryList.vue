<template>
    <div class="entry-list-container mb-2">
        <div class="px-2 pt-2">
            <input v-model="term" type="text" class="form-control" placeholder="Buscar entrada">
        </div>
    </div>
    <div class="mt-2 d-flex flex-column">
        <button class="btn btn-primary mx-3 mb-2" @click="$router.push({name: 'entry', params : {id : 'new'} })">
            <i class="fa fa-plus-circle"></i>
            Nueva Entrada
        </button>
    </div>
    <div class="entry-scrollarea">
        <entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry">
            
        </entry>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
    components : {
        Entry : defineAsyncComponent( () => import('./Entry.vue'))
    },
    computed : {
        ...mapGetters('journal',['getEntriesByTerm']),
        entriesByTerm() {
            return this.getEntriesByTerm( this.term )
        }
    },
    data() {
        return {
            term : ''
        }
    }

}
</script>

<style lang="scss" scoped>b
.entry-list-container {
    border-right: 1px solid #2c3e50;
    // height: calc( 100vh - 56px );
}

.entry-scrollarea {
    border-right: 1px solid #2c3e50; 
    height: calc( 100vh - 110px );
    overflow: scroll;
}
</style>