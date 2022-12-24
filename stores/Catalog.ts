import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCatalog = defineStore('Catalog', {
    state: () => {
        return {
            catalog: [],
            brands: [],
            types: [],
            categories: [],

            main: []
        }
    },
    actions: {
        setMain () {
            this.main = this.catalog.map(el => ({
                ...el,
                transport: [
                    ...this.categories.filter(ct =>
                        el.name !== 'Все категории' ? ct.types === this.types.find(tp => tp.name === 'Транспорт').id && ct.catalog === el.id : ct.types === this.types.find(tp => tp.name === 'Транспорт').id)
                ],
                spareParts: [
                    ...this.categories.filter(ct =>
                        el.name !== 'Все категории' ? ct.types === this.types.find(tp => tp.name === 'Запчасти').id && ct.catalog === el.id : ct.types === this.types.find(tp => tp.name === 'Запчасти').id)
                ],
                brands: [...this.brands.filter(br => el.name !== 'Все категории' ? br.catalog === el.id : br.catalog)]
            }))
        },
        setCatalog (catalog, brands, types, categories) {
            this.catalog = catalog
            this.brands = brands
            this.types = types
            this.categories = categories

            this.setMain()
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCatalog, import.meta.hot))
}
