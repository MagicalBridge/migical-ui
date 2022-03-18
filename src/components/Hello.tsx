import React from "react"

interface IHelloProps {
  message?: string
}

const Hello: React.FunctionComponent<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>
}

// 默认属性
Hello.defaultProps = {
  message:"hello world"
}

export default Hello