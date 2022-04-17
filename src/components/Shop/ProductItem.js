import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../Ui/Card";
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const { title, price, description, id } = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({ id,title,price }))
    }

    return (
        <li>
            <Card className={classes.item}>
                <header >
                    <h3>{title}</h3>
                    <div className={classes.price}>${price}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={ addToCartHandler}>Add Cart</button>
                </div>
            </Card>
        </li>
    );
}

export default ProductItem;