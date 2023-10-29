<template>
    <footer class="footer center">
        <div class="footer__column">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path
                        d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                        fill="#CDA274" />
                </svg>
                <a href="index.html" class="logo__title">Interno</a>
            </div>
            <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__icons">
                <img :src="twitterIcon" alt="Twitter icon">
                <img :src="inIcon" alt="IN icon">
            </div>
        </div>
        <div class="footer__column footer__column_shifted">
            <p class="footer__title">Pages</p>
            <a href="" class="footer__text">Home</a>
            <a href="" class="footer__text">Project</a>
            <a href="" class="footer__text">Blog</a>
        </div>
        <div class="footer__column footer__column_shifted">
            <p class="footer__title">Contact</p>
            <p class="footer__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="footer__text">contact@interno.com</p>
            <p class="footer__text">(123) 456 - 7890</p>
        </div>
    </footer>
</template>
    
<script>

import twitterIcon from "@/assets/img/twitter_icon.svg";
import inIcon from "@/assets/img/in_icon.svg";

export default {
    data() {
        return {
            twitterIcon,
            inIcon,
        };
    },

}
</script>

<style lang="scss" scoped>
</style>
