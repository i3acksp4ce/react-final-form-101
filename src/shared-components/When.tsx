interface WhenProps extends React.PropsWithChildren {
  is?: boolean
  has?: string | number
}

export const When: React.FC<WhenProps> = ({ children, is, has }) => {
  if (is || has) return <>{children}</>

  return <>{null}</>
}
