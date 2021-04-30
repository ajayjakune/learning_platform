import {render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

test('It shoud render the Header', () => {
    render(
        <>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </>)
    
})