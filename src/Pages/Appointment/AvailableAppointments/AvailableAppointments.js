import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h2>Available appointments on {date?.toDateString()} </h2>
        </div>
    );
};

export default AvailableAppointments;