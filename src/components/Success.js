import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      Yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyyyyy! Tad sesdien gaidi mani darbā un dosimies uz akropoli uz Chi restorānu uz grauzēju vakariņām.
    </p>
    <p className="App-text-success">
      Šis ir visu labākais gads un nevaru sagaidīt ar tevi piedzīvot vēl miljons skaistu brīžu visas dzīves garumā.
    </p>
    <p className="App-text-success">
      Mīlu, graužu, rūpēšos!
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">04.01.2025</p>
  </div>
);

export default Success;
