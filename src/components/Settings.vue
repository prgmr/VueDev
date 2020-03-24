<template>
    <div>
        <router-link to="/">back</router-link>
        <hr/>
        <h1>Show in</h1>
        <form v-if="unit === '℃'">
            <input @change="setVal" type="radio" name="view" value="℃" checked/>℃
            <input @change="setVal" type="radio" name="view" value="℉"/>℉
        </form>
        <form v-else>
            <input @change="setVal" type="radio" name="view" value="℃"/>℃
            <input @change="setVal" type="radio" name="view" value="℉" checked/>℉
        </form>

        <h1>History</h1>
        <box v-for="(item, index) in history" :key="index" :round="item"></box>
    </div>
</template>

<script>
    import Box from "@/components/Box";

    export default {
        name: "Settings",
        components: {
            Box
        },
        computed: {
            unit() {
                return this.$store.state.unit;
            },
            history() {
                return this.$store.state.history;
            },
        },

        methods: {
            setVal(event) {
                this.$store.dispatch('SET_UNITS', event.target.value)
            },
        }
    };
</script>

<style scoped>

</style>