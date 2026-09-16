const defaultProjects = [
 {title:"Project TRĀTA",tag:"ROBOTICS • DISASTER RESPONSE",desc:"An autonomous disaster-response rover concept combining mobility, sensors, obstacle awareness and remote control.",tech:"Arduino • ESP8266 • L298N • HC-SR04 • DHT11 • MQ-2 • MPU6050"},
 {title:"Arduino & Electronics Lab",tag:"ELECTRONICS",desc:"Hands-on experiments with microcontrollers, sensors, motors, LEDs and control systems.",tech:"Arduino • Sensors • Motors • LEDs"},
 {title:"AI & Software Experiments",tag:"AI • SOFTWARE",desc:"Exploring AI-assisted software ideas, web interfaces and practical technology tools.",tech:"HTML • CSS • JavaScript • AI"},
 {title:"IoT & Web Control",tag:"IOT",desc:"Web-based control and monitoring concepts for connected hardware projects.",tech:"ESP8266 • Web UI • Sensors"},
 {title:"Science Research",tag:"RESEARCH",desc:"Problem-solving projects that use observation, research, experimentation and testing.",tech:"Research • Experiments • Documentation"}
];

const defaultAchievements = [
 {title:"JIGYASA 4.0",date:"Competition",desc:"Presented the TRĀTA project and recorded a score of 47/50."},
 {title:"TRĀTA Robotics Project",date:"Robotics",desc:"Developed a disaster-response rover prototype as a practical technology project."},
 {title:"Science & Innovation",date:"Research",desc:"Exploring sustainability, robotics and practical scientific problem solving."}
];

const defaultCertificates = [
 {title:"Certificates",date:"Add your certificates",desc:"Use the admin panel to add certificate titles and descriptions."}
];

function getData(key, fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch(e){return fallback}}
function renderCards(){
  const p=document.getElementById("projectsGrid");
  const a=document.getElementById("achievementsGrid");
  const c=document.getElementById("certificatesGrid");
  if(p)p.innerHTML=getData("projects",defaultProjects).map(x=>`<article class="glass project-card"><span class="project-tag">${escapeHtml(x.tag||"PROJECT")}</span><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.desc)}</p><div class="project-line"></div><small>${escapeHtml(x.tech||"")}</small></article>`).join("");
  if(a)a.innerHTML=getData("achievements",defaultAchievements).map(x=>`<article class="glass achievement-card"><span class="achievement-date">${escapeHtml(x.date||"ACHIEVEMENT")}</span><h3>🏆 ${escapeHtml(x.title)}</h3><p>${escapeHtml(x.desc)}</p></article>`).join("");
  if(c)c.innerHTML=getData("certificates",defaultCertificates).map(x=>`<article class="glass certificate-card"><span class="achievement-date">${escapeHtml(x.date||"CERTIFICATE")}</span><h3>📜 ${escapeHtml(x.title)}</h3><p>${escapeHtml(x.desc)}</p></article>`).join("");
}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.getElementById("menuToggle")?.addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
renderCards();