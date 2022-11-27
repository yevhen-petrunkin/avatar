fetch('https://attackontitanclient.netlify.app/#/characters/1')
  .then(r => console.log(r.json()))
  .then(console.log);
