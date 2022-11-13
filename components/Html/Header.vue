<template>
    <header class="header">
        <div class="container">
            <div class="header__logo">
                <NuxtLink to="/">
                    <BaseIcon icon="logo" />
                </NuxtLink>
                <h3>
                    <span>{{ $t('logoText') }}</span>
                    <span>{{ $t('logoText2') }}</span>
                </h3>
            </div>

            <ul class="header__menu">
                <li v-for="link in links" :key="link">
                    <NuxtLink :to="link.value">
                        {{ $t(link.name) }}
                    </NuxtLink>
                </li>
            </ul>

            <div class="header__helper">
                <BaseIcon icon="call" />
                <div class="header__block">
                    <a href="tel:+77017707089">+7(701) 770-70-89</a>
                    <p>с 9:00-18:00</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const scroll = ref(0)

onMounted(() => {
    window.addEventListener('scroll', () => {
        const top = 40
        if (!document.querySelector('.header-error')) {
            const select = document.querySelector('.header')
            if (scroll.value > window.scrollY || scroll.value < top) {
                select.classList.remove('header-hide')
            } else {
                select.classList.add('header-hide')
            }
        }
        scroll.value = window.scrollY
    })
})

const links = reactive([
    { name: 'about', value: '/about' },
    { name: 'delivery', value: '/delivery' },
    { name: 'clients', value: '/clients' },
    { name: 'leasing', value: '/leasing' }
])
</script>

<style scoped lang="scss">
.header {
    height: 64px;
    width: 100%;
    position: fixed;
    transition: .4s;
    top: 0;
    z-index: 300;
    padding: 12px 0;
    background: #FFFFFF;
    border-bottom: 1px solid #E4E7EC;

    &-hide {
        top: -200px;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        display: flex;
        align-items: center;
        height: 40px;

        a {
            width: 80px;
            height: 100%;
            color: #101828;

            &:hover {
                color: #FEC80B;
            }
        }

        .icon {
            width: 100%;
            height: 100%;
        }

        h3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            border-left: 4px solid #FEC80B;
            padding-left: 16px;
            margin-left: 16px;

            span {
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                color: #101828;
            }
        }
    }

    &__menu {
        display: flex;
        grid-gap: 28px;

        a {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            padding: 3px 2px;

            &:hover {
                color: #FEC80B;
            }
        }

        .router-link-exact-active {
            color: #FEC80B;

            &:hover {
                color: #FEC80B;
            }
        }
    }

    &__helper {
        display: flex;
        align-items: center;
        grid-gap: 16px;

        .call {
            background: #FEC80B;
        }
    }

    &__block {
        a {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            margin-bottom: 4px;

            &:hover {
                color: #FEC80B;
            }
        }

        p {
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            color: #667085;
        }
    }
}

</style>
