import { defineStore, acceptHMRUpdate } from 'pinia'

export const useHelper = defineStore('Helper', {
    state: () => {
        return {
            isToolbar: false,
            catalogActive: 1,
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
        setCatalog (idx) {
            if (this.catalogActive !== idx) {
                this.catalogActive = idx
            }
        },

        resetHelper () {
            this.isToolbar = false
            this.catalogActive = 1
            this.isWrapper = false
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useHelper, import.meta.hot))
}
