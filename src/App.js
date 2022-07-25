import { Widget } from "@typeform/embed-react";
import data from './content/testing1.json'
console.log(data.testing1)

function App() {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <h1>Lovoro</h1>
      <Widget id="DZ4cpBuy" style={{height: 600, width: '100%'}}/>
      <div>
        <h1>ALL DATA UNDER IS FROM NETLIFY CMS</h1>
        {data.testing1.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.label}</p>
              <p>{item.date}</p>
              <p>{item.title}</p>
              <img src={item.thumbnail} />
              <p>{item.rating}</p>
              <p>{item.body}</p>
            </div>
          )
        })}
        {/* <p>{data.testing1[0].label}</p>
        <p>{data.testing1[0].date}</p>
        <p>{data.testing1[0].title}</p>
        <img src={data.testing1[0].thumbnail} />
        <p>{data.testing1[0].rating}</p>
        <p>{data.testing1[0].body}</p> */}
      </div>
    </div>
  );
}

export default App;
