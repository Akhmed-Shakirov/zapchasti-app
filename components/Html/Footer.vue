<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="footer__info">
                    <NuxtLink to="/">
                        <BaseIcon icon="logo" />
                    </NuxtLink>
                    <h3>International machinery parts trade</h3>
                    <h4>
                        <span>{{ $t('footerText') }}</span>
                        <span>{{ $t('footertext2') }}</span>
                    </h4>
                </div>

                <div v-for="link in links" :key="link" class="footer__menu">
                    <NuxtLink :to="link.value" class="footer__title">
                        {{ $t(link.name) }}
                    </NuxtLink>
                    <NuxtLink v-for="item in link.child" :key="item" :to="item.value" class="footer__link">
                        {{ $t(item.name) }}
                    </NuxtLink>
                </div>

                <div class="footer__helper">
                    <h4 class="footer__title">
                        {{ $t('forQuestions') }}
                    </h4>
                    <a v-for="tel in tels" :key="tel" :href="`tel:+${tel.value}`">
                        {{ tel.name }}
                    </a>
                </div>
            </div>

            <div class="footer__bottom">
                {{ $t('footerBottom') }}
            </div>
        </div>
    </footer>
</template>

<script setup>
const links = reactive([
    {
        name: 'about',
        value: 'about',
        child: [
            { name: 'contacts', value: '/contacts' },
            { name: 'termsUse', value: '/termsUse' },
            { name: 'dataPolicy', value: '/dataPolicy' }
        ]
    },
    {
        name: 'clients',
        value: 'clients',
        child: [
            { name: 'shippingPayment', value: '/shippingPayment' },
            { name: 'howOrder', value: '/howOrder' },
            { name: 'howReturn', value: '/howReturn' },
            { name: 'loyaltyProgram', value: '/loyaltyProgram' },
            { name: 'questionsAnswers', value: '/questionsAnswers' },
            { name: 'serviceCentres', value: '/serviceCentres' },
            { name: 'legalEntities', value: '/legalEntities' }
        ]
    },
    {
        name: 'benefit',
        value: 'benefit',
        child: [
            { name: 'stock', value: '/stock' },
            { name: 'new', value: '/new' },
            { name: 'sale', value: '/sale' }
        ]
    }
])

const tels = reactive([
    { name: '+ 7(701)770-70-89', value: 77017707089 },
    { name: '+ 7(727)270-70-89', value: 77017707089 }
])
</script>

<style scoped lang="scss">
.footer {
    background: #1D2939;
    padding: 32px 0 16px;
    color: #FFFFFF;

    &__top {
        padding-bottom: 24px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        grid-gap: 60px;
    }

    &__info {
        a {
            height: 39px;
            color: #FFFFFF;
            border-bottom: 4px solid #FEC80B;

            .icon {
                transition: .2s;
                width: 80px;
                height: 39px;

                &:hover {
                    color: #FEC80B;
                }
            }

        }

        h3 {
            margin-top: 10px;
            width: 138px;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
        }

        h4 {
            display: flex;
            flex-direction: column;
            margin-top: 16px;

            &, span {
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
            }

            span:last-child {
                color: #FEC80B;
            }
        }
    }

    &__bottom {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
        padding-top: 16px;
        border-top: 1px solid #667085;
    }

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        margin-bottom: 8px;
    }

    &__link {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #dfdfdf;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;

        a:hover {
            color: #FEC80B;
        }
    }

    &__helper {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;

        a {
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            color: #FFDA33;

            &:hover {
                color: #c2b68b;
            }
        }
    }
}
</style>
