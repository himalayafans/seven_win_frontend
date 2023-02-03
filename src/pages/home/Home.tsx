import { Layout } from 'antd';
import React from 'react'
import Dashboard from './core/Dashboard';
const { Header, Footer, Sider, Content } = Layout;
type Props = {}

const Home = (props: Props) => {
    return (
        <React.Fragment>
            <Layout >
                <Sider style={{ backgroundColor: 'grey', position: "sticky", top: 0 }}>
                    <div style={{ position: "sticky", top: 0 }}>Sider</div>
                </Sider>
                <Layout style={{ backgroundColor: 'lightblue' }}>
                    <Header style={{ backgroundColor: 'green', position: "sticky", top: 0 }}>
                        Sample Header
                    </Header>
                    <Content style={{ backgroundColor: 'yellow' }}>
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
                    </Content>
                    <Footer style={{ backgroundColor: 'green' }}>
                        Sample Footer
                    </Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}

export default Home