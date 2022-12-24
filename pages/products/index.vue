<template>
    <NuxtLayout>
        <HtmlTitle title="wqee wae wae" producting="12 000" />
        <BaseBlock>
            <main class="main">
                <BaseGrid>
                    <TheCard stock :is-stock="false" />
                    <TheCard basket />
                    <TheCard stock :is-stock="true" />
                    <TheCard />
                    <TheCard />
                    <TheCard />
                    <TheCard />
                    <TheCard />
                    <TheCard />
                </BaseGrid>
                <BasePagination />
            </main>
            <aside class="sidebar">
                <BaseFilter v-model="manufacturerBrand" title="manufacturerBrand" :items="manufacturerBrandItems" />
                <BaseFilter v-model="yearIssue" title="yearIssue" :items="yearIssueItems" />
                <BaseRange v-model="price" title="price" :min="priceMin" :max="priceMax" />

                <UiButton value="showProducts" :count="135" />
            </aside>
        </BaseBlock>
    </NuxtLayout>
</template>

<script setup>
const price = ref([1000, 2000])
const priceMin = ref(1000)
const priceMax = ref(2000)

const manufacturerBrand = ref([])
const manufacturerBrandItems = reactive([
    { id: 1, name: 'FUSO', quantity: 1 },
    { id: 2, name: 'HINO', quantity: 2 },
    { id: 3, name: 'HYUNDAI', quantity: 2 },
    { id: 4, name: 'HYUNDAI', quantity: 2 },
    { id: 5, name: 'HYUNDAI', quantity: 2 },
    { id: 6, name: 'ISUZU', quantity: 6 },
    { id: 7, name: 'JAC', quantity: 2 },
    { id: 8, name: 'HYUNDAI', quantity: 2 },
    { id: 9, name: 'ISUZU', quantity: 6 },
    { id: 10, name: 'JAC', quantity: 2 },
    { id: 11, name: 'HYUNDAI', quantity: 2 }
])
const yearIssue = ref([])
const yearIssueItems = reactive([
    { id: 1, name: 2015 },
    { id: 2, name: 2016 },
    { id: 3, name: 2017 },
    { id: 4, name: 2018 },
    { id: 5, name: 2019 },
    { id: 6, name: 2020 },
    { id: 7, name: 2021 },
    { id: 8, name: 2022 }
])
</script>

<style lang="scss">
</style>
