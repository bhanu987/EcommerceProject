export const showToast= (operation , id)=>{

    const toast = document.createElement("div");
    toast.classList.add("toast")

    //set the  text content of toast based on operation

    if(operation === "add"){
        toast.textContent = `Product with ID ${id} added successfully`
    }
    else if(operation === "delete"){
        toast.textContent = `Product with ID ${id} deleted successfully`
    }

    document.body.appendChild(toast)

    setTimeout(()=>{
        toast.remove();
    },2000)
}