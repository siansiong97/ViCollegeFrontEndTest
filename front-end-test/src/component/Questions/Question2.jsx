import { Button } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";

const INIT_RANGE = 100;

const Question2 = (props) => {

    const [values, setValues] = useState([]);

    //Something like componentDidMount
    useEffect(() => {
        //Assign 100 Random Value
        setValues(assignRandomArrayValue(INIT_RANGE));
    }, [])


    function assignRandomArrayValue(range = INIT_RANGE) {
        range = isNaN(parseInt(range)) ? INIT_RANGE : parseInt(range);
        return [...Array(range)].map(() => { return Math.floor(Math.random() * 100) });

    }

    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 2 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    Initialize an array with 100 random integers.
              </div>
            </div>

            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="flex-justify-end margin-bottom-md">
                        <Button onClick={(e) => { setValues(assignRandomArrayValue(INIT_RANGE)) }}>Reinitialize</Button>
                    </div>
                    <div className="">
                        {
                            (values || []).map((value) => {
                                return (
                                    <span className='d-inline-block margin-sm round-border background-black-opacity-50 white padding-sm text-align-center' style={{ minWidth : 50 }} >
                                        {value}
                                    </span>
                                )
                            })
                        }
                    </div>
                </Scrollbars>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question2);
