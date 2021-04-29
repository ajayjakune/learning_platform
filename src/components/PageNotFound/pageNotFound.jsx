import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function PageNotFound() {
    return (
        <div className="row justify-content-center jumbotron" style={{ height: "80vh", width: "100vw" }}>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th><Spinner animation="grow" variant="danger" size="sm" />
                        <Spinner animation="grow" variant="danger" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h1>Error 404!!! Page Not Found</h1>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
