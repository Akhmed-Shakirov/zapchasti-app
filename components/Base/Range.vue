<template>
    <div class="range">
        <h4>{{ $t(title) }}</h4>

        <Slider v-model="values" :min="min" :max="max" />

        <div class="range__inputs">
            <div class="range__input">
                <input v-model="values[0]" type="number">
            </div>
            <div class="range__input">
                <input v-model="values[1]" type="number">
            </div>
        </div>
    </div>
</template>

<script setup>
import Slider from '@vueform/slider/dist/slider'

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
    },
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    }
})

const emit = defineEmits(['update:modelValue'])

const values = ref(props.modelValue)

watch(() => values.value, () => {
    if (values.value[0] >= props.min && values.value[1] <= props.max) {
        emit('update:modelValue', values.value)
    }
    // if (values.value[0] < props.min) {
    //     values.value = [props.min, values.value[1]]
    //     emit('update:modelValue', values.value)
    // }
    // if (values.value[1] > props.min) {
    //     values.value = [values.value[0], props.max]
    //     emit('update:modelValue', values.value)
    // }
}, { deep: true })
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss">
.range {
    h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 12px;
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

    .slider-target {
        // position: absolute;
        width: 97%;
        margin-bottom: 30px;
    }
    .slider-connects {
        height: 8px;
    }
    .slider-base, .slider-connects {
        left: 8px;
        width: calc(100% - 8px);
    }
    .slider-connect {
        background: #FFDA33;
    }
    .slider-handle {
        background: #FFDA33;
    }
    .slider-handle:focus {
        box-shadow: var(--slider-handle-shadow,.5px .5px 2px 1px rgba(0,0,0,.32));
    }
    .slider-horizontal .slider-tooltip-top {
        display: none !important;
    }

    .slider-horizontal .slider-handle {
        top: calc((var(--slider-handle-height, 13px) - var(--slider-height, 6px))/2*-1 + -1px);
    }

    .slider-tooltip {
        background: transparent;
        border: none;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #667085;
    }
}
</style>
