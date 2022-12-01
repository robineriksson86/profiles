import React from 'react';
import { ProfileType } from '../profilePage/constants/types'
import moment from 'moment'

type Props = {
    profile: Pick<ProfileType, "name" | "location" | "dob" | "email" | "phone" | "cell" | "picture">;
};

const ProfileCard = ({ profile }: Props) => {
    const { name: { title, first, last, }, location: { country, city }, dob: { date, age }, email, phone, cell, picture } = profile
    const dobDate = moment(date).format("YYYY-MM-DD")
    return (
        <div className="profile-card">
            <img src={picture.large} />
            <div className="profile-content">
                <div>
                    <b>Name:</b> {`${title} ${first} ${last}`}
                </div>
                <div>
                    <b>Country:</b> {country}
                </div>
                <div>
                    <b>City:</b> {city}
                </div>
                <div>
                    <b>DoB:</b> {dobDate} <b>Age:</b> {age}
                </div>
                <div className="contact-info">
                    <b>Contact-info:</b>
                    <div>
                        <b>Email:</b> {email}
                    </div>
                    <div>
                        <b>Phone:</b> {phone}
                    </div>
                    <div>
                        <b>Cell:</b> {cell}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileCard;
