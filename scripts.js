const form = document.querySelector('.form')

async function buscarFilmes(event) {
    event.preventDefault()
    const url = `https://www.omdbapi.com/?apikey=b58710e2&s=`
    const input = document.querySelector('.form-input')
    if (input.value) {
        const response = await fetch(`${url}${input.value}`)
        const data = await response.json()
        let content = ""
        for (const filme of data.Search) {
            content += `<li class ="app-movies-all-card">`
            content += `<figure class ="app-movies-all-figure">`
            content += `<img class ="app-movies-all-thumb" src=${filme.Poster}>`
            content += `</figure>`
            content += `<legend class="app-movies-all-legend">`
            content += `<span class="app-movies-all-year">${filme.Year}</span>`
            content += `<h2 class="app-movies-all-title">${filme.Title}</h2>`
            content += `</legend>`
            content += `</li>`
        }
        const movies = document.querySelector('#movies')
        movies.innerHTML = content
    }
}






form.addEventListener('submit', buscarFilmes)