<template>
    <NuxtLayout>
        <div class="page-404">
            <h1 @click="response">
                404
            </h1>
            <p>{{ $t('pageNotFound') }}</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
const id = 9
const response = () => {
    // myFetch('catalog/' + id, 'DELETE').then((res) => {
    //     console.log('Request complete! response:', res)
    // })
}

</script>

<style lang="scss">
.page-404 {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 70px;
    }

    p {
        margin-top: 10px;
        font-size: 24px;
    }
}
</style>
