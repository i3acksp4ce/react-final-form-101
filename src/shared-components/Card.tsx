export interface CardDetail {
  title: string
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  detail: CardDetail
}

export const Card = ({ children, detail, ...rest }: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...rest}>
      <div className="card-body">
        <h2 className="card-title">{detail.title}</h2>
        {children}
      </div>
    </div>
  )
}
