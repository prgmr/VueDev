import Vue from 'vue';
import Vuex from 'vuex';
import {API} from '@/utils/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: 0,
        allCities: [],
        citiesIds: [],
        unit: '℃',
        history: [],
        error: null,
    },

    getters: {
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
        SET_CITIES_IDS: (state, ids) => {
            (state.citiesIds = ids)
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
    },

    actions: {
        LOAD_CITIES: (context) => {
            let allCities = API.getAllCities();
            context.commit('SET_CITIES', allCities)
        },

        LOAD_CITIES_IDS: (context) => {
            let ids = API.select100RandomsIds()
            context.commit('SET_CITIES_IDS', ids)
        },

        DEL_CITY: (context, delCityObj) => {
            context.commit('DEL_CITY', delCityObj)
        },

        SET_UNITS: (context, payload) => {
            context.commit('SET_UNITS', payload)
        },
    }
})