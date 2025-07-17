const projects = [
    {
      name: "Weather App",
      github: "https://github.com/yourusername/weather-app",
      fazit: "fazit.html#weather-app",
      image: "images/project1.png",
      bgColor: "#4a90e2",
      font: "'Fira Code', monospace"
    },
    {
      name: "To-Do List",
      github: "https://github.com/yourusername/todo-list",
      fazit: "fazit.html#todo-list",
      image: "images/project2.png",
      bgColor: "#e94e77",
      font: "'Raleway', sans-serif"
    }
    // Add more projects here
  ];
  
  const container = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const panel = document.createElement("div");
    panel.className = "project-panel";
    panel.style.backgroundColor = project.bgColor;
    panel.style.fontFamily = project.font;
  
    panel.innerHTML = `
      <h2>${project.name}</h2>
      <img src="${project.image}" alt="${project.name} preview">
      <div class="project-links">
        <a href="${project.github}" target="_blank">View on GitHub</a>
        <a href="${project.fazit}" target="_blank">Read Fazit</a>
      </div>
    `;
  
    container.appendChild(panel);
  });
  