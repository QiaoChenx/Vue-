<template>
    <div>
        <NavType></NavType>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(item,index) of floorList" :key="item.id" :floorInfo='item'></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import {mapState} from 'vuex';
export default {
    name: "Home",
    components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted() {
        this.$store.dispatch('home/getFloorList');
    },
    computed: {
        ...mapState('home',['floorList'])
    }
};
</script>

<style>
</style>