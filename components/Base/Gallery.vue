<template>
    <div class="gallery">
        <div class="gallery__bar">
            <img src="/images/card.png" class="active" alt="card">
            <img src="/images/card.png" alt="card">
            <img src="/images/card.png" alt="card">
            <img src="/images/card.png" alt="card">
            <img src="/images/card.png" alt="card">

            <BaseIcon icon="chevron" />
        </div>
        <img src="/images/card.png" class="gallery__main" alt="card">
    </div>
</template>

<style lang="scss">
.gallery {
    display: flex;
    grid-gap: 24px;

    &__bar {
        display: flex;
        align-items: center;
        flex-direction: column;
        grid-gap: 16px;

        img {
            width: 89px;
            height: 94px;
            object-fit: cover;
            background: #2F2F2F;
            cursor: pointer;
            user-select: none;
            transition: .2s;

            &:hover {
                opacity: .8;
            }
        }

        .icon {
            cursor: pointer;
            transition: .2s;

            &:hover {
                opacity: .5;
            }
        }

        .active {
            border: 3px solid #FFDA33;
            box-shadow: 0px 0.328713px 2.6297px rgba(0, 0, 0, 0.05);

            &:hover {
                opacity: 1;
            }
        }
    }

    &__main {
        width: 675px;
        height: 574px;
        object-fit: contain;
        background: #2F2F2F;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    }
}
</style>
