<template>
    <NuxtLayout>
        <HtmlTitle :links="[ { name: 'categories', value: 'categories' } ]" />
        <div class="product">
            <div class="container">
                <div class="product__content">
                    <div class="product__box">
                        <BaseGallery :images="[
                            '/images/card.png', '/images/card.png',
                            '/images/card.png', '/images/card.png',
                            '/images/card.png', '/images/card.png',
                            '/images/card.png', '/images/card.png'
                        ]" />
                    </div>
                    <div class="product__box">
                        <div class="product__description">
                            <h3>Описание</h3>
                            <p>is a company funded and established by the Jiacheng Group (established in 2001,with a registered capital of 410 million RMB, its business scope covering construction</p>
                            <div class="product-hr" />
                            <h3>Характеристики</h3>
                            <ul>
                                <h4>wadw</h4>
                                <li>
                                    <span>Эксплуатационная масса</span>
                                    <span>5 900 кг</span>
                                </li>
                                <li>
                                    <span>Эксплуатационная масса</span>
                                    <span>5 900 кг</span>
                                </li>
                                <li>
                                    <span>Эксплуатационная масса</span>
                                    <span>5 900 кг</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product__content">
                    <div class="product__box">
                        <div class="product__price">
                            <h2>Super Socco TC MAX SPOKE WHEEL</h2>
                            <h3>538 000 ₸</h3>
                            <div class="product__price-status">
                                <p>В наличии</p>
                                <p>Новый</p>
                            </div>
                            <span>Код товара: 01234567 <BaseIcon icon="copy" /></span>

                            <!-- <UiButton value="Получить корпоративное предложение" gray iconR="download" /> -->
                            <UiButton value="Оставить заявку" />
                            <!-- <UiButton value="addBasket" /> -->

                            <div class="product__info">
                                <baseIcon icon="circle-information" />
                                <p>Для приобретения товара или уточнения вопросов, оставьте заявку на товар и мы свяжемся с вами в течении 10 минут</p>
                            </div>
                        </div>
                    </div>
                    <div class="product__box">
                        <div class="product__salesman">
                            <h4>ПРОДАВЕЦ</h4>
                            <div class="product__salesman-images">
                                <img src="/images/brands1.png" alt="brands1.png">
                                <img src="/images/shield-check.png" alt="shield-check.png">
                            </div>
                            <h3>Super Socco</h3>
                            <p class="scaleY" :class="{ 'scaleY-active' : isScaley }">is a company funded and established by the Jiacheng Group (established in 2001,with a registered capital of 410 million RMB, its business scope covering construction is a company funded and established by the Jiacheng Group (established in 2001,with a registered capital of 410 million RMB, its business scope covering construction is a company funded and established by the Jiacheng Group (established in 2001,with a registered capital of 410 million RMB, its business scope covering construction</p>
                            <button @click="isScaley = !isScaley">
                                {{ isScaley ? 'скрыть' : 'подробнее...' }}
                            </button>
                        </div>
                    </div>
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

const isScaley = ref(false)

</script>

<style lang="scss">
.product {
    padding-bottom: 50px;

    &-hr {
        width: 100%;
        height: 1px;
        background: #E4E7EC;
        margin: 32px 0;
    }

    h4 {
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        color: #667085;
        margin-bottom: 16px;
    }

    ul {
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #E4E7EC;

            // &:last-child {
            //     border-bottom: 1px solid transparent;
            // }
        }

        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
        }
    }

    .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;
    }

    &__description {
        padding: 24px 16px;

        h4 {
            margin: 24px 0 8px;
        }

        h3 {
            font-weight: 600;
            font-size: 22px;
            line-height: 27px;
            color: #000000;
            margin-bottom: 16px;
        }

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #344054;
        }
    }

    &__price {
        padding: 24px 16px;

        h2 {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #101828;
            margin-bottom: 16px;
        }

        h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: -0.02em;
            color: #101828;
            margin-bottom: 16px;
        }

        &-status {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;

            p {
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                color: #475467;
                padding: 4px 8px;
                background: #E4E7EC;
                border-radius: 4px;
                display: inline;
            }
        }

        span {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            gap: 8px;
            font-weight: 500;
            font-size: 14px;
            line-height: 32px;
            color: #98A2B3;

            i {
                cursor: pointer;

                &:hover {
                    color: #98A2B3;
                }
            }
        }

        .btn {
            width: 100%;
        }
    }

    &__salesman {
        padding: 16px;

        &-images {
            display: flex;
            align-items: center;
            gap: 16px;

            img:last-child {
                padding: 16px 0;
            }
        }

        h3 {
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: #101828;
            margin-bottom: 4px;
        }

        p, button {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
        }

        button {
            color: #1570EF;
            display: inline;

            &:hover {
                color: #64a9f4;
            }
        }
    }

    &__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        &:first-child {
            max-width: 911px;
        }

        &:last-child {
            max-width: 444px;
        }
    }

    &__box {
        background: #FFFFFF;
        border-radius: 8px;
        width: 100%;
        min-height: 100px;
    }

    &__info {
        margin-top: 24px;
        padding: 16px 12px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        background: #F9FAFB;
        border-radius: 8px;

        i {
            color: #667085;
        }

        p {
            max-width: 352px;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #667085;
        }
    }
}
</style>
