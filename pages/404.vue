<template>
    <NuxtLayout>
        <div class="page-404">
            <h1>404</h1>
            <p>{{ $t('pageNotFound') }}</p>
        </div>
    </NuxtLayout>
</template>

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
