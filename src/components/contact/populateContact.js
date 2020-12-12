import img1 from '../../images/contact/img2.jpg';

const populateContact = () => {
  const contact = document.createElement('div');
  contact.setAttribute('class', 'd-flex flex-column flex-wrap text-white');

  const mapImage = document.createElement('img');
  mapImage.setAttribute('class', 'map-image');
  mapImage.src = img1;

  const restaurantName = document.createElement('h2');
  restaurantName.textContent = 'Kebab House Istanbul Restaurant';

  const openHours = document.createElement('p');
  openHours.textContent = 'Open hours: 08:00 - 22:00';

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = 'Phone number: +90 432 123 45 67';

  const adress = document.createElement('p');
  adress.textContent = 'Address: Buroko Street, Ataturk Avenue, Istanbul TURKEY';

  const email = document.createElement('p');
  email.textContent = 'Email: info@kebabhouseistanbul.com';

  contact.appendChild(restaurantName);
  contact.appendChild(openHours);
  contact.appendChild(phoneNumber);
  contact.appendChild(adress);
  contact.appendChild(email);

  return contact;
};

export default populateContact;