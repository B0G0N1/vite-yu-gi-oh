import { reactive } from 'vue';  // Importa il metodo reactive da Vue

// Crea un oggetto reattivo chiamato store
export const store = reactive({
    cardApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",  // URL dell'API da cui ottenere le informazioni sulle carte
    archetypeApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",  // URL dell'API da cui ottenere le informazioni sugli archetipi
    cardList: [],  // Lista delle carte, inizialmente vuota
    archetypeList: [],  // Lista degli archetipi, inizialmente vuota
    archetypeName: "All",  // Nome dell'archetipo selezionato, di default "All"
    searchText: null  // Testo di ricerca, inizialmente nullo
});