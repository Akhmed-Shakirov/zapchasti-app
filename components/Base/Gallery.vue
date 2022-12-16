<template>
    <div class="gallery">
        <Carousel
            id="gallery"
            ref="carousel2"
            v-model="currentSlide"
            :items-to-show="1"
            :wrap-around="false"
        >
            <Slide v-for="(slide, index) in images" :key="slide">
                <img :src="slide" class="gallery__main" alt="card" @click="() => showImg(index)">
            </Slide>
        </Carousel>
        <Carousel
            id="thumbnails"
            ref="carousel"
            v-model="currentSlide"
            :items-to-show="5"
            :wrap-around="true"
        >
            <Slide v-for="(slide, index) in images" :key="slide">
                <img :src="slide" class="gallery__mini" alt="card" @click="() => slideTo(index)">
            </Slide>
        </Carousel>
        <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="images"
            :index="indexRef"
            @hide="onHide"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    images: Array
})

const visibleRef = ref(false)
const indexRef = ref(0)

const showImg = (index) => {
    indexRef.value = index
    visibleRef.value = true
}
const onHide = () => {
    visibleRef.value = false
}
const currentSlide = ref(0)

const carousel = ref()
const carousel2 = ref()

const slideTo = (val) => {
    currentSlide.value = val
}

function updateSlideWidth () {
    if (!root.value) {
        return
    }
    const rect = root.value.getBoundingClientRect()
    slideWidth.value = rect.width / config.itemsToShow
}
onMounted(() => {
    setTimeout(() => {
        carousel.value.updateSlideWidth()
        carousel2.value.updateSlideWidth()
    }, 200)
})
</script>

<style lang="scss">
.gallery {

    #gallery {
        background: #E4E7EC;
    }

    #thumbnails {
        border: 1px solid #E4E7EC;
    }

    &__main {
        padding: 20px;
        max-width: 911px;
        max-height: 500px;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    &__mini {
        padding: 5px;
        max-width: 182px;
        max-height: 100px;
        height: 100%;
        width: 100%;
        object-fit: contain;
        border-right: 1px solid #E4E7EC;
    }
}
</style>
