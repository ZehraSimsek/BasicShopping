import React from 'react'
import { Table, Button } from 'reactstrap'


function CardList({ card, removeCard }) {
    return (
        <>
            <h1>BUCKET LIST</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units in Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        card.map((item) => (
                            <tr key={item.product.id}>
                                <td>{item.product.id}</td>
                                <td>{item.product.categoryId}</td>
                                <td>{item.product.productName}</td>
                                <td>{item.product.unitPrice}</td>
                                <td>{item.product.unitsInStock}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Button onClick={() => removeCard(item.product)}>Remove</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default CardList;