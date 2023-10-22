import classNames from 'classnames';

export default function Die(props) {
  return (
    <button
      className={classNames(
        'w-9 h-9 rounded shadow-md hover:shadow-lg active:shadow-inner bg-white font-karla text-xl text-slate-950', {
          ['bg-sky-300']: props.frozen,
          ['bg-yellow-400']: props.success
        }
      )}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
    >
      {props.value}
    </button>
  );
}