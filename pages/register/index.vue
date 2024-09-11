<template>
  <div class="row mb-3">
    <div class="col">
      <h1 class="text-center">Register</h1>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col form-container" :style="{ 'max-width': '400px' }">
      <div class="mb-2 row">
        <label for="name-input" class="col-sm-2 col-form-label">姓名: </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="name-input"
            v-model="form.name"
            placeholder="請輸入姓名"
          />
        </div>
      </div>
      <div class="mb-2 row">
        <label for="card-number-input" class="col-sm-2 col-form-label">卡號: </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="card-number-input"
            placeholder="請輸入卡號"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col text-center">
      <button type="button" class="btn-primary me-2" @click="backFn">返回</button>
      <button type="button" class="btn-primary" @click="confirmFn">送出</button>
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
    const form = reactive({
      name: ''
    });

    const backFn = () => {
      router.push('/');
    };

    const confirmFn = () => {
      document.cookie = `name=${form.name}; time=${new Date()};`;
    };
    // const cancelFn = () => {
    //   console.log('allCookies', document.cookie);
    // };

    return {
      form,
      message,
      backFn,
      confirmFn
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
