
import styles from "./styles.module.css"

function Card (props){

    const {cidade} = props
    const {country, color, city, population} = cidade

    if (country != "BRA") {
        return null
    }

    return (
        <li className={styles.card} style={{background: color}}>
        <h2>{city}</h2>
        <p>{population}</p>
        </li>
    )
}
export default Card 