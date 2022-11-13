<template>
    <NuxtLayout>
        <div class="h-banner">
            <div class="container">
                <ul class="h-banner__menu">
                    <li v-for="item in catalog" :key="item" @click="() => toggleMenu(item.value)">
                        <span />
                        <p>{{ $t(item.name) }}</p>
                        <BaseIcon icon="chevron" />
                    </li>
                </ul>
                <UiCarousel dots :timer="4" class="h-banner__main">
                    <div v-for="item in banner" :key="item" class="h-banner__slider" :class="item.color">
                        <div class="h-banner__info">
                            <h2>{{ $t(item.name) }}</h2>
                            <p>{{ $t(item.text) }}</p>
                        </div>
                        <img :src="`/images/${item.img}`" :alt="item.img">
                    </div>
                </UiCarousel>
                <div class="h-banner__menu" />
            </div>
        </div>

        <!-- <BaseRecommendation
            v-for="item in recommendations"
            :key="item"
            :title="item.title"
            :color="item.color"
            :catalog="item.catalog"
            :items="item.items"
        /> -->

        <BaseRecommendationCatalog
            v-for="item in recommendationsCatalog"
            :key="item"
            :title="item.title"
            :color="item.color"
            :catalog="item.catalog"
            :items="item.items"
            :link="item.link"
        />
    </NuxtLayout>
</template>

<script setup>
const { isToolbar } = storeToRefs(useHelper())
const { toggleToolbar, toggleWrapper, setCatalog } = useHelper()

const toggleMenu = (value) => {
    toggleToolbar()
    toggleWrapper()
    setCatalog(value)
}

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

const recommendationsCatalog = reactive([
    {
        title: 'specialEquipment',
        color: 'blue',
        catalog: {
            img: 'card2.png',
            name: 'largeSelectionOfElectricCars',
            text: '',
            url: '/products'
        },
        items: [
            {
                url: '/products',
                name: 'sedan',
                img: 'sedan.png'
            },
            {
                url: '/products',
                name: 'crossover',
                img: 'crossover.png'
            },
            {
                url: '/products',
                name: 'SUV',
                img: 'SUV.png'
            },
            {
                url: '/products',
                name: 'hatchback',
                img: 'hatchback.png'
            },
            {
                url: '/products',
                name: 'coupe',
                img: 'coupe.png'
            },
            {
                url: '/products',
                name: 'minivan',
                img: 'minivan.png'
            },
            {
                url: '/products',
                name: 'pickup',
                img: 'pickup.png'
            },
            {
                url: '/products',
                name: 'cabriolet',
                img: 'cabriolet.png'
            },
            {
                url: '/products',
                name: 'stationWagon',
                img: 'stationWagon.png'
            }
        ],
        link: 'allModels'
    },
    {
        title: 'electricCars',
        color: 'orange',
        catalog: {
            img: 'card.png',
            name: 'spareParts',
            text: '',
            url: '/products'
        },
        items: [
            {
                url: '/products',
                name: 'dumpTrucksAndTractors',
                img: 'dumpTrucksAndTractors.png'
            },
            {
                url: '/products',
                name: 'concreteMixerTrucks',
                img: 'concreteMixerTrucks.png'
            },
            {
                url: '/products',
                name: 'bulldozers',
                img: 'bulldozers.png'
            },
            {
                url: '/products',
                name: 'forklifts',
                img: 'forklifts.png'
            },
            {
                url: '/products',
                name: 'loaders',
                img: 'loaders.png'
            },
            {
                url: '/products',
                name: 'excavators',
                img: 'excavators.png'
            },
            {
                url: '/products',
                name: 'asphaltPavers',
                img: 'asphaltPavers.png'
            },
            {
                url: '/products',
                name: 'concretePumps',
                img: 'concretePumps.png'
            },
            {
                url: '/products',
                name: 'graders',
                img: 'graders.png'
            }
        ],
        link: 'allTypes'
    }
])

const catalog = reactive([
    {
        name: 'specialEquipment',
        value: 1
    },
    {
        name: 'trucks',
        value: 2
    },
    {
        name: 'agriculturalMachinery',
        value: 3
    },
    {
        name: 'buses',
        value: 4
    },
    {
        name: 'electricCars',
        value: 5
    },
    {
        name: 'electricalGoods',
        value: 6
    },
    {
        name: 'spareParts',
        value: 7
    },
    {
        name: 'allCategories',
        value: 8
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

    .container {
        height: 400px;
        display: flex;
        justify-content: space-between;
        grid-gap: 16px;
    }

    &__slider {
        min-width: 100%;
        height: 400px;
        padding: 35px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__main {
        width: 100%;
        max-width: 818px;
    }

    &__info {
        max-width: 320px;

        h2 {
            margin-bottom: 16px;
            font-weight: 500;
            font-size: 30px;
            line-height: 38px;
            color: #000000;
        }

        p {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
        }
    }

    &__menu {
        padding: 16px;
        width: 265px;
        height: 100%;
        background: #FFFFFF;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        grid-gap: 16px;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            grid-gap: 8px;
            cursor: pointer;
            user-select: none;

            span {
                display: inline-block;
                width: 32px;
                height: 32px;
                background: #F2F4F7;
                border-radius: 4px;
            }

            p {
                flex: 1 1 auto;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                transition: .2s;
            }

            .chevron {
                transform: rotate(-90deg);
            }

            &:hover {
                p {
                    color: #FFDA33;
                }
            }
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
