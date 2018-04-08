import React from 'react'
import { Link } from 'react-router-dom'


export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link style={{ color: '#353b48' }} to={`/edit/${id}`}>
            <h3>Description: {description}</h3>
        </Link>
        <p>Amount: {amount}</p>
        <p>Created: {createdAt}</p>
    </div>
)



export default ExpenseListItem


