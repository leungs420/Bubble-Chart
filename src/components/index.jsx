import React from "react";
import CoreBubble from "components/core/core.bubble";

const LandingPage = () => {
    const size = 200;

    return (
        <div>
            <h1>Welcome to my application!</h1>
            <CoreBubble x={150} y={150} size={size} title={"test"} />
            <CoreBubble x={150} y={150} size={size} title={"test1233"} />
        </div>
    )
};

export default LandingPage;