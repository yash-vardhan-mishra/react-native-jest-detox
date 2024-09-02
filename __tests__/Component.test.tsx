import React from 'react';
import { render } from '@testing-library/react-native';
import Component from '../components/Component'

describe('Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Component name="John" />);
    expect(getByText('Hello, John!')).toBeTruthy();
  });

  it('updates text when props change', () => {
    const { getByText, rerender } = render(<Component name="John" />);
    rerender(<Component name="Jane" />);
    expect(getByText('Hello, Jane!')).toBeTruthy();
  });
});