import {cleanup, render, screen, waitFor} from "@testing-library/react";
import XYPlot from "components/core/core.graph";

const MOCKED_GRAPH_PROPS = {
    x: {
        min: 60,
        max: 100,
    },
    y: {
        max: 300,
        min: 20,
    },
    parsedGraphData: [
        {
            size: {name: 'Salary', value: 180},
            title: "HR",
            x: {name: 'Compratio', value: 80},
            y: {name: 'Headcount', value: 100},
        },
        {
            size: {name: 'Salary', value: 190},
            title: "Marketing",
            x: {name: 'Compratio', value: 85},
            y: {name: 'Headcount', value: 80},
        }
    ]
};

beforeEach(() => {
    cleanup();
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
        <XYPlot
            x={MOCKED_GRAPH_PROPS.x}
            y={MOCKED_GRAPH_PROPS.y}
            parsedGraphData={MOCKED_GRAPH_PROPS.parsedGraphData}
        />
    );
})

it("renders the correct title and number of circles", async () => {
    await waitFor(() => {
       expect(screen.getByText("Headcount")).toBeInTheDocument();
    });
    expect(screen.getByText("Compratio")).toBeInTheDocument();
    expect(screen.getAllByTestId("circle")).toHaveLength(MOCKED_GRAPH_PROPS.parsedGraphData.length);
});

it("renders the correct coordinates and title for the circles", async () => {
    await waitFor(() => {
       expect(screen.getAllByTestId("circle")).toHaveLength(MOCKED_GRAPH_PROPS.parsedGraphData.length);
    });

    MOCKED_GRAPH_PROPS.parsedGraphData.forEach((pgd, index) => {
        expect(screen.getAllByTestId("circle")[index])
            .toHaveAttribute("r", String(pgd.size.value/5));
        expect(screen.getByText(pgd.title)).toBeInTheDocument();
    });
});