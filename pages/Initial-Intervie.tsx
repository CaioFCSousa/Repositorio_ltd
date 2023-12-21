import React, { useState, useEffect } from 'react';
import { Input, Label, Button,Textarea  } from '@roketid/windmill-react-ui';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@roketid/windmill-react-ui';
import Layout from 'example/containers/Layout';
import PageTitle from 'example/components/Typography/PageTitle';
import SectionTitle from 'example/components/Typography/SectionTitle';

function Forms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [acceptQuestionnaire, setAcceptQuestionnaire] = useState(false);
  const [selectedHumor, setSelectedHumor] = useState("");
  const [questionnaireData, setQuestionnaireData] = useState({
    situacaoAtual: '',
    meioSustento: '',
    historiaEmprego: '',
    qualNivelEscolaridade: '',
    motivoConsulta: '',
    outrosMotivosConsulta: '',
    diagnosticoConcluido: '',
    medicacao: '',
    usoSubstancias: '',
    sofreuViolencia: '',
    programaComunitario: '',
    horasVagas: '',
    historicoProblemas: '',
    membroFamiliar: '',
    apoioFamiliar: '',
    maisAlgumaCoisa: '',
    adjetivoDescricao: '',
    expectativas: '',
    observacao: '',
  });



  

  useEffect(() => {
    // Chame a função openModal assim que o componente for montado
    openModal();
  }, []);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
 function isFormValid() {
    // Valide se todos os campos obrigatórios estão preenchidos
    return (
      questionnaireData.situacaoAtual &&
      questionnaireData.meioSustento &&
      questionnaireData.historiaEmprego &&
      questionnaireData.qualNivelEscolaridade &&
      questionnaireData.motivoConsulta &&
      questionnaireData.outrosMotivosConsulta &&
      selectedHumor !== "" &&
      questionnaireData.diagnosticoConcluido &&
      questionnaireData.medicacao &&
      questionnaireData.usoSubstancias &&
      questionnaireData.sofreuViolencia &&
      questionnaireData.programaComunitario &&
      questionnaireData.horasVagas &&
      questionnaireData.historicoProblemas &&
      questionnaireData.membroFamiliar &&
      questionnaireData.apoioFamiliar &&
      questionnaireData.maisAlgumaCoisa &&
      questionnaireData.adjetivoDescricao &&
      questionnaireData.expectativas
      
    );
  }

  function handleQuestionnaireSubmit() {
    if (acceptQuestionnaire) {
      if (isFormValid()) {
        // Envie os dados do questionário e os dados do Local Storage para o backend
        const updatedData = {
          ...questionnaireData,
          humorLevel: selectedHumor,
          // Adicione outros campos de dados que você deseja enviar
          // Os dados do Local Storage já foram preenchidos nos estados de formulário
        };
        const formData = updatedData;
        // Envie os dados para o backend aqui
        console.log('Enviando dados para o backend:', formData);
      } else {
        alert('Preencha todos os campos obrigatórios antes de enviar o formulário.');
      }
    } else {
      // O usuário não aceitou responder ao questionário, envie os campos com valores nulos
      const formData = {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        question6: null,
        humorLevel: null,
        question8: null,
        question9: null,
        question10: null,
        question11: null,
        question12: null,
        question13: null,
        question14: null,
        question15: null,
        question16: null,
        question17: null,
        question18: null,
        question19: null,
        question20: null,
        // Defina outros campos como null
      };
      // Envie os dados para o backend com campos nulos
      console.log('Enviando dados nulos para o backend:', formData);
    }
  }

  return (
    <Layout>
      <SectionTitle>Entrevista Inicial</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark-bg-gray-800">
        {/* Renderize as perguntas do questionário com base no estado de aceitação */}
        {acceptQuestionnaire && (
          <>
            <Label className="mt-4">
              <span>1.Situação de vida atual. Com quem você vive? Como é o local?</span>
              <Textarea
                className="mt-1"
                rows={3}
                placeholder="Sua resposta"
                value={questionnaireData.situacaoAtual}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, situacaoAtual: e.target.value })}
              />
            </Label>
            <Label className="mt-4">
              <span>2.Como você está se sustentando hoje?</span>
              <Textarea
                className="mt-1"
                rows={3}
                placeholder="Sua resposta"
                value={questionnaireData.meioSustento}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, meioSustento: e.target.value })}
              />
            </Label>
            <Label className="mt-4">
              <span>3.Breve história dos empregos/trabalhos realizados.</span>
              <Textarea
                className="mt-1"
                rows={3}
                placeholder="Sua resposta"
                value={questionnaireData.historiaEmprego}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, historiaEmprego: e.target.value })}
              />
            </Label>
            
            <Label className="mt-4">
              <span>4.Qual é o seu nível de instrução? Qual a última série concluída e quando?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta"  value={questionnaireData.qualNivelEscolaridade}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, qualNivelEscolaridade: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>5.Qual o motivo principal de buscar a Psicoterapia?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta"  value={questionnaireData.motivoConsulta}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, motivoConsulta: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>6. Além do problema que acabou de relatar, há outros estressores em sua vida no momento? Quais são?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta"  value={questionnaireData.outrosMotivosConsulta}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, outrosMotivosConsulta: e.target.value })}/>
            </Label>
            
            <div className='mt-4'>
              <Label className="mt-4">
              <span>7. Como está seu nível de humor atualmente?</span>
              <div className="mt-2">
                <span className="mr-2">1 melhor possível</span>
                {Array.from({ length: 10 }).map((_, index) => (
                  <Label key={index} className="ml-6" radio>
                    <Input
                      type="radio"
                      value={index + 1}
                      name="humorLevel"
                      onChange={() => setSelectedHumor(`${index + 1}`)}
                    />
                    <span className="ml-2">{index + 1}</span>
                  </Label>
                ))}
                <span className="ml-2">10 pior possível</span>
              </div>
            </Label>
           
          </div>
            <Label className="mt-4">
              <span>8. Você tem algum diagnóstico concluído?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.diagnosticoConcluido}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, diagnosticoConcluido: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>9. Situação física atual – alguma preocupação? Medicações atuais (tipo e dosagem)?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.medicacao}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, medicacao: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>10. Uso atual de drogas e álcool, incluindo cafeína. Você já teve problemas no passado com o abuso de substâncias? Algum histórico de tratamento de uso de substâncias?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.usoSubstancias}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, usoSubstancias: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>11.  Você já sofreu algum tipo de violência ou abuso sexual?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.sofreuViolencia}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, sofreuViolencia: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>12. Você está atualmente envolvido em algum programa comunitário ou voluntário?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.programaComunitario}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, programaComunitario: e.target.value })} />
            </Label>
            <Label className="mt-4">
              <span>13. O que você gosta de fazer nas horas de lazer?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.horasVagas}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, horasVagas: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>14. Histórico de problemas atuais – quando seus problemas começaram? Você se lembra de algum incidente específico que você acredita ter causado o problema?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.historicoProblemas}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, historicoProblemas: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>15. Quem faz parte da sua família? Dê o nome de seus pais e irmãos; diga quais são suas idades e onde eles moram.</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.membroFamiliar}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, membroFamiliar: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>16. De quem você está mais perto e mais longe em sua família? Quem você procuraria se precisasse de apoio? Quem você procuraria no caso de uma crise ou emergência?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.apoioFamiliar}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, apoioFamiliar: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>17. Esqueci de perguntar  alguma coisa que considera importante?</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.maisAlgumaCoisa}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, maisAlgumaCoisa: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>18. Use três ou quatro adjetivos para descrever-se como pessoa (inclua pontos fracos e fortes).</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.adjetivoDescricao}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, adjetivoDescricao: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>19. Quais são suas expectativas e metas relativas a estar aqui? Cite uma ou duas coisas que você gostaria que mudassem em relação ao(s) problema(s) que discutimos.</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.expectativas}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, expectativas: e.target.value })}/>
            </Label>
            <Label className="mt-4">
              <span>20. Deixe alguma observação que achar necessário.</span>
              <Textarea className="mt-1" rows={3} placeholder="Sua resposta" value={questionnaireData.observacao}
                onChange={(e) => setQuestionnaireData({ ...questionnaireData, observacao: e.target.value })}/>
            </Label>
          <div className="mt-4">
            <Button onClick={handleQuestionnaireSubmit}>Enviar</Button>
          </div>
          </>
        )}

        
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>Responder questionário(Opcional)</ModalHeader>
          <ModalBody>
            Se desejar responder clique em Aceitar e o questionário passará a ser obrigatório, se não clique em Não aceitar.
          </ModalBody>
          <ModalFooter>
            <Button className="w-full sm:w-auto" layout='outline' onClick={() => {
              handleQuestionnaireSubmit();
              closeModal();
            }}>
              Não aceitar
            </Button>
            <Button className="w-full sm:w-auto" onClick={() => {
              setAcceptQuestionnaire(true);
              closeModal();
            }}>
              Aceitar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Layout>
  );
}

export default Forms;
