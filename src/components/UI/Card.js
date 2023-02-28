import classes from './Card.module.css'

const Card = props => {
    return <div classes={classes.card}>
        {props.children}
    </div>
}

export default Card;    