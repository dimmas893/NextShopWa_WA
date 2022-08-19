<template>
  <q-page class="bg-grey-1 default" :class="{'flex flex-center' : loading }">
    <q-header reveal :reveal-offset="0" class="bg-white text-dark box-shadow">
      <q-toolbar class="items-center sans">
        <img v-if="shop" class="logo" :src="shop.logo? shop.logo : '/icon/logo.png'" />
        <q-toolbar-title v-if="shop && shop.name" class="text-weight-bold text-primary">{{ shop.name }}</q-toolbar-title>
        <shopping-cart  />
      </q-toolbar>
    </q-header>
    <template v-if="!loading">

      <div id="slider" class="q-pt-sm" v-if="sliders.data.length">
        <slider :datas="sliders.data" />
      </div>
      <div id="categories" v-if="categories && categories.data.length > 1" class="auto-padding-side">
        <div class="block-heading q-py-md">
          <div class="block-title"><h2>Kategori</h2></div>
        </div>
        <div class="block-content q-pb-sm">
          <category-carousel :datas="categories.data" />
        </div>
      </div>

      <div id="product-promo" v-if="productPromo.length" >
        <product-promo :product_promo="productPromo" />
      </div>

      <product-block :products="products" />

      <post-block :posts="posts" />

      <install-app />

      <footer-block />
    </template>

      <q-inner-loading :showing="loading">
        <q-spinner-facebook size="50px" color="primary"/>
      </q-inner-loading>
  </q-page>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import ShoppingCart from 'components/ShoppingCart.vue'
import Slider from './block/Slider.vue'
import ProductBlock from './../shared-components/ProductBLock.vue'

export default {
  name: 'PageIndex',
  components: {
    ShoppingCart,
    Slider, 
    ProductBlock, 
    'category-carousel': () => import('./block/CategoryCarousel.vue'),
    'product-promo': () => import('./../shared-components/ProductPromo.vue'),
    'post-block': () => import('./../shared-components/PostBlock.vue'), 
    'footer-block': () => import('./../shared-components/FooterBlock.vue'),
    'install-app': () => import('components/InstallApp.vue')
  },
  data() {
    return {
      viewMode: 'grid',
      search: '',
      slide: 0,
    }
  },
  computed: {
    ...mapState({
      sliders: state => state.slider.sliders ,
      categories: state => state.category.categories ,
      products: state => state.product.initial_products,
      shop: state => state.shop,
      loading: state => state.loading,
      posts: state => state.post.initialPost,
      config: state => state.config,
      productPromo: state => state.product.product_promo,
    }),
    cheight: function() {
      let n =(this.$q.screen.width /1.7)
      if(this.$q.screen.width > 600) {
        return 400 +'px'
      } else {
        return (this.$q.screen.width /1.5) +'px'
      }
    },
  },
  methods: {
    ...mapActions(['getInitialData']),
    showProductByCategory(id) {
      this.$router.push({name: 'ProductCategory', params: { id:id }})
    },
    searchNow() {
      if(!this.search || this.search == '') return
        this.$router.push({name: 'ProductSearch', query: {q: this.search }})
    },
  },
  mounted() {
    if(this.config) {
      this.viewMode = this.config.home_view_mode
    }
  },
created() {
  if(!this.shop || !this.products.data.length || this.$route.query.load) {
      this.getInitialData()
    }
  }
}
</script>
