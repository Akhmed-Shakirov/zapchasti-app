<template>
    <div class="review">
        <div class="review__star">
            <div class="review__icon">
                <span v-for="star in [1,2,3,4,5]" :key="star">
                    <BaseIcon icon="star" />
                </span>
            </div>
            <p>Нурдаулет</p>
            <span>21.06.2022</span>
        </div>
        <div class="review__main">
            <p>Комментарий: <span>Товар отличного качества</span></p>
            <h5>Отзыв был полезен?</h5>
            <div>
                <button>Да</button>
                <button>Нет</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({

})
</script>

<style scoped lang="scss">
.review {
    width: 100%;
    display: flex;
    grid-gap: 200px;
    padding-bottom: 8px;
    border-bottom: 1px solid #E4E7EC;

    &__star {

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #101828;
            margin: 4px 0;
        }

        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
        }
    }

    &__main {
        p {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #101828;

            span {
                font-weight: 400;
            }
            margin-bottom: 16px;
        }

        h5 {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
            margin-bottom: 8px;
        }

        div {
            display: flex;
            align-items: center;
            grid-gap: 8px;
        }

        button {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #000000;

            padding: 12px;
            border: 1px solid #E4E7EC;
            border-radius: 8px;

            &:hover {
                background: #E4E7EC;
            }
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        grid-gap: 2px;

        span {
            padding: 2.5px;
            background: #CACACA;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
