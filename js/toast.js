const openToast = (text) => {
    let toast = document.getElementById("toast");
    if (!toast.classList.contains("show")) {
        toast.innerText = text;
        toast.classList.add("show");
        setTimeout(() => { toast.classList.remove("show") }, 3000);
    }
}
