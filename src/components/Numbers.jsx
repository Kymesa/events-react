function Numbers(props) {
  // eslint-disable-next-line react/prop-types
  const leghtNotes = props.notes;
  return (
    <>
      <div className="flex justify-center gap-20 text-2xl text-black">
        <div
          className={`${
            leghtNotes >= 1
              ? "active__btn rounded-full p-2 px-3"
              : "rounded-full p-2 px-3 bg-gray-300"
          }`}
        >
          1
        </div>
        <div
          className={`${
            leghtNotes >= 2
              ? "active__btn rounded-full p-2 px-3"
              : "rounded-full p-2 px-3 bg-gray-300"
          }`}
        >
          2
        </div>
        <div
          className={`${
            leghtNotes >= 3
              ? "active__btn rounded-full p-2 px-3"
              : "rounded-full p-2 px-3 bg-gray-300"
          }`}
        >
          3
        </div>
      </div>
    </>
  );
}

export default Numbers;
