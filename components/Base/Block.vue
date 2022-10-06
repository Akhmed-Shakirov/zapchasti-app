<template>
    <div class="block">
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.block {
    width: 100%;
    padding-bottom: 80px;
    .container {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
        justify-content: space-between;
    }
    .sidebar {
        width: 290px;
        background: #FFFFFF;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        grid-gap: 24px;
        padding: 16px;
    }
    .main {
        width: calc(100% - 314px);
    }
}
</style>
