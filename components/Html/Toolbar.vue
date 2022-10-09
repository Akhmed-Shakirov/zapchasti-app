<template>
    <div class="toolbar">
        <div class="container">
            <UiButton class="toolbar__toggle" :animat="isToolbar" icon="menu" icon-ani="close" value="catalog" @click="() => toggleShow()" />

            <div class="toolbar__search">
                <input v-model="search" type="text" :placeholder="$t('toolbarSearct')">
                <UiButton icon="search" />
            </div>

            <div class="toolbar__helper">
                <NuxtLink v-for="link in links" :key="link" :to="link.value">
                    <sup v-if="link.count">{{ link.count }}</sup>
                    <BaseIcon :icon="link.name" />
                    <span>{{ $t(link.name) }}</span>
                </NuxtLink>
            </div>
        </div>

        <div ref="toolbarMenu" class="toolbar__menu" :class="{ 'toolbar__menu-active' : isToolbar }">
            <!-- Tabs -->
            <div class="toolbar__catalog">
                <button v-for="catalog in catalogs" :key="catalog.value" :class="{ 'active' : catalog.value === catalogActive }" @click="() => toggleCatalog(catalog.value)">
                    <span class="container">
                        {{ $t(catalog.name) }}
                    </span>
                </button>
            </div>

            <!-- Links -->
            <div class="toolbar__wrapper">
                <div class="toolbar__links">
                    <NuxtLink v-for="link in catalogs[catalogActive - 1].child" :key="link" :to="link.value">
                        {{ link.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const links = reactive([
    { name: 'basket', value: '/basket', count: 1 },
    { name: 'favorites', value: '/favorites' },
    { name: 'profile', value: '/profile' }
])

const { isToolbar } = storeToRefs(useHelper())
const { toggleToolbar, toggleWrapper } = useHelper()

const toolbarMenu = ref()

const search = ref('')

const toggleShow = () => {
    toggleToolbar()
    toggleWrapper()

    if (toolbarMenu.value.style.maxHeight && !isToolbar.value) {
        toolbarMenu.value.style.maxHeight = null
    } else {
        toolbarMenu.value.style.maxHeight = toolbarMenu.value.scrollHeight + 'px'
    }
}

const catalogActive = ref(1)

const toggleCatalog = (value) => {
    if (catalogActive.value !== value) {
        catalogActive.value = value
    }
}

const catalogs = reactive([
    {
        name: 'specialEquipment',
        value: 1,
        child: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ]
    },
    {
        name: 'cars',
        value: 2,
        child: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ]
    },
    {
        name: 'freight',
        value: 3,
        child: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ]
    },
    {
        name: 'buses',
        value: 4,
        child: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ]
    }
])
</script>

<style scoped lang="scss">
.toolbar {
    padding: 86px 0 18px;
    background: #FFFFFF;
    position: relative;
    z-index: 99;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__toggle {
        .icon {
            width: 24px;
            height: 24px;
        }
    }

    &__helper {
        display: flex;
        grid-gap: 32px;

        a {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            grid-gap: 5px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #344054;

            &:hover {
                color: #FEC80B;
            }

            sup {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: -15px;
                margin-left: 30px;
                z-index: 1;
                width: 22.58px;
                height: 23.14px;
                border-radius: 50%;
                font-weight: 500;
                font-size: 12px;
                line-height: 19px;
                color: #FFFFFF;
                background: #D92D20;
            }
        }
    }

    &__search {
        display: flex;
        align-items: center;
        position: relative;

        input {
            width: 566px;
            height: 48px;
            padding: 10px 16px;
            background: #F9FAFB;
            border: 1px solid #E4E7EC;
            border-radius: 8px 0 0 8px;

            &, &::placeholder {
                font-weight: 400;
                font-size: 18px;
                line-height: 28px;
            }

            color: #1A1C1F;
            &::placeholder {
                color: #98A2B3;
            }

            &:focus {
                box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
            }
        }
        .btn {
            position: relative;
            z-index: 1;
            left: -8px;
            width: 136px;

            &:deep(.icon)  {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

    &__menu {
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
        position: absolute;
        z-index: 1;
        left: 0;
        top: 152px;
        width: 100%;
        background: #F2F4F7;

        z-index: -1;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;

        &-active {
            z-index: 1;
            opacity: 1;
        }
    }

    &__catalog {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 526px;
        padding: 12px 0;

        button {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #101828;
            width: 100%;
            display: block;
            padding: 24px 0;
        }

        .active {
            background: #FFFFFF;
        }
    }

    &__wrapper {
        padding: 16px 24px;
        position: absolute;
        top: 0;
        right: 0;
        background: #FFFFFF;
        width: 70%;
        height: 100%;
        border-left: 1px solid #E4E7EC;
    }

    &__links {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        grid-gap: 16px 48px;
        max-height: 360px;

        a {
            width: 200px;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;

            &:hover {
                color: #FEC80B;
            }
        }

        .router-link-exact-active {
            // color: #FEC80B;

            &:hover {
                color: #FEC80B;
            }
        }
    }
}
</style>
