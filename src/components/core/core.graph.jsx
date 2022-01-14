import CoreBubble from "components/core/core.bubble";
import React from "react";
import {calculatePositionX, calculatePositionY} from "components/utils/utils.utils";
import {CoordLabel, Graph, Grid} from "components/core/core.graph.styles";

const XYPlot = ({x, y, parsedGraphData}) => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    return (
        <>
            {parsedGraphData &&
                <>
                    <Graph aria-labelledby="graph" role="img">
                        <Grid>
                            <line x1={width/2} x2={width/2} y1="0" y2={height}/>
                        </Grid>
                        <Grid>
                            <line x1="0" x2={width} y1={height/2} y2={height/2}/>
                        </Grid>

                        <CoordLabel x={width/2-75} y="20">{parsedGraphData?.[0]?.y.name}</CoordLabel>
                        <CoordLabel x="20" y={height/2+25}>{parsedGraphData?.[0]?.x.name}</CoordLabel>

                        <g>
                            {
                                parsedGraphData.map((pgd, key) => {
                                    return (
                                        <CoreBubble
                                            size={pgd.size}
                                            title={pgd.title}
                                            x={{
                                                coords: calculatePositionX(x.min, x.max, pgd.x.value, width),
                                                keyVal: pgd.x
                                            }}
                                            y={{
                                                coords: calculatePositionY(y.min, y.max, pgd.y.value, height),
                                                keyVal: pgd.y
                                            }}
                                            key={key}
                                        />
                                    );
                                })
                            }
                        </g>
                    </Graph>
                </>
            }
        </>
    );
};

export default XYPlot;