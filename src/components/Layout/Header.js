import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart1={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals-banner" />
      </div>
    </Fragment>
  );
};

export default Header;
