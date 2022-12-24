<template>
    <div class="filter">
        <h4>{{ $t(title) }}</h4>
        <UiInput v-if="search" v-model="searchName" icon="search-mini" :placeholder="$t('find')" />
        <ul>
            <template v-if="filterItems.length">
                <li v-for="item in filterItems" :key="item" @click="() => setValue(item.id)">
                    <UiCheckbox :is-active="modelValue.includes(item.id)" />
                    {{ item.name }} <span v-if="item.quantity">({{ item.quantity }})</span>
                </li>
                <button @click="isShow = !isShow">
                    {{ isShow ? 'Скрыть' : `Показать все (${items.length})` }}
                </button>
            </template>
            <li v-else>
                {{ $t('notFound') }}
            </li>
        </ul>
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
    items: {
        type: Array,
        default () {
            return []
        }
    },
    title: {
        type: String,
        default: ''
    },
    search: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const setValue = (id) => {
    if (!props.modelValue.includes(id)) {
        emit('update:modelValue', [...props.modelValue, id])
    } else {
        emit('update:modelValue', props.modelValue.filter(el => el !== id))
    }
}

const searchName = ref('')
const isShow = ref('')

const filterItems = computed(() => {
    const newItems = props.items
    if (!isShow.value) {
        return newItems.filter((el, index) => index < 6)
    } else {
        return newItems
    }
})
</script>

<style scoped lang="scss">
.filter {
    h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 8px;
    }

    &:deep(.input) {
        margin: 8px 0 24px;
    }

    ul {
        display: flex;
        flex-direction: column;
        grid-gap: 16px;
        // height: 248px;
        // overflow-y: scroll;
        // overflow-x: hidden;
    }

    li {

        &,
        span {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            display: flex;
            align-items: center;
            color: #1A1C1F;
            grid-gap: 8px;
            cursor: pointer;
            user-select: none;
            transition: .2s;

            &:hover {
                opacity: .6;
            }
        }
    }

    button {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #1570EF;

        &:hover {
            color: #64a9f4;
        }
    }

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background: #E8E8E8;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #8A8A8A;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #9d9d9da0;
    }
}
</style>
