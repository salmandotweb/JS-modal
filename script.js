const showBtn = document.querySelector(".showModalBtn");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");
const modalWrapper = document.querySelector(".modal_wrapper");
const modal = document.querySelector(".modal");

const showModal = () => {
  modalWrapper.style.display = "flex";
};
const closeModal = () => {
  modal.classList.add("closeAnimate");
  setTimeout(() => {
    modalWrapper.style.display = "none";
    modal.classList.remove("closeAnimate");
  }, 500);
};

showBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
