import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imgSrc: 'https://picsum.photos/400/200',
        }
    }
}).mount('#app')

