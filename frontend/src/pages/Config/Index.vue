<template>
  <q-page class="bg-grey-2 q-pb-lg">
    <q-header>
      <q-toolbar>
        <q-btn v-go-back.single
          flat round dense
          icon="arrow_back" />
        <q-toolbar-title>
         Konfigurasi Aplikasi
        </q-toolbar-title>
      </q-toolbar>
      </q-header>
      <div class="q-gutter-y-lg q-pt-md" v-if="config">
        <tampilan />
        <theming />
        <warehouse />
        <system-update />
      </div>
      <q-inner-loading :showing="loading">
      </q-inner-loading>
  </q-page>
</template>

<script>
import Tampilan from './Tampilan.vue'
import Theming from './Theming.vue'
import Warehouse from './Warehouse.vue'
import SystemUpdate from './SystemUpdate.vue'
 export default {
  name: 'AdminConfig',
  components: { Tampilan, Theming, SystemUpdate, Warehouse },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    config() {
      return this.$store.state.config
    }
  },
  created() {
    if(!this.config) {
      this.$store.dispatch('getAdminConfig')
    }
  },
}
</script>
