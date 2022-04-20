<template>
  <navbar />

  <div class="d-flex">
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
export default {
  components : {
    navbar : defineAsyncComponent( () => import ('../components/Navbar.vue')),
    entryList : defineAsyncComponent( () => import ('../components/EntryList.vue') )
  }
}
</script>

<style>

</style>