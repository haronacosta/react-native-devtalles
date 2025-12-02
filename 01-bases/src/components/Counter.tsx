import { useCounter } from "../hooks/useCounter";

function Counter() {
  const { count, incrementBy } = useCounter();

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>

      <div className="flex mt-3 ">
        <button
          type="button"
          className="bg-amber-300 text-gray-700 w-9 rounded-sm cursor-pointer p-2"
          onClick={() => incrementBy(-1)}
        >
          -1
        </button>
        <button
          type="button"
          className="bg-amber-400 text-gray-700 w-9 mx-2 rounded-sm cursor-pointer p-2"
          onClick={() => incrementBy(1)}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default Counter;
