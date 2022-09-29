export default function Input(props) {
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id={props.id}
        placeholder="word"
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.ph}</label>
    </div>
  )
}
