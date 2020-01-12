import * as React from 'react';
import { Card } from '../card';
import styles from './app.module.scss';
import { cards } from '../../constants';
import reactLogo from '../../assets/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
    let [currentCardIndex, setCurrentCardIndex] = React.useState(0);

    const nextPic = () => {
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(++currentCardIndex);
        }
    }

    const prevPic = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(--currentCardIndex);
        }
    }

    const jumpTo = (index: number) => {
        if (index >= 0 && index < cards.length) {
            setCurrentCardIndex(index);
        }
    }

    return (
        <div className={styles['container']}>
            <img alt={'React Logo'} className={styles['logo']} src={reactLogo} />
            <h1 className={styles['title']}>{'React Card Slider'}</h1>
            <div className={styles['card-slider']}>
                <div className={styles['card-slider-wrapper']} style={{ left: `-${currentCardIndex * 100}%` }}>
                    {
                        cards.map((card, index) => <div key={index} className={styles['.card']}><Card card={card} active={index === currentCardIndex} /></div>)
                    }
                </div>
            </div>
            <div className={styles['navigation-container']}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles['navigation-left-arrow']} onClick={prevPic} />
                {
                    cards.map((_, index) => <div key={index} onClick={() => jumpTo(index)} className={`${styles['navigation-dot']} ${index === currentCardIndex ? styles['active'] : null}`}></div>)
                }
                <FontAwesomeIcon icon={faArrowRight} className={styles['navigation-right-arrow']} onClick={nextPic} />
            </div>
        </div>
    );
}

export default App;
