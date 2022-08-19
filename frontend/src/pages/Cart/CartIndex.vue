<template>
  <q-page class="bg-grey-1 q-pb-lg"
  :class="{'flex flex-center' : !carts.items.length}"
  >
    <q-header class="text-primary bg-white box-shadow">
        <q-toolbar>
          <q-btn :to="{ name: 'ProductIndex'}"
            flat round dense
            icon="arrow_back" />
          <q-toolbar-title class="text-weight-bold brand">Keranjang Belanja</q-toolbar-title>
        </q-toolbar>
    </q-header>
    <div v-if="carts.items.length" class="">

       <q-card square class="shadow q-py-sm q-mt-sm">
        <div class="q-px-md q-py-sm text-md text-weight-bold">
          Detil Pesanan
        </div>
        <q-list class="bg-white text-grey-10" separator>
          <q-item v-for="cart in carts.items" :key="cart.sku">
            <q-item-section side class="q-pr-sm">
            <q-img :src="cart.image_url" style="width:90px;height:90px;"></q-img>
            </q-item-section>
            <q-item-section>
              <div class="col overflow-hidden full-width column">
                <div>
                  <div class="flex justify-between items-center">
                    <div class="text-weight-medium ellipsis text-md">{{ cart.name }}</div>
                    <q-btn @click="removeCart(cart)" outline size="10px" color="red" no-caps padding="2px 4px">hapus</q-btn>
                  </div>
                  <div class="text-grey-7 q-mb-xs text-caption">Catatan: {{ cart.note ? cart.note : '-'}}</div>
                </div>
                <div class="flex items-center justify-between q-mt-auto">
                  <div class="text-weight-medium">Harga {{  moneyIDR(cart.price) }}</div>
                  <div class="q-gutter-x-sm items-center">
                    <q-btn flat padding="4px" round icon="remove_circle_outline" size="13px" @click="decrementQty(cart)" style="cursor:pointer;"></q-btn>
                    <span class="text-weight-medium text-md">{{ cart.quantity }}</span>
                    <q-btn flat padding="4px" round icon="add_circle_outline" size="13px" @click="incrementQty(cart)" style="cursor:pointer;"></q-btn>
                  </div>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
       </q-card>

      <q-card square class="shadow q-mt-lg q-py-sm">
        <div class="q-px-md q-py-sm text-md text-weight-bold">
          Pengiriman
        </div>
        <div class="q-px-md">
          <keep-alive>
         <map-component 
         :config="config" 
         :coordinate="config.warehouse_coordinate" 
         @emitData="emitData"
         />
          </keep-alive>
         <div class="text-red text-xs q-py-sm" v-if="errors.includes('shipping_cost')">Pengiriman belum dipilih</div>
        </div>
      </q-card>
        <q-card square class="shadow q-mt-lg q-py-sm">
        <q-card-section>
          <div class="q-pa-sm">
            <div class="text-md q-pb-xs text-weight-bold">Informasi Pengguna</div>
              <div class="q-mt-md q-mb-xs">Nama lengkap</div>
              <q-input
              outlined
              dense
              stack-label
              v-model="form.customer_name"
              />
              <div class="text-red text-xs q-py-xs" v-if="errors.includes('customer_name')">Nama tidak boleh kosong</div>
              <div class="q-mt-md q-mb-xs">No Whatsapp</div>
              <q-input
              outlined
              dense
              stack-label
              mask="##############"
              v-model="form.customer_whatsapp"
              />
              <div class="text-red text-xs q-py-xs" v-if="errors.includes('customer_whatsapp')">Nomor Whatsapp tidak boleh kosong</div>
            <div class="q-mt-md q-mb-xs">Alamat lengkap</div>
            <q-input
              outlined
              rows="3"
              debounce="1000"
              type="textarea"
              v-model="form.customer_address"
            />
            <div class="text-red text-xs q-py-xs" v-if="errors.includes('customer_address')">Alaman tidak boleh kosong</div>
            <div class="q-mt-md q-mb-xs">Catatan Tambahan ( bila ada )</div>
            <q-input type="textarea" rows="2" outlined v-model="form.order_note"></q-input>
          </div>
        </q-card-section>
      </q-card>

      <q-footer class="bg-white q-py-sm q-px-md">
        <div class="flex justify-between">
          <div class="text-md text-dark">Total</div>
          <div class="text-md2 text-weight-bold text-secondary">{{ moneyIDR(sumtotal()) }}</div>
        </div>
        <q-btn unelevated @click="checkout" color="green-6" class="full-width q-mt-sm" no-caps>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="20px" height="20px">
            <g id="surface1441897">
            <path style=" stroke:none;fill-rule:nonzero;fill:currentColor;fill-opacity:1;" d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 28.960938 3.023438 32.855469 4.964844 36.289062 L 2.035156 46.730469 C 1.941406 47.074219 2.035156 47.441406 2.28125 47.695312 C 2.472656 47.894531 2.734375 48 3 48 C 3.078125 48 3.160156 47.988281 3.238281 47.972656 L 14.136719 45.273438 C 17.464844 47.058594 21.210938 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 36.570312 33.117188 C 36.078125 34.476562 33.71875 35.722656 32.585938 35.886719 C 31.566406 36.035156 30.277344 36.101562 28.863281 35.65625 C 28.007812 35.386719 26.90625 35.027344 25.496094 34.429688 C 19.574219 31.902344 15.707031 26.011719 15.410156 25.625 C 15.117188 25.234375 13 22.464844 13 19.59375 C 13 16.726562 14.523438 15.3125 15.066406 14.730469 C 15.609375 14.144531 16.246094 14 16.640625 14 C 17.035156 14 17.429688 14.003906 17.773438 14.019531 C 18.136719 14.039062 18.625 13.882812 19.101562 15.023438 C 19.59375 16.191406 20.777344 19.058594 20.921875 19.351562 C 21.070312 19.644531 21.167969 19.984375 20.972656 20.375 C 20.777344 20.761719 20.679688 21.007812 20.382812 21.347656 C 20.085938 21.6875 19.761719 22.105469 19.496094 22.367188 C 19.199219 22.660156 18.894531 22.976562 19.238281 23.558594 C 19.582031 24.144531 20.765625 26.050781 22.523438 27.597656 C 24.777344 29.585938 26.679688 30.199219 27.269531 30.492188 C 27.859375 30.785156 28.203125 30.734375 28.550781 30.347656 C 28.894531 29.957031 30.023438 28.644531 30.417969 28.058594 C 30.8125 27.476562 31.203125 27.574219 31.746094 27.769531 C 32.289062 27.960938 35.191406 29.371094 35.78125 29.664062 C 36.371094 29.957031 36.765625 30.101562 36.914062 30.34375 C 37.0625 30.585938 37.0625 31.753906 36.570312 33.117188 Z M 36.570312 33.117188 "/>
            </g>
          </svg>
          <span class="q-ml-sm">
           Pesan Sekarang
          </span>
        </q-btn>
      </q-footer>
    </div>

    <div v-if="!carts.items.length" class="column items-center">
      <p class="text-grey-8 text-weight-bold text-center">Keranjang belanja anda masih kosong!</p>
      <q-btn unelevated :to="{name: 'ProductIndex'}" rounded text-color="white" color="primary"
        icon="keyboard_backspace" label="kembali berbelanja" no-caps/>
    </div>

  
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import Maps from './Maps.vue'
export default {
  name: 'CartPage',
  components: { 
    'map-component' : Maps
   },
  data () {
    return {
      errors: [],
      form: {
        customer_name: '',
        customer_whatsapp: '',
        customer_address: '',
        order_note: '',
        shipping_cost: 0,
        user_coordinate: []
      }
    }
  },
  computed: {
    ...mapState({
      shop: state => state.shop,
      config: state => state.config,
      user: state => state.user.user,
    }),
    carts() {
      return this.$store.getters['cart/getCarts']
    },
    session_id() {
      return this.$store.state.session_id
    },
    canCheckout() {
      return this.form.shipping_cost && this.form.customer_name && this.form.customer_whatsapp && this.form.customer_address
    }
  },
  created() {
    if(!this.shop) {
      this.$store.dispatch('getShop')
    }
  },
  methods: {
    checkout() {
      this.checkForm()

      if(this.errors.length) return

      this.goToWhatsapp()

    },
    emitData(data) {
      this.form.shipping_cost = data.amount
      this.form.user_coordinate = data.user_coordinate
      this.errors = []
    },
    incrementQty(cart) {
      if(parseInt(cart.quantity) >= parseInt(cart.product_stock)) return
      let qty = parseInt(cart.quantity)+1
      this.$store.dispatch('cart/updateCart', { 
        sku: cart.sku, 
        quantity: qty, 
      })
    },
    decrementQty(cart) {
      if(parseInt(cart.quantity) <= 1 ) return
      let qty = parseInt(cart.quantity)-1
      this.$store.dispatch('cart/updateCart', { 
        sku: cart.sku, 
        quantity: qty, 
      })
    },
    removeCart(cart) {
      this.$store.dispatch('cart/removeCart', {
        sku: cart.sku, 
        session_id: cart.session_id
      })
    },
    checkForm() {
      for( const f in this.form) {
        if(f != 'order_note') {
          if(!this.form[f]) {
            this.errors.push(f)
          }
        }
      }
      setTimeout(() => this.errors = [], 20000)
    },
    formatPhoneNumber(number) {
      let formatted = number.replace(/\D/g,'')

      if(formatted.startsWith('0')) {
        formatted = '62' + formatted.substr(1)
      }

      return formatted;
    },
    formatAddressCod(addr) {
      let arr = addr.split('<br>')
      return arr.join('\n')
    },
    goToWhatsapp() {

      let whatsappUrl = 'https://api.whatsapp.com'
      if(this.$q.platform.is.desktop) {
        whatsappUrl = 'https://web.whatsapp.com'
      }
      
      let whatsapp = this.formatPhoneNumber(this.shop.phone)

      let str = `Halo kak, saya mau order:\n\n`
    
      let items = this.carts.items

      let numb = 1;
      items.forEach(el => {
        str +=  `*${numb}. ${el.name}*\n`
        if(el.note){
          str += `[${el.note}]\n`
        }
        str+= `Jumlah: ${el.quantity}\nHarga (@): ${this.moneyIDR(el.price)}\nHarga Total: ${this.moneyIDR(el.quantity*el.price)}\n\n`
        numb ++
      })

      str += `Subtotal: *${this.moneyIDR(this.carts.subtotal)}*\n`
      if(this.form.shipping_cost) {
        str += `Ongkir: *${this.moneyIDR(this.form.shipping_cost)}*\n` 
      }
      str += `Total: *${this.moneyIDR(this.sumtotal())}*\n`
      str += `-------------------------------------------------\n\n`
      str += `*Nama:*\n${this.form.customer_name} (${this.form.customer_whatsapp})\n`
      str += `*Alamat:*\n${this.formatAddressCod(this.form.customer_address)}\n`
      if(this.form.order_note) {
        str += `*Catatan:*\n${this.form.order_note}\n`
      }
      let gmapsUrl = 'https://www.google.com/maps/place'

      if(this.form.user_coordinate.length) {
        str += `*Lokasi:*\n${gmapsUrl}/${this.form.user_coordinate[0]},${this.form.user_coordinate[1]}`
      }

      let link = whatsappUrl+'/send?phone=' + whatsapp + '&text=' + encodeURI(str);

      setTimeout(() => {
        this.$store.dispatch('cart/clearCart')
      }, 3000)

      window.open(link, '_blank');

    },
    sumtotal() {
      return this.carts.subtotal+this.form.shipping_cost
    }
  },
  meta() {
    return {
      title: 'Keranjang Belanja'
    }
  }
}
</script>

<style scoped>
.cart-coupon .q-field__control {
    height: 50px;
}
</style>