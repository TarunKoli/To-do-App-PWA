const addButton = document.querySelector('.add')
const addTask = document.querySelector('.addTask')
addButton.addEventListener('click', function () {
  addTask.style.bottom = '0' + '%'
  addTask.style.transition = '0.2s ease-in-out'
})

var startY
var endY
addTask.addEventListener('dragstart', (e) => {
  var img = new Image()
  img.src =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
  event.dataTransfer.setDragImage(img, 0, 0)
  startY = e.pageY
  addTask.style.transition = 'none'
})
addTask.addEventListener('drag', (e) => {
  if (e.pageY > startY) {
    addTask.style.bottom = -(e.pageY - startY) + 'px'
  }
})
addTask.addEventListener('dragend', (e) => {
  if (startY + 150 < e.pageY) {
    addTask.style.bottom = -(e.pageY - startY) + 'px'
    setTimeout(() => {
      addTask.style.bottom = '-100' + '%'
      addTask.style.transition = '0.2s linear'
    }, 100)
  } else if (e.pageY > startY) {
    addTask.style.bottom = -(e.pageY - startY) + 'px'
    setTimeout(() => {
      addTask.style.bottom = '0' + '%'
      addTask.style.transition = '0.2s linear'
    }, 100)
  }
})
