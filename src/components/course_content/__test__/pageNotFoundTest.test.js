import React from 'react';
import { render, cleanup } from '@testing-library/react'
import PageNotFound from '../../PageNotFound/pageNotFound';

afterEach(cleanup)

it("renders without crashing", () => {
    const { asFragment } = render(<PageNotFound />)

    expect(asFragment(<PageNotFound />)).toMatchSnapshot()
})

