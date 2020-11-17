<template>
  <q-item
    clickable
    tag="a"
    :target="link !== '#' ? '_blank' : '_self'"
    :href="link"
    :to="to"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    to: {
      type: [String, Object],
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
