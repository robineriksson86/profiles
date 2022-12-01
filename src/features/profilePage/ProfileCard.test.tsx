import React from 'react';
import { renderComponent, screen } from '../../testUtils';
import ProfileCard from './ProfileCard'
const profile =
{
    gender: 'male',
    name: { title: 'Mr', first: 'Oskari', last: 'Latvala' },
    location: {
        street: { number: 3786, name: 'Tehtaankatu' },
        city: 'Eurajoki',
        state: 'South Karelia',
        country: 'Finland',
        postcode: 10265,
        coordinates: { latitude: '41.2075', longitude: '-112.7003' },
        timezone: { offset: '+5:30', description: 'Bombay, Calcutta, Madras, New Delhi' },
    },
    email: 'oskari.latvala@example.com',
    login: {
        uuid: '0af1d2a6-12ac-4ccb-a1ec-9b416f26b123',
        username: 'orangebear849',
        password: 'abcdef',
        salt: 'Lik3ZuNn',
        md5: '6aabe111e76ea404a2cf600cce25626e',
        sha1: '52fdb791f3f8f3b1d3fdce1439915958dff22bfa',
        sha256: '7242be41f58057cbab1411a79155a2525aed5436eab5f5171e9513b0134b552f',
    },
    dob: { date: '1968-07-11T15:24:49.397Z', age: 54 },
    registered: { date: '2007-02-28T04:11:36.758Z', age: 15 },
    phone: '08-040-331',
    cell: '041-437-47-23',
    id: { name: 'HETU', value: 'NaNNA835undefined' },
    picture: {
        large: 'https://randomuser.me/api/portraits/men/34.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/34.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
    },
    nat: 'FI'
}

test('renders ProfileCard with correct values', () => {
    renderComponent(<ProfileCard profile={profile} />)
    expect(screen.getByText('Mr Oskari Latvala')).toBeInTheDocument();
    expect(screen.getByText('Finland')).toBeInTheDocument();
    expect(screen.getByText('Eurajoki')).toBeInTheDocument();
    expect(screen.getByText('oskari.latvala@example.com')).toBeInTheDocument();
    expect(screen.getByText('08-040-331')).toBeInTheDocument();
    expect(screen.getByText('041-437-47-23')).toBeInTheDocument();
});