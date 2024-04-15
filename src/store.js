import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endPoint:{
        "names":"name",
        "type":"type",
        "card_images":"card_images",
    }
});