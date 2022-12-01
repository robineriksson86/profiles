import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import ProfileCard from './ProfileCard'
import { fetchProfiles, clearProfiles } from './redux/fetchProfiles'


const ProfilePage = ({ }) => {
    const dispatch = useAppDispatch()
    const [fetchAmountOfProfiles, setFetchAmountOfProfiles] = useState(10);

    useEffect(() => {
        dispatch(fetchProfiles(10))
    }, []);
    const { profiles } = useAppSelector(state => state.profile);

    const onClickFetchAmount = (amount: number) => {
        setFetchAmountOfProfiles(amount)
        dispatch(clearProfiles())
        dispatch(fetchProfiles(amount))
    }

    const onClickFetchMore = () => {
        dispatch(fetchProfiles(fetchAmountOfProfiles))
    }

    return (
        <div className="profile-page">
            <div className="top-wrapper">
                <div>Fetch amount of profiles</div>
                <div className="button-wrapper">
                    <button onClick={() => onClickFetchAmount(10)}>Fetch 10</button>
                    <button onClick={() => onClickFetchAmount(30)}>Fetch 30</button>
                    <button onClick={() => onClickFetchAmount(50)}>Fetch 50</button>
                    <button onClick={() => onClickFetchAmount(100)}>Fetch 100</button>
                </div>
            </div>
            <h1>Secret Profiles</h1>
            {profiles.length === 0 ? <div>No Results</div>
                :
                <>
                    <div className="wrapper">
                        {
                            profiles?.map((profile, index) => (
                                <ProfileCard profile={profile} key={index} />
                            ))}
                    </div>
                    <div className="bottom-wrapper">
                        <button onClick={() => { onClickFetchMore() }}>{`Load ${fetchAmountOfProfiles} more profiles`}</button>
                    </div>
                </>
            }
        </div>
    );
};
export default ProfilePage;
