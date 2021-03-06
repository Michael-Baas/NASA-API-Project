//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=EBYMVxLqVIwIceRccCB7NG0UvwYE6Wt5DeRDDze4&date=' + choice;
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            if (data.media_type === 'image') {
                document.querySelector('iframe').style.display = 'none';
                document.querySelector('img').style.display = 'block';
                document.querySelector('img').src = data.hdurl;
            } else if (data.media_type === 'video') {
                document.querySelector('img').style.display = 'none';
                document.querySelector('iframe').style.display = 'block';
                document.querySelector('iframe').height = '100%';
                document.querySelector('iframe').width = '100%';
                document.querySelector('iframe').src = data.url;
            }
            document.querySelector('h2').innerText = data.title
            document.querySelector('.explanation').innerText = data.explanation

            if (data.copyright) {
                document.querySelector('.copyright').textContent = `Copyright ${data.copyright}`
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}