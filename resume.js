document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#name").textContent="Ashish Yadav";
    document.querySelector("#title").textContent="Full Stack Developer";
    document.querySelector("#about-text").textContent ="I'm a passionate Full Stack Developer with experience in building dynamic and responsive web applications.";
    document.querySelector("#skills-list").innerHTML = `
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript ES6</li>
        <li>Node.js</li>
        <li>React.js</li>
    `;
    document.querySelector("#job-title").textContent = "Senior Developer";
    document.querySelector("#company-name").textContent = "Tech Solutions Inc.";
    document.querySelector("#job-desc").textContent="Led a team to build scalable, high-performance web applications.";
    document.querySelector("#email").textContent="ashish@gmail.com";
    document.querySelector("#phone").textContent="+1234567890";
});