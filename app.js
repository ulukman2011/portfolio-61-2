const buttons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active')
      contents[j].classList.remove('active')
    }

    this.classList.add('active')

    const tabName = this.getAttribute('data-tab')
    document.getElementById(tabName).classList.add('active')

  })
}