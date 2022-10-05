import { useState } from "react";
import jargonServices from "../services/JargonServices";

export default function AddJargon() {
  const [jargonData, setJargonData] = useState({ jargon: "", definition: "" });

  const buildJaron = () => {
    setJargonData((prevState) => {
      let newJarData = { ...prevState };
      newJarData.jargon = document.getElementById("jargon").nodeValue();
      newJarData.definition = document.getElementById("definition").nodeValue();
      return newJarData;
    }),
      submitJargon();
  };

  const submitJargon = () => {
    jargonServices
      .createNewJargon(jargonData)
      .then(createNewJargonSuccess)
      .catch(createNewJargonErr);
  };

  const createNewJargonSuccess = (res) => {
    console.log(res);
  };

  const createNewJargonErr = (err) => console.error(err);

  return (
    <form>
      <div className="m-2">
        <input type="text" id="jargon" />
      </div>
      <div className="m-2">
        <textarea type="text" id="definition" />
      </div>
      <button type="button" onClick={buildJaron}>
        {" "}
        Submit Jargon
      </button>
    </form>
  );
}
