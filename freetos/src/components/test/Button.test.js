import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="All"></Button>);
    expect(getByTestId('button')).toHaveTextContent("All");
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Cats"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Cats");
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="People"></Button>);
    expect(getByTestId('button')).toHaveTextContent("People");
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Flowers"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Flowers");
})