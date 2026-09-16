// SECURITY NOTE: This starter admin login is only a local demo.
// For a public website, do NOT use a password embedded in browser JavaScript.
// Connect this panel to a real authentication/database service such as Supabase.
const ADMIN_PASSWORD_HASH = "05209a72b661de995e476377c5eb7665416a7c4c9832a58161cdaa9c25bca696";
async function sha256(text){const data=new TextEncoder().encode(text);const hash=await crypto.subtle.digest("SHA-256",data);return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,"0")).join("")}
const defaults={
 achievements:[{title:"JIGYASA 4.0",date:"Competition",desc:"Presented the TRĀTA project and recorded a score of 47/50."},{title:"TRĀTA Robotics Project",date:"Robotics",desc:"Developed a disaster-response rover prototype as a practical technology project."},{title:"Science & Innovation",date:"Research",desc:"Exploring sustainability, robotics and practical scientific problem solving."}],
 projects:[{title:"Project TRĀTA",tag:"ROBOTICS • DISASTER RESPONSE",desc:"An autonomous disaster-response rover concept combining mobility, sensors, obstacle awareness and remote control.",tech:"Arduino • ESP8266 • L298N • HC-SR04 • DHT11 • MQ-2 • MPU6050"}],
 certificates:[{title:"Certificates",date:"Add your certificates",desc:"Use the admin panel to add certificate titles and descriptions."}]
};
function data(k){try{return JSON.parse(localStorage.getItem(k))||defaults[k]}catch(e){return defaults[k]}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function render(){
 let html="";
 for(const k of ["achievements","projects","certificates"]){html+=`<h4>${k.toUpperCase()}</h4><ul>${data(k).map((x,i)=>`<li>${esc(x.title)} <button data-k="${k}" data-i="${i}" class="delete">Delete</button></li>`).join("")}</ul>`}
 document.getElementById("adminList").innerHTML=html;
 document.querySelectorAll(".delete").forEach(b=>b.onclick=()=>{let v=data(b.dataset.k);v.splice(+b.dataset.i,1);save(b.dataset.k,v);render()})
}
document.getElementById("loginForm").onsubmit=async e=>{e.preventDefault();const h=await sha256(document.getElementById("password").value);if(ADMIN_PASSWORD_HASH==="CHANGE_ME"){document.getElementById("loginMsg").textContent="Admin password is not configured yet. Use the setup guide.";return}if(h===ADMIN_PASSWORD_HASH){sessionStorage.admin="1";show()}else document.getElementById("loginMsg").textContent="Incorrect password."}
function show(){document.getElementById("loginBox").classList.add("hidden");document.getElementById("panel").classList.remove("hidden");render()}
if(sessionStorage.admin==="1")show();
document.getElementById("achievementForm").onsubmit=e=>{e.preventDefault();let v=data("achievements");v.unshift({title:aTitle.value,date:aDate.value,desc:aDesc.value});save("achievements",v);e.target.reset();render();status.textContent="Achievement added."}
document.getElementById("projectForm").onsubmit=e=>{e.preventDefault();let v=data("projects");v.unshift({title:pTitle.value,tag:pTag.value,desc:pDesc.value,tech:pTech.value});save("projects",v);e.target.reset();render();status.textContent="Project added."}
document.getElementById("certificateForm").onsubmit=e=>{e.preventDefault();let v=data("certificates");v.unshift({title:cTitle.value,date:cDate.value,desc:cDesc.value});save("certificates",v);e.target.reset();render();status.textContent="Certificate added."}
document.getElementById("resetBtn").onclick=()=>{if(confirm("Reset demo data?")){for(const k in defaults)save(k,defaults[k]);render()}}
document.getElementById("exportBtn").onclick=()=>{const out={achievements:data("achievements"),projects:data("projects"),certificates:data("certificates")};const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:"application/json"}));a.download="portfolio-data.json";a.click()}
