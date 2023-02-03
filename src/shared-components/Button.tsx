/**
 * button type
 * https://stackoverflow.com/questions/61374168/property-type-does-not-exist-on-button
 */

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <button className={`btn ${className}`} type="button" {...props}>
        {children}
      </button>
    </>
  )
}
