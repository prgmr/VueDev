<template>
    <div>
        <router-link to="/settings">Settings</router-link>
        <hr/>

        <h1>Your score: {{ score }}</h1>
        <h3>Which city is hotter?</h3>
        <p>
            <city @click.prevent.stop @pressEvent="getCityObj" :text="box1Text"></city>
            <city @click.prevent.stop @pressEvent="getCityObj" :text="box2Text"></city>
        </p>
        <div v-if="showTemperature">
            <h1>{{gameResult}}</h1>
            <button @click="start">next cities</button>
        </div>
    </div>
</template>

<script>
    import City from "@/components/City";

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
                pressedCityObj: null
            };
        },

        methods: {
            start() {
                this.city1stObj = this.getRandomCity();
                this.city2ndObj = this.getRandomCity();
                this.showTemperature = false
            },

            getRandomCity() {
                return this.allCities[
                    Math.floor(Math.random() * this.allCities.length)
                    ];
            },

            getCityObj(boxText) {
                this.showTemperature = true;
                const split = boxText.split(', ')
                const city = split[0]
                const country = split[1]
                this.pressedCityObj = [this.city1stObj, this.city2ndObj].find((el) => {
                    return el.city === city && el.country === country
                })

                var cityMaxTemp;
                if (this.city1stObj.temperature >= this.city2ndObj.temperature) {
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
            allCities() {
                return this.$store.state.allCities;
            },

            box1Text() {
                if (this.showTemperature) {
                    return `${this.city1stObj.city}, ${this.city1stObj.country}, ${this.temperature(this.city1stObj.temperature)} ${this.unit}`
                }
                return `${this.city1stObj.city}, ${this.city1stObj.country}`;
            },

            box2Text() {
                if (this.showTemperature) {
                    return `${this.city2ndObj.city}, ${this.city2ndObj.country}, ${this.temperature(this.city2ndObj.temperature)} ${this.unit}`
                }
                return `${this.city2ndObj.city}, ${this.city2ndObj.country}`;
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

        created() {
            if (!this.allCities.length) {
                this.$store.dispatch("LOAD_CITIES");
            }

            this.start();
        },

        mounted() {
            // this.$store.dispatch('SET_1ST_CITY_PER_ROUND', this.city1stObj)
            this.$store.dispatch("DEL_CITY", this.city1stObj)

            // this.$store.dispatch('SET_2ND_CITY_PER_ROUND', this.city2ndObj)
            this.$store.dispatch("DEL_CITY", this.city2ndObj)
        },
    };
</script>

<style scoped>

</style>