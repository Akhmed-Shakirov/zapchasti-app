<template>
    <NuxtLayout>
        <div class="h-banner">
            <div class="container">
                <UiCarousel dots :timer="4">
                    <div v-for="item in banner" :key="item" class="h-banner__slider" :class="item.color">
                        <div class="h-banner__info">
                            <h2>{{ $t(item.name) }}</h2>
                            <p>{{ $t(item.text) }}</p>
                        </div>
                        <img :src="`/images/${item.img}`" :alt="item.img">
                    </div>
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

const banner = reactive([
    {
        img: 'card.png',
        name: 'allTypesOfSparePartsForSpecialEquipment',
        text: 'fromChinaOriginalDuplicates',
        color: 'orange'
    },
    {
        img: 'card2.png',
        name: 'allTypesOfSparePartsForSpecialEquipment',
        text: 'fromChinaOriginalDuplicates',
        color: 'blue'
    },
    {
        img: 'card3.png',
        name: 'allTypesOfSparePartsForSpecialEquipment',
        text: 'fromChinaOriginalDuplicates',
        color: 'green'
    }
])
</script>

<style lang="scss">
.h-banner {
    margin: 24px 0 64px;

    &__slider {
        min-width: 100%;
        min-height: 500px;
        padding: 35px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__info {
        max-width: 364px;

        h2 {
            margin-bottom: 16px;
        }

        p {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
        }
    }

    img {
        max-width: 50%;
        height: 100%;
        object-fit: contain;
    }

    .blue {
        background: #8FD8FD;
    }

    .orange {
        background: #FFD677;
    }

    .green {
        background: #15CF74;
    }
}
</style>
