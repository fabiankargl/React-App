import  { useState } from 'react';
import { Container } from "./Container";
import { Modal } from '../Modal';
import Counter from '../Counter';
import ToDoList from '../ToDoList'
const componentMap = {
  'Counter': <Counter />,
  'ToDo List': <ToDoList />,
};

export const Wrapper = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <button
        onClick={openModal}
        className="bg-none border-none text-3xl text-blue-500 cursor-pointer p-0 hover:text-yellow-100"
      >
        {label}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {componentMap[label]}
      </Modal>
    </Container>
  );
};