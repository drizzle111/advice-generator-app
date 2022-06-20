let img = document.querySelector('.divider')
let adviceId = document.querySelector('.id')
let advice_text = document.querySelector('.advice')
let dice = document.querySelector('.dice')
let width = window.innerWidth;
if (width < 767) {
    img.src = './images/pattern-divider-mobile.svg'
} else {
    img.src = './images/pattern-divider-desktop.svg'
}

let url = 'https://api.adviceslip.com/advice'
async function adviceGenerator() {
    try {
        let advice_url = fetch(url)
        advice_url.then(res => { return res.json() })
            .then(data => {
                let { id } = data.slip
                let { advice } = data.slip
                adviceId.innerHTML += id
                advice_text.innerHTML = `"${advice}"`

            })
    } catch (error) {
        console.log(error);
    }

}
adviceGenerator()
dice.addEventListener('click', adviceGenerator)