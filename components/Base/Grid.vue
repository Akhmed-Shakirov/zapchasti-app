<template>
    <div class="grid">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
}
</style>
