// Destacar link ativo do menu
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // por enquanto, só estilo; depois você troca pelos links reais

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    console.log("Seção selecionada:", link.dataset.section);
  });
});

// Clique nas categorias
const categories = document.querySelectorAll(".category");

categories.forEach(cat => {
  cat.addEventListener("click", () => {
    const nome = cat.dataset.category;
    alert(`Você selecionou a categoria: ${nome}`);
    // Aqui depois você pode redirecionar para outra página:
    // window.location.href = `categorias/${nome.toLowerCase()}.html`;
  });
});
