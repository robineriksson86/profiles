import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { profiles } from '../constants/searchSet';
import initialState from '../../initialState';
import { ProfileType } from '../constants/types';

const FETCH_PROFILES_URL = (limit: number) => `https://randomuser.me/api/?results=${limit}`;

export const fetchProfiles = createAsyncThunk('FETCH_PROFILES', async (/* limit: number = 10 */) => {
    // const res = await get<{ response: string }>(FETCH_PROFILES_URL(limit));
    /*  const res = await fetch(FETCH_PROFILES_URL(limit));
    const { results } = await res.json();
    return results as ProfileType[]; */
    const res = profiles;
    return res.results;
});

const slice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        fetchProfiles(state, action) {
            state.profiles = action.payload;
        },
        loadMoreProfiles(state, action) {
            state.profiles = state.profiles + action.payload;
        },
        dismissfetchProfilesError(state) {
            state.fetchProfilesError = null;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProfiles.pending, state => {
            state.fetchProfilesPending = true;
            state.fetchProfilesError = null;
        });

        builder.addCase(fetchProfiles.fulfilled, (state, action) => {
            state.fetchProfilesPending = false;
            state.fetchProfilesError = null;
            state.profiles = action.payload;
        });

        builder.addCase(fetchProfiles.rejected, (state, action) => {
            state.fetchProfilesPending = false;
            state.fetchProfilesError = {
                message: 'something went wrong',
            };
        });
    },
});

export const {
    reducer,
    actions: { loadMoreProfiles },
} = slice;
