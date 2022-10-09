<template>
    <div class="checkbox" :class="{ 'checkbox-active' : isActive }">
        <img v-if="isActive" src="/icons/check.svg">
    </div>
</template>

<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="scss">
.checkbox {
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 2px solid #D0D5DD;
    border-radius: 3px;
    transition: .2s;

    &-active {
        background: #FFDA33;
        border: 2px solid #FFDA33;
    }
}
</style>
