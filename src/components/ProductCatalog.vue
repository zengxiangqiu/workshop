<template>
  <section>
    <ul v-for="product in products" v-bind:key="product.id">
      <li>{{product.name}}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: mapGetters({
    products: 'getProducts'
  })
}
</script>