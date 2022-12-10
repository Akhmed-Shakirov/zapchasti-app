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
//     mask: url('/icons/test.svg') no-repeat center / contain;
// }

.star {
    width: 10px;
    height: 10px;
    background: #fff !important;
    @extend i, .icon;
    mask: url('/icons/star.svg') no-repeat center / contain;
}

.buses {
    height: 9px;
    @extend i, .icon;
    mask: url('/icons/buses.svg') no-repeat center / contain;
}

.electricCars {
    height: 10px;
    @extend i, .icon;
    mask: url('/icons/electricCars.svg') no-repeat center / contain;
}

.trucks {
    height: 11px;
    @extend i, .icon;
    mask: url('/icons/trucks.svg') no-repeat center / contain;
}

.electricalGoods {
    @extend i, .icon;
    mask: url('/icons/electricalGoods.svg') no-repeat center / contain;
}

.spareParts {
    @extend i, .icon;
    mask: url('/icons/spareParts.svg') no-repeat center / contain;
}

.agriculturalMachinery {
    @extend i, .icon;
    mask: url('/icons/agriculturalMachinery.svg') no-repeat center / contain;
}

.specialEquipment {
    @extend i, .icon;
    mask: url('/icons/specialEquipment.svg') no-repeat center / contain;
}

.check-select {
    @extend i, .icon;
    mask: url('/icons/check-select.svg') no-repeat center / contain;
}

.call {
    @extend i, .icon;
    mask: url('/icons/call.svg') no-repeat center / contain;
}

.copy {
    @extend i, .icon;
    mask: url('/icons/copy.svg') no-repeat center / contain;
}

.arrow {
    @extend i, .icon;
    mask: url('/icons/arrow.svg') no-repeat center / contain;
}

.chevron {
    @extend i, .icon;
    mask: url('/icons/chevron.svg') no-repeat center / contain;
}

.close {
    @extend i, .icon;
    mask: url('/icons/close.svg') no-repeat center / contain;
}

.download {
    @extend i, .icon;
    mask: url('/icons/download.svg') no-repeat center / contain;
}

.geo {
    @extend i, .icon;
    mask: url('/icons/geo.svg') no-repeat center / contain;
}

.allCategories {
    @extend i, .icon;
    background: #98A2B3;
    mask: url('/icons/allCategories.svg') no-repeat center / contain;
}

.grid {
    @extend i, .icon;
    mask: url('/icons/grid.svg') no-repeat center / contain;
}

.like {
    @extend i, .icon;
    mask: url('/icons/like.svg') no-repeat center / contain;
}

.logo {
    @extend i, .icon;
    mask: url('/icons/logo.svg') no-repeat center / contain;
}

.menu {
    @extend i, .icon;
    mask: url('/icons/menu.svg') no-repeat center / contain;
}

.search {
    @extend i, .icon;
    mask: url('/icons/search.svg') no-repeat center / contain;
}

.search-mini {
    @extend i, .icon;
    mask: url('/icons/search-mini.svg') no-repeat center / contain;
}

.share {
    @extend i, .icon;
    mask: url('/icons/share.svg') no-repeat center / contain;
}

.basket {
    @extend i, .icon;
    mask: url('/icons/basket.svg') no-repeat center / contain;
}

.favorites {
    @extend i, .icon;
    mask: url('/icons/favorites.svg') no-repeat center / contain;
}

.profile {
    @extend i, .icon;
    mask: url('/icons/profile.svg') no-repeat center / contain;
}

.emblem {
    @extend i, .icon;
    mask: url('/emblem.svg') no-repeat center / contain;
}
</style>
