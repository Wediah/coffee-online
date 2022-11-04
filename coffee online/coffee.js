window.onscroll = () => {
  if ( window.innerHeight + window.scrollY >= document.body.offsetHeight ) {
    document.querySelector('article').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelector('#menu').onclick = function() {
    document.querySelector('article').style.display = 'block';
    document.querySelector('article').scroll-beha
  };
      
});

