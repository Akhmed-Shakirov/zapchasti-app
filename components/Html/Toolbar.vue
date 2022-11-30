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
                <button v-for="catalog in catalogs" :key="catalog.value" :class="{ 'active' : catalog.value === catalogActive }" @click="() => setCatalog(catalog.value)">
                    <span class="container">
                        {{ $t(catalog.name) }}
                    </span>
                </button>
            </div>

            <!-- Links -->
            <div class="container">
                <div class="toolbar__wrapper">
                    <div class="toolbar__links">
                        <h3>{{ $t('transport') }}</h3>
                        <NuxtLink v-for="link in catalogs[catalogActive - 1].transport" :key="link" :to="link.value">
                            {{ link.name }}
                        </NuxtLink>
                    </div>
                    <div class="toolbar__links">
                        <h3>{{ $t('spareParts') }}</h3>
                        <NuxtLink v-for="link in catalogs[catalogActive - 1].spareParts" :key="link" :to="link.value">
                            {{ link.name }}
                        </NuxtLink>
                    </div>
                    <div class="toolbar__links">
                        <h3>{{ $t('brands') }}</h3>
                        <NuxtLink v-for="link in catalogs[catalogActive - 1].brands" :key="link" :to="link.value">
                            <img :src="link.name" :alt="link.name">
                        </NuxtLink>
                    </div>
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

const { isToolbar, catalogActive } = storeToRefs(useHelper())
const { toggleToolbar, toggleWrapper, setCatalog } = useHelper()

const toolbarMenu = ref()

const search = ref('')

const toggleShow = () => {
    toggleToolbar()
    toggleWrapper()
}

watch(() => isToolbar.value, () => {
    if (!isToolbar.value) {
        toolbarMenu.value.style.maxHeight = null
    } else {
        toolbarMenu.value.style.maxHeight = toolbarMenu.value.scrollHeight + 'px'
    }
})

const catalogs = reactive([
    {
        name: 'specialEquipment',
        value: 1,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'trucks',
        value: 2,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'agriculturalMachinery',
        value: 3,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'buses',
        value: 4,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'electricCars',
        value: 5,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'electricalGoods',
        value: 6,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'spareParts',
        value: 7,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
        ]
    },
    {
        name: 'allCategories',
        value: 8,
        transport: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        spareParts: [
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' },
            { name: 'Products', value: '/products' }
        ],
        brands: [
            { name: '/images/brands1.png', value: '/products' },
            { name: '/images/brands2.png', value: '/products' },
            { name: '/images/brands3.png', value: '/products' },
            { name: '/images/brands4.png', value: '/products' },
            { name: '/images/brands5.png', value: '/products' },
            { name: '/images/brands6.png', value: '/products' }
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
        border-top: 1px solid #E4E7EC;
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
        height: 580px;
        padding: 12px 0;

        button {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #101828;
            width: 100%;
            display: block;
            padding: 24px 0;

            &:hover {
                color: #FEC80B;
            }
        }

        .active {
            background: #FFFFFF;

            &:hover {
                color: #101828;
            }
        }
    }

    &__wrapper {
        padding: 16px 24px;
        position: absolute;
        top: 0;
        transform: translateX(320px);
        background: #FFFFFF;
        width: 100%;
        height: 100%;
        border-left: 1px solid #E4E7EC;

        display: flex;
        align-content: flex-start;
        grid-gap: 32px;
    }

    &__links {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        grid-gap: 8px;

        h3 {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            position: relative;
            left: -1px;
        }

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

        img {
            width: 151px;
            object-fit: contain;
            transition: .2s;

            &:hover {
                opacity: .5;
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
