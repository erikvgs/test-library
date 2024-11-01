import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter and buttons', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/0/i);
    expect(counterElement).toBeInTheDocument();

    const incrementButton = screen.getByText(/Incrementar/i);
    const decrementButton = screen.getByText(/Decrementar/i);
    
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
});

test('increments counter', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Incrementar/i);
    
    fireEvent.click(incrementButton);
    
    const counterElement = screen.getByText(/1/i);
    expect(counterElement).toBeInTheDocument();
});

test('decrements counter', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrementar/i);

    fireEvent.click(decrementButton);
    
    const counterElement = screen.getByText(/-1/i);
    expect(counterElement).toBeInTheDocument();
});