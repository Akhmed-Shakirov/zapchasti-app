import { defineStore, acceptHMRUpdate } from 'pinia'

export const useHelper = defineStore('Helper', {
    state: () => {
        return {
            isToolbar: false,
            isWrapper: false
        }
    },
    actions: {
        toggleToolbar () {
            this.isToolbar = !this.isToolbar
        },
        toggleWrapper () {
            this.isWrapper = !this.isWrapper
        },

        resetHelper () {
            this.isToolbar = false
            this.isWrapper = false
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useHelper, import.meta.hot))
}
