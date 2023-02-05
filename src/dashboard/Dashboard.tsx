import { Layout, Spin } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardContext } from './core/dashboard.context'
import Brand from './widgets/Brand'
import Content from './widgets/Content'
import Header from './widgets/Header'
import Nav from './widgets/Nav'
import Sider from './widgets/Sider'
import Tools from './widgets/Tools'
import TriggerButton from './widgets/TriggerButton'

type Props = {
}

const Dashboard = (props: Props) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    return (
        <React.Fragment>

            <DashboardContext.Provider value={{ loading, setLoading }}>
                <Layout style={{ minHeight: "100vh" }} hasSider>
                    <Sider collapsed={collapsed}>
                        <Brand collapsed={collapsed}></Brand>
                        <Nav></Nav>
                    </Sider>

                    <Layout>
                        <Header>
                            <TriggerButton collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}></TriggerButton>
                            <Tools></Tools>
                        </Header>
                        <Content>
                            <Spin spinning={loading}>
                                <Outlet />
                            </Spin>
                        </Content>
                        <Layout.Footer style={{ textAlign: "center" }}>喜马拉雅货币志愿者社区（喜粉团/喜学院）</Layout.Footer>
                    </Layout>
                </Layout>
            </DashboardContext.Provider>

        </React.Fragment>
    )
}

export default Dashboard