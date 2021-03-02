import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/16133098?s=400&u=12ac1b303843ced25dfb42333f5181485f9298d6&v=4" alt="Teste"/>
            <div>
                <strong>Fernanda Alves</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    NLW
                </p>
            </div>
        </div>
    );
}