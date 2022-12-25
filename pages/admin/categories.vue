<template>
    <NuxtLayout>
        <div class="admin">
            <BaseAdminNav />
            <h1>Categories</h1>

            <div class="admin__contents">
                <div class="admin__content">
                    <div class="admin__items">
                        <div v-for="item in categories" :key="item" class="admin__item">
                            <span>{{ item.name }}</span>
                            <UiButton value="Удалить" gray @click="DELETE(item.id)" />
                            <UiButton value="Редактировать" @click="setActions('edit', item)" />
                        </div>
                    </div>
                    <UiButton value="Добавить новый" class="admin__add" green @click="setActions('add')" />
                </div>

                <div v-if="actions" class="admin__content">
                    <label>Name</label>
                    <UiInput v-model="data.name" />
                    <br>
                    <label>Catalog</label>
                    <UiSelect v-model="data.catalog" :options="catalog" />
                    <br>
                    <label>Types</label>
                    <UiSelect v-model="data.types" :options="types" />

                    <div class="admin__btns">
                        <UiButton value="Отмена" gray @click="reset()" />
                        <UiButton v-if="actions === 'edit'" value="Сохранить" @click="PUT(data)" />
                        <UiButton v-if="actions === 'add'" value="Добавить" green @click="POST(data)" />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const categories = ref([])
const catalog = ref([])
const types = ref([])
const actions = ref('')

const data = ref({
    name: '',
    catalog: null,
    types: null
})

const setActions = (value, item) => {
    reset()
    if (value === 'edit') {
        actions.value = value
        data.value = item
    } else {
        actions.value = value
    }
}
const reset = () => {
    actions.value = ''
    data.value = {
        name: '',
        catalog: null,
        types: null
    }
}

const GET = async () => {
    categories.value = await myFetch('categories')
    catalog.value = await myFetch('catalog')
    types.value = await myFetch('types')
}
GET()

const PUT = (data) => {
    myFetch('categories/' + data.id, 'PUT', data).then((res) => {
        GET()
        reset()
    })
}
const POST = (data) => {
    myFetch('categories', 'POST', data).then((res) => {
        GET()
        reset()
    })
}
const DELETE = (id) => {
    myFetch('categories/' + id, 'DELETE').then((res) => {
        GET()
    })
}
</script>
