import React from 'react'
import { Col, Row, Spinner, Table } from 'react-bootstrap'

export default function PageNotFound() {
    return (
        <div className="row justify-content-center jumbotron">
            <table>
                <th></th>
                <th><Spinner animation="grow" variant="danger" size="sm" />
                    <Spinner animation="grow" variant="danger" />
                </th>
                <tr>
                    <td>
                        <h1>Error 404!!! Page Not Found</h1>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}
