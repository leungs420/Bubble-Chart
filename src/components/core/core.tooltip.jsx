import {Tooltip} from "components/core/core.bubble.styles";
import React from "react";

const ToolTip = ({textValues}) => {
    return (
        <Tooltip>
            <ul>
                {textValues.map((value, key) => {
                    return <li key={key}>{value.name}: {value.value}</li>
                })}
            </ul>
        </Tooltip>
    )
};

export default ToolTip;