import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@roketid/windmill-react-ui'
function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <>
      <div>
        <Button onClick={openModal}>Próximo</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Verifique seus dados</ModalHeader>
        <ModalBody>
           Verifique se os seus dados estão corretos para o envio do agendamento.
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button className="w-full sm:w-auto"><a href="/Initial-Intervie">Enviar</a></Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
export default ModalPage