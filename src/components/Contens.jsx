import { messajes } from "../notes";
// eslint-disable-next-line react/prop-types
function Contens({ notes }) {
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
