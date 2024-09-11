<template>
  <div class="row">
    <div class="col">
      <h1 class="text-center">是否要贊助此媒體</h1>
      <div class="text-center">
        <button type="button" variant="btn primary" class="me-3" @click="cancelFn">否</button>
        <button type="button" variant="btn primary" @click="confirmFn">是</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
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
    const router = useRouter();

    const confirmFn = () => {
      console.log('allCookies', document.cookie);
      router.push('/register');
    };
    const cancelFn = () => {
      console.log('allCookies', document.cookie);
      // router.push('/login');
    };

    return {
      message,
      confirmFn,
      cancelFn
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
