import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
    it('renders correctly', () => {
        const onLogin = jest.fn();
        const { getByPlaceholderText, getByText } = render(<LoginForm onLogin={onLogin} />);
        expect(getByPlaceholderText('Username')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
    });

    it('calls onLogin with correct credentials when login button is pressed', () => {
        const onLogin = jest.fn();
        const { getByPlaceholderText, getByText } = render(<LoginForm onLogin={onLogin} />);
        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        fireEvent.changeText(usernameInput, 'username');
        fireEvent.changeText(passwordInput, 'password');
        const loginButton = getByText('Login');
        fireEvent.press(loginButton);
        expect(onLogin).toHaveBeenCalledTimes(1);
        expect(onLogin).toHaveBeenCalledWith('username', 'password');
    });

    it('does not call onLogin when login button is pressed with empty credentials', () => {
        const onLogin = jest.fn();
        const { getByText } = render(<LoginForm onLogin={onLogin} />);
        const loginButton = getByText('Login');
        fireEvent.press(loginButton);
        expect(onLogin).not.toHaveBeenCalled();
    });
});