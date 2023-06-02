// function openModal(triggerSelector, modalSelector, closeSelector) {
//   const trigger = document.querySelectorAll(triggerSelector)
//   const modal = document.querySelector(modalSelector)
//   const close = document.querySelector(closeSelector)

//   trigger.forEach((item) => {
//     item.addEventListener('click', (e) => {
//       if (e.target) {
//         e.preventDefault()
//       }
//       modal.classList.add('modal__overlay-visible')
//       document.body.classList.add('no-scroll')
//     })
//   })

//   close.addEventListener('click', () => {
//     modal.classList.remove('modal__overlay-visible')
//     document.body.classList.remove('no-scroll')
//   })

//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.classList.remove('modal__overlay-visible')
//       document.body.classList.remove('no-scroll')
//     }
//   })
// }

// Заменил имя переменной trigger на triggers, чтобы отразить, что это коллекция элементов.

// Вынес добавление/удаление классов в отдельные функции showModal и hideModal, чтобы улучшить читаемость кода и избежать дублирования кода.

// Создал переменную body, чтобы не обращаться к document.body каждый раз при добавлении/удалении класса.

// Убрал условие if (e.target) внутри обработчика события клика на триггере, так как это условие всегда истинно в данном контексте.

function openModal(triggerSelector, modalSelector, closeSelector) {
  const triggers = document.querySelectorAll(triggerSelector)
  const modal = document.querySelector(modalSelector)
  const closeButtons = document.querySelectorAll(closeSelector)
  const body = document.body

  function showModal() {
    modal.classList.add('modal__overlay-visible')
    body.classList.add('no-scroll')
  }

  function hideModal() {
    modal.classList.remove('modal__overlay-visible')
    body.classList.remove('no-scroll')
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault()
      showModal()
    })
  })

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', hideModal)
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal()
    }
  })
}

export default openModal
