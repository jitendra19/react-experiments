import React from 'react';
import './style.css';

const data = ['patna', 'Punjab', 'Pune', 'delhi', 'bangal'];

export default function App() {
  let refValue = React.createRef();
  const [searchData, setSearchData] = React.useState([]);
  const onChangeText = (e) => {
    console.log(e.target.value);
    const data1 = data.filter((a) => {
      // REGex
      if(e.target.value === '') return;      
      return a.indexOf(e.target.value) === 0;
      
    });
    console.log(data1);
    setSearchData(data1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" onChange={(e) => onChangeText(e)} refs={refValue} />
      {searchData &&
        searchData.length > 0 &&
        searchData.map((a) => {
          return <div>{a}</div>;
        })}
    </div>
  );
}
