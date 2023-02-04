import { Alert, Button, Card, Col, Empty, Input, Row, Spin } from 'antd'
import React from 'react'
import { Breadcrumb } from 'antd';
import useGetAccounts from '../../query/account/useGetAccounts'
import ContentBox from '../../components/ContentBox';
import List from './widgets/List';

type Props = {}

const Accounts = (props: Props) => {
    const query = useGetAccounts()
    const onSearch = (value: string) => {
        console.log(value)
        query.refetch()
    }
    return (
        <React.Fragment>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>账号管理</Breadcrumb.Item>
            </Breadcrumb>
            <ContentBox>
                <Row>
                    <Col xl={8} lg={12} md={24}>
                        <Input.Search allowClear enterButton="搜索" size="large" onSearch={onSearch} loading={query.isLoading} />
                    </Col>
                </Row>
            </ContentBox>
            <ContentBox>
                <List query={query}></List>
            </ContentBox>
        </React.Fragment>
    )

    // if (query.isLoading) {
    //     return <Spin></Spin>
    // }
    // if (query.isError) {
    //     return <Alert message={query.error.message} type="error" />
    // }
    // if(query.data == null || query.data.length == 0){
    //     return <Empty />
    // }
    // return <p>{query.data.length}</p>
}

export default Accounts