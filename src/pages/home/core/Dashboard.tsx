import { Layout } from 'antd'
import React from 'react'
import Brand from './Brand'
import Content from './Content'
import Header from './Header'
import Nav from './Nav'
import Sider from './Sider'
import Tools from './Tools'
import TriggerButton from './TriggerButton'

type Props = {}

const Dashboard = (props: Props) => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
        <React.Fragment>
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
                        <p>long content</p>
                        {
                            Array.from({ length: 100 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </Content>
                    <Layout.Footer style={{ textAlign: "center" }}>喜马拉雅货币志愿者社区（喜粉团/喜学院）</Layout.Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}

export default Dashboard