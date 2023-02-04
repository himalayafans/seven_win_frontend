import { Alert, Empty, Spin } from 'antd'
import React from 'react'
import useGetAccounts from '../../query/account/useGetAccounts'

type Props = {}

const Accounts = (props: Props) => {
    const query = useGetAccounts()
    if (query.isLoading) {
        return <Spin></Spin>
    }
    if (query.isError) {
        return <Alert message={query.error.message} type="error" />
    }
    if(query.data == null || query.data.length == 0){
        return <Empty />
    }
    return <p>{query.data.length}</p>
}

export default Accounts