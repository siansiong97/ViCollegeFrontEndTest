import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";


const TEST_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23, 25, 26,
    28, 29, 30, 31, 32, 33, 35, 36, 38, 40, 41, 43, 45,
    45, 46, 47, 48, 49, 50];

const ARRAY_RANGE = 50;

const Question6 = (props) => {

    const [values, setValues] = useState([]);

    //Something like componentDidMount
    useEffect(() => {
        setValues(getMissingValues(TEST_ARRAY, ARRAY_RANGE));
    }, [])

    function getMissingValues(arrValues = [], range = ARRAY_RANGE) { 
        arrValues = Array.isArray(arrValues) ? arrValues : [];
        range = isNaN(parseInt(range)) ? ARRAY_RANGE : parseInt(range);
        let checkArray = [...Array(range)].map((item, index) => { return (index + 1) });
        return checkArray.filter((value) => !arrValues.some((arrValue) => arrValue == value ))
      
    }

    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 6 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    All numbers between 1 and 50 must appear at least once. Find the missing
                    number(s) in the following array.
              </div>
                <div className="headline text-overflow-break margin-y-xs ">
                    <span className='d-inline-block round-border background-black-opacity-50 white padding-sm' >
                        {`var x = ${JSON.stringify(TEST_ARRAY)}`}
                    </span>
                </div>
            </div>

            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="">
                        {
                            (values || []).map((value, index) => {
                                return (
                                    <span key={`value-${index}`} className='d-inline-block margin-sm round-border background-black-opacity-50 white padding-sm text-align-center' style={{ minWidth: 50 }} >
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


export default withRouter(Question6);
