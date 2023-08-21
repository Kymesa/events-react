import "./App.css";
import Contens from "./components/Contens";
import Numbers from "./components/Numbers";
import { useState } from "react";
import Happy from "./components/Happy";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState(1);
  return (
    <>
      <div className="app__events">
        <Numbers notes={notes} />
        <Contens notes={notes} />
        <div className="flex justify-around gap-24 text-ms text-black mt-28">
          <div className="rounded-full p-2 px-3">
            <button
              disabled={notes < 2}
              onClick={() => setNotes(notes - 1)}
              className="bg-purple-300"
            >
              Previews
            </button>
          </div>
          <div className="rounded-full p-2 px-3">
            <button
              disabled={notes > 2}
              onClick={() => setNotes(notes + 1)}
              className="bg-purple-300"
            >
              Next
            </button>
          </div>
        </div>
        <strong>
          <div className="mt-10 text-3xl">{notes >= 3 ? <Happy /> : ""}</div>
        </strong>
      </div>
    </>
  );
}

export default App;
