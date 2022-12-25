<template>
    <div class="input-spec">
        <div class="input-spec__items">
            <div v-for="(item, index) in modelValue" :key="item + index" class="input-spec__item">
                <UiInput v-model="item.name" />
                <UiButton value="Удалить" gray @click="$emit('removeKey', index)" />
            </div>
        </div>
        <UiButton value="Добавить еще" @click="$emit('addKey')" />
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Array,
        default () {
            return []
        }
    }
})
</script>

<style lang="scss" scoped>
.input-spec {
    width: 100%;
    padding: 20px;
    background: #F9FAFB;
    border: 1px solid #E4E7EC;

    &__items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        .input {
            width: 100%;
        }
    }
}
</style>
