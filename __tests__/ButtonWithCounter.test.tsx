import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonWithCounter from '../components/ButtonWithCounter';

describe('ButtonWithCounter', () => {
    it('renders correctly with initial count', () => {
        const { getByText } = render(<ButtonWithCounter initialCount={5} />);
        expect(getByText('Press me')).toBeTruthy();
        expect(getByText('You pressed 5 times')).toBeTruthy();
    });

    it('increments counter when button is pressed', () => {
        const { getByText } = render(<ButtonWithCounter initialCount={5} />);
        const button = getByText('Press me');
        fireEvent.press(button);
        expect(getByText('You pressed 6 times')).toBeTruthy();
    });

    it('increments counter multiple times when button is pressed multiple times', () => {
        const { getByText } = render(<ButtonWithCounter initialCount={5} />);
        const button = getByText('Press me');
        fireEvent.press(button);
        fireEvent.press(button);
        fireEvent.press(button);
        expect(getByText('You pressed 8 times')).toBeTruthy();
    });
});