import style from './Header.module.css'

export function Header(){
    return(
        <>
        <header className={style.header}>
            <div className={style.search}>
                <label className={style.text} htmlFor="">Tap to search</label>
                <input className={style.input} type="text" name="" id="" />
            </div>
            <div className={style.avatar}>
                <img src="#" alt="" />
            </div>
        </header>
        </>
    );
}