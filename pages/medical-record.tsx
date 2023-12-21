import React, { useState } from 'react';
import {
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,Card
} from '@roketid/windmill-react-ui';
import CTA from 'example/components/CTA';
import PageTitle from 'example/components/Typography/PageTitle';
import SectionTitle from 'example/components/Typography/SectionTitle';
import Layout from 'example/containers/Layout';
import { MailIcon } from 'icons';


interface Report {
  date: string;
  number: number;
  text: string;
}

const Forms: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [newText, setNewText] = useState<string>('');
  const [newNumber, setNewNumber] = useState<number>(1); // Inicializa com o número 1
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>('');

  const handleAddReport = () => {
    if (newText) {
      const newReport: Report = {
        date: new Date().toLocaleDateString('pt-BR'), 
        number: newNumber,
        text: newText,
      };
      setReports([newReport, ...reports]);
      setNewText('');
      setNewNumber(newNumber + 1); // Incrementa o número para o próximo relatório
    }
  };

  const handleEditReport = (index: number) => {
    setEditingIndex(index);
    setEditedText(reports[index].text);
  };

  const handleSaveEdit = () => {
    if (editedText) {
      const updatedReports = [...reports];
      updatedReports[editingIndex as number].text = editedText;
      setReports(updatedReports);
      setEditingIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (

     
    <Layout>
      <PageTitle>Protuario do paciente</PageTitle>
      <div className="flex items-center">
        <Label className="w-full">
          <span>Relatório da sessão:</span>
          <Textarea
            className="mt-1 h-60"
          
            placeholder="Enter some long form content."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </Label>
        <Button className="h-20 mt-4 ml-2" onClick={handleAddReport}>
          +
        </Button>
      </div>
      {reports.map((report, index) => (
        <div key={index} className="mt-4  shadow-md">
          {editingIndex === index ? (
            <div className="flex h-60">
              <Textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <Button className="ml-2" onClick={handleSaveEdit}>
                Save
              </Button>
              <Button className="ml-2" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </div>
          ) : (
             
            <div >
              <Card className='p-4'>
                <div className='flex  justify-between mb-4 '>
                  <p>Data: {report.date}</p>
                  <p>Número do Relatório: {report.number}</p>
                </div>
               
                <div className="flex">
                  <Textarea className='flex  justify-between mb-4  h-60'disabled value={report.text} />
                  <Button className="ml-2" onClick={() => handleEditReport(index)}>
                  Edit
                  </Button>
                </div>
                
              </Card>
              
            </div>
          )}
          
        </div>
      ))}
     
    </Layout>
   
  );
};

export default Forms;
