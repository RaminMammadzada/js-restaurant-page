import renderFooter from '../components/shared/footer';
import populateContact from '../components/contact/populateContact';

const renderMain = () => {
  if (document.getElementById('main') !== null) {
    document.getElementById('main').outerHTML = '';
    document.querySelector('footer').outerHTML = '';
  }

  const $main = document.createElement('div');
  $main.setAttribute('id', 'main');
  $main.setAttribute('class', 'px-4 main contact');

  // create contact page
  $main.appendChild(populateContact());

  const $content = document.getElementById('content');
  $content.appendChild($main);
};


const renderContact = () => {
  renderMain();
  renderFooter();
};

export default renderContact;
