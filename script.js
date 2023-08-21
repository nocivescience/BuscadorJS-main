window.addEventListener("scroll", () => {
  const contenedorMain = document.querySelector("#contenedor-main");
  const scrollPosition = window.scrollY;
  contenedorMain.style.transform = `skewY(${scrollPosition * 0.1<5?scrollPosition*.1:5}deg)`;
  document.querySelector("html").style.backgroundColor = `
    hsl(${scrollPosition * 0.1<360?scrollPosition*.1:360}, 100%, 50%)
  `;
});
setInterval(() => {
  console.log(window.scrollY);
}, 1000);
document.addEventListener("keyup", e=>{
  if (e.target.matches("#buscador")){
      if (e.key ==="Escape")e.target.value = ""
      document.querySelectorAll(".articulo").forEach(fruta =>{
          fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
      })
  }
})