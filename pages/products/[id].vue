<template>
    <NuxtLayout>
        <HtmlTitle code title="palfinger" :links="[ { name: 'categories', value: 'categories' } ]" />
        <div class="product">
            <div class="container">
                <div class="product__info">
                    <BaseGallery />
                    <div class="product__description">
                        <div class="product__stock" :class="{ 'product__stock-grin' : isStock, 'product__stock-red' : !isStock }">
                            {{ isStock ? $t('inStock') : $t('notAvailable') }}
                        </div>

                        <div class="product__price">
                            <div class="product__price-old">
                                1 320 650 ₸
                            </div>
                            <p><span>{{ $t('from') }}</span> 1 320 650 ₸</p>
                        </div>

                        <div class="product__buttons">
                            <UiButton icon="basket" value="addBasket" />
                        </div>

                        <p class="product__info-p">
                            Оставьте заявку и мы перезвоним вам в ближайшее время
                        </p>

                        <div class="product__helper">
                            <button>
                                <BaseIcon icon="like" />
                                {{ $t('toFavorites') }}
                            </button>
                            <button>
                                <BaseIcon icon="share" />
                                {{ $t('share') }}
                            </button>
                        </div>

                        <div class="product__manufacturer">
                            {{ $t('bodyManufacturer') }}: <span>PULLGINGER</span>
                        </div>

                        <div class="product__link">
                            {{ $t('paymentDeliveryRules') }}
                        </div>
                        <div class="product__link product__link-mb">
                            {{ $t('returnPolicy') }}
                        </div>
                    </div>
                </div>

                <div class="product__tabs">
                    <div class="product__tabs-head">
                        <button :class="{ 'active' : tab === 1 }" @click="() => toggleTab(1)">
                            {{ $t('characteristics') }}
                        </button>
                        <button :class="{ 'active' : tab === 2 }" @click="() => toggleTab(2)">
                            {{ $t('reviews') }}
                        </button>
                        <button :class="{ 'active' : tab === 3 }" @click="() => toggleTab(3)">
                            {{ $t('salesman') }}
                        </button>
                    </div>

                    <div v-if="tab === 1" class="product__tabs-body">
                        <h3>Описание</h3>
                        <h5>Бортовой автомобиль со шторным механизмом открытия тента HYUNDAI Myghty EX 8</h5>

                        <h3>Характеристики</h3>
                        <div class="product__block">
                            <h4>Общие характеристики</h4>
                            <div class="product__block-info">
                                <div class="product__text">
                                    <p>Габариты ТС</p><span /><p>6650х2380х3550 мм</p>
                                </div>
                                <div class="product__text">
                                    <p>Грузоустойчивость</p><span /><p>5335 кг</p>
                                </div>
                                <div class="product__text">
                                    <p>Внутренний объём</p><span /><p>22 м3</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="tab === 2" class="product__tabs-body">
                        <TheReview />
                        <TheReview />
                        <TheReview />

                        <div class="product__tabs-btn">
                            <button>Показать еще</button>
                        </div>
                    </div>

                    <div v-if="tab === 3" class="product__tabs-body">
                        <TheSalesman />
                    </div>
                </div>

                <div class="product__slider">
                    <div class="product__slider-info">
                        <div class="product__slider-content">
                            <h3>Подходящие запчасти</h3>
                            <NuxtLink to="/products">
                                Посмотреть все
                            </NuxtLink>
                        </div>
                        <div class="product__slider-content">
                            <BaseIcon class="product__slider-prev" icon="arrow" />
                            <BaseIcon class="product__slider-next" icon="arrow" />
                        </div>
                    </div>

                    <UiCarousel arrow :show="4" :scroll="2" :gap="24" :timer="4" prev="product__slider-prev" next="product__slider-next">
                        <TheCard stock :is-stock="false" />
                        <TheCard />
                        <TheCard stock :is-stock="true" />
                        <TheCard stock :is-stock="false" />
                        <TheCard />
                        <TheCard stock :is-stock="true" />
                        <TheCard stock :is-stock="false" />
                        <TheCard />
                        <TheCard stock :is-stock="true" />
                    </UiCarousel>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const isStock = ref(false)

const tab = ref(1)

const toggleTab = (key) => {
    if (tab.value !== key) {
        tab.value = key
    }
}

</script>

<style lang="scss">
.product {
    padding-bottom: 50px;

    &__price {
        display: flex;
        flex-direction: column;
        grid-gap: 4px;
        margin-bottom: 16px;

        p, span {
            display: inline-block;
            color: #000000;
            font-weight: 600;
            font-size: 36px;
            line-height: 44px;
            letter-spacing: -0.02em;
        }

        &-old {
            font-weight: 600;
            font-size: 16px;
            line-height: 32px;
            text-decoration-line: line-through;
            color: #BABABA !important;
        }
    }

    &__tabs {

        &-head {
            display: flex;
            align-items: center;
            grid-gap: 32px;
            padding-bottom: 16px;
            border-bottom: 1px solid #E4E7EC;

            button {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #98A2B3;

                &:hover {
                    color: #101828;
                }
            }

            .active {
                color: #101828;
            }
        }

        &-btn {
            display: flex;
            justify-content: center;
            padding: 18px;

            button {
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #101828;

                padding: 12px 32px;
                background: #F2F4F7;
                border: 1px solid #F2F4F7;
                border-radius: 8px;

                &:hover {
                    background: transparent;
                    border: 1px solid #E4E7EC;
                }
            }
        }

        &-body {
            margin-top: 32px;

            h3 {
                font-weight: 600;
                font-size: 18px;
                line-height: 32px;
                color: #000000;
                margin-bottom: 8px;
            }

            h5 {
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #101828;
                margin-bottom: 50px;
            }
        }
    }

    &__info-p {
        font-weight: 400;
        font-size: 14px;
        line-height: 32px;
        color: #667085;
        margin-bottom: 16px;
    }

    &__block {
        width: 100%;
        display: flex;
        grid-gap: 100px;

        &-info {
            width: 40%;
        }

        h4 {
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            color: #000000;
        }

        .product__text p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #101828;
        }
    }

    &__slider {
        margin-top: 115px;

        &-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
        }

        &-content {
            display: flex;
            align-items: center;

            h3 {
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
                color: #000000;
            }

            a {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #FDB022;
            }

            &:first-child {
                grid-gap: 16px;
            }

            &:last-child {
                grid-gap: 20px;
            }

            .icon {
                color: #667085;
                transition: .2s;
                cursor: pointer;

                &:hover {
                    color: #000000;
                }
            }
        }

        &-next {
            transform: rotate(180deg);
        }

    }

    &__info {
        display: flex;
        grid-gap: 48px;
        margin-bottom: 80px;
    }

    &__description {
        width: calc(100% - 840px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &__stock {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        padding: 4px 12px;
        border-radius: 8px;
        margin-bottom: 16px;

        &-grin {
            background: #86D448;
        }

        &-red {
            background: #F04438;
        }
    }

    &__buttons {
        display: flex;
        grid-gap: 16px;
        margin-bottom: 16px;
    }

    &__helper {
        display: flex;
        grid-gap: 16px;
        margin-bottom: 50px;

        button {
            font-weight: 500;
            font-size: 14px;
            line-height: 32px;
            color: #848484;
            text-align: left;
            grid-gap: 12px;

            &:hover {
                color: #000000;
            }
        }
    }

    &__manufacturer {
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 18px;

        span {
            font-weight: 800;
            line-height: 20px;
            padding: 4px 8px;
            background: #FFDA33;
            border: 2px solid #000000;
            border-radius: 12px;
            margin-left: 12px;
        }
    }

    &__link {
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        text-decoration-line: underline;
        color: #848484;
        transition: .2s;
        user-select: none;
        cursor: pointer;

        &:hover {
            color: #000;
        }

        &-mb {
            margin-bottom: 24px;
        }
    }

    &__text {
        display: flex;
        justify-content: space-between;
        width: 100%;

        p {
            font-weight: 500;
            font-size: 16px;
            line-height: 32px;
            color: #000000;
        }

        span {
            line-height: 30px;
            flex: 1 1 auto;
            border-bottom: 1px dashed #000;
        }
    }
}
</style>
