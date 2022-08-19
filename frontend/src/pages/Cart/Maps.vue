<template>
  <div class="relative">
    <div class="relative input-map q-pb-md">
      <div class="">
        <div class="text-grey-8 q-pb-sm text-sm">Gunakan form pencarian atau klik tujuan di dalam map dan juga dapat menggunakan tombol lokasi terkini untuk mendapatkan tujuan pengiriman.</div>
        <q-input clearable :loading="searchLoading" outlined dense placeholder="Ketik tempat anda..." v-model="query" @keyup.enter="searchQuery" @input="inputQuery">
          <template v-slot:prepend v-if="!searchLoading">
            <q-icon name="search" class="cursor-pointer" @click="searchQuery"></q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="list-box-content" v-show="showList">
      <q-list separator>
        <q-item v-for="(list, i) in lists" :key="i" clickable @click="selectItemList(list)">
          <q-item-section>{{ list.label }}</q-item-section>
        </q-item>
        <q-item v-if="notFound">
          <q-item-section class="text-center">Data tidak ditemukan</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="relative">
      <div id="mapContainer">
      </div>
      <q-btn flat icon="my_location" :loading="loading" class="bg-white text-grey-7 btn-floating" round dense padding="sm" @click="getCurrentPosition"></q-btn>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";

import L from 'leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine'

import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

export default {
  name: 'Map',
  props: ['coordinate', 'config'],
  data () {
    return {
      map: null,
      zoom: 12,
      routeControl: null,
      searchControl: null,
      originMarker: null,
      destinationMarker: null,
      destinationCenter: null,
      originMarkerOption: {
        clickable: false,
        draggable: false,
        icon: null
      },
      destinationMarkerOption: {
        clickable: true,
        draggable: true,
        autoPan: true,
        icon: null
      },
      query: '',
      provider: null,
      lists: [],
      listSelected: null,
      searchLoading: false,
      notFound: false,
      geocoder: null,
      totalDistanceKm: 0,
      totaldistanceMinutes: 0,
      freeOngkirUnder: 2,
      hargaJarakPerKm: 0,
      loading: false,
      lastLocalCost: 0,
      maxDistance: 0,
      user_coordinate: []
    }
  },
  mounted() {
    this.$nextTick(() => {
     setTimeout(() => {
       this.initialMap()
     }, 1000)
   })
  },
  watch: {
    totalDistanceKm: function() {
      this.getLocalCost()
    }
  },
  computed: {
    showList() {
      return this.lists.length || this.notFound
    },
    
  },
  methods: {
    getLocalCost() {

      if(this.config && this.config.shipping_costs.length) {

        let localCosts = this.config.shipping_costs

        // Get max distance from last item

        let lastItem = localCosts[localCosts.length-1]

        this.maxDistance = parseInt(lastItem.end)
        this.hargaJarakPerKm = parseInt(lastItem.cost)
        this.lastLocalCost = parseInt(lastItem.cost)

      // Get Cost by current distance
      
        for(let i = 0; i < localCosts.length; i++) {

          this.hargaJarakPerKm = parseInt(localCosts[i].cost)

          if(this.totalDistanceKm > parseInt(localCosts[i].start) && this.totalDistanceKm < parseInt(localCosts[i].end)) {

            this.hargaJarakPerKm = parseInt(localCosts[i].cost)

            break
          } 
        }
        // console.log('max', this.maxDistance);
        // console.log('total dis', this.totalDistanceKm);
        // console.log('price', this.hargaJarakPerKm);
        // console.log('local', this.lastLocalCost);
        
        if(this.totalDistanceKm > this.maxDistance) {
          this.$q.dialog({
            title: 'Tujuan diluar jangkauan!',
            message: `Mohon maaf sayangnya alamat tujuan diluar jangkauan kurir kami, Maksimal jangkauan kurir kami adalah ${this.maxDistance}KM.`
          })

          return
        }

        this.$emit('emitData', {
          amount:  this.getOngkir(),
          user_coordinate: this.user_coordinate
        })

        setTimeout(() => {
          if(this.setDestinationMarker != undefined) {
            this.destinationMarker.bindTooltip(this.createPopup(), {
                permanent: true,
                direction: 'left'
              });
          }
        }, 500)
      }
    },
    searchQuery(){
      this.notFound = false 
      this.searchLoading = true
      this.provider.search({ query: this.query }).then(response => {
        this.lists = response
      }).finally(() => {
        this.searchLoading = false
        if(!this.lists.length) {
          this.notFound = true 

          setTimeout(() => {
            this.notFound = false 

          }, 5000)
        }
      })

    },
    inputQuery() {
      this.notFound = false
    },
    selectItemList(list) {
      this.listSelected = list
      let latlng = [list.y, list.x]
      this.lists = []

      this.setMapView()
      this.setDestinationMarker(latlng)

    },
    initialMap() {

      this.provider = new OpenStreetMapProvider({
         params: {
          countrycodes: 'id'
        }
      });
      this.originMarkerOption.icon = L.icon({
          iconUrl: "/static/warehouse.png",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        })

      this.destinationMarkerOption.icon = L.icon({
          iconUrl: "/static/delivery.png",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        })

      this.map = L.map('mapContainer', {
          center: this.coordinate,
          zoom: this.zoom
      });

      if(this.config && this.config.mapbox_access_token) {

        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${this.config.mapbox_access_token}`, {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 20,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
        }).addTo(this.map);

      } else {

        L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
      }


      this.originMarker = L.marker(this.coordinate, this.originMarkerOption)

      this.originMarker.addTo(this.map)

      this.setRouteControl()

      // this.setGeocoder()

      this.map.on('click', this.handleMapClicked);

    },
    setGeocoder() {

      L.Control.geocoder({
        defaultMarkGeocode: false,
        geocoder: L.Control.Geocoder.nominatim(),
        style: 'bar',

        }).on('markgeocode', (result) => {

        this.setDestinationMarker(result.geocode.center)
        
      }).addTo(this.map);
    },
    handleMapClicked (e) {

    let container = L.DomUtil.create('div')

    let btn = L.DomUtil.create('button', '', container);
      btn.setAttribute('type', 'button');
      btn.innerHTML = 'Pilih lokasi disini';

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(this.map);
      L.DomEvent.on(btn, 'click', () =>  {

        this.setDestinationMarker([e.latlng.lat, e.latlng.lng])
        
      });
    },
    setDestinationMarker(latlng) {
      this.user_coordinate = latlng

      if(this.destinationCenter) {

        this.routeControl.spliceWaypoints(1, this.routeControl.getWaypoints().length, latlng);

      } else {
        this.routeControl.setWaypoints([this.coordinate, latlng])
      }
      this.map.closePopup();

      this.destinationCenter = latlng

      this.map.setView(latlng)

      this.loading = false

    },
    setRouteControl() {

      let routeConfig = {
        createMarker: () => null,
        geocoder:  this.provider,
        show: false,
      }

      if(this.config && this.config.mapbox_access_token) {
        routeConfig = {
          createMarker: () => null,
          geocoder:  this.provider,
          show: false,
          router: L.Routing.mapbox(this.config.mapbox_access_token) 
        }
        // routeConfig = {
        //   createMarker: () => null,
        //   geocoder:  this.provider,
        //   show: false,
        //   router: L.Routing.esri(this.config.mapbox_access_token) 
        // }
      } 
  
      this.routeControl = L.Routing.control(routeConfig).addTo(this.map)

        this.routeControl.on('routeselected', (e) => {

          let route = e.route

          this.totalDistanceKm = (e.route.summary.totalDistance / 1000).toFixed(1);

          this.totaldistanceMinutes = Math.round(e.route.summary.totalTime % 3600 / 60);

          if (this.destinationMarker != undefined) {

                this.map.removeLayer(this.destinationMarker);
            };

            this.destinationMarker = L.marker([route.coordinates[route.coordinates.length -1].lat, route.coordinates[route.coordinates.length -1].lng], this.destinationMarkerOption);

            this.destinationMarker.on('dragend', (e) => {
              let latlng = e.target._latlng
              this.setDestinationMarker([latlng.lat, latlng.lng])

            })


          if (e.type === 'routeselected') {

            this.map.addLayer(this.destinationMarker)

          }

        })

        // this.routeControl.on('routesfound', (e) => {

        //   console.log('routesfound', e.routes);

        //   var routes = e.routes;
        //   var summary = routes[0].summary;

        //   this.totalDistanceKm = (summary.totalDistance / 1000).toFixed(1)
        //   this.totaldistanceMinutes = Math.round(summary.totalTime % 3600 / 60)
        // });
    },
    setMapView() {
      setTimeout(() => {
        this.map.setView(this.coordinate)
        this.map.closePopup();
      }, 500)
    },
    getAutoPosition() {
        setTimeout(() => {
          this.getCurrentPosition()
        }, 2000)
    },
    getCurrentPosition() {
      this.loading = true
      const options = {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.geoLocationSuccess, this.geoLocationError, options);

      } else {
        this.$q.notify({
          type: 'warning',
          message: 'Geolocation is not supported by this browser.'
        })
      }
    },
    geoLocationError() {
      this.loading = false
      this.$q.notify({
        type: 'warning',
        message: 'Lokasi tidak ditemukan, coba ulangi sekali lagi.'
      })
    },
    geoLocationSuccess (position) {
      setTimeout(() => {
        this.setDestinationMarker([position.coords.latitude, position.coords.longitude])
      }, 500)
    },
    createPopup (){
      console.log('create popup');
      return `<div class="marker-tooltip">
              <div class="details-text">Jarak : <b>${this.totalDistanceKm} Km</b></div>
              <div class="details-text">ongkos kirim / km <b>${this.moneyIDR(this.hargaJarakPerKm)}</b></div>
              <div class="details-text">Total Ongkos Kirim: <b> ${this.formatOngkir()} </b></div>
            </div>`;
    },
    getOngkir() {

       if(this.totalDistanceKm > 0) {

        return Math.round(this.totalDistanceKm*this.hargaJarakPerKm)
      }
      return 0;
    },
    formatOngkir() {
      if(this.totalDistanceKm > 0) {

        return this.moneyIDR(this.getOngkir())
      }
      return 'Gratis';
    }
  },
}
</script>

<style scoped>
#mapContainer {
  height: 270px;
  width: 100%;
}
.list-box {
  position: relative;
  z-index: 1006;
}
.list-box-content {
  position: absolute;
  width:100%;
  overflow-y: auto;
  background-color: #ffffff;
  z-index: 1006;
  max-height: 270px;
  height:auto;
}
.leaflet-top.leaflet-right  {
  display: none;
}

</style>