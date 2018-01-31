

const Nightmare = require('nightmare')

const nightmare = Nightmare({show: true})

nightmare
    .goto('http://vnexpress.net/')
    .evaluate(() => {
        let news = document.querySelectorAll('.title_news a')
        let titles = []
        news.forEach(article => {
            titles.push(article.innerText.trim())
        })
        return titles
    })
    .end()
    .then(titles => {
        console.log(titles)
        console.log('total', titles.length)
    })
    .catch(error => {
        console.log('Error', error)
    })