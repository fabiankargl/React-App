import { useState } from "react";
import { Container } from "./Container";
import { Modal } from "../Modal";
import Counter from "../Counter";
import ToDoList from "../ToDoList";
const componentMap: { [key: string]: JSX.Element } = {
  "Counter": <Counter />,
  "ToDo List": <ToDoList />,
};

interface WrapperProps {
  label: string;
}

export const Wrapper = ({ label }: WrapperProps) => {
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
