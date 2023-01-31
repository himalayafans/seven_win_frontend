import { Button } from 'antd'
import React from 'react'
import useLogin from '../../query/account/useLogin'

type Props = {}

const Login = (props: Props) => {
  const aciton = useLogin()
  const handleClick = async () => {
    let response = await aciton.mutateAsync({Name: "abc", Password:"123"})
    console.log(response)
  }
  return (
    <div>
      {aciton.isError && <p>{aciton.error.message}</p>}
      <Button loading={aciton.isLoading} onClick={handleClick}>登录</Button>
    </div>
  )
}

export default Login