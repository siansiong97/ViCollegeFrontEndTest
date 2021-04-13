import { Table } from "antd";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";



const Question7 = (props) => {

    const columns = [
        {
            title: 'Angular',
            dataIndex: 'angular',
            key: 'angular',
            width : '50%',
        },
        {
            title: 'AngularJS',
            dataIndex: 'angularJs',
            key: 'angularJs',
            width : '50%',
        },
    ];

    const data = [
        {
            angular: 'TypeScript based. TypeScript that Angular uses is a superset of ES6, which has backward compatibility with ES5. ',
            angularJs: 'JavaScript based',
          },
          {
            angular: 'Uses a hierarchy of components.',
            angularJs: 'Uses terms of scope and controllers.',
          },
          {
            angular: 'Has standard Directives.',
            angularJs: 'Has a pack of Directives.',
          },
          {
            angular: 'Uses components that are directives with templates.',
            angularJs: 'Has a model-view-controller (MVC) that acts as the central component as it manages data, logic, rules, and expresses how the applications behave.',
          },
          {
            angular: 'Supports mobile',
            angularJs: 'Does not provide mobile support',
          },
          {
            angular: 'The framework upgraded to a better structure, which provides improved performance and speed.',
            angularJs: 'The two-way binding feature ultimately reduces the efforts and time of construction.',
          },
          {
            angular: 'It uses the Command Line Interface (CLI) to reduce the time when  creating applications.',
            angularJs: 'The framework relies on third-party tools such as IDE and WebStorm.',
          },
    ]


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 7 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    Explain the differences between Angular and AngularJS.
              </div>
            </div>
            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="flex-justify-start flex-items-align-center margin-y-sm">
                        Difference Between Angular & AngularJS :
                    </div>
                    <div className="margin-y-sm">
                    <Table columns={columns} dataSource={data} />
                    </div>
                </Scrollbars>
                <div className="h6 font-weight-black margin-y-xs">
                    Refer On : <a target="_blank" href={`https://stackify.com/angular-vs-angularjs-differences-between-angular-and-angularjs/#wpautbox_latest-post`}><span className="font-weight-thin">https://stackify.com/angular-vs-angularjs-differences-between-angular-and-angularjs/#wpautbox_latest-post</span></a>
              </div>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question7);
