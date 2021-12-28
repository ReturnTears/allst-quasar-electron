<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <div>
      <q-btn label="New Item" @click="clickItem"/>
      <q-btn icon="map"/>
      <q-btn icon="create" label="New Item"/>
      <q-btn round color="secondary" icon="card_giftcard" />
      <q-btn round color="secondary">
        <q-icon name="card_giftcard" />
      </q-btn>
      <span>{{ msg }}</span>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      msg: 'PageIndex'
    }
  },
  methods: {
    clickItem () {
      alert('PageIndex')
    }
  }
})
</script>
