// Importação do Firebase para a versão modular (v9+)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";  // Atualizado para a versão modular

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC_5187ACsNfTXvete_r_G9Z0ke3IfecTM",
    authDomain: "formularioportsamuelofcial.firebaseapp.com",
    databaseURL: "https://formularioportsamuelofcial-default-rtdb.firebaseio.com/", // Verifique o URL do seu banco de dados
    projectId: "formularioportsamuelofcial",
    storageBucket: "formularioportsamuelofcial.firebasestorage.app",
    messagingSenderId: "399475582021",
    appId: "1:399475582021:web:027ea7676bd049134caf2c",
    measurementId: "G-JJ1KZNRERG"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);  // Obtém a referência para o Realtime Database

// Exportando as funções necessárias
export { db, ref, set };
