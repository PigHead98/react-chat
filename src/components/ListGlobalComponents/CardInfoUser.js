import React from "react";
import PropTypes from 'prop-types';
import './ListStyle/CardInfoUser.scss';

CardInfoUser.propTypes = {
    avatarCard : PropTypes.string,
    titleCard : PropTypes.string,
    descriptionCard : PropTypes.string,
};

CardInfoUser.defaultProps = {
    avatarCard : "https://picsum.photos/70"
};

export default function CardInfoUser ( { avatarCard, titleCard, descriptionCard } ) {
    return (
        <div className="d-flex card-info align-items-center ju">
            <div className="card-info__img">
                <img src={ avatarCard } alt="avatar" className="img-fluid rounded-pill"/>
            </div>
            <div className="d-flex flex-column text-left ml-3">
                <h2 className="card-info__title mb-0">
                    { titleCard }
                </h2>
                <p className="card-info__description mb-0">
                    { descriptionCard }
                </p>
            </div>
        </div>
    )
}