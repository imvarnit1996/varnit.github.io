// const firebaseConfig = {
//   apiKey: "AIzaSyBe0JkFNjloLkslJPwGGQ3pIEgl1AC30eo",
//   authDomain: "varnitrohilla-ml-ed193.firebaseapp.com",
//   databaseURL: "https://varnitrohilla-ml-ed193-default-rtdb.firebaseio.com",
//   projectId: "varnitrohilla-ml-ed193",
//   storageBucket: "varnitrohilla-ml-ed193.appspot.com",
//   messagingSenderId: "465417043849",
//   appId: "1:465417043849:web:f6d9022ffe16cb648b2b58",
//   measurementId: "G-Y8M92LM2KK"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const data = require("./definitions.js");

class App extends React.Component {
  // console.log(array_definitions);
  render() {
    return (
      <dl>
        {data.map((element) => {
          return (
            <>
              <dt>
                <a className="source" target="_blank" href={element.source}>
                  {element.title}{" "}
                  <i className="fas fa-external-link-alt fa-1x"></i>
                </a>
              </dt>
              <dd>{element.definition}</dd>
            </>
          );
        })}
      </dl>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("node"));
