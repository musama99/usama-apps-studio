const observer = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
