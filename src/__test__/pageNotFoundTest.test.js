import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react'
import PageNotFound from '../components/PageNotFound/pageNotFound';

afterEach(cleanup)

it("renders without crashing", () => {
    const { asFragment } = render(<PageNotFound />)

    expect(asFragment(<PageNotFound />)).toMatchSnapshot()
})

