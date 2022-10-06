<template>
    <div class="pagination">
        <UiButton value="showMore" />

        <div class="pagination__items">
            <button class="back">
                <BaseIcon icon="chevron" />
                {{ $t('back') }}
            </button>
            <ul>
                <li>1</li>
                <li>...</li>
                <li class="active">
                    5
                </li>
                <li>6</li>
                <li>7</li>
                <li>...</li>
                <li>15</li>
            </ul>
            <button class="farther">
                {{ $t('farther') }}
                <BaseIcon icon="chevron" />
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 65px;
    width: 100%;

    &__items {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 24px;

        button {
            font-weight: 600;
            font-size: 16px;
            line-height: 32px;
            color: #000000;

            &:hover {
                opacity: .5;
            }
        }
        .back {
            .icon {
                transform: rotate(90deg);
            }
        }
        .farther {
            .icon {
                transform: rotate(-90deg);
            }
        }
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 5px;

        li {
            width: 29px;
            height: 29px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 16px;
            line-height: 32px;
            color: #848484;
            user-select: none;
            cursor: pointer;
            transition: .2s;

            &:hover {
                color: #000000;
            }
        }

        .active {
            background: #FFDA33;
            border-radius: 50%;
            color: #000000;
        }
    }
}
</style>
