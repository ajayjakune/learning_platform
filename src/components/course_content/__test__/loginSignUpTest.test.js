import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LoginSignUp from '../../Auth/loginSignUp';

afterEach(cleanup)

it("renders without crashing", () => {
    const { asFragment } = render(<LoginSignUp />)

    expect(asFragment(<LoginSignUp />)).toMatchSnapshot()
})
