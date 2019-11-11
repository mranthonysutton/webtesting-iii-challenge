// Test away
import React from "react"
import {render, fireEvent} from "@testing-library/react";
import Dashboard from "./Dashboard";

test('Dashboard renders successfully', () => {
    render(<Dashboard />);
})

// test('Display components render successfully on load', () => {
//     const {getByText} = render(<Dashboard />);
//
//     getByText(/unlocked/i);
//     getByText(/open/i);
//     getByText(/lock gate/i);
//     getByText(/close gate/i);
// });