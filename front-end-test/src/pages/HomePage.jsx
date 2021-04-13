import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import MainLayout from "../component/MainLayout";
import Question1 from "../component/Questions/Question1";
import Question10 from "../component/Questions/Question10";
import Question11 from "../component/Questions/Question11";
import Question2 from "../component/Questions/Question2";
import Question3 from "../component/Questions/Question3";
import Question4 from "../component/Questions/Question4";
import Question5 from "../component/Questions/Question5";
import Question6 from "../component/Questions/Question6";
import Question7 from "../component/Questions/Question7";
import Question8 from "../component/Questions/Question8";
import Question9 from "../component/Questions/Question9";



const HomePage = (props) => {

    const [tabKey, setTabKey] = useState('0')

    const tabs = [
        {
            render: () => <Question1 />,
        },
        {
            render: () => <Question2 />,
        },
        {
            render: () => <Question3 />,
        },
        {
            render: () => <Question4 />,
        },
        {
            render: () => <Question5 />,
        },
        {
            render: () => <Question6 />,
        },
        {
            render: () => <Question7 />,
        },
        {
            render: () => <Question8 />,
        },
        {
            render: () => <Question9 />,
        },
        {
            render: () => <Question10 />,
        },
        {
            render: () => <Question11 />,
        },
    ]

    return (
        <React.Fragment>
            <MainLayout>
                <div className="section-page">
                    <Tabs activeKey={tabKey} onChange={(activeKey) => {
                        setTabKey(activeKey)
                    }}>
                        {
                            (tabs || []).map((tab, index) => {
                                return (
                                    <Tabs.TabPane key={`${index}`} tab={`Question ${index + 1}`} >
                                        {
                                            tab.render ?
                                                <div className="width-100">
                                                    {
                                                        tab.render()
                                                    }
                                                </div>
                                                :
                                                null
                                        }
                                    </Tabs.TabPane>
                                )
                            })
                        }
                    </Tabs>
                </div>
            </MainLayout>
        </React.Fragment>
    );
}


export default withRouter(HomePage);
