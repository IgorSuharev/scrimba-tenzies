export default function RollButton(props) {
  return (
    <button
      className='w-28 h-9 rounded font-karla text-base bg-indigo-600 text-white
      shadow-lg hover:shadow-xl active:shadow-inner'
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
    >
      {props.value}
    </button>
  );
}
