<template>
  <!-- when using a component in a template Vue.js expects the DOM element to be
  lowercased and dasherized. e.g. ProductList -> product-list -->

  <!-- use the <product-list> component here! -->
    <div>
        <header class="app-header">
          <app-nav></app-nav>
        </header>
        <main class="container">
          <router-view></router-view>
        </main>
    </div>
</template>
 
<script>
import AppNav from './components/AppNav'

export default {
   components: {
    AppNav
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
