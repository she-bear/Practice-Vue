const sort = {
    data() {
        return {
            articles: [
                { id: 1, img: 'img/article_photo1.png', title: 'Let’s Get Solution For Building Construction Work', data: '26 December, 2022', price: 1 },
                {
                    id: 2, img: 'img/article_photo2.png', title: 'Low Cost Latest Invented Interior Designing Ideas.', data: '22 December, 2022', price: 16
                },
                { id: 3, img: 'img/article_photo3.png', title: 'Best For Any Office & Business Interior Solution', data: '25 December, 2022', price: 3 },
                { id: 4, img: 'img/article_photo4.png', title: 'Let’s Get Solution For Building Construction Work', data: '26 December, 2022', price: 28 },
                {
                    id: 5, img: 'img/article_photo5.png', title: 'Low Cost Latest Invented Interior Designing Ideas.', data: '22 December, 2022', price: 106
                },
                { id: 6, img: 'img/article_photo6.png', title: 'Best For Any Office & Business Interior Solution', data: '25 December, 2022', price: 8 }
            ]
        }
    },
    methods: {
        sortToUp() {
            this.articles.sort((a, b) => a.price - b.price);
        },
        sortToDown() {
            this.articles.sort((a, b) => b.price - a.price);
        }
    },
    template: `
    <h2 class="articles__title">Articles & News</h2>

    <button @click="sortToUp">Sort to Up</button>
    <button @click="sortToDown">Sort to Down</button>

    <div class="articles__content">
        <article v-for="article in articles" :key="article.id" class="articles__item">
            <img :src=article.img alt="Article photo">
            <h3 class="articles__item__title">{{ article.title }}</h3>
            <p class="articles__item__data">{{ article.price }}</p>
            <div class="articles__item__bottom">
                <p class="articles__item__data">{{ article.data }} </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </article>
    </div>
    <div class="articles__pagination">
        <img src="img/pagination_01.svg" alt="pagination icon">
        <img src="img/pagination_02.svg" alt="pagination icon">
        <img src="img/pagination_03.svg" alt="pagination icon">
        <img src="img/pagination_more.svg" alt="pagination icon">
    </div>
    `,
}
