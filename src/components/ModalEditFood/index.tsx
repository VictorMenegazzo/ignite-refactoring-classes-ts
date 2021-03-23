import { useRef } from 'react';

import { SubmitHandler, FormHandles } from '@unform/core';

import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  editingFood: FoodProps;
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: FoodProps) => void;
}

export function ModalEditFood ({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FoodProps> = data => {
    handleUpdateFood(data);
    setIsOpen();
  };

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
