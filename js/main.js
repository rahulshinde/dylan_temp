var slideshow_length,
    current_slide,
    current;

window.addEventListener('DOMContentLoaded', init);

function init(){
  setupSlideshow();
  console.log('hello');
}

function setupSlideshow(){
  slideshow_length = document.querySelectorAll('.slide').length;
  current_slide = 1;
  current = document.querySelector('.slide.current');

  document.querySelector('#slideshow_prev').addEventListener('click', slideshowPrev);
  document.querySelector('#slideshow_next').addEventListener('click', slideshowNext);
  document.addEventListener('keyup', keyCommand);
  document.addEventListener('keyup', keyCommand);
}

function keyCommand(e){
  if(e.keyCode === 37){
    slideshowPrev();
  }
  if(e.keyCode === 39){
    slideshowNext();
  }
}

function slideshowNext(){
  current_slide = current_slide + 1;
  if (current_slide > slideshow_length){
    current_slide = 1;
  }

  document.querySelector('.slide.current').classList.remove('current');
  document.querySelector('.slide' + current_slide).classList.add('current');
}

function slideshowPrev(){
  current_slide = current_slide - 1;
  if (current_slide < 1){
    current_slide = slideshow_length;
  }

  document.querySelector('.slide.current').classList.remove('current');
  document.querySelector('.slide' + current_slide).classList.add('current');
}