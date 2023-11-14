import style from './Aside.module.css'

export function Aside(){
    return (
        <aside className={style.aside}>
            <h1>Invo</h1>
            <nav className={style.navSide}>
                <a className={style.links} href="#">Home</a>
                <a className={style.links} href="#">Invoice</a>
                <a className={style.links} href="#">Clients</a>
                <a className={style.links} href="#">Products</a>
                <a className={style.links} href="#">Messages</a>
                <a className={style.links} href="#">Settings</a>
                <a className={style.links} href="#">Help</a>
                <a className={style.links} href="#">Log Out</a>
            </nav>
        </aside>
    );
}