const navbar = () => {
    const navbar = document.createElement("div");
    navbar.id = "navbar";

    const navbarBody = document.createElement("div");
    navbarBody.id = "navbarBody";

    document.body.appendChild(navbar);
    navbar.appendChild(navbarBody);

    navbarSection.forEach(val => {
        const section = document.createElement("div");
        section.className = "navbarSection";
        section.textContent = `${val.text}`
        navbarBody.appendChild(section);
    })
}