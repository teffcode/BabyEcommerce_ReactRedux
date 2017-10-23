import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeFromCart } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCart = (props) => {
  return (
    <Panel header="Shopping Cart">
      <Table fill>
        <tbody>
          {props.cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Panel>
  )
}

// se encarga de retornar un objeto
// ese objeto lo pasamos como props a nuestro componente
const mapStateToProps = (state) => {
  return {
    // cart -> que está en el estado compartido de redux
    // no necesitamos el constructor con this.state = { cart: [] }
    // se cambia "state" por "props"
    cart: state.cart 
  }
}

// recibe el dispatch del store
// retorna el objeto como props
const mapDispatchToProps = (dispatch) => {
  return { 
    // función del botón 
    removeFromCart(product){
      // "store.dispatch" ya no, sino "dispatch"
      dispatch(removeFromCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);