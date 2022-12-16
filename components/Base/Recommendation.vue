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
                <BaseGrid>
                    <TheCard v-for="item in items" :key="item" />
                </BaseGrid>
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
            return [
                1, 1, 1
            ]
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
        flex-wrap: wrap;
        justify-content: space-between;
        grid-gap: 24px;
    }

    &__catalog {
        position: relative;
        padding: 24px 16px 16px;
        width: 290px;
        min-height: 417px;
        border-radius: 8px;

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
            font-weight: 600;
            font-size: 36px;
            line-height: 42px;
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

    // &__items {
    //     display: flex;
    //     flex-wrap: wrap;
    //     align-items: center;
    //     grid-gap: 24px;

    //     .asd {
    //         width: 339px;
    //     }
    // }
}
</style>
