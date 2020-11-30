Create container and UI component

```
import { connect } from 'react-redux';
import ItemList from '../components/ItemList'


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

```