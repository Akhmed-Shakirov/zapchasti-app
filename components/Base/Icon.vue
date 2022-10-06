<template>
    <i v-if="icon" class="icon" :class="[icon]" />
</template>

<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="scss">
.icon {
    height: 20px;
    width: 20px;
}

i.icon {
  display: inline-block;
  background: currentColor;
}

// .test {
//     @extend i, .icon;
//     mask: url('@/assets/icons/test.svg') no-repeat center / contain;
// }

.copy {
    @extend i, .icon;
    mask: url('@/assets/icons/copy.svg') no-repeat center / contain;
}

.arrow {
    @extend i, .icon;
    mask: url('@/assets/icons/arrow.svg') no-repeat center / contain;
}

.chevron {
    @extend i, .icon;
    mask: url('@/assets/icons/chevron.svg') no-repeat center / contain;
}

.close {
    @extend i, .icon;
    mask: url('@/assets/icons/close.svg') no-repeat center / contain;
}

.download {
    @extend i, .icon;
    mask: url('@/assets/icons/download.svg') no-repeat center / contain;
}

.geo {
    @extend i, .icon;
    mask: url('@/assets/icons/geo.svg') no-repeat center / contain;
}

.grid {
    @extend i, .icon;
    mask: url('@/assets/icons/grid.svg') no-repeat center / contain;
}

.like {
    @extend i, .icon;
    mask: url('@/assets/icons/like.svg') no-repeat center / contain;
}

.logo {
    @extend i, .icon;
    mask: url('@/assets/icons/logo.svg') no-repeat center / contain;
}

.menu {
    @extend i, .icon;
    mask: url('@/assets/icons/menu.svg') no-repeat center / contain;
}

.search {
    @extend i, .icon;
    mask: url('@/assets/icons/search.svg') no-repeat center / contain;
}

.search-mini {
    @extend i, .icon;
    mask: url('@/assets/icons/search-mini.svg') no-repeat center / contain;
}

.share {
    @extend i, .icon;
    mask: url('@/assets/icons/share.svg') no-repeat center / contain;
}

.basket {
    @extend i, .icon;
    mask: url('@/assets/icons/basket.svg') no-repeat center / contain;
}

.favorites {
    @extend i, .icon;
    mask: url('@/assets/icons/favorites.svg') no-repeat center / contain;
}

.profile {
    @extend i, .icon;
    mask: url('@/assets/icons/profile.svg') no-repeat center / contain;
}

.emblem {
    @extend i, .icon;
    mask: url('@/assets/emblem.svg') no-repeat center / contain;
}
</style>
