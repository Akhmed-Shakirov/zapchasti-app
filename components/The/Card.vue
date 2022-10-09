<template>
    <div class="card">
        <img src="/images/card.png" alt="card">
        <div class="card__info">
            <h3>Бортовой автомобиль со шторным механизмом открытия тента HYUNDAI Myghty EX 8</h3>
            <p v-if="true">
                {{ $t('from') }} 1 352 000
            </p>
            <p v-else>
                {{ $t('priceRequest') }}
            </p>
            <UiButton v-if="!basket" class="add" value="addBasket" />
            <div v-else class="card__basket">
                <UiButton class="basket" value="basket" icon-r="basket" />
                <sup>1</sup>

                <div class="card__total">
                    <UiButton value="-" />
                    <span>1</span>
                    <UiButton value="+" />
                </div>
            </div>
            <NuxtLink to="">
                {{ $t('getCP') }}
                <BaseIcon icon="download" />
            </NuxtLink>
        </div>
        <div v-if="stock" class="card__stock" :class="{ 'card__stock-grin' : isStock, 'card__stock-red' : !isStock }">
            {{ isStock ? $t('inStock') : $t('notAvailable') }}
        </div>
        <BaseIcon icon="like" />
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
</script>

<style scoped lang="scss">
.card {
    width: 339px;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    position: relative;

    img {
        width: 100%;
        height: 241px;
        object-fit: contain;
        background: #2F2F2F;
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
        padding: 16px 12px;

        h3 {
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #000000;
            margin-bottom: 24px;
        }

        p {
            font-weight: 600;
            font-size: 20px;
            line-height: 32px;
            color: #000000;
            margin-bottom: 16px;
        }

        .add {
            width: 100%;
            margin-bottom: 8px;
        }

        a {
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

            &:hover {
                border: 2px solid #848484bd;
            }
        }
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
    .like {
        color: #FFDA33;
        position: absolute;
        z-index: 1;
        top: 18px;
        right: 18px;
        cursor: pointer;
        transition: .2s;

        &:hover {
            opacity: .5;
        }
    }
}
</style>
