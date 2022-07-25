import { Widget } from "@typeform/embed-react";
import data from './content/testing1.json'
console.log(data.testing1[0])

function App() {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <h1>Lovoro</h1>
      <Widget id="DZ4cpBuy" style={{height: 600, width: '100%'}}/>
      <div>
        <h1>ALL DATA UNDER IS FROM NETLIFY CMS</h1>
        <p>{data.testing1[0].label}</p>
        <p>{data.testing1[0].date}</p>
        <p>{data.testing1[0].title}</p>
        <img src={data.testing1[0].thumbnail} />
        <p>{data.testing1[0].rating}</p>
        <p>{data.testing1[0].body}</p>
      </div>
    </div>
  );
}

export default App;
