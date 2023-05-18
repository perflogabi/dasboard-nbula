import css from './Probar.module.css'
import Progress_bar from '../../Progress_bar'

const Probar = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./logo.png" alt="logo" />
                <span>Corridas do dia</span>
            </div>

            <div className={css.progress}>
                <h3 className="heading"></h3>
                    <Progress_bar bgcolor="orange" progress='30'  height={20} />
                    <Progress_bar bgcolor="red" progress='60'  height={20} />
                    <Progress_bar bgcolor="#99ff66" progress='50'  height={20} />
                    <Progress_bar bgcolor="#ff00ff" progress='85'  height={20} />
                    <Progress_bar bgcolor="#99ccff" progress='95'  height={20} />
            </div>


           
        </div>
    )
}

export default Probar