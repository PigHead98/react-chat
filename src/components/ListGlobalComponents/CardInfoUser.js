import React from "react";
import './ListStyle/CardInfoUser.scss';

export default function CardInfoUser ( { avatarCard = "https://picsum.photos/70", titleCard, descriptionCard } ) {
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