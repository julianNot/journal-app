<template>
  <div @click="$router.push( { name: 'entry', params : { id : 2 } })" class="entry-container mb-3 pointer p2 mx-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">10</span>
      <span class="mx-1 fs-5">Abril</span>
      <span class="mx-2 fw-light">2022</span>
    </div>
    <div class="entry-description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia sit veniam possimus ea, voluptatem eius reiciendis, perferendis soluta quas cumque magni cupiditate, repellat et nostrum! Asperiores hic adipisci perspiciatis!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>