<template>
    <NuxtLayout>
        <div class="h-banner">
            <div class="container">
                <UiCarousel>
                    <div class="h-banner__slider h-banner__slider-orange">
                        1
                    </div>
                    <!-- <div class="h-banner__slider h-banner__slider-blue">
                        2
                    </div>
                    <div class="h-banner__slider h-banner__slider-green">
                        3
                    </div> -->
                </UiCarousel>
            </div>
        </div>

        <BaseRecommendation
            v-for="item in recommendations"
            :key="item"
            :title="item.title"
            :color="item.color"
            :catalog="item.catalog"
            :items="item.items"
        />
    </NuxtLayout>
</template>

<script setup>
const recommendations = reactive([
    {
        title: 'saleOfElectricCarsSpareParts',
        color: 'blue',
        catalog: {
            img: 'card2.png',
            name: 'largeSelectionOfElectricCars',
            text: '',
            url: '/products'
        },
        items: []
    },
    {
        title: 'sparePartsForSpecialEquipment',
        color: 'orange',
        catalog: {
            img: 'card.png',
            name: 'spareParts',
            text: 'fromChinaOriginalDuplicates',
            url: '/products'
        },
        items: []
    },
    {
        title: 'sparePartsForElectricBuses',
        color: 'green',
        catalog: {
            img: 'card3.png',
            name: 'spareParts',
            text: 'fromChinaOriginalDuplicates',
            url: '/products'
        },
        items: []
    }
])
</script>

<style lang="scss">
.h-banner {
    margin: 24px 0 64px;

    &__slider {
        height: 500px;

        &-blue {
            background: #8FD8FD;
        }

        &-orange {
            background: #FFD677;
        }

        &-green {
            background: #15CF74;
        }
    }
}
</style>
