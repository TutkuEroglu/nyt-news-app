const navbarBody = document.getElementById("navbarBody");

navbarSection.forEach((val) => {
  const section = document.createElement("div");
  section.className = "navbarSection";
  section.textContent = `${val.text}`;
  navbarBody.appendChild(section);
});