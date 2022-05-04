import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';
import { Howl } from 'howler';
// const notificationSounds = 'http://www.solforgeladder.com/sounds/?C=M;O=A';
const soundSrc = 'https://downloads.nymea.io/notification-sounds/notification.mp3';

function SingleColor({ rgb, weight, index }) {

    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [alert])


    const soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play();
    }

    return (
        <article onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hex);
            soundPlay(soundSrc)
        }}
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}>
            <p className="percent-value">
                {weight}%
            </p>
            <p className="color-value">
                {hex}
            </p>
            {alert && <p className={`alert ${index > 4 && 'alert-white'}  `}>copied to clipboard</p>}

        </article >
    )
}

export default SingleColor