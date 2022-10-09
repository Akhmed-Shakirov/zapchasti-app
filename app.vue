<template>
    <NuxtPage />
</template>

<script setup>
useHead({
    title: 'Frontend',
    link: [{ rel: 'icon', type: 'image/png', href: '/emblem.svg' }]
})

const { isToolbar } = storeToRefs(useHelper())

watch(() => isToolbar, (first, second) => {
    if (isToolbar.value) {
        document.body.classList.add('block-scroll')
    } else {
        document.body.classList.remove('block-scroll')
    }
}, { deep: true })
</script>
