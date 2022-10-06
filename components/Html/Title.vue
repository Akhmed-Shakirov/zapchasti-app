<template>
    <div class="title">
        <div class="container">
            <div class="title__content">
                <div class="title__menu">
                    <NuxtLink to="/">
                        {{ $t('home') }}
                    </NuxtLink>
                    <div v-for="link in links" :key="link">
                        /
                        <NuxtLink :to="link.value">
                            {{ $t(link.name) }}
                        </NuxtLink>
                    </div>
                    <template v-if="endMenu">
                        /
                        <p>
                            {{ $t('categoriesName') }}
                        </p>
                    </template>
                </div>
                <h1>
                    {{ $t(title) }} <span v-if="producting">15 682 {{ $t('producting') }}</span>
                </h1>
                <h4>
                    <span v-if="code">{{ $t('productCode') }}: 01234567 <BaseIcon icon="copy" /></span>
                </h4>
            </div>

            <div v-if="grid" class="title__content">
                <div class="title__grid">
                    <p>Сортировка: <span>По популярности</span></p>
                    <div class="title__toggle">
                        <sup><BaseIcon icon="menu" /></sup>
                        <sup class="active"><BaseIcon icon="grid" /></sup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    grid: {
        type: Boolean,
        default: false
    },
    code: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'palfinger'
    },
    producting: {
        type: Number,
        default: null
    },
    endMenu: {
        type: String,
        default: 'categoriesName'
    },
    links: {
        type: Array,
        default () {
            return [
                { name: 'categories', value: 'categories' }
            ]
        }
    }
})
</script>

<style scoped lang="scss">
.title {
    padding: 16px 0 8px;

    .container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    &__menu {
        margin-bottom: 16px;

        &, div {
            display: flex;
            align-items: center;
            grid-gap: 8px;
        }

        a, p {
            font-weight: 500;
            font-size: 14px;
            line-height: 32px;
            color: #848484;

            &:hover {
                color: #1A1C1F;
            }
        }

        p:hover {
            color: #848484;
        }
    }

    h1 {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #000000;
    }

    h4 {
        height: 32px;
        min-width: 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        color: #848484;

        span {
            display: flex;
            align-items: center;
        }

        .icon {
            margin-left: 8px;
            cursor: pointer;
            transition: .2s;

            &:hover {
                color: #1A1C1F;
            }
        }
    }

    &__grid {
        display: flex;
        align-items: center;
        grid-gap: 28px;
        margin-bottom: 40px;

        p, span {
            font-weight: 500;
            font-size: 16px;
            line-height: 32px;
        }

        p {
            color: #848484;
        }

        span {
            color: #000000;
        }
    }

    &__toggle {
        display: flex;
        align-items: center;
        grid-gap: 10px;

        sup {
            cursor: pointer;
            width: 29px;
            height: 29px;
            background: transparent;
            color: #848484;
            border-radius: 50%;
            transition: .2s;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background: #ffda3365;
                color: #000000;
            }
        }

        .active {
            background: #FFDA33;
            color: #000000;

            &:hover {
                background: #FFDA33;
            }
        }
    }
}
</style>
