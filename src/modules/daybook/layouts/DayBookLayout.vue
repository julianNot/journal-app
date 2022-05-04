<template>
  <navbar />
  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Espere por favor ...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-4">
      <entry-list />
    </div>  
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

export default {
  components : {
    navbar : defineAsyncComponent( () => import ('../components/Navbar.vue')),
    entryList : defineAsyncComponent( () => import ('../components/EntryList.vue') )
  },
  computed : {
    ...mapState('journal',['isLoading']),
  },
  methods : {
    ...mapActions('journal', ['loadEntries']),
  },
  created(){
    this.loadEntries()
  }
}
</script>

<style>

</style>