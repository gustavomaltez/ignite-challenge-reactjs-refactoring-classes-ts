import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles, SubmitHandler } from '@unform/core';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface FormData {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleUpdateFood: (food: FormData) => Promise<void>;
  editingFood: Food;
}

const ModalEditFood = ({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditFoodProps): JSX.Element => {

  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    handleUpdateFood(data);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
