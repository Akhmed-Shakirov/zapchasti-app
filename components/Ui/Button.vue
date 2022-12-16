<template>
    <button class="btn" :class="{ 'btn-out' : out, 'btn-icon' : icon, 'btn-blue' : blue, 'btn-green' : green, 'btn-gray' : gray }">
        <BaseIcon class="icons" :class="{ 'icons-main' : icon && !animat }" :icon="icon" />
        <BaseIcon class="icons" :class="{ 'icons-active' : icon && animat && iconAni }" :icon="iconAni" />
        {{ $t(value) }} <span v-if="count">{{ count }}</span>
        <BaseIcon v-if="iconR" :class="{ 'icon-main' : iconR }" :icon="iconR" />
    </button>
</template>

<script setup>
const props = defineProps({
    value: {
        type: String,
        default: 'nullText'
    },
    count: {
        type: Number,
        default: null
    },
    animat: {
        type: Boolean,
        default: undefined
    },
    blue: {
        type: Boolean,
        default: false
    },
    green: {
        type: Boolean,
        default: false
    },
    gray: {
        type: Boolean,
        default: false
    },
    out: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    },
    iconR: {
        type: String,
        default: ''
    },
    iconAni: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="scss">
.btn {
    height: 48px;
    padding: 12px 28px;
    grid-gap: 8px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    border: 2px solid #FFDA33;
    background: #FFDA33;
    position: relative;

    &:hover {
        background: #FFFFFF;
    }

    &-icon {
        padding-left: 56px;
    }

    &-out {
        background: #FFFFFF;

        &:hover {
            background: #FFDA33;
        }
    }

    &-blue {
        border: 2px solid #1570EF;
        background: #1570EF;
        color: #FFFFFF;

        &:hover {
            color: #1570EF;
            background: #FFFFFF;
        }
    }

    &-green {
        border: 2px solid #0DB14B;
        background: #0DB14B;
        color: #FFFFFF;

        &:hover {
            color: #0DB14B;
            background: #FFFFFF;
        }
    }

    &-gray {
        border: 2px solid #E4E7EC;
        background: #E4E7EC;
        color: #000000;

        &:hover {
            color: #000000;
            background: #FFFFFF;
        }
    }

    .icons {
        position: absolute;
        transition: .2s;
        left: 28px;
        opacity: 0;

        &-main {
            opacity: 1;
        }

        &-active {
            opacity: 1;
        }
    }
}
</style>
