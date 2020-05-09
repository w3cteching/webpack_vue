<template>
    <div>
        <h2 class="bg">这是Home组件---{{ count }}</h2>
        <button @click="add">递增</button>
    </div>
</template>

<script>
export default {
    name:'home',
    computed:{
        count() {
            return this.$store.state.count;
        }
    },
    methods:{
        add() {
            this.$store.dispatch('increment')
        }
    }
}
</script>

<style lang="scss" scoped>
$bg:#00f;

.bg {
    background:$bg;
    color:#fff;
}



</style>