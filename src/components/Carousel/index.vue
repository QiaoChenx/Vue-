<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide"
                v-for="carousel of carouselList"
                :key="carousel.id"
            >
                <img :src="carousel.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "Carousel",
    props: ["carouselList"],
    watch: {
        carouselList: {
            handler() {
                this.$nextTick(() => {
                    new Swiper(".swiper-container", {
                        loop: true, // 循环模式选项

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },

                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    });
                });
            },
        },
    },
};
</script>

<style>
</style>
