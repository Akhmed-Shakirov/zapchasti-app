<template>
    <div class="card" :class="{ 'card__active' : isHover }">
        <NuxtLink
            to="products/1"
            class="card__link"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
        />
        <img src="/images/card.png" alt="card">
        <div class="card__info">
            <h3>Changan UNI-T</h3>
            <p v-if="true">
                9 992 000 ₸
            </p>
            <p v-else>
                {{ $t('priceRequest') }}
            </p>
            <h4>Кроссовер • ДВС • 1.5 л</h4>
            <div class="card__action">
                <UiButton v-if="!basket" class="add" value="addBasket" />
                <UiButton v-else class="add" value="Добавлено в корзину" icon-r="shopping-cart" green />
            </div>
        </div>
        <div v-if="stock" class="card__stock" :class="{ 'card__stock-grin' : isStock, 'card__stock-red' : !isStock }">
            {{ isStock ? $t('inStock') : $t('notAvailable') }}
        </div>
        <div class="like-wrapper">
            <BaseIcon icon="like" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    stock: {
        type: Boolean,
        deflaut: false
    },
    basket: {
        type: Boolean,
        deflaut: false
    },
    isStock: {
        type: Boolean,
        deflaut: true
    }
})

const isHover = ref(false)
</script>

<style scoped lang="scss">
.card {
    width: 339px;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    position: relative;
    border-radius: 8px;

    img {
        position: relative;
        z-index: 0;
        padding: 32px;
        width: 100%;
        height: 241px;
        object-fit: contain;
        background: #E4E7EC;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
        transition: .2s;
        border-radius: 8px 8px 0 0;
    }

    &__basket {
        margin-bottom: 8px;
        position: relative;
        display: flex;
        justify-content: space-between;

        .basket {
            padding: 14px 16px;
            border: 2px solid #0DB14B;
            background: #0DB14B;
            color: #FFFFFF;

            &:hover {
                background: transparent;
                color: #0DB14B;
            }
        }

        sup {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -12px;
            left: 115px;
            z-index: 1;
            width: 22.58px;
            height: 23.14px;
            border-radius: 50%;
            font-weight: 500;
            font-size: 12px;
            line-height: 19px;
            color: #FFFFFF;
            background: #D92D20;
        }
    }

    &__total {
        display: flex;
        grid-gap: 8px;

        .btn, span {
            width: 48px;
            height: 48px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
        }

        span {
            background: #FFFFFF;
            border: 1px solid #E4E7EC;
            border-radius: 8px;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px 12px;

        h3 {
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #000000;
            margin-bottom: 8px;
            transition: .2s;
        }

        p {
            font-weight: 700;
            font-size: 24px;
            letter-spacing: -0.02em;
            line-height: 32px;
            color: #000000;
            margin-bottom: 8px;
        }

        h4 {
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
            color: #475467;
            margin-bottom: 12px;
        }

        .add {
            width: 100%;
        }

    }

    &__download {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #848484;
        border: 2px solid transparent;
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
        border-radius: 8px;
        transition: .2s;
    }

    &__stock {
        position: absolute;
        z-index: 1;
        padding: 4px 12px;
        left: -1px;
        top: 10px;
        border-radius: 0px 8px 8px 0px;

        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;

        &-grin {
            background: #86D448;
        }

        &-red {
            background: #F04438;
        }
    }

    &__link {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    &__action {
        width: 100%;
        position: relative;
        z-index: 2;
    }

    .like-wrapper {
        background: #FFFFFF;
        padding: 2px;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: 18px;
        right: 18px;
        cursor: pointer;
        transition: .2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;

        .like {
            color: #FFDA33;
            transition: .2s;
        }

        &:hover {
            background: #FFDA33;

            .like {
                color: #FFFFFF;
            }
        }
    }

    &__active {
        img {
            opacity: .7;
        }

        .card__download {
            border: 2px solid #848484bd;
        }

        .card__info h3 {
            color: #b39927;
        }
    }
}
</style>
