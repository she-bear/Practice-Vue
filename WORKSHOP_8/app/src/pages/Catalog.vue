<template>
    <h1>Products catalog</h1>
    <div>
        <ul>
            <li v-for="(item, index) in paginatedProducts" :key="index">{{ item.text }}</li>
        </ul>
        <div v-if="totalPages > 1">
            <router-link v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">{{ pageNumber
            }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            catalog: [
                { id: 0, text: 'product-1', description: 'product-1 description' },
                { id: 1, text: 'product-2', description: 'product-2 description' },
                { id: 2, text: 'product-3', description: 'product-3 description' },
                { id: 3, text: 'product-4', description: 'product-4 description' },
                { id: 4, text: 'product-5', description: 'product-5 description' },
                { id: 5, text: 'product-6', description: 'product-6 description' },
                { id: 6, text: 'product-7', description: 'product-7 description' },
                { id: 7, text: 'product-8', description: 'product-8 description' },
            ],
            itemsPerPage: 3,
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.catalog.length / this.itemsPerPage);
        },

        paginatedProducts() {
            const pageNumber = this.getCurrentPageNumber();
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.catalog.slice(startIndex, endIndex);
        },
    },
    methods: {
        // определение номера текущей страницы
        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
        },

        // формирование ссылки на страницу pagination
        getPageLink(pageNumber) {
            return `/catalog/${pageNumber}`;
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
