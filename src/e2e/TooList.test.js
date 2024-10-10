import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import ToDoList from '../react-app/components/ToDoList';

test('Render start items', () => {
    render(<ToDoList />);

    const input = screen.getByTestId("todo_input");
    expect(input).toBeInTheDocument();

    const buttonAdd = screen.getByTestId("todo_btn_add");
    expect(buttonAdd).toBeInTheDocument();

    act(() => {
        fireEvent.change(input, { target: { value: 'New ToDo Item' } });
        buttonAdd.click();
    });

    const todoElement = screen.getByTestId("todo_element");
    expect(todoElement).toBeInTheDocument();

    const buttonDelete = screen.getByTestId("todo_btn_delete");
    expect(buttonDelete).toBeInTheDocument();
});