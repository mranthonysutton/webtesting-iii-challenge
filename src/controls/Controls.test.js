// Test away
import React from "react"
import {render} from "@testing-library/react";
import Controls from "./Controls";

test('Controls renders successfully', () => {
    render(<Controls/>)
})

test('Close Gate and Lock Gate on screen', () => {
    const controls = render(<Controls/>)

    controls.getByText(/close gate/i);
    controls.getByText(/lock gate/i);
})
