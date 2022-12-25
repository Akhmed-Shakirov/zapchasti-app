<template>
    <NuxtLayout>
        <div class="h-banner" @mouseleave="() => toggleMenu(0)">
            <div class="container">
                <ul class="h-banner__menu h-banner__menu-left">
                    <li
                        v-for="item in main"
                        :key="item"
                        :class="{ 'li-active' : item.id === valueMenu }"
                        @click="() => toggleMenu(item.id)"
                    >
                        <div @mouseover="() => toggleMenu(item.id)" />
                        <BaseIcon :icon="item.icon" />
                        <p>{{ $t(item.name) }}</p>
                        <BaseIcon icon="chevron" />
                    </li>
                </ul>
                <div class="h-banner__wrapper">
                    <template v-for="item in main">
                        <div v-if="item.id === valueMenu" :key="item" class="h-banner__catalogs">
                            <div v-if="item.transport.length" class="h-banner__links">
                                <h3>{{ $t('transport') }}</h3>
                                <NuxtLink v-for="link in item.transport" :key="link" :to="`/products?categories=${link.id}`">
                                    {{ link.name }}
                                </NuxtLink>
                            </div>
                            <div v-if="item.spareParts.length" class="h-banner__links">
                                <h3>{{ $t('spareParts') }}</h3>
                                <NuxtLink v-for="link in item.spareParts" :key="link" :to="`/products?categories=${link.id}`">
                                    {{ link.name }}
                                </NuxtLink>
                            </div>
                            <div v-if="item.brands.length" class="h-banner__links">
                                <h3>{{ $t('brands') }}</h3>
                                <a v-for="link in item.brands" :key="link" :href="`http://${link.url}`" target="_blank">
                                    <!-- <img :src="link.image" :alt="link.name"> -->
                                    {{ link.name }}
                                </a>
                            </div>
                            <div v-if="!item.transport.length && !item.spareParts.length && !item.brands.length">
                                <h3>Нет товаров</h3>
                            </div>
                        </div>
                    </template>
                </div>

                <UiCarousel dots :timer="4" class="h-banner__main">
                    <div v-for="item in banner" :key="item" class="h-banner__slider" :class="item.color">
                        <div class="h-banner__info">
                            <h2>{{ $t(item.name) }}</h2>
                            <p>{{ $t(item.text) }}</p>
                        </div>
                        <img :src="`/images/${item.img}`" :alt="item.img">
                    </div>
                </UiCarousel>

                <div class="h-banner__menu h-banner__menu-right">
                    <h2>BLACK FRIDAY <br> -70%</h2>
                    <p>Скидка действует на определенные товары помеченные со скидкой</p>
                    <img src="/images/discount.png" alt="%">
                </div>
            </div>
        </div>

        <div class="h-big-catalog">
            <div class="container">
                <TheBigCatalog
                    v-for="bigCatalog in bigCatalogs"
                    :key="bigCatalog"
                    :value="bigCatalog"
                />
            </div>
        </div>

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
const { toggleToolbar, toggleWrapper } = useHelper()
const { main } = storeToRefs(useCatalog())

const valueMenu = ref(0)

const toggleMenu = (value) => {
    if (valueMenu.value !== value) {
        valueMenu.value = value
    } else {
        valueMenu.value = 0
    }
}

// Done
const bigCatalogs = reactive([
    {
        title: 'transport',
        text: 'Выбор более 100 производителей транспорта',
        links: [
            { name: 'specialEquipment', url: '/products?catalog=1&types=1', img: '/images/card.png' },
            { name: 'electricCars', url: '/products?catalog=5&types=1', img: '/images/card2.png' },
            { name: 'buses', url: '/products?catalog=4&types=1', img: '/images/card3.png' },
            { name: 'trucks', url: '/products?catalog=2&types=1', img: '/images/trucks.png' },
            { name: 'agriculturalMachinery?catalog=3&types=1', url: '/products', img: '/images/agriculturalMachinery.png' },
            { name: 'otherTransport', url: '/products?catalog=9&types=1', img: '/images/otherTransport.png' }
        ]
    },
    {
        title: 'spareParts',
        text: 'Большой выбор разовидностей запчастей для всех типов транспорта и техники',
        links: [
            { name: 'specialEquipment', url: '/products?catalog=9&types=2', img: '/images/spareParts1.png' },
            { name: 'electricCars', url: '/products?catalog=9&types=2', img: '/images/spareParts2.png' },
            { name: 'buses', url: '/products?catalog=9&types=2', img: '/images/card3.png' },
            { name: 'trucks', url: '/products?catalog=9&types=2', img: '/images/trucks2.png' },
            { name: 'agriculturalMachinery', url: '/products?catalog=9&types=2', img: '/images/agriculturalMachinery.png' },
            { name: 'otherTransport', url: '/products?catalog=9&types=2', img: '/images/otherTransport2.png' }
        ]
    }
])

const recommendationsCatalog = reactive([
    {
        title: 'electricCars',
        color: 'blue',
        catalog: {
            img: 'card2.png',
            name: 'largeSelectionOfElectricCars',
            text: '',
            url: '/products?catalog=5&types=1'
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
        title: 'specialEquipment',
        color: 'orange',
        catalog: {
            img: 'card.png',
            name: 'spareParts',
            text: '',
            url: '/products?catalog=1&types=1'
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

const banner = reactive([
    {
        img: 'banner1.png',
        name: 'Большой выбор автомобилей',
        text: 'Напрямую с завода из Китая',
        color: ''
    },
    {
        img: 'banner2.png',
        name: 'Электробайки, скутеры карты и много чего еще только у нас',
        text: 'С официальных заводов из Китая до вашего дома',
        color: 'black'
    },
    {
        img: 'banner3.png',
        name: 'Любой вид спецтехники и запчастей от лучших производителей',
        text: 'Оставьте заявку для подробной консультации',
        color: 'black'
    },
    {
        img: 'banner4.png',
        name: 'allTypesOfSparePartsForSpecialEquipment',
        text: 'fromChinaOriginalDuplicates',
        color: 'black'
    }
])
</script>

<style lang="scss">
.h-banner {
    margin: 24px 0 32px;

    .container {
        height: 400px;
        display: flex;
        justify-content: space-between;
        grid-gap: 16px;
        position: relative;
    }

    &__main {
        width: 100%;
        max-width: 818px;
    }

    &__wrapper {
        position: absolute;
        z-index: 2;
        left: 295px;
        width: calc(100% - 325px);
        box-shadow: 8px 16px 16px rgba(0, 0, 0, 0.16);
    }

    &__catalogs {
        display: flex;
        align-content: flex-start;
        grid-gap: 32px;
        padding: 16px 24px;
        background: #FFFFFF;
        width: 100%;
        min-height: 500px;
    }

    &__links {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        grid-gap: 8px;
        min-width: 216px;

        h3 {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            position: relative;
            left: -1px;
        }

        a {
            width: 200px;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;

            &:hover {
                color: #FEC80B;
            }
        }

        img {
            width: 151px;
            object-fit: contain;
            transition: .2s;

            &:hover {
                opacity: .5;
            }
        }

        .router-link-exact-active {
            // color: #FEC80B;

            &:hover {
                color: #FEC80B;
            }
        }
    }

    &__menu {
        padding: 8px 0;
        width: 265px;
        height: 100%;
        background: #FFFFFF;
        border-radius: 4px;
        display: flex;
        flex-direction: column;

        &-left {
            grid-gap: 9px;

            li {
                padding: 8px 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                grid-gap: 12px;
                cursor: pointer;
                user-select: none;
                position: relative;

                div {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                }

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

.li-active {
    background: #FEDF89;

    &:hover {
        p {
            color: #000000;
        }
    }
}

img {
    max-width: 50%;
    height: 100%;
    object-fit: contain;
}

        }

        &-right {
            position: relative;
            background: #101828;
            padding: 18px;
            padding-right: 36px;

            h2 {
                font-weight: 600;
                font-size: 60px;
                line-height: 72px;
                letter-spacing: -0.02em;
                color: #FFFFFF;
                margin-bottom: 10px;
            }

            p {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #FFFFFF;
            }

            img {
                position: absolute;
                z-index: 0;
                bottom: 0;
                right: 0;
            }
        }
    }

    &__info {
        position: relative;
        z-index: 1;
        max-width: 455px;

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

    &__slider {
        min-width: 100%;
        height: 400px;
        padding: 24px 36px;
        display: flex;
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .black {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 38.01%, rgba(0, 0, 0, 0) 91.08%);

        h2, p {
            color: #FFFFFF;
        }
    }
}

.h-big-catalog {
    margin-bottom: 28px;

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
    }
}
</style>
