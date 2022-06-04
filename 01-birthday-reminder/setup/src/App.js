import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const removeReminder = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeReminder={removeReminder} />
        <button onClick={() => setPeople([])}>clear all</button>
        <button onClick={() => setPeople(data)}>undo all</button>
      </section>
    </main>
  );
}

export default App;
