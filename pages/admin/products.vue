<template>
    <NuxtLayout>
        <div class="admin">
            <BaseAdminNav />
            <h1>Products</h1>

            <div class="admin__contents">
                <div class="admin__content">
                    <div class="admin__items">
                        <div v-for="item in products" :key="item" class="admin__item">
                            <span>{{ item.name }}</span>
                            <UiButton value="Удалить" gray @click="DELETE(item.id)" />
                            <UiButton value="Редактировать" @click="setActions('edit', item)" />
                        </div>
                    </div>
                    <UiButton value="Добавить новый" class="admin__add" green @click="setActions('add')" />
                </div>

                <div v-if="actions" class="admin__content">
                    <label>categories</label>
                    <UiSelect v-model="data.categories" :options="categories" />
                    <br>
                    <label>Name</label>
                    <UiInput v-model="data.name" />
                    <br>
                    <label>price</label>
                    <UiInput v-model="data.price" />
                    <br>
                    <label>code</label>
                    <UiInput v-model="data.code" />
                    <br>
                    <label>is_can_buy</label>
                    <UiSelect v-model="data.is_can_buy" :options="canBuyOp" />
                    <br>
                    <label>Корпоративное предложение</label>
                    <UiSelect v-model="data.corporate_offer" :options="licensesOp" />
                    <br>
                    <label>Key</label>
                    <BaseAdminKey :key="incKey" v-model="data.key" @addKey="addKey" @removeKey="removeKey" />
                    <br>
                    <label>salesman name</label>
                    <UiInput v-model="data.salesman.name" />
                    <br>
                    <label>salesman description</label>
                    <UiInput v-model="data.salesman.description" />
                    <br>
                    <label>salesman license</label>
                    <UiSelect v-model="data.salesman.license" :options="licensesOp" />
                    <br>
                    <label>description</label>
                    <UiInput v-model="data.description" />
                    <br>
                    <label>specifications</label>
                    <BaseAdminSpecifications :key="inc" v-model="data.specifications" @add="add" @remove="remove" />

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
const products = ref([])
const categories = ref([])
const actions = ref('')

const data = ref({
    categories: null,
    name: '',
    price: null,
    code: '',
    is_can_buy: null,
    corporate_offer: null,
    key: [],
    imgages: [],
    salesman: {
        name: '',
        description: '',
        image: '',
        license: null
    },
    description: '',
    specifications: []
})

const canBuyOp = [
    {
        name: 'Оставить заявку',
        id: true
    },
    {
        name: 'В корзину',
        id: false
    }
]
const licensesOp = [
    {
        name: 'ЕСТЬ',
        id: true
    },
    {
        name: 'НЕТ',
        id: false
    }
]

const newItem = ref({
    name: '',
    value: ''
})
const newKey = ref({
    name: ''
})

const inc = ref(0)
const incKey = ref(0)

const add = () => {
    data.value.specifications.push(newItem.value)
    inc.value++
}
const remove = (index) => {
    data.value.specifications.splice(index, 1)
    inc.value++
}
const addKey = () => {
    data.value.key.push(newKey.value)
    incKey.value++
}
const removeKey = (index) => {
    data.value.key.splice(index, 1)
    incKey.value++
}

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
        categories: null,
        name: '',
        price: null,
        code: '',
        is_can_buy: null,
        corporate_offer: null,
        key: [],
        imgages: [],
        salesman: {
            name: '',
            description: '',
            image: '',
            license: null
        },
        description: '',
        specifications: []
    }
}

const GET = async () => {
    products.value = await myFetch('products')
    categories.value = await myFetch('categories')
}
GET()

const PUT = (data) => {
    myFetch('products/' + data.id, 'PUT', data).then((res) => {
        GET()
        reset()
    })
}
const POST = (data) => {
    myFetch('products', 'POST', data).then((res) => {
        GET()
        reset()
    })
}
const DELETE = (id) => {
    myFetch('products/' + id, 'DELETE').then((res) => {
        GET()
    })
}
</script>
