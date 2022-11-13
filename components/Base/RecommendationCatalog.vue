<template>
    <section class="recommendation">
        <div class="container">
            <h2>{{ $t(title) }}</h2>
            <div class="recommendation__main">
                <div class="recommendation__catalog" :class="`recommendation__catalog-${color}`">
                    <img :src="`/images/${catalog.img}`" :alt="catalog.img">
                    <h3>{{ $t(catalog.name) }}</h3>
                    <p v-if="catalog.text">
                        {{ $t(catalog.text) }}
                    </p>
                    <NuxtLink :to="catalog.url">
                        <UiButton value="viewAll" blue />
                    </NuxtLink>
                </div>
                <div class="recommendation__items">
                    <NuxtLink
                        v-for="item in items"
                        :key="item"
                        :to="item.url"
                        class="recommendation__link"
                    >
                        <img :src="`/images/catalog/${item.img}`" :alt="item.name">
                        <span>{{ $t(item.name) }}</span>
                    </NuxtLink>
                    <NuxtLink
                        class="recommendation__link-all"
                    >
                        <BaseIcon icon="arrow" />
                        <span>{{ $t(link) }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'blue'
    },
    catalog: {
        type: Object,
        default () {
            return {}
        }
    },
    items: {
        type: Array,
        default () {
            return []
        }
    }
})
</script>

<style scoped lang="scss">
.recommendation {
    margin-bottom: 48px;

    h2 {
        margin-bottom: 24px;
    }

    &__main {
        width: 100%;
        display: flex;
        justify-content: space-between;
        grid-gap: 24px;
    }

    &__catalog {
        position: relative;
        padding: 24px 16px 16px;
        width: 290px;
        min-height: 400px;

        &-blue {
            background: #8FD8FD;
        }

        &-orange {
            background: #FFD677;
        }

        &-green {
            background: #15CF74;
        }

        img {
            width: 100%;
            height: 173px;
            object-fit: contain;
        }

        h3 {
            font-weight: 500;
            font-size: 30px;
            line-height: 38px;
            color: #000000;
            margin: 12px 0;
        }

        p {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
        }

        .btn {
            position: absolute;
            margin: 16px;
            bottom: 0;
            left: 0;
            width: 257px;
        }
    }

    &__items {
        max-width: 1064px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: .7px;
        background: #E4E7EC;
    }

    &__link {
        width: 100%;
        padding: 22px;
        background: #FFFFFF;
        position: relative;

        &:hover {
            opacity: .7;
        }

        span {
            position: absolute;
            bottom: 16px;
            color: #344054;
            font-size: 16px;
            line-height: 24px;
        }

        &-all {
            background: #FEC80B;
            grid-gap: 12px;

            .arrow {
                width: 48px;
                height: 48px;
                transform: rotate(180deg);
                background: #FFFFFF;
                transition: .2s;
            }

            span {
                font-size: 18px;
                line-height: 28px;
                color: #FFFFFF;
            }

            &:hover {
                background: #e1e0d9;

                .arrow {
                    background: #344054;
                }

                span {
                    color: #344054;
                }
            }
        }

        &, &-all {
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: .2s;

            img {
                object-fit: cover;
                max-height: 138px;
                margin-bottom: 20px;
                transition: .2s;
            }

            span {
                text-align: center;
                font-weight: 500;
                transition: .2s;
            }
        }
    }
}
</style>
