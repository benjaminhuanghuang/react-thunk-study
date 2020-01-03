// connect is what allows us to connect a component to Redux's store
import { connect } from 'react-redux';
import ItemList from '../components/ItemList'

import { itemsFetchData } from '../actions/items';

/*
describes how to transform the current Redux store "state" into the props 
you want to pass to a presentational component you are wrapping.
*/
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
/*
    inject a prop called fetchData into component
*/
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);