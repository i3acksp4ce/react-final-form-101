import React, { forwardRef, memo, ReactElement } from 'react'
import { RenderCount } from './RenderCount'

/**
 * combind with forwardRef
 * ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757
 */

interface IChildrenNode {
  labelNode: ReactElement
  errorMessageNode: ReactElement
}

function getChildrenElement(
  children: React.ReactElement | React.ReactElement[]
) {
  const node: IChildrenNode = {
    labelNode: <>{null}</>,
    errorMessageNode: <>{null}</>,
  }

  const handleChildrenCase = (child: React.ReactElement) => {
    if (child.type === InputLabel) {
      node.labelNode = child
    }

    if (child.type === InputErrorMessage) {
      node.errorMessageNode = child
    }
  }

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (React.isValidElement(child)) {
        handleChildrenCase(child)
      }
    })
  } else if (React.isValidElement(children)) {
    handleChildrenCase(children)
  }

  return { ...node }
}

export interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ children, ...props }, ref) => {
    const { labelNode, errorMessageNode } = getChildrenElement(
      children as React.ReactElement | React.ReactElement[]
    )

    return (
      <>
        <div className="form-control w-full max-w-xs relative">
          <RenderCount />
          {labelNode}
          <input
            ref={ref}
            type="text"
            placeholder="type here"
            className="input input-bordered w-full max-w-xs"
            {...props}
          />
          {errorMessageNode}
        </div>
      </>
    )
  }
)

export const InputLabel: React.FC<React.HTMLAttributes<HTMLLabelElement>> =
  memo(({ children }) => {
    const childrenMemo = React.useMemo(() => children, [children])
    return (
      <>
        <label className="label relative">
          <span className="label-text">{childrenMemo}</span>
        </label>
      </>
    )
  })

export const InputErrorMessage: React.FC<React.HTMLAttributes<HTMLElement>> =
  memo(({ children }) => {
    const childrenMemo = React.useMemo(() => children, [children])
    return (
      <>
        <label className="label relative">
          <span className="label-text-alt text-error">{childrenMemo}</span>
        </label>
      </>
    )
  })
