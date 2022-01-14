import React, {useCallback, useEffect, useMemo, useState} from "react";
import {connect} from "react-redux";
import {getGraphData} from "redux/redux.actions";
import PropTypes from "prop-types";
import XYPlot from "components/core/core.graph";

const LandingPage = ({getGraphData, graphData}) => {
    const [parsedGraphData, setParsedData] = useState();
    const [xAxis, setXAxis] = useState();
    const [yAxis, setYAxis] = useState();

    const HEADERS = useMemo(() => {
        return {
            title: {
                key: "title",
            },
            size: {
                key: "salary",
                label: "Salary",
            },
            x: {
                key: "compratio",
                label: "Compratio",
            },
            y: {
                key: "headcount",
                label: "Headcount",
            }
        };
    }, []);

    useEffect(() => {
        if (!graphData) {
            getGraphData();
        }
    }, [getGraphData, graphData]);

    const parseGraphData = useCallback(
        (graphData) => {
            let minX = Number.MAX_SAFE_INTEGER;
            let maxX = -Number.MAX_SAFE_INTEGER;
            let minY = Number.MAX_SAFE_INTEGER;
            let maxY = -Number.MAX_SAFE_INTEGER;

            const updatedData = graphData.map(gData => {
                if (gData[HEADERS.x.key] <= minX) {
                    minX = gData[HEADERS.x.key];
                }
                if (gData[HEADERS.x.key] >= maxX) {
                    maxX = gData[HEADERS.x.key];
                }
                if (gData[HEADERS.y.key] <= minY) {
                    minY = gData[HEADERS.y.key];
                }
                if (gData[HEADERS.y.key] >= maxY) {
                    maxY = gData[HEADERS.y.key];
                }
                return {
                    title: gData[HEADERS.title.key],
                    size: {
                        name: HEADERS.size.label,
                        value: gData[HEADERS.size.key],
                    },
                    x: {
                        name: HEADERS.x.label,
                        value: gData[HEADERS.x.key],
                    },
                    y: {
                        name: HEADERS.y.label,
                        value: gData[HEADERS.y.key],
                    }
                };
            });

            setParsedData(updatedData);
            setXAxis({min: minX, max: maxX});
            setYAxis({min: minY, max: maxY});
        },
        [setParsedData, setXAxis, setYAxis, HEADERS]
    );

    useEffect(() => {
        if(graphData && !parsedGraphData) {
            parseGraphData(graphData);
        }
    }, [graphData, parsedGraphData, parseGraphData]);

    return (
        <div>
            <XYPlot x={xAxis} y={yAxis} parsedGraphData={parsedGraphData}/>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGraphData: () => dispatch(getGraphData()),
    };
};

const mapStateToProps = (state) => {
    return {
        graphData: state.graph.graphData,
    };
};

LandingPage.propType = {
    getGraphData: PropTypes.func.isRequired,
    graphData: PropTypes.arrayOf([
        PropTypes.objectOf([
            PropTypes.number, PropTypes.string
        ])
    ]),
};

export default connect(mapStateToProps, mapDispatchToProps) (LandingPage);