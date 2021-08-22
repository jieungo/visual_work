import Vue from 'vue'
import App from './App.vue'

/*

  ./test 폴더를 import 하게 된다면
  그 안에 있는 index.js 파일로 부터 import 한다는 의미이다.

  즉, /test/index.js 에서 export default 해주는 객체를
  a 라는 이름으로 사용하겠다는 의미

  */
  import a from "./test";
  a.drive();

  // router 폴더 안에 index.js 파일에서 export 해주는 객체를 router 라는 이름으로 사용하겠다
  import router from "./router";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
