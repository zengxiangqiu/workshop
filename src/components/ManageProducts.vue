<template>
    <section>
        <save-product-Form
          :product='productInForm'
          v-on:submit='onFormSave'
          v-on:cancel='resetProductInForm'
        ></save-product-Form>
        <product-list
        :products='products'
        v-on:edit='onEditClicked'
        v-on:remove="onRemoveClicked"
        ></product-list>
    </section>
</template>

<script>
import ProductList from './ProductList'
import SaveProductForm  from './SaveProductForm'
import { mapGetters, mapActions } from 'vuex'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null
    }  
  }
}

export default {
    data: initialData,
    components:{
        ProductList,
        SaveProductForm
    },
    computed: mapGetters({
        products: 'getProducts'
    }),
    methods: {
     ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
    onFormSave (product) {
      this.saveProduct(product).then(() => this.resetProductInForm())
    },
    resetProductInForm () {
        // eslint-disable-next-line no-console
       console.log('reset', JSON.stringify(initialData().productInForm))
      this.productInForm = initialData().productInForm
    },
    onEditClicked(product){
          // eslint-disable-next-line no-console
        console.log('productData1', JSON.stringify(product))
        this.productInForm = {...product};  
    },
    onRemoveClicked (productId) {
       this.deleteProduct(productId).then(() => {
        if (productId === this.productInForm.id) {
          this.resetProductInForm()
        }
      })
    }
  }
    
}
</script>