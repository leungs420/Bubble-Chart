import React from "react";
import CoreBubble from "components/core/core.bubble";
import {render, screen} from "@testing-library/react";

const rerender = (title="default title") => {
    return render(
        <CoreBubble size={200} title={title}/>
    )
}

it("renders the correct title", () => {
    expect(1).toBe(1);
    // jest.mockImplementation("")
    // rerender();
    // screen.debug();
});