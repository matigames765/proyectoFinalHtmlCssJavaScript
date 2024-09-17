import { renderCategories } from "./src/categories.js";
import { setInLocalStorage } from "./src/persistence/localStorage.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import './style.css';


//====APLICACION====
handleGetProductsToStore();
renderCategories();

/* ===product===*/

const buttonAdd = document.getElementById('buttonAddElement');

buttonAdd.addEventListener('click',()=>{
    openModal();
})



/* ===POPUP===*/


const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click',()=>{
    handleCancelButton();
})

//preguntar por que no se usa directamente closeModal y cual es la diferencia entre modal y pop up
const handleCancelButton = () => {
    closeModal();
}

//FUNCIONES ABRIR CERRAR MODAL
const openModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = 'flex';
}

const closeModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = 'none';
}

//guardar o modificar elementos

const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyElements();
})

const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('nombre').value,
        precio = document.getElementById('precio').value,
        imagen = document.getElementById('img').value,
        categories = document.getElementById('categoria').value;

    let object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categories
    };

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}