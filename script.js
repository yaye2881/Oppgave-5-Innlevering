const warframes = [
  { Owner: 'Zephyr', name: 'Turbulence', frameImage: 'images/zephyr.png' },
  { Owner: 'Xaku', name: 'Grasp of Lohk', frameImage: 'images/xaku.png' },
  {
    Owner: 'Revenant',
    name: 'Messmer skin',
    frameImage: 'images/revenant.png',
  },
  { Owner: 'Atlas', name: 'Landslide', frameImage: 'images/atlas.png' },
  { Owner: 'Gyre', name: 'Cathode Grace', frameImage: 'images/gyre.png' },
  { Owner: 'Dagath', name: 'Grave Spirit', frameImage: 'images/dagath.png' },
  { Owner: 'Jade', name: 'Glory on High', frameImage: 'images/jade.png' },
  { Owner: 'Gauss', name: 'Mach Rush', frameImage: 'images/gauss.png' },
  { Owner: 'Hydroid', name: 'Plunder', frameImage: 'images/hydroid.png' },
  {
    Owner: 'Kullervo',
    name: 'Collective Curse',
    frameImage: 'images/kullervo.png',
  },
];

const list = document.querySelector('#list');

for (let index = 0; index < warframes.length; index++) {
  const listItem = document.createElement('li');
  listItem.classList.add('arrayLi');

  const text = document.createElement('p');
  text.textContent = `Name: ${warframes[index].name}. Owner: ${warframes[index].Owner}`;

  const img = document.createElement('img');
  img.src = warframes[index].frameImage;

  listItem.appendChild(text);
  listItem.appendChild(img);

  list.appendChild(listItem);
}
