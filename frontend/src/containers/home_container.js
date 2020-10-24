import { List, ListItem } from "@chakra-ui/core";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productAll } from '../actions/index';
class HomeContainer extends Component {

    componentWillMount() {
        this.props.dispatch(productAll());
    }

    renderProducts = (products) => {
        return (products.products ?
            products.products.map((item, index) => {
                return (<div key={index}>

                    <List styleType="disc">
                        <ListItem>{item.product_name}</ListItem>
                    </List>
                </div>)
            })
            : null)
    }

    render() {
        return (
            // <div>
            //     {this.renderProducts(this.props.products)}

            // </div>
            <p>THis is Container</p>
        )
    }
}



function mapStateToProps(state) {
    return {
        products: state.products
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ productAll }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
export default connect(mapStateToProps)(HomeContainer)
