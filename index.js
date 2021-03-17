class App extends React.Component {
  // console.log(array_definitions);
  render() {
    return (
      <dl>
        {definitions.map((element) => {
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
