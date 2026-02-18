//Отрисовка инфо
function infoData() {
  return `
    <div class="projects">
          ${info
            .map(
              (p) =>
                `
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
}
//отрисовка проектов
function projectsData() {
  return `
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
}

//отрисовка меню обратной связи
function infoMenu() {
  return `
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
}

//отрисовка меню лаборатории
function labMenu() {
  return `
  <div class="mode_btns">
    <p>Переключение стилей отображения</p>

        <div class="pc_btn">

        <div class="btns">
        <button id="full_img" class="btn">Картинка на всю ширину</button>
        </div>

        <p>Скролл текста возле картинки<p>
        <div class="btns btns_mobile">
        <button id="l_scroll" class="btn">Слева</button>
        <button id="r_scroll" class="btn">Справа</button>
        </div>

        <p>Обтекание картинки текстом<p>
        <div class="btns">
        <button id="r_flex" class="btn min">Слева</button>
        <button id="l_flex" class="btn active min">Справа</button>
        </div>

        <p>Прилипание картинки<p>
        <div class="btns">
        <button id="l_sticky" class="btn">Слева</button>
        <button id="r_sticky" class="btn">Справа</button>
        </div>

        <br>
        </div>


        <div class="mobile_btn">
        <button id="full_img" class="btn full_img_btn mobile_btn">Тест под картинкой</button>
        <button id="l_scroll" class="btn l_scroll_btn mobile_btn">Скролл текста</button>
        <button id="l_flex" class="btn l_flex_btn active mobile_btn min">Обтекание справа</button>
        <button id="r_flex" class="btn r_flex_btn mobile_btn min">Обтекание слева</button>
        </div>
        </div>

        <div class="theme_btns">
        <p>Переключение цветовых тем</p>
        <div class="btns">
        <button id="light_theme" class="btn active">Светлая</button>
        <button id="dark_theme" class="btn">Тёмная</button>
        </div>
        </div>
  `;
}
