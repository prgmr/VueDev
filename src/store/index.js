import Vue from 'vue';
import Vuex from 'vuex';
import {API} from '@/utils/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: 0,
        allCities: [],
        unit: '℃',
        history: [],
        error: null,

        city1stObj: null,
        city2ndObj: null,
        pressedCityObj: null,
    },

    getters: {
        GET_SCORE: state => {
            return state.score
        },
        GET_CITIES: state => {
            return state.allCities
        },
        GET_UNITS: state => {
            return state.units
        },
        GET_TEMP_FOR_CUR_UNITS: (state) => (t) => {
            if (state.unit === '℃') {
                return t
            } else {
                return t * 9 / 5 + 32;
            }
        },
        GET_HISTORY: state => {
            return state.history
        }
    },

    mutations: {
        ADD_SCORE: state => {
            state.score++
        },
        SET_CITIES: (state, cities) => {
            (state.allCities = cities)
        },
        DEL_CITY: (state, delCityObj) => {
            const index = state.allCities.indexOf(delCityObj);
            state.allCities.splice(index, 1);
        },
        SET_UNITS: (state, unit) => {
            (state.unit = unit)
        },
        SET_HISTORY: (state, game) => {
            (state.history.push(game))
        },
        SET_ERROR: (state, error) => {
            (state.error = error)
        },

        SET_1ST_CITY: (state, cityObj) => {
            (state.city1stObj = cityObj)
        },

        SET_2ND_CITY: (state, cityObj) => {
            (state.city2ndObj = cityObj)
        }
    },

    actions: {
        LOAD_CITIES: (context) => {
            let allCities = API.getAllCities();
            context.commit('SET_CITIES', allCities)
        },

        DEL_CITY: (context, delCityObj) => {
            context.commit('DEL_CITY', delCityObj)
        },

        SET_UNITS: (context, payload) => {
            context.commit('SET_UNITS', payload)
        },

        SET_1ST_CITY_PER_ROUND: (context, payload) => {
            context.commit('SET_1ST_CITY', payload)
        },
        SET_2ND_CITY_PER_ROUND: (context, payload) => {
            context.commit('SET_2ND_CITY', payload)
        }


    }
})