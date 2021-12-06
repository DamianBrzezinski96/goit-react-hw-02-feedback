import React from "react";
import styles from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({
    options,
    onLeaveFeedback,
}) => {
    return (
        <>
            <button className={styles.button} onClick={options}>{onLeaveFeedback}</button>
        </>
       
    );
};