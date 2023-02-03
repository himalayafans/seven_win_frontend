import { Layout } from 'antd'
import React from 'react'
import Brand from './Brand'
import LayoutContent from './LayoutContent'
import LayoutHeader from './LayoutHeader'
import Sider from './Sider'
import SiderNav from './SiderNav'
import TriggerButton from './TriggerButton'

type Props = {}

const Dashboard = (props: Props) => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
        <React.Fragment>
            <Layout style={{ minHeight: "100vh" }} hasSider>
                <Sider collapsed={collapsed}>
                    <Brand collapsed={collapsed}></Brand>
                    <SiderNav></SiderNav>
                </Sider>
                <Layout>
                    <LayoutHeader>
                        <TriggerButton collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}></TriggerButton>
                    </LayoutHeader>
                    <LayoutContent>
                        <p>long content</p>
                        {
                            // indicates very long content
                            Array.from({ length: 100 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </LayoutContent>
                    <Layout.Footer style={{ textAlign: "center" }}>喜马拉雅货币志愿者社区（喜粉团/喜学院）</Layout.Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}

export default Dashboard