/**
 * ref: https://stackoverflow.com/questions/58798614/reactjs-how-to-use-multiple-children-in-a-component
 *
 * slot pattern like vue
 */

const Sample = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="panel">{children}</div>
)

Sample.Title = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="title">{props.children}</div>
)
Sample.Body = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="body">{props.children}</div>
)

export default Sample
