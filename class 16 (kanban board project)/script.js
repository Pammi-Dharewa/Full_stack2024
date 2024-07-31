const btn = document.querySelector('.add-btn')
const modalcont = document.querySelector('.modal-cont')
const textArea = document.querySelector('.textArea-cont')
const allPriorityColors = document.querySelectorAll('.priority-color')


modalcont.style.display = 'none'
let flag = false;

btn.addEventListener('click', function () {
  flag = !flag
  if (flag == true) {
    modalcont.style.display = 'flex'
  } else {
    modalcont.style.display = 'none'
  }
})

modalcont.addEventListener('keydown', function (e) {
  let key = e.key
  console.log(key)

  if (key == 'Shift') {

    let task = textArea.ariaValueMax
    createTicket(task)
  }
})
const mainCont = document.querySelector('.main-cont')

function createTicket(task) {
  let ticketCont = document.createElement('div')
  ticketCont.setAttribute('class', 'ticket-cont')
  let id = shortid()

  ticketCont.innerHTML = `<div class="ticket-color lightblue"></div>
        <div class="ticket-id">${id}</div>
        <div class="ticket-task">${task}</div>
        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`

  mainCont.appendChild(ticketCont)
  modalcont.style.display = 'none'

  allPriorityColors.forEach(function (colorElem){
    colorElem.addEventListener('click' , function(){
      allPriorityColors.forEach(function (priorityColorElements){
        priorityColorElements.classList.remove('active')
  
    })
    colorElem.classList.add('active')

    })
  })


}