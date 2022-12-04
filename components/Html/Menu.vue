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
                <div class="menu__select">
                    <div class="menu__select-head">
                        <BaseIcon icon="geo" /> Алматы <BaseIcon icon="chevron" />
                    </div>
                    <div class="menu__select-body">
                        <div>
                            <p>Где вы находитесь?</p>
                            <UiSelect v-model="select.city" />
                        </div>
                    </div>
                </div>
                <div class="menu__select">
                    <div class="menu__select-head">
                        Русcкий - KZT <BaseIcon icon="chevron" />
                    </div>
                    <div class="menu__select-body">
                        <div>
                            <p>Язык</p>
                            <UiSelect v-model="select.lang" />
                        </div>
                        <div>
                            <p>Валюта</p>
                            <UiSelect v-model="select.currency" />
                        </div>
                    </div>
                </div>
                <!-- <UiSelect v-model="select.city" icon="geo" />| -->
                <!-- <UiSelect v-model="select.lang" /> -->
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
    background: #FCFCFD;
    border-top: 1px solid #E4E7EC;
    border-bottom: 1px solid #E4E7EC;

    .container {
        height: 44px;
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
        display: flex;
        height: 100%;
    }

    &__select {
        position: relative;

        &-head {
            z-index: 1;
            height: 100%;
            display: flex;
            align-items: center;
            grid-gap: 12px;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            padding: 0 15px;
            user-select: none;
            cursor: pointer;
            position: relative;
            transition: .2s;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: -1px;
                left: 0;
                background: transparent;
                transition: .2s;
            }

            .geo {
                color: #FEC80B;
            }

            .chevron {
                transition: .2s;
            }
        }

        &-body {
            right: 0;
            background: #ffffff;
            position: absolute;
            width: 392px;
            border: 1px solid #E4E7EC;
            opacity: 0;
            z-index: -10;
            transition: .2s;
            padding: 16px;
            display: flex;
            flex-direction: column;
            grid-gap: 16px;

            &:deep(.select) {
                .select__head {
                    background: #fff;
                    padding: 10px 16px;
                }
                .select__body {
                    background: #fff;
                }
            }

            div {
                display: flex;
                flex-direction: column;
                grid-gap: 4px;
            }
        }

        &:hover {
            background: #ffffff;

            .menu__select-head {

                border-left: 1px solid #E4E7EC;
                border-right: 1px solid #E4E7EC;

                .chevron {
                    transform: rotate(-180deg);
                }

                &::before {
                    background: #ffffff;
                }
            }

            .menu__select-body {
                opacity: 1;
                z-index: 0;
            }
        }
    }
}
</style>
