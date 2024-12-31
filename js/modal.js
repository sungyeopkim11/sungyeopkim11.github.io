document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("detailsModal");

    const openModalBtn = document.getElementById("detailsBtn");

    const closeModalBtn = modal.puerySelector(".close");

    const openModal = () => {
        modal.style.display = "block";
    };

    const closeModal = () => {
        modal.style.display = "none";
    };

    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
    });

    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    window.addEventListener("click", (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
});