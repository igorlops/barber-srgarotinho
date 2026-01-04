import React from 'react'

const Whatsapp = () => {
  return (
    <a
      href='https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual'
      target='_blank'
      rel="noopener noreferrer"
      id='button-whatsapp'
      title='Clique aqui para chamar no WhatsApp'
      className="fixed bottom-6 right-6 z-[99] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  )
}

export default Whatsapp
