import React from 'react';
import { renderComponent, screen } from '../../testUtils';
import userEvent from '@testing-library/user-event'
import ProfilePage from './ProfilePage'


test('render header', () => {
    renderComponent(<ProfilePage />)
    expect(screen.getByRole('heading')).toHaveTextContent('Secret Profiles')
})
test('fetch button sets fetchAmountOfProfiles', async () => {
    renderComponent(<ProfilePage />)
    await userEvent.click(screen.getByRole('button', { name: /Fetch 50/ }));
    expect(screen.getByText('Load 50 more profiles'))
})