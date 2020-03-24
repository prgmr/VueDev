<template>
    <div>
        <div class="box">{{ round[0].city }}, {{ round[0].country }}, {{ round[0].temperature }}</div>
        <div class="box">{{ round[1].city }}, {{ round[1].country }}, {{ round[1].temperature }}</div>
        <span>{{ round[2] ? '✓' : '✕' }}</span>
    </div>
</template>

<script>
    export default {
        name: "Box",
        props: {
            round: {
                required: true
            }
        },
    }
</script>

<style scoped>
    .box {
        width: 140px;
        height: 30px;
        border: black solid medium;
        background-color: beige;
        text-align: center;
        vertical-align: middle;
        line-height: 25px;
        display: inline-block;
        margin-bottom: 1em;
    }
</style>