
import delIcon from './images/delete.png';
import React, {useState} from 'react';
import './App.css';


class listEntry
{
  constructor(entryText)
  {
    this.entryText=entryText;
    this.completed=false;
    
    this.completeToggle=this.completeToggle.bind(this);
  }

  completeToggle()
  {
    this.completed = !this.completed;
  }
}





function App()
{
  const [listEntries, UpdateEntries] = useState([new listEntry("to do #1"),new listEntry("to do #2")]);

  const [inputText, SetInputText] = useState([""]);
  
  function changeStyle(index)
  {
    let lEntries = [...listEntries]
    lEntries[index].completeToggle();
    UpdateEntries(lEntries);
  }

  function removeEntry(index)
  {
    let lEntries = [...listEntries]
    lEntries.splice(index,1);
    UpdateEntries(lEntries);
  }

  function changeInputText(event)
  {
    SetInputText(event.target.value);
  }

  function addEntry(t)
  {
    let lEntries = [...listEntries]

    let newEntry = new listEntry(t);
    lEntries.push(newEntry);

    UpdateEntries(lEntries);

    SetInputText("");
  }

  return (
    <>

      <div className="App">
        <div className="inputBoxContainer">
          <input type="text" placeholder="add an item to your to do list here" className="inputBox" value={inputText} onChange={changeInputText}></input>
          <button className="inputBtn" onClick={() => addEntry(inputText)}>+</button>
        </div>

        <div className="listContainer">
          {listEntries.map((entry, index) => {
            return(
              <div className = {entry.completed ? "listEntryComplete" : "listEntry"} key={index}>
                <div className = "entryText"> {entry.entryText}</div>
                <div className = "buttons">
                  <button className = {entry.completed ? "completeBtnFalse" : "completeBtnTrue"} onClick={() => changeStyle(index)}>✓</button> 
                  <button className = "deleteBtn" onClick={() => removeEntry(index)}><img src={delIcon} alt="delete icon"></img></button>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>

    </>
  );
};
export default App;