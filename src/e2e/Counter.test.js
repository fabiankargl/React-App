import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('Render start items', () => {
    render(<Counter />);
    const header = screen.getByText("Counter");
    expect(header).toBeInTheDocument();

    const counter = screen.getByText("0");
    expect(counter).toBeInTheDocument();

    const decreaseButton = screen.getByText("-");
    expect(decreaseButton).toBeInTheDocument();

    const increaseButton = screen.getByText("+");
    expect(decreaseButton).toBeInTheDocument();

    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeInTheDocument();

});
