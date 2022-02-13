const checkboxes = document.querySelectorAll('.checkbox')
const content = document.querySelectorAll('.content')
checkboxes.forEach((checkbox, i) => {
  checkbox.addEventListener('click', function (e) {
    checkbox.classList.toggle('checkbox')
    checkbox.classList.toggle('checked')
    content[i].firstChild.classList.toggle('strike')
  })
})
