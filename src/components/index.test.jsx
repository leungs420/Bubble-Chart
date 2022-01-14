import rerender from "test/rerender";
import {screen, waitFor} from "@testing-library/react";
import LandingPage from ".";
import mockGraphData from "test/mockGraphData";

it("renders the correct title and number of circles", async () => {
    rerender(<LandingPage />);

    await waitFor(() => {
       expect(screen.getByText("Headcount")).toBeInTheDocument();
    });
    expect(screen.getByText("Compratio")).toBeInTheDocument();
    expect(screen.getAllByTestId("circle")).toHaveLength(mockGraphData.length);
});