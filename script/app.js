const about = document.querySelector('.about');
const btnContainer = document.querySelector('.btn-container');
const btns = btnContainer.querySelectorAll('.tab-btn');
const aboutContainer = document.querySelector('.about-content');
const articles = aboutContainer.querySelectorAll('.content');


about.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  // console.log(id);
  if(id) {
    btns.forEach(function(btn) {
      // console.log(btn);
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    articles.forEach(function(article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    // console.log(element);
    element.classList.add('active');
  };
});