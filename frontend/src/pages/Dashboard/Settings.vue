<template>
  <q-page>
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Dashboard
        </q-toolbar-title>
         <q-btn :to="{ name: 'Home', query: { load: 'true'}}"
          flat icon-right="arrow_forward" label="Lihat Toko" no-caps/>
      </q-toolbar>
    </q-header>

    <div class="overflow-x-hidden relative">
      <q-list separator>
        <q-item clickable v-ripple v-for="item in menus" :key="item.label" :to="{name: item.path}">
          <q-item-section avatar>
            <q-avatar :color="item.color" text-color="white" :icon="item.icon" size="md"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
            <q-item-label caption lines="1">{{ item.caption }}</q-item-label>
            </q-item-section>
          <q-item-section side>
            <q-icon name="navigate_next" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click.prevent="logout">
          <q-item-section avatar>
            <q-avatar color="grey" text-color="white" icon="logout" size="md"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption lines="1">Keluar Sesi</q-item-label>
            </q-item-section>
          <q-item-section side>
            <q-icon name="navigate_next" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      isShowen: false,
      menus: [
        { label: 'Akun', caption: 'Pengaturan Akun', path: 'Account', icon: 'person', color: 'green'},
        { label: 'Toko', caption: 'Pengaturan toko', path: 'Shop', icon: 'store', color: 'blue'},
        { label: 'Kategori', caption: 'Kelola kategori', path: 'CategoryIndex', icon: 'category', color: 'amber-7'},
        { label: 'Produk', caption: 'Tambah, edit dan hapus produk', path: 'AdminProductIndex', icon: 'inventory_2', color: 'deep-orange'},
        { label: 'Promo', caption: 'Kelola produk promo', path: 'PromoIndex', icon: 'local_offer', color: 'blue-7'},
        { label: 'Slider', caption: 'Kelola slideshow', path: 'Slider', icon: 'view_carousel', color: 'teal'},
        { label: 'Artikel', caption: 'Kelola Artikel / blog', path: 'AdminPostIndex', icon: 'article', color: 'deep-orange'},
        { label: 'Pengaturan', caption: 'Pengaturan Website', path: 'Config', icon: 'settings', color: 'accent'},
      ]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
    },
    exitApp() {
      this.$store.dispatch('user/exitApp', navigator)
    },
  }
}
</script>