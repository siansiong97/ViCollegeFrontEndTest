import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";



const MainLayout = (props) => {

    const [tabKey, setTabKey] = useState(0)

    return (
        <React.Fragment>
            <Layout>
                <Header className=" background-black padding-md">
                    <div className="flex-justify-space-between flex-items-align-center">
                        <span className='d-inline-block h6' >
                            <Link href="/" className="white">
                                Vi College Test
                            </Link>
                        </span>
                    </div>
                </Header>
                <Content>
                    <div style={{ minHeight : '95vh' }}>
                    {
                        props.children
                    }
                    </div>
                </Content>
            </Layout>

        </React.Fragment>
    );
}


export default withRouter(MainLayout);
