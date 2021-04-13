import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";


const dates = ["2019-10-01", "2008-10-03", "2011-10-10", "2001-02-01", "1923-01-01"]

const Question3 = (props) => {

    const [values, setValues] = useState([]);

    //Something like componentDidMount
    useEffect(() => {
        setValues(sortDateByDescending(dates));
    }, [])


    function isValidDate(value) {

        if (value != null) {
            value = new Date(value);
            if (Object.prototype.toString.call(value) === "[object Date]") {
                // it is a date
                if (isNaN(value.valueOf())) {  // value.valueOf() could also work
                    return false;
                } else {
                    return true
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    function sortDateByDescending(values = []) {

        values = Array.isArray(values) ? values : [];
        let newValues = values.filter(function (value) {
            return isValidDate(value)
        })

        return (newValues || []).sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b) - new Date(a);
        });
    }


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 3 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    Sort (descending) the following array:
              </div>
                <div className="headline text-overflow-break margin-y-xs ">
                    <span className='d-inline-block round-border background-black-opacity-50 white padding-sm' >
                        {`var x = [${(dates || []).map((date) => {
                            date = `"${date}"`;
                            return date;
                        })}]`}
                    </span>
                </div>

                <div className="thin-border round-border padding-md margin-top-md">
                    <div className="h6 font-weight-black margin-y-xs">
                        Answer :
              </div>
                    <Scrollbars autoHide autoHeight autoHeightMin={500}>
                        <div className="">
                            {
                                (values || []).map((value) => {
                                    return (
                                        <span className='d-inline-block margin-sm round-border background-black-opacity-50 white padding-sm text-align-center' style={{ minWidth: 50 }} >
                                            {value}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question3);
