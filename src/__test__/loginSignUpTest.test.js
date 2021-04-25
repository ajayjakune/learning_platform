import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import LoginSignUp from '../components/Auth/loginSignUp';

afterEach(cleanup)

it("renders without crashing", () => {
    const { asFragment } = render(<LoginSignUp />)

    expect(asFragment(<LoginSignUp />)).toMatchSnapshot()
})
