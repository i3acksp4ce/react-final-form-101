interface WhenProps extends React.PropsWithChildren {
  is: boolean
}

export const When: React.FC<WhenProps> = ({ children, is }) => {
  return <>{is ? children : null}</>
}
