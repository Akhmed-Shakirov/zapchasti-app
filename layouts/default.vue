<template>
    <div class="l-default">
        <HtmlHeader ref="headRef" />
        <HtmlToolbar />
        <div class="l-wrapper">
            <slot />
        </div>
        <HtmlFooter />
        <div class="bg-wrapper" :class="{ 'bg-wrapper__active' : isWrapper }" @click="() => resetHelper()" />
    </div>
</template>

<script setup>
const { isWrapper } = storeToRefs(useHelper())
const { resetHelper } = useHelper()
</script>

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
