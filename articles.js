const article = {
    /**
     * To add new articles, add them here.
     * Shift older articles by one.
     * Only three articles on the page at a time.
     * Newest articles are ALWAYS article "one".
     */
    one: {
        title: "CoreNGS Rebranding Completion",
        released: "October XX, 2021",
        preview: "Not yet available",
        link: "https://corengs.one"
    },
    two: {
        title: "CoreNGS Domain Funded For Extra Year",
        released: "October 15, 2021",
        preview: "We are happy to announce that the CoreNGS project has added another year to domain ownership. Right now money is tight, and the Potabi Foundation w...",
        link: "http://news.corengs.one/2021/10/corengs-domain-funded-for-extra-year.html"
    },
    three:{
        title: "First Custom Software Project: mkprtcl",
        released: "October 15, 2021",
        preview: "As CoreNGS aims to better support even basic needs, we are excited to announce mkprtcl, a new system command dedicated to URL protocol creation and...",
        link: "http://news.corengs.one/2021/10/first-custom-software-project-mkprtcl.html"
    }
    /**
     * Here is the article template for when updates are made
    template:{
        title: "",
        released: "",
        preview: "",
        link: ""
    }
     */
}

let firstid = document.getElementById("cngs-news-one");
let secondid = document.getElementById("cngs-news-two");
let thirdid = document.getElementById("cngs-news-three");
let first = {
    head: `<h1 class="title is-4 has-text-danger-dark has-text-weight-light is-italic">${article.one.title}</h1>`,
    date: `<h2 class="subtitle is-7">${article.one.released}</h2>`,
    text: `<p>${article.one.preview}</p>`
}
let second = {
    head: `<h1 class="title is-4 has-text-danger-dark has-text-weight-light is-italic">${article.two.title}</h1>`,
    date: `<h2 class="subtitle is-7">${article.two.released}</h2>`,
    text: `<p>${article.two.preview}</p>`
}
let third = {
    head: `<h1 class="title is-4 has-text-danger-dark has-text-weight-light is-italic">${article.three.title}</h1>`,
    date: `<h2 class="subtitle is-7">${article.three.released}</h2>`,
    text: `<p>${article.three.preview}</p>`
}


// add articles
firstid.innerHTML = `<a href="${article.one.link}" target="_blank">${first.head}${first.date}${first.text}</a>`
secondid.innerHTML = `<a href="${article.two.link}" target="_blank">${second.head}${second.date}${second.text}</a>`
thirdid.innerHTML = `<a href="${article.three.link}" target="_blank">${third.head}${third.date}${third.text}</a>`