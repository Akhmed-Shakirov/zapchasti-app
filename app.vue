<template>
    <NuxtPage />
</template>

<script setup>
const { setCatalog } = useCatalog()

useHead({
    title: 'Zapchasti',
    link: [{ rel: 'icon', type: 'image/png', href: '/icons/logo.svg' }]
})

const { isToolbar } = storeToRefs(useHelper())

watch(() => isToolbar, (first, second) => {
    if (isToolbar.value) {
        document.body.classList.add('block-scroll')
    } else {
        document.body.classList.remove('block-scroll')
    }
}, { deep: true })

const { data: catalog } = await useFetch('https://zapchasti-app.herokuapp.com/catalog/')
const { data: brands } = await useFetch('https://zapchasti-app.herokuapp.com/brands/')
const { data: types } = await useFetch('https://zapchasti-app.herokuapp.com/types/')
const { data: categories } = await useFetch('https://zapchasti-app.herokuapp.com/categories/')

onMounted(() => {
    if (catalog.value.length && brands.value.length && types.value.length && categories.value.length) {
        setCatalog(catalog.value, brands.value, types.value, categories.value)
    }
})
</script>
