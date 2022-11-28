
type DataProps = {
  className? :string,
  child? : string
}


export default function Buttons(props: DataProps) {
  const addClass = props.className ? ` ${props.className}` : "";
  return (
    <button className={`py-3 px-10 font-semibold text-lg text-black rounded-full inline-block${addClass}`}>{props.child}</button>
  )
}
