import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Counter from '../react-app/components/Counter';

test('Render start items', () => {
    render(<Counter />);

    const header = screen.getByText("Counter");
    expect(header).toBeInTheDocument();

    const buttonPlus = screen.getByTestId("btn_counter_plus");
    expect(buttonPlus).toBeInTheDocument();

    act(() => {
        buttonPlus.click();
    });

    const counterOutput = screen.getByTestId("counter_output");
    expect(counterOutput).toBeInTheDocument();
    expect(counterOutput.textContent).toEqual("1");

    const buttonMinus = screen.getByTestId("btn_counter_minus");
    expect(buttonMinus).toBeInTheDocument();

    act(() => {
        buttonMinus.click();
    });

    expect(counterOutput.textContent).toEqual("0");

    const buttonReset = screen.getByTestId("btn_counter_reset");
    expect(buttonReset).toBeInTheDocument();

    act(() => {
        buttonPlus.click();
        buttonReset.click();
    });

    expect(counterOutput.textContent).toEqual("0");

    const counterStepsCheckbox = screen.getByTestId("counter_checkbox");
    expect(counterStepsCheckbox).toBeInTheDocument();

    act(() => {
        counterStepsCheckbox.click();
    });

    const steps_slider = screen.getByTestId("counter_steps_slider");
    expect(steps_slider).toBeInTheDocument();
});