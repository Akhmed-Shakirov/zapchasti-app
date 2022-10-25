<template>
    <div ref="carousel" class="carousel" :style="{ '--gap': gap + 'px'}">
        <div ref="track" class="carousel__track">
            <slot />
        </div>
        <div class="carousel__arrows">
            <button v-show="arrow && prev === 'carousel__arrows-prev'" class="carousel__arrows-prev">
                prev
            </button>
            <button v-show="arrow && next === 'carousel__arrows-next'" class="carousel__arrows-next">
                next
            </button>
        </div>
        <div v-if="dots" class="carousel__dots">
            <button
                v-for="(dot, index) in items"
                :key="dot"
                :class="{ 'active' : position === itemWidth * -(index) }"
                @click="() => setNewPosition(index)"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    prev: {
        type: String,
        default: 'carousel__arrows-prev'
    },
    next: {
        type: String,
        default: 'carousel__arrows-next'
    },
    dots: {
        type: Boolean,
        default: false
    },
    arrow: {
        type: Boolean,
        default: false
    },
    show: {
        type: Number,
        default: 1
    },
    scroll: {
        type: Number,
        default: 1
    },
    gap: {
        type: Number,
        default: 0
    },
    timer: {
        type: Number,
        default: 7
    }
})

const position = ref(0)
const movePosition = ref()
const carousel = ref(null)
const track = ref(null)
const items = ref()
const itemsCount = ref()
const itemWidth = ref()

onMounted(() => {
    setTimeout(() => {
        items.value = track.value.children
        itemsCount.value = items.value.length
        console.log(((props.show - 1) * props.gap))
        itemWidth.value = (carousel.value.clientWidth - ((props.show - 1) * props.gap)) / props.show
        movePosition.value = props.scroll * itemWidth.value + ((props.show - props.scroll) * props.gap)

        for (const el of items.value) {
            el && el.setAttribute('style', `min-width: ${itemWidth.value}px;`)
        }

        const btnPrev = document.querySelector(`.${props.prev}`)
        const btnNext = document.querySelector(`.${props.next}`)

        btnPrev.onclick = () => {
            if (position.value !== 0) {
                const itemsLeft = Math.abs(position.value) / itemWidth.value
                position.value += itemsLeft >= props.scroll ? movePosition.value : itemsLeft * itemWidth.value
            } else {
                position.value = -(itemsCount.value - (Math.abs(position.value) + props.show * (itemWidth.value - ((props.show - props.scroll) * props.gap))) / itemWidth.value) * itemWidth.value
            }
        }

        btnNext.onclick = () => {
            if (itemsCount.value - (Math.abs(position.value) + props.show * (itemWidth.value - ((props.show - props.scroll) * props.gap))) / itemWidth.value) {
                const itemsLeft = itemsCount.value - (Math.abs(position.value) + props.show * (itemWidth.value - ((props.show - props.scroll) * props.gap))) / itemWidth.value
                position.value -= itemsLeft >= props.scroll ? movePosition.value : itemsLeft * itemWidth.value
            } else {
                position.value = 0
            }
        }

        // eslint-disable-next-line no-var
        var timer = setInterval(btnNext.onclick, props.timer * 1000)

        watch(() => position.value, (f, l) => {
            setPosition()
            timer = clearInterval(timer)
            timer = setInterval(btnNext.onclick, props.timer * 1000)
        })

        const setPosition = () => {
            track.value && track.value.setAttribute('style', `transform: translateX(${position.value}px)`)
        }
    }, 100)
})

const setNewPosition = (index) => {
    position.value = itemWidth.value * -(index)
    track.value && track.value.setAttribute('style', `transform: translateX(${position.value}px)`)
}

// const checkBtns = () => {
//     if (position.value === 0) {
//         document.querySelector(`.${props.prev}`).classList.add('disabled')
//         document.querySelector(`.${props.next}`).classList.remove('disabled')
//         valueBtns.value = 1
//     } else if (position.value <= -(itemsCount.value - props.show) * itemWidth.value) {
//         document.querySelector(`.${props.next}`).classList.add('disabled')
//         document.querySelector(`.${props.prev}`).classList.remove('disabled')
//         valueBtns.value = 2
//     } else {
//         document.querySelector(`.${props.prev}`).classList.remove('disabled')
//         document.querySelector(`.${props.next}`).classList.remove('disabled')
//         valueBtns.value = 0
//     }
// }
</script>

<style scoped lang="scss">
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;

    &__track {
        display: flex;
        transition: .2s;
        grid-gap: var(--gap);
    }

    &__arrows {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-prev, &-next {
            border: 1px solid black;
            padding: 5px 10px;
            border-radius: 4px;
        }
    }

    &__dots {
        z-index: 1;
        position: absolute;
        display: flex;
        align-items: center;
        grid-gap: 10px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 15px;

        button {
            width: 12px;
            height: 12px;
            background: #D0D5DD;
            border-radius: 50%;

            &:hover {
                background: #e9ebef;
            }
        }

        .active {
            background: #FFFFFF;

            &:hover {
                background: #FFFFFF;
            }
        }
    }
}
</style>
