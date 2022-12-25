<template>
    <div class="input">
        <input type="text" :value="modelValue" :placeholder="placeholder" @input="(event) => $emit('update:modelValue', event.target.value)">
        <BaseIcon v-if="icon" :icon="icon" />
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="scss">
.input {
    background: #FFFFFF;
    border: 1px solid #E4E7EC;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    position: relative;
    height: 40px;

    input {
        width: 100%;
        height: 100%;
        padding: 11.5px 12px;
        padding-right: 34px;

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

    .icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
