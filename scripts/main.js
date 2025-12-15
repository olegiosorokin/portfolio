function renderTab(tabName) {
    if (tabName === "about") {
        content.innerHTML = `
        <div class="content-about">
        <img src="${about.img}" alt="my">
        
        <h2>${about.title}</h2>
        <p>${about.text}</p>
        
        </div>
        `;
    }
    else if(tabName === "projects") {
    content.innerHTML = `
    <div class="project-grid">       
     ${projects.map(p => `
      <div class="content-project">
        <img src="${p.img}" alt="${p.title}">
        <h2>${p.title}</h2>
        <p>${p.description}</p>
      </div>
    `).join('')}
    </div>
`;
}
    
}

document.addEventListener('DOMContentLoaded', function() {
    renderTab("about");
});

document.querySelectorAll('nav a').forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = tab.dataset.tab;
        renderTab(tabName);
    });
});








