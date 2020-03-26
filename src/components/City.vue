<template>
    <div>
        <div @click="sendPressedCityObj" class="box">{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: "City",

        props: {
            text: {
                type: String,
                required: true
            }
        },

        methods: {
            sendPressedCityObj() {
                this.$emit("pressEvent", this.text);
            }
        },

        computed: {}
    };
</script>

<style scoped>
    .box {
        width: 250px;
        height: 100px;
        border: black solid medium;
        background-color: beige;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        margin-bottom: 1em;
        line-height: 75px;
    }
</style>