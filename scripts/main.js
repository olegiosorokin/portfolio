document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const menu = document.querySelector(".menu");
  const section = document.querySelector(".section");
  const theme = document.querySelector(".theme");
  function render(tabName) {
    // --- Контент ---
    if (tabName === "about") {
      content.innerHTML = `
        <div class="projects">
          ${about
            .map(
              (p) => `
                <div class="project_card">
                  <h2 class="project_title">${p.title}</h2>
                  <div class="project_description">
                    <p>${p.description}</p>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      `;
      window.scrollTo(0, 0);
    } else if (tabName === "projects") {
      content.innerHTML = `
        <div class="projects">
          ${projects
            .map(
              (p) => `
                <div class="project_card">
                  <h2 class="project_title">${p.title}</h2>
                  <div class="project_description">
                    <img src="${p.img}" alt="${p.title}">
                    <p>${p.description}</p>
                  </div>
                  <div class="btns">
                    <a href="${p.link}" class="btn">Посмотреть проект</a>
                    <a href="${p.linkgit}" class="btn">Репозиторий проекта на GitHub</a>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      `;
      window.scrollTo(0, 0);
    } else if (tabName === "lab") {
      content.innerHTML = `
        <div class="projects">
          ${projects
            .map(
              (p) => `
                <div class="project_card">
                  <h2 class="project_title">${p.title}</h2>
                  <div class="project_description">
                    <img src="${p.img}" alt="${p.title}">
                    <p>${p.description}</p>
                  </div>
                  <div class="btns">
                    <a href="${p.link}" class="btn">Посмотреть проект</a>
                    <a href="${p.linkgit}" class="btn">Репозиторий проекта на GitHub</a>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      `;
      window.scrollTo(0, 0);
    }

    // --- Меню ---
    if (tabName === "about" || tabName === "projects") {
      menu.innerHTML = `
      <p style="border-bottom: 1px solid var(--border_small)">Связаться со мной вы можете по ссылкам ниже</p>
      <br>
      <div class="menu_mobile_btn">
      <a class=btn
              href="https://mail.google.com/mail/?view=cm&fs=1&to=olegio.sorokin@gmail.com&su=Вопрос%20с%20сайта"
              target="_blank"
              rel="noopener noreferrer"
              >olegio.sorokin@gmail.com</a></span>
              <br class="pc_btn"><br class="pc_btn">
      <a class=btn
              href="https://t.me/skornan"
              target="_blank"
              rel="noopener noreferrer"
              >t.me/skornan</a></span>
    </div>
              `;
    } else if (tabName === "lab") {
      menu.innerHTML = `

        <p>Переключение стилей отображения</p>

        <div class="btns">
        <button class="btn full_img_btn mobile_btn">Тест под картинкой</button>
        <button class="btn l_scroll_btn mobile_btn">Скролл текста</button>
        <button class="btn l_flex_btn active mobile_btn min">Обтекание справа</button>
        <button class="btn r_flex_btn mobile_btn min">Обтекание слева</button>
        <button class="btn full_img_btn pc_btn">Картинка на всю ширину</button>

        </div>


        <p class="pc_btn">Скролл текста возле картинки<p>
        <div class="btns btns_mobile pc_btn">

        <button class="btn l_scroll_btn pc_btn">Слева</button>
        <button class="btn r_scroll_btn pc_btn">Справа</button>
        </div>



        <p class="pc_btn">Обтекание картинки текстом<p>
        <div class="btns pc_btn">
        <button class="btn l_flex_btn active pc_btn min">Справа</button>
        <button class="btn r_flex_btn pc_btn min">Слева</button>
        </div>

        <p class="pc_btn">Прилипание картинки<p>
        <div class="btns pc_btn">
        <button class="btn l_sticky_btn">Слева</button>
        <button class="btn r_sticky_btn">Справа</button>
        </div>

        <br class="pc_btn">

        <p>Переключение цветовых тем</p>
        <div class="btns">
        <button class="btn light-theme-btn">Светлая</button>
        <button class="btn dark-theme-btn">Тёмная</button>
        </div>

      `;
    }

    if (tabName === "about" || tabName === "projects") {
      section.className = "section l-flex";
    }
  }

  // --- Event Delegation для кнопок меню ---
  menu.addEventListener("click", function (e) {
    const btn = e.target;
    if (!btn.classList.contains("btn")) return;
    if (btn.classList.contains("l_flex_btn"))
      section.className = "section l_flex";
    else if (btn.classList.contains("l_sticky_btn"))
      section.className = "section l_sticky";
    else if (btn.classList.contains("l_scroll_btn"))
      section.className = "section l_scroll";
    else if (btn.classList.contains("r_flex_btn"))
      section.className = "section r_flex";
    else if (btn.classList.contains("r_sticky_btn"))
      section.className = "section r_sticky";
    else if (btn.classList.contains("r_scroll_btn"))
      section.className = "section r_scroll";
    else if (btn.classList.contains("full_img_btn"))
      section.className = "section full_img";
    else if (btn.classList.contains("light-theme-btn"))
      theme.className = "theme light";
    else if (btn.classList.contains("dark-theme-btn"))
      theme.className = "theme dark";
  });

  menu.addEventListener("click", function (e) {
    const btn = e.target;
    if (!btn.classList.contains("btn")) return;
    const allBtns = menu.querySelectorAll(".btn");
    allBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    updateSection(btn);
  });

  const navbar = document.querySelector(".navbar");
  navbar.addEventListener("click", function (e) {
    const head_btn = e.target;
    if (!head_btn.classList.contains("head_btn")) return;
    const allBtns = navbar.querySelectorAll(".head_btn");
    allBtns.forEach((b) => b.classList.remove("head_active"));
    head_btn.classList.add("head_active");
    updateSection(head_btn);
  });

  function updateSection(btn) {
    if (btn.classList.contains("l_flex_btn"))
      section.className = "section l_flex";
    else if (btn.classList.contains("l_sticky_btn"))
      section.className = "section l_sticky";
    // ... остальные условия
  }

  // --- Навешиваем клики на вкладки ---
  document.querySelectorAll("nav a").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      render(tab.dataset.tab);
    });
  });

  render("about");
  updateLayoutClass();
  window.addEventListener("resize", updateLayoutClass);

  function updateLayoutClass() {
    const contentAbout = document.querySelector(".section");
    if (!contentAbout) return;

    if (window.innerWidth < 770) {
      contentAbout.classList.remove("l_flex");
      contentAbout.classList.add("full_img");
    } else {
      contentAbout.classList.remove("full_img");
      contentAbout.classList.add("l_flex");
    }
  }
});
