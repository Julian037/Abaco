import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../../src/app/screens/SignIn/SignIn';

// Mock de localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = mockLocalStorage;

describe('SignIn component', () => {
  it('should render the sign in form', () => {
    const { getByLabelText, getByText } = render(<SignIn />);
    
    // Verifica que los elementos del formulario estén presentes
    expect(getByLabelText('Correo')).toBeInTheDocument();
    expect(getByLabelText('Contraseña')).toBeInTheDocument();
    expect(getByText('Ingresar')).toBeInTheDocument();
  });

  it('should show error message when submitting empty form', () => {
    const { getByText } = render(<SignIn />);
    fireEvent.click(getByText('Ingresar'));

    // Verifica que se muestre un mensaje de error
    expect(getByText('Introduce tu contraseña')).toBeInTheDocument();
  });

  it('should show error message when submitting incorrect credentials', () => {
    // Mock localStorage.getItem para devolver un usuario incorrecto
    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));

    const { getByLabelText, getByText } = render(<SignIn />);
    fireEvent.change(getByLabelText('Correo'), { target: { value: 'wrong@example.com' } });
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'wrongpassword' } });
    fireEvent.click(getByText('Ingresar'));

    // Verifica que se muestre un mensaje de error
    expect(getByText('Algo salió mal. Parece que el usuario o la contraseña que ingresaste no son correctos.')).toBeInTheDocument();
  });

  it('should navigate to "/home" when submitting correct credentials', () => {
    // Mock localStorage.getItem para devolver un usuario correcto
    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));

    const { getByLabelText, getByText } = render(<SignIn />);
    fireEvent.change(getByLabelText('Correo'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'password123' } });
    fireEvent.click(getByText('Ingresar'));

    // Verifica que se llame a la función de navegación con "/home"
    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });
});