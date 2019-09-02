import React from 'react';
import ErrorButton from "../error-button";

const PersonView = ({ person: { id, name, gender, birthYear, eyeColor } }) => {
    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt="person"
            />

            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{ eyeColor }</span>
                    </li>
                    <li className="list-group-item">
                        <br/>
                        <ErrorButton />
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PersonView;