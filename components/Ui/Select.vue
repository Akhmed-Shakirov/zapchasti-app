<template>
    <div class="select">
        <div v-click-outside="() => close()" class="select__head" :class="{ 'select__head-active' : isShow }" @click="() => toggleShow()">
            <span v-if="icon"><BaseIcon :icon="icon" /></span>
            {{ $t(modelValue) }}
            <BaseIcon icon="chevron" />
        </div>
        <div ref="selectBody" class="select__body" :class="{ 'select__body-active' : isShow }" @click.stop>
            <button v-for="option in options" :key="option" @click="() => ($emit('update:modelValue', option.value), toggleShow())">
                {{ $t(option.name) }} <BaseIcon v-if="modelValue === option.value" icon="check-select" />
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    options: {
        type: Array,
        default () {
            return []
        }
    }
})

const isShow = ref(false)
const selectBody = ref()

const toggleShow = () => {
    isShow.value = !isShow.value

    if (selectBody.value.style.maxHeight) {
        selectBody.value.style.maxHeight = null
    } else {
        selectBody.value.style.maxHeight = selectBody.value.scrollHeight + 'px'
    }
}

const close = () => {
    if (isShow.value === true) {
        toggleShow()
    }
}
</script>

<style scoped lang="scss">
.select {
    position: relative;

    &__head {
        background: #F9FAFB;
        border: 1px solid #E4E7EC;
        border-radius: 8px;
        padding: 6px 16px;
        user-select: none;
        cursor: pointer;
        display: flex;
        align-content: center;
        justify-content: space-between;
        grid-gap: 8px;

        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #101828;
        transition: .2s;

        span {
            color: #FEC80B;
            margin-right: 4px;
            height: 20px;
        }
        .chevron {
            transition: .2s;
        }

        &:hover {
            box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
            opacity: .6;
        }

        &-active {

            .chevron {
                transform: rotate(-180deg);
            }
        }
    }

    &__body {
        width: 100%;
        position: absolute;
        top: 44px;
        background: #F9FAFB;
        border: 1px solid #E4E7EC;
        border-radius: 8px;
        padding: 6px 16px;
        z-index: -1;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        display: flex;
        flex-direction: column;
        grid-gap: 5px;

        &-active {
            z-index: 1;
            opacity: 1;
        }

        .emblem {
            width: 70px;
            height: 70px;
            color: #FEC80B;
        }

        button {
            width: 100%;
            padding-bottom: 5px;
            border-bottom: 1px solid #E4E7EC;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #101828;
            justify-content: space-between;

            &:last-child {
                border-bottom: 1px solid transparent;
            }

            .icon {
                color: #FEC80B;
            }
        }
    }
}
</style>
