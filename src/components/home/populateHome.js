const populateHome = () => {
  const home = document.createElement('div');
  home.setAttribute('class', '');

  const $textInCenter = document.createElement('h1');
  $textInCenter.innerText = 'The Best Kebab Ever You Have Tasted!';
  $textInCenter.setAttribute('class', 'text-white d-flex justify-content-center align-items-center');

  home.appendChild($textInCenter);

  return home;
};

export default populateHome;
