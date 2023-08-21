import { messajes } from "../notes";
function Contens(props) {
  // eslint-disable-next-line react/prop-types
  const notes = props.notes;
  return (
    <>
      <strong>
        <div className="mt-24 text-center text-lg">
          Note: {messajes[notes - 1]}
        </div>
      </strong>
    </>
  );
}

export default Contens;
