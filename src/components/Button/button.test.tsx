import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './button'
const defaultProps = {
  onClick: jest.fn()
}

describe('test button component', () => {
  it('应该渲染出来一个默认的button, 支持点击事件', () => {
    render(<Button {...defaultProps}>nice</Button>)
    const element = screen.getByText('nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})