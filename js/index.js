window.addEventListener("load", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");
  
    if (!popup || !closeBtn) return;
  
    popup.style.display = "flex";
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  });
  