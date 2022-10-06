<template>
    <div class="range">
        <h4>{{ $t(title) }}</h4>

        <div class="range__inputs">
            <div class="range__input">
                <span>{{ $t('from') }}</span>
                <input v-model="from" type="number">
            </div>
            <div class="range__input">
                <span>{{ $t('to') }}</span>
                <input v-model="to" type="number">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Array,
        default () {
            return []
        }
    },
    title: {
        type: String,
        default: ''
    }
})

const from = ref(props.modelValue[0] || 0)
const to = ref(props.modelValue[1] || 0)
</script>

<style scoped lang="scss">
.range {
    h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 8px;
    }

    &__inputs {
        display: flex;
        align-items: center;
        grid-gap: 16px;
    }

    &__input {
        background: #FFFFFF;
        border: 1px solid #E4E7EC;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        position: relative;
        height: 40px;

        span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 12px;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #848484;
        }

        input {
            width: 100%;
            height: 100%;
            padding: 11.5px 12px;
            padding-left: 44px;

            &, &::placeholder {
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
            }

            color: #1A1C1F;
            &::placeholder {
                color: #848484;
            }

            &:focus {
                box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
            }
        }
    }
}
</style>
