export default function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-light mx-2 "
      onClick={() => props.click(props.text)}
    >
      {props.text}
    </button>
  )
}
