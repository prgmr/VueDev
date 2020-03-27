<template>
    <div>
        <router-link to="/">back</router-link>
        <hr/>
        <h1>Show in</h1>
        <form>
            <input @change="setUnit" type="radio" name="view" value="℃" :checked="unit === '℃'"/>℃
            <input @change="setUnit" type="radio" name="view" value="℉" :checked="unit === '℉'"/>℉
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
            setUnit(event) {
                this.$store.dispatch('SET_UNITS', event.target.value)
            },
        }
    };
</script>

<style scoped>

</style>