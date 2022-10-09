import { useHelper } from '@/stores/Helper'

export default defineNuxtRouteMiddleware((to, from) => {
    const { resetHelper } = useHelper()
    resetHelper()
})
