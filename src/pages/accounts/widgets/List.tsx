import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { UseQueryResult } from 'react-query'
import IAccountDto from '../../../interfaces/IAccountDto'
import dayjs from "dayjs";

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
    if (data.role === 0) {
        return <Button type="primary">激活</Button>
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
        render: (value, r) => <ActButton data={r}></ActButton>
    }
];

type Props = {
    query: UseQueryResult<IAccountDto[], Error>
}

const List = (props: Props) => {
    if (props.query.data) {
        return (
            <Table rowKey={item => item.id} dataSource={props.query.data} columns={columns} />
        )
    } else {
        return <>无数据</>
    }
}

export default List