import * as React from 'react';
import styles from './card.module.scss';
import { ICard } from '../../interfaces/card.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBed, faBath } from '@fortawesome/free-solid-svg-icons';

export interface ICardProps {
    card: ICard;
    active: boolean;
}

const Card = ({ card, active }: ICardProps) => {
    const { title, subTitle, imgUrl, beds, bathrooms, parkings } = card;

    return (
        <div className={`${styles['card-container']} ${active ? styles['active'] : null}`}>
            <div className={styles['card-img']} style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <div className={styles['card-title']}>{title}</div>
            <div className={styles['card-sub-title']}>{subTitle}</div>
            <div className={styles['card-details-container']}>
                <div className={styles['card-detail']}>
                    <FontAwesomeIcon icon={faBed} className={styles['card-detail-icon']} />
                    <div className={styles['card-detail-count']}>{beds}</div>
                </div>
                <div className={styles['card-detail']}>
                    <FontAwesomeIcon icon={faBath} className={styles['card-detail-icon']} />
                    <div className={styles['card-detail-count']}>{bathrooms}</div>
                </div>
                <div className={styles['card-detail']}>
                    <FontAwesomeIcon icon={faCar} className={styles['card-detail-icon']} />
                    <div className={styles['card-detail-count']}>{parkings}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;