window.addEventListener('load', () => {
  setTimeout(() => {
    var typed = new Typed(".auto_type", {
      strings: ["Taksh Patel"],
      typeSpeed: 80,
      showCursor: false,
    });

    var typed1 = new Typed(".passion", {
      strings: ["Frontend Developer | UI Enthusiast"],
      typeSpeed: 80,
      showCursor: false,
    });
  }, 500)
})

const sections = document.querySelectorAll("section");
const input_cmd = document.getElementById("input_command");
const output = document.querySelector('.output')
const commands = {
  help: `Available commands:
  help - Show this help 
  about - Shows about section
  projects - Display projects
  education - Display education background
  certifications - Show certifications
  contact - Shows contact information
  skills - List technical skills
  resume - View resume link
  clear - Clears terminal
  whoami - Display username`,

  skills: `Technical Skills:
  ├─C 
  ├─Java
  ├─C++
  ├─HTML
  ├─CSS
  ├─Tailwind
  ├─JavaScript
  ├─Tableau
  ├─Node js
  ├─MongoDB`,

  whoami: `takshpatel`,

  clear: ""
}

input_cmd.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    const cmd = input_cmd.value.trim().toLowerCase();
    console.log(cmd)
    // Hide all sections and main-section
    sections.forEach(sec => sec.classList.remove('active'));


    // Show the requested section
    if (cmd === 'about' || cmd === 'projects' || cmd === 'education' || cmd === 'contact') {
      document.querySelector('.output').classList.add('active');
      output.innerHTML = "";
      document.querySelector('.output').style.display = 'none';
      document.getElementById(cmd).classList.add('active');
      document.querySelector('.main-section').classList.add('active');
    }

    if(cmd !== 'about' && cmd !== 'projects' && cmd !== 'education' && cmd !== 'contact' && cmd !== 'help' && cmd !== 'skills' && cmd !== 'whoami' && cmd !== 'clear' && cmd !== 'resume'){
      document.querySelector('.output').classList.remove('active')
      output.innerHTML += `<div class="output-line">Command not found : ${cmd}</div>`
    }

    document.querySelector('.output').classList.add('active');
    

    if (commands[cmd] !== undefined) {
      if (cmd === 'clear') {
        output.innerHTML = "";
        document.querySelector('.output').classList.remove('active');
        document.querySelector('.output').style.display = 'none';
      } else {
        document.querySelector('.output').style.display = 'block';
        output.innerHTML += `<div class="output-line"><span class="prompt">taksh@portfolio:$ ~</span> ${cmd}</div>`;
        output.innerHTML += `<div class="output-line">${commands[cmd]}</div>`;
      }
    } 

    if(cmd === 'resume'){
      window.open("./Taksh_patel_resume.pdf" , "_blank")
      document.querySelector('.output').style.display = 'none';
    }
    input_cmd.value = '';
  }
});

const navBarLinks = document.querySelectorAll('.nav-link');


navBarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const cmd = input_cmd.value.trim().toLowerCase()

    // Get the target section id from href (remove #)
    const href = link.getAttribute('href');
    const targetId = href && href.startsWith('#') ? href.substring(1) : null;

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));

    // If home is clicked (href is 'index.html' or '#home'), show main-section
    if (href === '#home') {
      document.querySelector('.main-section').classList.remove('active');
    } else if (targetId) {
      document.querySelector('.output').classList.remove('active');
      output.innerHTML = "";
      document.querySelector('.output').style.display = 'none';
      document.getElementById(targetId).classList.add('active');
      document.querySelector('.main-section').classList.add('active');
    }

  });
});

