<template>
    <div>
        <div class="box">{{ round[0] }}</div>
        <div class="box">{{ round[1] }}</div>
        <span>{{ round[2] ? '✓' : '✕' }}</span>
    </div>
</template>

<script>
    export default {
        name: "Box",
        props: {
            round: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>
    .box {
        width: 170px;
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