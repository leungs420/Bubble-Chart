import React from "react";
import CoreBubble from "components/core/core.bubble";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";

const BUBBLE_DATA = {
    title: "HR",
    size: {
        name: "Salary",
        value: 180,
    },
    x: {
        coords: 173.73033707865167,
        keyVal: {
            name: "Compratio",
            value: 80
        },
    },
    y: {
        coords: 585.625,
        keyVal: {
            name: "Headcount",
            value: 100,
        },
    },
};

const rerender = ({size, title, x, y}) => {
    cleanup();
    return render(
        <CoreBubble size={size} title={title} x={x} y={y}/>
    );
};

// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => rerender(BUBBLE_DATA));

it("renders the correct title", async () => {
    expect(screen.getByText(BUBBLE_DATA.title)).toBeInTheDocument();
});

it("renders the circle object and display the title on hover", async () => {
    const hoveredTitle = "Title: " + BUBBLE_DATA.title;
    const hoveredSize = BUBBLE_DATA.size.name + ": " + BUBBLE_DATA.size.value;
    const hoveredX = BUBBLE_DATA.x.keyVal.name + ": " + BUBBLE_DATA.x.keyVal.value;
    const hoveredY = BUBBLE_DATA.y.keyVal.name + ": " + BUBBLE_DATA.y.keyVal.value;

    fireEvent.mouseOver(screen.getByText(BUBBLE_DATA.title));

    let hoveredTitleComponent = await screen.findByTitle(hoveredTitle, {exact: false});
    expect(hoveredTitleComponent).toBeInTheDocument();
    expect(screen.getByTitle(hoveredSize, {exact: false})).toBeInTheDocument();
    expect(screen.getByTitle(hoveredX, {exact: false})).toBeInTheDocument();
    expect(screen.getByTitle(hoveredY, {exact: false})).toBeInTheDocument();
});

it("renders the circle with the right props", () => {
    expect(screen.getByTestId("circle")).toHaveAttribute("cx", String(BUBBLE_DATA.x.coords));
    expect(screen.getByTestId("circle")).toHaveAttribute("cy", String(BUBBLE_DATA.y.coords));
    expect(screen.getByTestId("circle")).toHaveAttribute("r", String(BUBBLE_DATA.size.value/5));
});