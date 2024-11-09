'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')




const tempClient = {
    nome: "Francisco Josias Da Silva Batista",
    email: "josiasmartins098@gmail.com",
    celular: "(85) 98231-7976",
    cidade: "Quixadá",
    estado: "Ceará"
}

const getLocalStorage = () => {
    JSON.parse(localStorage.getItem('db_client')) ?? [];
}

const setLocalStorage = (dbClient) => {
    localStorage.setItem("db_client", JSON.stringify(dbClient));
}

// CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push (client);
    setLocalStorage(dbClient);
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)