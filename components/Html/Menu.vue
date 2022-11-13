<template>
    <div class="menu">
        <div class="container">
            <ul>
                <li v-for="link in links" :key="link">
                    <NuxtLink :to="link.value">
                        {{ $t(link.name) }}
                    </NuxtLink>
                </li>
            </ul>
            <div class="menu__helper">
                <UiSelect v-model="select.city" icon="geo" />|
                <UiSelect v-model="select.lang" />
            </div>
        </div>
    </div>
</template>

<script setup>
const links = reactive([
    { name: 'new', value: '/new' },
    { name: 'stock', value: '/stock' },
    { name: 'sale', value: '/sale' },
    { name: 'bulkOrders', value: '/bulkOrders' }
])

const select = reactive({
    city: 'almaty',
    currency: 'kzt',
    lang: 'ru'
})
</script>

<style scoped lang="scss">
.menu {
    padding: 12px 0;
    background: #FCFCFD;
    border-top: 1px solid #E4E7EC;
    border-bottom: 1px solid #E4E7EC;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul {
        display: flex;
        align-items: center;
        grid-gap: 32px;

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
            color: #1570EF;

            &:hover {
                color: #1570EF;
            }
        }
    }

    &__helper {
        color: #E4E7EC;
        display: flex;
        align-items: center;
        grid-gap: 12px;

    }
}
</style>
