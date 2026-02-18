document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content"); //сюда рендерится контент
  const menu = document.querySelector(".menu"); //сюда рендерится меню
  const section = document.querySelector(".section"); //тут меняем стиль отображения
  const body = document.getElementById("body"); //тут меняем тему
  function render(tabName) {
    // Рендер контента
    if (tabName === "info") {
      content.innerHTML = infoData();
      window.scrollTo(0, 0);
    } else if (tabName === "projects" || tabName === "lab") {
      content.innerHTML = projectsData();
      window.scrollTo(0, 0);
    }

    // Рендер меню
    if (tabName === "info" || tabName === "projects") {
      menu.innerHTML = infoMenu();
    } else if (tabName === "lab") {
      menu.innerHTML = labMenu();
    }

    //ставим стандартный класс при смене вкладки
    if (tabName === "info" || tabName === "projects") {
      section.className = "section l-flex";
    }



    //Навешиваем классы и выделение на кнопки режимов
    const modeBtns = document.querySelector(".mode_btns"); //родитель кнопок режимов
    if (modeBtns) {
    modeBtns.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");
      if (!btn || !btn.id) return;

      // Убираем active со всех кнопок
      modeBtns
        .querySelectorAll(".btn")
        .forEach((b) => b.classList.remove("active"));

      // Вешаем active на текущую
      btn.classList.add("active");

      // Ставим класс секции = id кнопки
      section.className = "section " + btn.id;
    });
  }

    //Навешиваем классы и выделение на кнопки тем
    const themeBtns = document.querySelector(".theme_btns"); //родитель кнопок тем
    if (themeBtns) {
    themeBtns.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");
      if (!btn || !btn.id) return;

      // Убираем active со всех кнопок
      themeBtns
        .querySelectorAll(".btn")
        .forEach((b) => b.classList.remove("active"));

      // Вешаем active на текущую
      btn.classList.add("active");

      // Ставим класс секции = id кнопки
      body.className = "theme " + btn.id;
    });
  }
  }

  //вешаем актив на хедер
  const navbar = document.querySelector(".navbar");
  navbar.addEventListener("click", function (e) {
    const btn = e.target.closest(".head_btn");
    if (!btn) return;

    // Убираем active со всех кнопок
    navbar
      .querySelectorAll(".head_btn")
      .forEach((b) => b.classList.remove("head_active"));

    // Вешаем active на текущую
    btn.classList.add("head_active");
  });

  //вешаем переключение при клике на вкладку
  document.querySelectorAll("nav a").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      render(tab.dataset.tab);
    });
  });

  render("info");
});
