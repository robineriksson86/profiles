import { ProfileType } from '../features/profilePage/constants/types';
export type State = {
    profiles: ProfileType[];
    fetchProfilesPending: boolean;
    fetchProfilesError: null | { message: string };
};

const initialState: State = {
    fetchProfilesError: null,
    fetchProfilesPending: false,
    profiles: [],
};

export default initialState;
