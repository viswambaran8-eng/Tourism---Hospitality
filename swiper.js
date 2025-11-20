    const Page = document.querySelector("#page");
    const Drop_menu = document.querySelector(".drop_menu");

    Page.addEventListener("click", () => {
      Drop_menu.classList.toggle("drop_menu");
      Drop_menu.classList.toggle("drop_menu1");
    });

    // Side Bar
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const dropdowns = document.querySelector(".dropdownArrow");
    const dropdown1 = document.querySelector(".dropdownArrow1");
    const subMenu = document.querySelector(".submenu");
    const subMenu2 = document.querySelector(".submenu2");

    // Open sidebar
    hamburger.addEventListener("click", () => {
      sidebar.style.width = "100%";
    });

    // Close sidebar
    closeBtn.addEventListener("click", () => {
      sidebar.style.width = "0";
    });

    // Toggle submenus

    dropdowns.addEventListener("click", () => {
      subMenu.classList.toggle("submenu");
      subMenu.classList.toggle("submenu1");
    });

    // dropdown1.addEventListener("click", () => {
    //   subMenu2.classList.toggle("submenu2");
    //   subMenu2.classList.toggle("submenu1");
    // });