import initialState, { State } from '../../initialState';
import { reducer as fetchProfileReducer } from './fetchProfiles';
import { AnyAction } from '@reduxjs/toolkit';
const reducers = [fetchProfileReducer];

// eslint-disable-next-line
export default function reducer(state = initialState, action: AnyAction) {
    let newState: State;
    switch (action.type) {
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}
