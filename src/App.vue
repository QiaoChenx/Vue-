<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer v-show="$route.meta.show == true"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    name: "App",
    data() {
        return {
        }
    },
    components: {
        Header,
        Footer,
    },
    mounted() {
        this.$store.dispatch("home/getCategoryList");
    },
};
</script>

<style>
</style>