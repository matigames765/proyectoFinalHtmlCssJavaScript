/* ===POPUP===*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";


const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click',()=>{
    closeModal();
})

//FUNCIONES ABRIR CERRAR MODAL
export const openModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = 'flex';
    const buttonDelete = document.getElementById('deleteButton');
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById('nombre'),
        precio = document.getElementById('precio'),
        imagen = document.getElementById('img'),
        categories = document.getElementById('categoria');
        nombre.value = productoActivo.nombre;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
        imagen.value = productoActivo.imagen;
    }
}

export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = 'none';
    setProductoActivo(null);
    resetModal();
}

const resetModal = ()=>{
    const nombre = document.getElementById('nombre'),
        precio = document.getElementById('precio'),
        imagen = document.getElementById('img'),
        categories = document.getElementById('categoria');
        nombre.value = "";
        precio.value = 0;
        categories.value = "Seleccione una Categoria";
        imagen.value = "";
}

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click',()=>{
    handlebuttonDelete();
})

const handlebuttonDelete = () => {
    handleDeleteProduct();
}