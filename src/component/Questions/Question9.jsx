import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";



const Question9 = (props) => {


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 9 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    What reasons require Refactoring of codes?
              </div>
            </div>
            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="margin-y-sm text-overflow-break">
                    The basic purpose of code refactoring is to make the code more efficient and maintainable. This is key in reducing technical cost since it’s much better to clean up the code now than pay for costly errors later. Code refactoring, which improves readability, makes the QA and debugging process go much more smoothly. And while it doesn’t remove bugs, it can certainly help prevent them in the future.
                    </div>
                </Scrollbars>
                <div className="h6 font-weight-black margin-y-xs">
                    Refer On : <a target="_blank" href={`https://www.altexsoft.com/blog/engineering/code-refactoring-best-practices-when-and-when-not-to-do-it/#:~:text=The%20basic%20purpose%20of%20code,process%20go%20much%20more%20smoothly.`}><span className="font-weight-thin">https://www.altexsoft.com/blog/engineering/code-refactoring-best-practices-when-and-when-not-to-do-it/#:~:text=The%20basic%20purpose%20of%20code,process%20go%20much%20more%20smoothly.</span></a>
              </div>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question9);
