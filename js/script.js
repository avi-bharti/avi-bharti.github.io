function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


window.addEventListener('load', function(){
  const startDate = new Date('04/01/2023');
  const endDate = new Date();
  let diffDays = parseInt((endDate - startDate) / (1000 * 60 * 60 * 24)); 
  const year = (diffDays > 365) ? parseInt(diffDays/365) + ' Years' : ''; 
  if(diffDays > 365){
    diffDays = diffDays % 365;
  }
  const month = parseInt(diffDays / 30) + ' months';
  document.querySelector('.time-in-job').innerHTML = `${year} ${month}`
})