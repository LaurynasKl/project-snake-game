import style from './GameBox.module.css'
import { Square } from './Square';

export function GameBox(){
    return (
    <>
        <div className={style.box}><Square /></div>
    </>
    );
}