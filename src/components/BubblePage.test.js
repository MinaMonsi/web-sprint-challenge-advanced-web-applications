import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import BubblePage from './BubblePage'
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage/>);
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    render(<BubblePage />);
    await waitFor(() => {
        const title = screen.getByText(/bubbles/i);
    })
    //screen.debug();
});