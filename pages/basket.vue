<template>
    <NuxtLayout>
        <div class="b-basket">
            <HtmlTitle end-menu="basket" />
            <div class="container">
                <template v-if="true">
                    <h1>{{ $t('basket') }}</h1>
                    <div class="b-basket__content">
                        <div class="b-basket__items">
                            <div class="b-basket__head">
                                <button>
                                    <UiCheckbox :is-active="true" />
                                    {{ $t('chooseAll') }}
                                </button>
                                <button>
                                    {{ $t('deleteSelected') }}
                                </button>
                            </div>
                            <div class="b-basket__body">

                                <div v-for="basket in baskets" :key="basket" class="b-basket__item">
                                    <div class="b-basket__item-choose">
                                        <UiCheckbox :is-active="basket.isCheck" />
                                        <img src="/images/card.png" alt="propduct">
                                    </div>
                                    <div class="b-basket__item-title">
                                        <p>{{ basket.name }}</p>
                                        <h3>{{ basket.brands }}</h3>
                                    </div>
                                    <h4>{{ basket.price }}</h4>
                                    <UiSelect v-model="basket.amount" :options="amountOptions" />
                                </div>

                            </div>
                        </div>
                        <div class="b-basket__buy">
                            <button>
                                {{ $t('checkout') }}
                            </button>
                            <div class="hr" />
                            <p>
                                <span>{{ $t('yourCart') }}</span>
                                <samp>1 товар</samp>
                            </p>
                            <div class="b-basket__buy-count">
                                <span>{{ $t('products') + ` (${1})` }}</span>
                                <p>1 640 567 ₸</p>
                            </div>

                            <div class="hr" />
                            <p>
                                <span>{{ $t('totalCost') }}</span>
                                <span>1 640 567 ₸</span>
                            </p>
                        </div>
                    </div>
                </template>
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
        1, 1, 1
    ]
})

const baskets = reactive([
    { isCheck: false, name: 'Бортовой автомобиль со шторным механизмом открытия тента HYUNDAI Myghty EX 8', brands: 'SHACHUNG', price: '1 640 567 ₸', amount: 1 }
])

const amountOptions = reactive([
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '5+', value: '5+' }
])
</script>

<style scoped lang="scss">
.b-basket {
    background: #F2F4F7;
    min-height: 400px;
    margin-bottom: 48px;
    padding-bottom: 48px;

    &__item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        grid-gap: 32px;

        &-choose {
            display: flex;
            align-items: center;
            grid-gap: 16px;

            img {
                width: 171px;
                height: 171px;
                background: #FCFCFD;
                object-fit: contain;
            }
        }

        &-title {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 171px;
            width: 315px;
            padding-bottom: 20px;

            p {
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: #101828;
            }

            h3 {
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #667085;
            }
        }

        h4 {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #101828;
        }

        &:deep(.select) {
            width: 133px;
        }
    }

    &__head {
        padding: 10px 16px;
        border-bottom: 1px solid #E4E7EC;
        display: flex;
        align-items: center;
        grid-gap: 24px;

        button {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;

            &:first-child {
                display: flex;
                align-items: center;
                grid-gap: 12px;
                color: #101828;
            }
            &:last-child {
                color: #F04438;
            }

            &:hover {
                opacity: .5;
            }
        }
    }

    &__body {
        padding: 16px;
        display: flex;
        flex-direction: column;
        grid-gap: 6px;
    }

    &__items {
        width: calc(70% - 16px);
        background: #FFFFFF;
        border-radius: 4px;
    }

    &__buy {
        width: 30%;
        background: #FFFFFF;
        border-radius: 4px;
        padding: 24px 16px;

        button {
            width: 100%;
            background: #12B76A;
            border: 1px solid #12B76A;
            border-radius: 8px;
            padding: 14px 32px;

            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;

            &:hover {
                background: transparent;
                color: #12B76A;
            }
        }

        p {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #101828;
            }

            samp {
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: #667085;
            }
        }

        &-count {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 12px;

            span {
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: #667085;
            }

            p {
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #101828;
            }
        }

        .hr {
            width: 100%;
            height: 1px;
            background: #E4E7EC;
            margin: 24px 0;
        }
    }

    h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #101828;
        margin-bottom: 12px;
    }

    &__content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        grid-gap: 16px;
    }

    &__empty {

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
