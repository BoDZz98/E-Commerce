export function MyRadioButton(props) {
  return (
    <div className="flex gap-x-2">
      <input className="w-5 h-5 mt-1   checked:bg-red-100 " type="radio" id={props.id} name={props.name} />
      <label htmlFor={props.id}>{props.text}</label>
    </div>
  );
}
