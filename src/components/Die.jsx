export default function Die(props) {
  let bgColor = props.success ? 'bg-yellow-400' :
                props.frozen ? 'bg-sky-300' : 'bg-white';

  return (
    <button
      className={`w-9 h-9 rounded shadow-md hover:shadow-lg active:shadow-inner font-karla text-lg 
      text-slate-950 ${bgColor}`}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
    >
      {props.value}
    </button>
  );
}