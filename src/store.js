import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    cards: [],
    loading :false,
    endPoint:{
        "card":"cardinfo.php?",
    },
    options:{
        params:{
            num: 20,
            offset: 0
        }
    },
    error:{
        message:null
    },
    statusFilter:''
  
   
});