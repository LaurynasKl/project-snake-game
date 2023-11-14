import style from './Header.module.css'

export function Header(){
    return(
        <header className={style.header}>
            <h1 className={style.game}>Snake game</h1>
        </header>
    );
}