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

addTask.addEventListener('touchstart', (e) => {
  startY = e.touches[0].pageY
  addTask.style.transition = 'none'
})

addTask.addEventListener('touchmove', (e) => {
  if (e.touches[0].pageY > startY) {
    endY = -(e.touches[0].pageY - startY)
    addTask.style.bottom = endY + 'px'
  }
})

addTask.addEventListener('touchend', (e) => {
  console.log(startY, -endY)
  if (startY < -endY + 100) {
    console.log('entered1')
    addTask.style.bottom = endY - startY + 'px'
    setTimeout(() => {
      addTask.style.bottom = '-100' + '%'
      addTask.style.transition = '0.2s linear'
    }, 100)
  } else if (endY > startY) {
    console.log('entered2')
    addTask.style.bottom = endY - startY + 'px'
    setTimeout(() => {
      addTask.style.bottom = '0' + '%'
      addTask.style.transition = '0.2s linear'
    }, 100)
  }
})
