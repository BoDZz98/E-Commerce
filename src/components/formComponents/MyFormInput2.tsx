const MyFormInput2 = (props: any) => {
  return (
    <div className="flex flex-col h-20 gap-y-1 ">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        className={props.class}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      {props.hasError && (
        <p className="text-red-600 text-sm">{props.errorText}</p>
      )}
    </div>
  );
};

export default MyFormInput2;
