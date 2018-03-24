const nav = document.querySelector('#main');
const cruink = document.querySelector('#cruink');
const musings = document.querySelector('#musings');
const projects = document.querySelector('#projects');
const experience = document.querySelector('#experience');
let currentActiveMenu = cruink;

const topOfNav = nav.offsetTop;

function fixNav(){
  if(window.scrollY >= topOfNav){
    document.documentElement.style.setProperty(`--padding-top`, (nav.offsetHeight + 'px'));

    document.body.classList.add('fixed-nav');
  }else {
    document.documentElement.style.setProperty(`--padding-top`, '5px');
    document.body.classList.remove('fixed-nav');
  }
}

function showContent(){
  const eleToShow = document.querySelector('.' + this.id);
  const eleToHide = document.querySelector('.' + currentActiveMenu.id);
  if(eleToShow === eleToHide) return;
  eleToShow.classList.remove('hidden');
  eleToHide.classList.add('hidden')
  this.classList.add('active');
  currentActiveMenu.classList.remove('active')
  currentActiveMenu = this;
}

window.addEventListener('scroll', fixNav);
[cruink, musings, projects, experience].forEach(e => e.addEventListener('click', showContent))
