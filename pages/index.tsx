import React, { useState, useEffect } from 'react';
import { Input, Label, Button } from '@roketid/windmill-react-ui'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@roketid/windmill-react-ui'
import Layout from 'example/containers/Layout'
import PageTitle from 'example/components/Typography/PageTitle'

function Forms() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [preferenciaAtendimento, setPreferenciaAtendimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');

  const localStorageKey = 'formularioData';

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function formatCPF(value:string) {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length === 11) {
      return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9)}`;
    }

    return cleaned;
  }

  function formatDate(value:string) {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length >= 8) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    }

    return cleaned;
  }

  useEffect(() => {
    const formData = {
      nome,
      email,
      preferenciaAtendimento,
      telefone,
      dataNascimento,
      cpf,
      endereco,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }, [nome, email, preferenciaAtendimento, telefone, dataNascimento, cpf, endereco]);

  function handleEnviarClick() {
    if (isFormValid()) {
      window.location.href = '/Initial-Intervie';
    } else {
      alert('Preencha todos os campos antes de enviar.');
    }
  }

  function isFormValid() {
    return (
      nome &&
      email &&
      preferenciaAtendimento &&
      telefone &&
      dataNascimento &&
      cpf &&
      endereco
    );
  }

  useEffect(() => {
    const savedFormData = localStorage.getItem(localStorageKey);

    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setNome(parsedFormData.nome);
      setEmail(parsedFormData.email);
      setPreferenciaAtendimento(parsedFormData.preferenciaAtendimento);
      setTelefone(parsedFormData.telefone);
      setDataNascimento(parsedFormData.dataNascimento);
      setCpf(parsedFormData.cpf);
      setEndereco(parsedFormData.endereco);
    }
  }, []);

  return (
    <Layout>
      <PageTitle>Fazer agendamento</PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark-bg-gray-800">
        <Label>
          <span>Nome completo</span>
          <Input
            className="mt-1"
            placeholder=""
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Email</span>
          <Input
            className="mt-1"
            placeholder="@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>

        <div className="mt-4">
          <Label className="mt-4">Preferência do atendimento</Label>
          <div className="mt-2">
            <Label radio>
              <Input
                type="radio"
                value="presencial"
                name="preferenciaAtendimento"
                checked={preferenciaAtendimento === 'presencial'}
                onChange={() => setPreferenciaAtendimento('presencial')}
              />
              <span className="ml-2">Presencial</span>
            </Label>
            <Label className="ml-6" radio>
              <Input
                type="radio"
                value="online"
                name="preferenciaAtendimento"
                checked={preferenciaAtendimento === 'online'}
                onChange={() => setPreferenciaAtendimento('online')}
              />
              <span className="ml-2">Online</span>
            </Label>
          </div>
        </div>

        <Label className="mt-4">
          <span>Número de telefone</span>
          <Input
            className="mt-1"
            placeholder="(DDD) XXXX-XXXX"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Data de nascimento</span>
          <Input
            className="mt-1"
            placeholder="00/00/0000"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(formatDate(e.target.value))}
          />
        </Label>

        <Label className="mt-4">
          <span>CPF</span>
          <Input
            className="mt-1"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
          />
        </Label>

        <Label className="mt-4">
          <span>Endereço </span>
          <Input
            className="mt-1"
            placeholder=""
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </Label>

        <div className="mt-4">
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
            <Button className="w-full sm:w-auto" onClick={handleEnviarClick}>
              <a href="/Initial-Intervie">Próximo</a>
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Layout>
  );
}

export default Forms;
