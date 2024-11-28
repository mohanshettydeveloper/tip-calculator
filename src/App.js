import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  // here tip is an example of derived state
  const tip = (bill * ((myPercentage + friendPercentage) / 2)) / 100;

  function handleReset() {
    setBill("");
    setMyPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={myPercentage} onSelect={setMyPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onSelect={setFriendPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="">How much was the label?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(event) => onSelect(Number(event.target.value))}
      >
        <option value="0">Dissatisfied (0%</option>
        <option value="10">It was okay (10%</option>
        <option value="15">It was good (15%</option>
        <option value="20">Absolutely amazing (20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill}+${tip})
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
