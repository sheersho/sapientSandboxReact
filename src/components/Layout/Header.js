import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <img className={classes['main-image']} src={mealsImage}/> 
    </Fragment>
  );
};

export default Header;
