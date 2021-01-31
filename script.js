import Select from './select.js'

//const select = new Select(selectElement)

const selectElements = document.querySelectorAll("[data-custom]")

selectElements.forEach(selectElement => {
    new Select(selectElement)
})

