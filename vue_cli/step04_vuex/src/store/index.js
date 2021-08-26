import Vue from 'vue'
import Vuex from 'vuex'

//Vue 에서 Vuex 를 사용 하도록 설정
Vue.use(Vuex)

//Vuex Store 객체를 생성해서 export 해 준다. 
export default new Vuex.Store({
    state:{
        fortuneToday:"동쪽으로 가면 귀인을 만나요",
        count: 0
    },
    mutations:{
        /*
            변경 함수에는 2개의 값을 전달 받을 수 있다
            첫 번째 값은 store 의 state 의 참조값이고
            두 번째 값은 전달된 payload(값)이다.
            이 함수를 store 외부에서 호출하기 위해서는

            store 의 참조값 commit(함수명, payload(값))

            와 같은 형식으로 호출하다.
        */

        CHANGE_FORTUNE(state, value) {
            state.fortuneToday = value;
        }
    },
    actions:{
        /*
            actions 함수에는 두개의 인자가 전달되는데
            첫 번째는 stroe 관련객체 {state:xxx, commit: function({}, ...}
            두 번째 값은 전달된 payload(값)이다.
        */
        changeFortuneAction({commit}, value){
            commit('CHANGE_FORTUNE', value);
        }
    },
    getters:{}
})