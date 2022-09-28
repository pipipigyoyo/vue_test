import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { nanoid } from "nanoid";
Vue.use(Vuex)
const constOption = {
    namespaced: true,
    actions: {
        /* jia(context, val) {
            context.commit('JIA', val)
        },
        jian(context, val) {
            context.commit('JIAN', val)
        }, */
        jiaodd(context, val) {
            context.commit('JIAODD', val)
        },
        jiawait(context, val) {
            context.commit('JIAWAIT', val)
        },
    },
    mutations: {
        JIA(state, val) {
            state.sum += val
        },
        JIAN(state, val) {
            state.sum -= val
        },
        JIAODD(state, val) {
            if (state.sum % 2) {
                state.sum += val
            }
        },
        JIAWAIT(state, val) {
            setTimeout(() => { state.sum += val }, 500)
        },
    },
    state: { sum: 0, myname: 'yoyo', school: '清华' },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

const personsOption = {
    namespaced: true,
    actions: {
        sendRequest(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('JIAYONGHU', { id: nanoid(), username: response.data })
                },
                error => {
                    console.log(error.massage);
                }
            )
        }
    },
    mutations: {
        JIAYONGHU(state, val) {
            state.personList.push(val)
        }
    },
    state: { personList: [] }
}


export default new Vuex.Store({
    modules: {
        countAbout: constOption,
        personsAbout: personsOption
    }
})