import { Button, message, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import IAccountDto from '../../../interfaces/IAccountDto'
import dayjs from "dayjs";
import { useActiveAccount } from '../../../query/account/useActiveAccount';
import { useAccountsContext } from '../core/accounts.context';

const formatRule = (role: number) => {
    if (role === 0) {
        return "未验证"
    } else if (role === 1) {
        return "已验证"
    } else if (role === 2) {
        return "管理员"
    } else {
        return ""
    }
}

interface IRoleProps {
    role: number
}
const Role = (props: IRoleProps) => {
    let t = formatRule(props.role)
    if (props.role === 0) {
        return <p style={{ color: "red" }}>{t}</p>
    } else {
        return <p>{t}</p>
    }
}

interface IActButtonProps {
    data: IAccountDto
}
const ActButton = ({ data }: IActButtonProps) => {
    const action = useActiveAccount()
    const { state, dispatch } = useAccountsContext()

    const handleClick = () => {
        action.mutate(data.id)
    }

    React.useEffect(() => {
        if (action.data) {
            dispatch({ type: "update", payload: action.data })
        }
    }, [action.isSuccess, action.data])

    React.useEffect(() => {
        if (action.error) {
            message.error(action.error?.message)
        }
    }, [action.error])

    if (data.role === 0) {
        return <Button type="primary" onClick={handleClick} loading={action.isLoading}>激活</Button>
    } else {
        return <p>已激活</p>
    }
}

const columns: ColumnsType<IAccountDto> = [
    {
        title: '账号',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        render: (value, r) => <Role role={value}></Role>
    },
    {
        title: '注册时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (value, r) => dayjs(r.createdAt).format("YYYY-MM-DD HH:mm:ss")
    },
    {
        title: '动作',
        key: 'action',
        width: "200px",
        render: (value, r) => <ActButton data={r}></ActButton>
    }
];

type Props = {
}

const List = (props: Props) => {
    const { state, dispatch } = useAccountsContext()
    return (
        <Table rowKey={item => item.id} dataSource={state.data} columns={columns} locale={{ emptyText: "暂无数据" }} />
    )
}

export default List