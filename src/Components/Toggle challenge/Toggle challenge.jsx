import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button/Button';
import s from '../ToggleChallenge/ToggleChallenge.module.scss';

const ToggleChallenge = () => {
    
    const [challenge, setChallenge] = useState(false);
    
    const toggle = () => setChallenge(prevState => !prevState);
    //toggle = () => this.setState(prevState => ({ challenge: !prevState.challenge }));
               
        return (
            <div>              
                {challenge
                    ? <Button
                        content="icon-trophy"
                        type="button"
                        onClick={toggle} />
                    :<Button
                        content="icon-Vector"
                        type="button"
                        onClick={toggle} />}
                    
                <CSSTransition
                    in={challenge}
                    classNames={s}
                    timeout={1000}
                    unmountOnExit>
                <div className={s.challengeCard}></div>
                </CSSTransition>

            </div> 
        )
    }

export default ToggleChallenge;