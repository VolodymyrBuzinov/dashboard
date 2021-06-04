import React from 'react';
import Loader from "react-loader-spinner";
import styles from './Loader.module.css';

function Load() {
    return (
        <Loader className={styles.loader}
            type="ThreeDots"
            color="#3f51b5"
            height={45}
            width={45}
            timeout={6000}
        />)
};

export default Load;