import React from 'react';
import { render as testRender } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store'
export { screen, act, waitFor } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export const renderComponent = (node: ReactElement,) => {
    const Wrapper = (props: { children: ReactNode }) => {
        return <Provider store={store}>{props.children}</Provider>;
    };
    testRender(node, {
        wrapper: Wrapper,
    });
    return { store };
};
