import style from './Main.module.css';
import { GameBox } from '../gameBox/GameBox'

export function Main(){
    return (
        <main className={style.main}>
            <div className={style.score}>Score: 00</div>
            <button className={style.start}>Start</button>
            <GameBox />
        </main>
    );
}