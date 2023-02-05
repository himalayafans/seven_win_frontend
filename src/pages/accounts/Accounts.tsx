import { Col, Input, message, Row, Spin } from 'antd'
import React from 'react'
import { Breadcrumb } from 'antd';
import ContentBox from '../../components/ContentBox';
import { useSearchAccounts } from '../../query/account/useSearchAccounts';
import { AccountsReducer, getInitState } from './core/account.store';
import { AccountsContext } from './core/accounts.context';
import List from './widgets/List';

type Props = {}

const Accounts = (props: Props) => {
    const [value, setValue] = React.useState("")
    const query = useSearchAccounts(value)
    const [state, dispatch] = React.useReducer(AccountsReducer, getInitState())

    const onSearch = (inputValue: string) => {
        setValue(inputValue)
    }

    React.useEffect(() => {
        dispatch({ type: "full", payload: query.data ? query.data : [] })
    }, [query.data])

    React.useEffect(() => {
        if (query.isError && query.error) {
            message.error(query.error.message)
        }
    }, [query.error, query.isError])

    return (
        <React.Fragment>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>账号管理</Breadcrumb.Item>
            </Breadcrumb>
            <AccountsContext.Provider value={{ dispatch, state }}>
                <ContentBox>
                    <Row>
                        <Col xl={8} lg={12} md={24}>
                            <Input.Search allowClear enterButton="搜索" size="large" loading={!query.isLoading && query.isFetching} onSearch={onSearch} />
                        </Col>
                    </Row>
                </ContentBox>
                <Spin spinning={query.isLoading}>
                    <ContentBox>
                        <List></List>
                    </ContentBox>
                </Spin>
            </AccountsContext.Provider>
        </React.Fragment>
    )
}

export default Accounts