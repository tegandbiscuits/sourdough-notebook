import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

/**
* @vitest-environment jsdom
*/
describe('Card', () => {
  it('can render', () => {
    render((
      <Card>
        <Card.Body>
          <Card.Title>Hello World</Card.Title>
          <p>I am a card</p>
        </Card.Body>
      </Card>
    ));

    expect(screen.getByText('Hello World')).toBeVisible();
    expect(screen.getByText('I am a card')).toBeVisible();
  });
});
