import Vue from 'vue'
import App from './App14.vue'

Vue.config.productionTip = false

// router 폴더 안에 index.js 파일에서 export 해주는 객체를 router 라는 
// 이름으로 사용 하겠다 
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')