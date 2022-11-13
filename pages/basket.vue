<template>
    <NuxtLayout>
        <div class="b-basket">
            <HtmlTitle end-menu="basket" />
            <div class="container">
                <div v-if="false" class="b-basket__items">
                    d
                </div>
                <div v-else class="b-basket__empty">
                    <h1>{{ $t('cartIsEmpty') }}</h1>
                    <p>{{ $t('basketText1') }}</p>
                    <p>{{ $t('basketText2') }} – <NuxtLink>{{ $t('basketText4') }}</NuxtLink> , {{ $t('basketText3') }}</p>
                </div>
            </div>
        </div>

        <BaseRecommendation
            :title="recommendation.title"
            :color="recommendation.color"
            :catalog="recommendation.catalog"
            :items="recommendation.items"
        />
    </NuxtLayout>
</template>

<script setup>
const recommendation = reactive({
    title: 'sparePartsForSpecialEquipment',
    color: 'orange',
    catalog: {
        img: 'card.png',
        name: 'spareParts',
        text: 'fromChinaOriginalDuplicates',
        url: '/products'
    },
    items: [
        1, 1, 1, 1, 1, 1
    ]
})
</script>

<style lang="scss">
.b-basket {
    background: #F2F4F7;
    min-height: 400px;
    margin-bottom: 48px;

    &__empty {

        h1 {
            font-weight: 600;
            font-size: 36px;
            line-height: 44px;
            letter-spacing: -0.02em;
            color: #101828;
            margin-bottom: 12px;
        }

        p, a {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #101828;
        }

        a {
            color: #1570EF;

            &:hover {
                color: #FFDA33;
            }
        }
    }
}
</style>
