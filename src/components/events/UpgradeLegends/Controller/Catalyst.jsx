import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Catalyst = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>CATALYST</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/controller/catalyst.jpg" alt="Catalyst image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h4>Level 2 Upgrade Options</h4>
                <p>Long Cast</p>
                <p>Increase Spike throw range by 40%.</p>
                <p>Sister Spikes</p>
                <p>Increase max number of active Spikes by one.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Long Veil</p>
                <p>Increase Ultimate length by 15 meters.</p>
                <p>Resilient Veil</p>
                <p>Increase Ultimate lifetime by 5 seconds.</p>
            </div>
        </div>
    );
};

export default Catalyst;