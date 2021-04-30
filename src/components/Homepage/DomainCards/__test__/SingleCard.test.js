import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import SingleCard from '../SingleCard'
import renderer from 'react-test-renderer'


// it("Renders without crashing", () => {
//     const div = document.createElement("div")
//     ReactDOM.render(<SingleCard />, div)
//     ReactDOM.unmountComponentAtNode(div)
// })

// it("Renders without crashing", () =>  { 
//     const div = document.createElement("div")
//     ReactDOM.render(<SingleCard />, div)
//     ReactDOM.unmountComponentAtNode(div)
// })

test("SingleCard matches the snapshot", () => {
    const imageUrl = "https://www.google.com"
    const title = "AI"
    const description = "Its some tech"
    const cardId = "1"
    const buttonText = "Explore !" 
    const tree = renderer.create(
        <>
        <BrowserRouter>
        <SingleCard imageUrl= {imageUrl} cardId={cardId} title={title} description={description} buttonText={buttonText} />
        </BrowserRouter>
        </>).toJSON()

    expect(tree).toMatchSnapshot()

})