<template>
  <div v-if="config && config.is_demo_mode">
    <div class="fixed-right-middle z-50" v-if="!OpenThemeSetting">
      <div class="theme-setting bg-white" @click="OpenThemeSetting = !OpenThemeSetting">
        <q-spinner-gears
          color="primary"
          size="2em"
        />
      </div>
    </div>
    <q-dialog v-model="OpenThemeSetting" position="right" square v-if="config">
      <q-card class="text-sm">
        <q-linear-progress :value="1" color="primary" />
        <q-card-section class="q-pa-sm">
          <div class="q-pb-sm row items-center justify-between">
            <div class="text-weight-bold text-md text-primary">Setting</div>
            <q-btn flat padding="xs" v-close-popup no-caps icon="close" round color="primary"></q-btn>
          </div>
          <div class="q-gutter-y-md">
            <div>
              <div class="text-md text-weight-medium q-mb-xs">Product Card</div>
              <q-list dense>
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      Beranda
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side v-if="config">
                    <div class="q-gutter-x-sm">
                      <q-btn @click="changeHomeViewMode('grid')" label="Grid" size="sm" unelevated :color="config.home_view_mode == 'grid' ? 'green-7' : 'grey-6'" dense icon="grid_view">
                        <q-tooltip>
                          Grid Mode
                        </q-tooltip>
                      </q-btn>
                      <q-btn @click="changeHomeViewMode('list')" label="List" size="sm" unelevated :color="config.home_view_mode == 'list' ? 'green-7' : 'grey-6'" dense icon="view_list">
                        <q-tooltip>
                          List Mode
                        </q-tooltip>
                      </q-btn>
                    </div>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      Katalog
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <div class="q-gutter-x-sm">
                      <q-btn @click="changeProductViewMode('grid')" label="Grid" size="sm" unelevated :color="config.product_view_mode == 'grid' ? 'green-7' : 'grey-6'" dense icon="grid_view">
                        <q-tooltip>
                          Grid Mode
                        </q-tooltip>
                      </q-btn>
                      <q-btn @click="changeProductViewMode('list')" label="List" size="sm" unelevated :color="config.product_view_mode == 'list' ? 'green-7' : 'grey-6'" dense icon="view_list">
                        <q-tooltip>
                          List Mode
                        </q-tooltip>
                      </q-btn>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div>
              <div class="text-md text-weight-medium">Themes</div>
              <q-list dense>
                <q-item>
                  <q-item-section>
                    <q-item-label>Tema</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-select outlined dense v-model="theme" :options="themes"></q-select>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>Warna</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <input ref="color" type="color" v-model="theme_color" style="width:110px;height:20px;"/>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>
        <div class="column q-px-md q-pb-md text-left q-gutter-y-sm">
          <q-btn unelevated @click="buyNow" no-caps label="Minat? Chat disini" color="primary" class="full-width"></q-btn>
          <!-- <q-btn outline v-close-popup no-caps label="close" color="primary" class="full-width"></q-btn> -->
        </div>
      </q-card>
    </q-dialog>
    <q-dialog v-model="mapModal">
      <div class="bg-white q-pa-md">
       <div class="q-mt-md">
          <div class="text-md text-weight-bold">Koordinat Toko</div>
          <div class="warehouse-map">
            <local-map :coordinate="warehouse_coordinate" @onEmitMap="onEmitMap"/>
          </div>
            <div class="text-caption text-grey-7 q-mt-sm">Gunakan fitur pencarian atau bisa dengan mengeklik tombol lokasi otomatis. untuk mendapatkan koordinat yang presisi, silahkan geser - geser ikon toko didalam map atau dengan menge-klik didalam map</div>
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      mapModal: false,
      theme: '',
      theme_color: '',
      OpenThemeSetting: false,
      is_whatsapp_checkout: false,
      is_guest_checkout: true,
      warehouse_coordinate: []
    }
  },
  computed: {
    ...mapState({
      config: state => state.config
    }),
    themes() {
      return this.$store.state.themes
    }
  },
  watch: {
    theme_color: function(val) {
      this.setColor(val)
    },
    theme: function(val) {
      this.setTheme(val)
    },
    is_whatsapp_checkout: function(val) {
      this.changeChatsappCheckout(val)
    },
    is_guest_checkout: function(val) {
      this.changeWithLogin(val)
    }
  },
  mounted(){
    if(this.config) {
      this.theme_color = this.config.theme_color
      this.theme = this.config.theme
      this.is_whatsapp_checkout = this.config.is_whatsapp_checkout
      this.is_guest_checkout = this.config.is_guest_checkout
    }
    this.warehouse_coordinate = this.config.warehouse_coordinate
  },
  methods: {
    onEmitMap(data) {
      this.warehouse_coordinate = data
    },
    changeHomeViewMode(str) {
      this.$store.commit('SET_HOME_VIEW_MODE', str)
    },
    changeProductViewMode(str) {
      this.$store.commit('SET_PRODUCT_VIEW_MODE', str)
    },
    setTheme(theme) {
      this.$store.commit('SET_THEME', theme)
    },
    setColor(clr) {
     this.$store.commit('SET_THEME_COLOR', clr)
    },
    changeWithLogin(val) {
      this.$store.commit('SET_GUEST_CHECKOUT', val)
    },
    changeChatsappCheckout(val) {
      this.$store.commit('SET_WHATSAPP_CHECKOUT', val)
    },
    buyNow() {
      let url = `https://api.whatsapp.com/send?phone=6283842587851&text=${location.href}`

      window.open(url, '_blank')
    }
  }
}
</script>
