<template>
  <div>
    <h1>Welcome to my Vue page!</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
// import Tec1004View from '@/components/tec/tec1004/view/index.vue';

export default {
  // name: 'tec0404AView',
  // components: {
  //   Tec1004View,
  // },
  // props: {
  //   fileProps: {
  //     type: Object,
  //     required: true,
  //   },
  // },

  setup(props) {
    const message = 'Hello, world!';
    return {
      message
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
