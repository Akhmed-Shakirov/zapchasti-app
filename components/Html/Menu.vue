<template>
    <div class="menu" :class="{ 'menu__border' : $route.path !== '/' }">
        <div class="container">
            <ul>
                <li v-for="link in links" :key="link">
                    <NuxtLink :to="link.value">
                        {{ $t(link.name) }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const links = reactive([
    { name: 'sparePartsForSpecialEquipment', value: '/sparePartsForSpecialEquipment' },
    { name: 'sparePartsForBuses', value: '/sparePartsForBuses' },
    { name: 'sparePartsForTrucks', value: '/sparePartsForTrucks' },
    { name: 'sparePartsForElectricCars', value: '/sparePartsForElectricCars' },
    { name: 'saleOfElectricCars', value: '/saleOfElectricCars' }
])
</script>

<style scoped lang="scss">
.menu {
    padding: 12px 0;
    background: #F9FAFB;

    ul {
        display: flex;
        align-items: center;
        grid-gap: 32px;
    }

    &__border {
        border-top: 1px solid #E4E7EC;
        border-bottom: 1px solid #E4E7EC;
    }

    a {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #101828;

        &:hover {
            color: #1570EF;
        }
    }

    .router-link-exact-active {
        // color: #1570EF;

        &:hover {
            color: #1570EF;
        }
    }
}
</style>
