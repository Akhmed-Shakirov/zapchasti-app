<template>
    <NuxtPage />
</template>

<script setup>
import { catalog, brands, types, categories } from './data.json'

onMounted(() => {
    if (catalog.length && brands.length && types.length && categories.length) {
        setCatalog(catalog, brands, types, categories)
    }
})

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

// const { data: catalog } = await useFetch('http://localhost:3000/catalog/')
// const { data: brands } = await useFetch('http://localhost:3000/brands/')
// const { data: types } = await useFetch('http://localhost:3000/types/')
// const { data: categories } = await useFetch('http://localhost:3000/categories/')

// onMounted(() => {
//     if (catalog.value.length && brands.value.length && types.value.length && categories.value.length) {
//         setCatalog(catalog.value, brands.value, types.value, categories.value)
//     }
// })
</script>
