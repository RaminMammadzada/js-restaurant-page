const renderFooter = () => {
  const $footer = document.createElement('footer');
  $footer.setAttribute('class', 'px-1 d-flex justify-content-center align-items-center');
  $footer.innerHTML = 'Copyright © Kebab House';

  const $content = document.getElementById('content');
  $content.appendChild($footer);
};

export default renderFooter;