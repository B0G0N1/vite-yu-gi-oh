import { reactive } from 'vue';  // Importa il metodo reactive da Vue

// Crea un oggetto reattivo chiamato store
export const store = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0",  // URL dell'API da cui ottenere le informazioni sulle carte
    archetipeApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cardList: [],  // Lista delle carte, inizialmente vuota
    archetipeList: []
});