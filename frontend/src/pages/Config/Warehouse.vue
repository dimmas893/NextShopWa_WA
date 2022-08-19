<template>
  <div>
      <q-card flat>
        <q-card-section>
          <div class="">
            <div class="text-md text-weight-bold">Pengiriman</div>
             <div class="text-caption text-grey-7">Pengaturan pengiriman dan koordinat toko</div>
          </div>

          <div class="q-mt-md">
            <div class="text-md text-weight-bold">Koordinat Toko</div>
            <div class="warehouse-map" v-if="config">
              <main-map :config="config" :coordinate="formdata.warehouse_coordinate" @onEmitMap="onEmitMap"/>
            </div>
             <div class="text-caption text-grey-7 q-mt-sm">Gunakan fitur pencarian atau bisa dengan mengeklik tombol lokasi otomatis. untuk mendapatkan koordinat yang presisi, silahkan geser - geser ikon toko didalam map atau dengan menge-klik didalam map</div>
          </div>
          <div class="q-mt-md">
            <div class="text-grey-8 text-sm q-py-xs">Mapbox Access Token</div>
            <q-input dense v-model="formdata.mapbox_access_token" outlined></q-input>
            <div class="text-caption text-grey-7 q-mt-sm">
              Silahkan daftar di mapbox.com untuk mendapatkan akses token ( rekomendasi ). pengaturan akan otomatis menggunakan openstreetmap jika dikosongkan ( tidak rekomendasi ).
            </div>
          </div>
           <div class="q-mt-lg">
            <div class="flex justify-between q-py-sm">
              <div class="col q-pr-md">
                <div class="text-weight-medium text-md">Ongkos Kirim</div>
                <p class="text-caption text-grey-7">Perhatikan baik - baik saat menambahkan aturan ongkos kirim, jarak yang diluar aturan akan diabaikan dan menjadi diluar jangkauan kurir.</p>
              </div>
              <div>
                <q-btn label="Tambah Aturan" color="blue" unelevated size="12px" padding="3px 10px" @click="addRule" no-caps></q-btn>
              </div>
            </div>
              <q-list>
                <q-item v-for="(item, idx) in formdata.shipping_costs" :key="idx" class="q-px-none">
                  <q-item-section>
                    <q-input filled dense v-model="formdata.shipping_costs[idx].start" label="Dari (KM)" mask="##" suffix="KM"></q-input>
                  </q-item-section>
                  <q-item-section>
                    <q-input filled dense v-model="formdata.shipping_costs[idx].end" label="Sampai (KM)" mask="###" suffix="KM"></q-input>
                  </q-item-section>
                  <q-item-section>
                    <q-input filled dense v-model="formdata.shipping_costs[idx].cost" label="Ongkos Kirim" mask="##########"></q-input>
                  </q-item-section>
                  <q-item-section side>
                    <div>
                      <q-btn icon="cancel" round flat padding="xs" color="red" @click="removeCost(idx)"/>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
          </div>
          <div class="q-mt-lg flex justify-end">
            <q-btn @click="updateData" unelevated size="12px" label="Simpan Perubahan" color="blue-7"></q-btn>
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
import { Api } from 'boot/axios'
import MainMap from './MainMap.vue'
export default {
  name: 'Warehouse',
  components: { MainMap },
  data () {
    return {
      codListModal: false,
      modal: false,
      subdistrictOptions: [],
      search: '',
      isWarehouseSearch: false,
      searchType: 'cod',
      searchLoading: false,
      formdata: {
        warehouse_coordinate: [],
        shipping_costs: [],
        mapbox_access_token: '',
      },
    }
  },
  computed: {
    config: function() {
      return this.$store.state.config
    }
  },
  mounted() {
    this.getAdminConfig()
  },
  methods: {
    onEmitMap(evt) {
      console.log(evt);
      this.formdata.warehouse_coordinate[0] = evt[0]
      this.formdata.warehouse_coordinate[1] = evt[1]
    },
    addRule() {
      let start = 0;
      if(this.formdata.shipping_costs.length) {
        let endItem =  this.formdata.shipping_costs[this.formdata.shipping_costs.length -1]
        start = parseInt(endItem.end)+1
      }
      this.formdata.shipping_costs.push({ cost: 500, start: start, end: 0 })
    },
    removeCost(idx) {
      this.formdata.shipping_costs.splice(idx, 1)
    },
    changeWarehouse() {
      this.modal = true
      setTimeout(() => {
        this.$refs.warehouse.focus()
      }, 300)
    },
    warehouseTitle() {
      if(this.formdata.warehouse_address) {
        return `${this.formdata.warehouse_address.subdistrict_name} - ${this.formdata.warehouse_address.type} ${this.formdata.warehouse_address.city}, ${this.formdata.warehouse_address.province}`
      }
      return 'Pilih Gudang Pengiriman'
    },
    setConfig(item) { 
      this.$store.commit('SET_CONFIG', item)
      this.formdata.warehouse_coordinate = item.warehouse_coordinate?  item.warehouse_coordinate : []
      this.formdata.shipping_costs = item.shipping_costs ?  item.shipping_costs : []
      this.formdata.mapbox_access_token = item.mapbox_access_token
    },
    showNotify(error = '') {
      if(error) {
        this.$q.notify({
          type: 'negative',
          message: 'Gagal memperbarui data'
        })
      } else {
        this.$q.notify({
          type: 'positive',
          message: 'Berhasil memperbarui data'
        })
      }
      
    },
    updateData() {
      if(this.formdata.is_local) {
        if(!this.formdata.warehouse_coordinate || !this.formdata.warehouse_coordinate.length) {
          this.formdata.is_local = false
          this.$q.notify({
            type: 'warning',
            message: 'Untuk mengaktifkan pengiriman local ( ojek ), Koordinat harus diisi.'
          })
          return 
        }
      }
      Api().post('config',  this.formdata).then(() => {
        this.$store.dispatch('getAdminConfig')
        this.showNotify()
      }).catch(() => {
        this.showNotify(error)    
      })
    },
    submitWarehouse() {
      this.updateData()
    },
    setLoading(status) {
      this.$store.commit('SET_LOADING', status)
    },
    selectSubdistrict(item) {
      this.modal = false
      this.subdistrictOptions = []
      this.search = ''
    },
    isInWarehouseItem(item) {
      return this.formdata.warehouse_address.subdistrict_id == item.subdistrict_id ? true : false
    },
    searchWarehouseData() {
      this.searchType = 'warehouse'
      this.findSubdistrict()
    },
    getAdminConfig() {
      Api().get('adminConfig').then((response) => {
        if(response.status == 200){
          this.setConfig(response.data.results)
        }
      })
    },
    findSubdistrict() {
      this.subdistrictOptions = []
      if(this.search.length < 3) return
      this.searchLoading = true
      Api().get('shipping/findSubdistrict/'+ this.search)
      .then(response => {
        if(response.status == 200) {
          if(response.data.success) {

            this.subdistrictOptions = response.data.results

          } else {
            this.$q.notify({
              type: 'negative',
              message: response.data.message
            })
          }
        }
      })
      .finally(() => {
         this.searchLoading = false
      })
    },
    closeSubdistrictBox() {
      this.subdistrictOptions = []
      this.search = ''
    }
  }
}
</script>
