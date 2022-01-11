import { combineReducers } from 'redux';

import shop from '../../modules/shop';
import transctions from '../../modules/transctions';
import users from '../../modules/users';
import products from '../../modules/products';


export default combineReducers ({
    shop,
    transctions,
    users,
    products
});