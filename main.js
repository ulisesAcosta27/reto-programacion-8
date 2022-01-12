const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'flexbox',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  for(i = 0; i < cosasQueAprendimos.length; i++){
    const nuevoIitem = document.createElement('li');
    nuevoIitem.className = cosasQueAprendimos[i].class;
    nuevoIitem.innerText = cosasQueAprendimos[i].tema;
    const ubicacionUl = document.querySelector('ul.lista');
    ubicacionUl.appendChild(nuevoIitem)
  }
}
main();
