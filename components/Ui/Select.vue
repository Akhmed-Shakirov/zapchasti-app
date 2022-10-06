<template>
    <div class="select">
        <div v-click-outside="() => close()" class="select__head" :class="{ 'select__head-active' : isShow }" @click="() => toggleShow()">
            <span v-if="icon"><BaseIcon :icon="icon" /></span>
            {{ $t(modelValue) }}
            <BaseIcon icon="chevron" />
        </div>
        <div ref="selectBody" class="select__body" :class="{ 'select__body-active' : isShow }" @click.stop>
            <BaseIcon icon="emblem" />
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
        grid-gap: 8px;

        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #101828;

        span {
            color: #FEC80B;
            margin-right: 4px;
        }
        .chevron {
            transition: .2s;
        }

        &:hover {
            box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
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

        &-active {
            z-index: 1;
            opacity: 1;
        }

        .emblem {
            width: 70px;
            height: 70px;
            color: #FEC80B;
        }
    }
}
</style>
