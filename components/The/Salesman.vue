<template>
    <div class="salesman">
        <img src="/images/brands1.png" alt="brands1" class="salesman__img">
        <div class="salesman__main">
            <h3>SHANTUI Technology Co., Ltd.</h3>
            <p>is a company funded and established by the Jiacheng Group (established in 2001,with a registered capital of 410 million RMB, its business scope covering construction, machinery, etc., and it has obtained 25 national patents). Relying on the group's strong funding, it has established a strong technical research and development team <a href="http://www.shantui.hk" target="_blank" rel="noopener noreferrer">подробнее...</a></p>
            <div class="salesman__icon">
                <span v-for="star in [1,2,3,4,5]" :key="star">
                    <BaseIcon icon="star" />
                </span>
            </div>
            <p>web site: <a href="http://www.shantui.hk" target="_blank" rel="noopener noreferrer">www.shantui.hk</a></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({

})
</script>

<style scoped lang="scss">
.salesman {
    width: 100%;
    display: flex;
    grid-gap: 24px;
    padding: 8px;

    &__img {
        width: 163px;
        height: 60px;
        object-fit: contain;
        border: 1px solid #E4E7EC;
        border-radius: 4px;
    }

    &__main {
        max-width: 928px;

        h3 {
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: #101828;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #101828;
            margin-bottom: 16px;
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        grid-gap: 2px;
        margin-bottom: 16px;

        span {
            padding: 2.5px;
            background: #CACACA;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
