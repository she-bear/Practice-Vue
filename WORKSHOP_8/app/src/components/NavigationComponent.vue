<template>
    <nav>
        <router-link v-for="link in linkArr" :key="link.id" :to="link.url">{{ link.name }}</router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            linkArr: [
                {
                    id: 0,
                    name: 'home',
                    url: '/'
                },
                {
                    id: 1,
                    name: 'about',
                    url: '/about'
                },
                {
                    id: 2,
                    name: 'contact',
                    url: '/contact'
                },
                {
                    id: 3,
                    name: 'catalog',
                    url: '/catalog'
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
