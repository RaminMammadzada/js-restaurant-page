import renderHome from './pages/home';
import renderContact from './pages/contact';
import renderMenu from './pages/menu';
import renderNav from './components/shared/header';
import events from './functions/events';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'home':
      renderHome();
      break;
    case 'menu':
      renderMenu();
      break;
    case 'contact':
      renderContact();
      break;
    default:
      renderHome();
  }
};

events.on('currentPageChanged', renderPage);

renderNav();
events.emit('currentPageChanged', 'home');
