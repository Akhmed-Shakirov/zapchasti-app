<template>
    <div class="l-default">
        <HtmlHeader ref="headRef" />
        <HtmlToolbar />
        <div class="l-wrapper">
            <slot />
        </div>
        <HtmlFooter />
    </div>
</template>

<style scoped lang="scss">
.l-default {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    .l-wrapper {
        min-height: 200px;
        flex: 1 1 auto;
    }
}
</style>
