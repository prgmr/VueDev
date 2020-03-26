<template>
    <div>
        <router-link to="/settings">Settings</router-link>
        <hr/>

        <h1>Your score: {{ score }}</h1>
        <h3>Which city is hotter?</h3>
        <p v-if="loading">
            <city @pressEvent="getCityObj" :text="box1Text"></city>
            <city @pressEvent="getCityObj" :text="box2Text"></city>
        </p>
        <div v-if="showTemperature">
            <h1>{{gameResult}}</h1>
            <button @click="start">next cities</button>
        </div>
    </div>
</template>

<script>
    import City from "@/components/City";
    import {API} from "@/utils/api";

    export default {
        name: "Cities",
        components: {
            City
        },

        data() {
            return {
                showTemperature: false,
                gameResult: "",
                city1stObj: null,
                city2ndObj: null,
                pressedCityObj: null,
                loading: false
            };
        },

        methods: {
            async start() {
                const randomId1 = this.getRandomCityId();
                this.citiesIds.pop(randomId1)
                const randomId2 = this.getRandomCityId();
                this.citiesIds.pop(randomId2)
                this.city1stObj = await API.getWeatherByCityId(randomId1)
                this.city2ndObj = await API.getWeatherByCityId(randomId2)
                this.showTemperature = false
                this.loading = true;
            },

            getRandomCityId() {
                return this.citiesIds[
                    Math.floor(Math.random() * this.citiesIds.length)
                    ];
            },

            getCityObj(boxText) {
                this.showTemperature = true;
                const split = boxText.split(', ')
                const city = split[0]
                const country = split[1]
                this.pressedCityObj = [this.city1stObj, this.city2ndObj].find((el) => {
                    return el.name === city && el.sys.country === country
                })

                var cityMaxTemp;
                if (this.city1stObj.main.temp >= this.city2ndObj.main.temp) {
                    cityMaxTemp = this.city1stObj;
                } else {
                    cityMaxTemp = this.city2ndObj;
                }
                if (cityMaxTemp === this.pressedCityObj) {
                    this.gameResult = "YOU WON!";
                    this.$store.commit('ADD_SCORE')
                    this.$store.commit('SET_HISTORY', [this.box1Text, this.box2Text, true])
                } else {
                    this.gameResult = "YOU LOST!";
                    this.$store.commit('SET_HISTORY', [this.box1Text, this.box2Text, false])
                }
            },
        },

        computed: {
            citiesIds() {
                return this.$store.state.citiesIds;
            },

            box1Text() {
                if (this.showTemperature) {
                    return `${this.city1stObj.name}, ${this.city1stObj.sys.country}, ${this.temperature(this.city1stObj.main.temp)} ${this.unit}`
                }
                return `${this.city1stObj.name}, ${this.city1stObj.sys.country}`;
            },

            box2Text() {
                if (this.showTemperature) {
                    return `${this.city2ndObj.name}, ${this.city2ndObj.sys.country}, ${this.temperature(this.city2ndObj.main.temp)} ${this.unit}`
                }
                return `${this.city2ndObj.name}, ${this.city2ndObj.sys.country}`;
            },

            score() {
                return this.$store.state.score;
            },
            history() {
                return this.$store.state.history;
            },
            unit() {
                return this.$store.state.unit;
            },
            temperature() {
                return this.$store.getters.GET_TEMP_FOR_CUR_UNITS;
            }
        },

        async created() {
            if (!this.citiesIds.length) {
                this.$store.dispatch('LOAD_CITIES_IDS')
            }

            await this.start();
        },
    };
</script>

<style scoped>

</style>