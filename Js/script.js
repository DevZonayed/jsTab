let teb_menu = document.querySelectorAll(".zon_tab_menu ul li a");
let teb_menu_p = document.querySelectorAll(".zon_tab_menu ul li");
teb_menu.forEach((singlemenu) => {
  singlemenu.addEventListener("click", function (e) {
    e.preventDefault();
    teb_menu_p.forEach((element) => {
      element.classList.remove("active");
    });
    this.parentElement.classList.add("active");

    let teb_content = document.querySelectorAll(".blog_body");
    teb_content.forEach((get) => {
      get.classList.remove("active");
    });
    if (e.target == this) {
      let teb_content = document.querySelector(this.getAttribute("href"));
      teb_content.classList.add("active");
    }
  });
});
