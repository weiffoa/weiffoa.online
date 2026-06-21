    fetch(`https://lastfm-last-played.biancarosa.com.br/weiffoa/latest-song`)
    .then(response => response.json())
    .then(data => {
        const trackName = data.track.name;
        const artistName = data.track.artist['#text'];
        document.querySelector('.last').textContent = `${trackName} - ${artistName}`;
         document.querySelector('.last-mob').textContent = `${trackName} - ${artistName}`;
    })
    .catch(error => {
        console.error(':(  ', error);
        document.querySelector('.last').textContent = 'not today :(';
        document.querySelector('.last-mob').textContent = 'not today :('
    });
