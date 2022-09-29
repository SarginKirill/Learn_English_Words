export default function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-light "
      onClick={() => props.click()}
    >
      {props.text}
    </button>
  )
}
