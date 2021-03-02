import styles from '../styles/components/Countedown.module.css';

export function Countedown(){
    return(
        <div className={styles.countedownContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
        </div>
    );
}