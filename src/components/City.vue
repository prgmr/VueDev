<template>
    <div>
        <div @click="sendPressedCityObj" class="box">{{ text }}</div>
    </div>
</template>

<script>
    import {API} from '@/utils/api'

    export default {
        name: "City",

        props: {
            text: {
                type: String,
                required: true
            }
        },


        methods: {


            async getTemperature(city, country) {
                let result = await API.getWeatherByCityCountry(city, country);
                console.log(result)
                return result.temperature;
            },

            sendPressedCityObj() {
                this.$emit("pressEvent", this.text);
            }
        },

        computed: {


        }
    };
</script>

<style scoped>
    .box {
        width: 160px;
        height: 80px;
        border: black solid medium;
        background-color: beige;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        margin-bottom: 1em;
        line-height: 75px;
    }
</style>