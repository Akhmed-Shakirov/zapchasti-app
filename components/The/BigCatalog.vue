<template>
    <div class="big-catalog">
        <h3>{{ $t(value.title) }}</h3>
        <p>{{ $t(value.text) }}</p>
        <div class="big-catalog__links">
            <NuxtLink v-for="link in value.links" :key="link" :to="link.url">
                {{ $t(link.name) }}
                <img :src="link.img" :alt="link.name">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    value: {
        type: Object,
        deflaut: {}
    }
})
</script>

<style lang="scss" scoped>
.big-catalog {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 24px;

    h3 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 4px;
    }

    p {
        max-width: 318px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #344054;
        margin-bottom: 24px;
        min-height: 40px;
    }

    a {
        height: 138px;
        background: #F9FAFB;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #344054;
        border: 1px solid transparent;
        position: relative;
        padding: 20px 17px;

        img {
            object-fit: contain;
            position: absolute;
            right: 5px;
            bottom: 5px;
            max-width: 148px;
            max-height: 82px;
        }

        &:hover {
            background: transparent;
            border: 1px solid #E4E7EC;
        }
    }

    &__links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
    }
}
</style>
