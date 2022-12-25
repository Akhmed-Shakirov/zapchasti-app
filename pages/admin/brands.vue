<template>
    <NuxtLayout>
        <div class="admin">
            <BaseAdminNav />
            <h1>Brands</h1>

            <div class="admin__contents">
                <div class="admin__content">
                    <div class="admin__items">
                        <div v-for="item in brands" :key="item" class="admin__item">
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
                    <label>Url</label>
                    <UiInput v-model="data.url" />
                    <br>
                    <label>Catalog</label>
                    <UiSelect v-model="data.catalog" :options="catalog" />

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
const brands = ref([])
const catalog = ref([])
const actions = ref('')

const data = ref({
    name: '',
    image: '',
    url: '',
    catalog: null
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
        image: '',
        url: '',
        catalog: null
    }
}

const GET = async () => {
    brands.value = await myFetch('brands')
    catalog.value = await myFetch('catalog')
}
GET()

const PUT = (data) => {
    myFetch('brands/' + data.id, 'PUT', data).then((res) => {
        GET()
        reset()
    })
}
const POST = (data) => {
    myFetch('brands', 'POST', data).then((res) => {
        GET()
        reset()
    })
}
const DELETE = (id) => {
    myFetch('brands/' + id, 'DELETE').then((res) => {
        GET()
    })
}
</script>
