<template>
<div>
  <img border="0" :src="buildQuery()">
</div>
</template>

<script>
  export default {
    data () {
      return {
        query: {
          center: 'Newcastle,UK',
          visible: '56+Rosebury+Drive,Longbenton,Tyne+and+wear',
          size: '500x500',
          key: 'AIzaSyDJpJ2B0sGoT27o6DrTpx7uLm5-tAvjC_I',
          zoom: 18,
          maptype: 'satellite'
        }
      }
    },
    methods: {
      getUrl () {
        return 'https://maps.googleapis.com/maps/api/staticmap?'
      },
      buildQuery () {
        return `${this.getUrl()}visible=${this.query.visible}&size=${this.query.size}&zoom=${this.query.zoom}&maptype=${this.query.maptype}&scale=1&key=${this.query.key}`
      }
    }
  }
</script>
