class App extends React.Component {
  // console.log(array_definitions);
  render() {
    return (
      <>
        <section>
          <h1>
            Varnit Rohilla
            <br />
            Software Developer
          </h1>
        </section>
        <section className="social-media">
          {info.map((element, index) => {
            return (
              <>
                <a href={element.url} target="_blank" key={index}>
                  <i className={element.icon}></i>
                </a>
              </>
            );
          })}
        </section>
        <section>
          <dl className="definitions">
            {definitions.map((element, index) => {
              return (
                <div key={index}>
                  <dt>
                    <a className="source" target="_blank" href={element.source}>
                      {element.title}{" "}
                      <i className="fas fa-external-link-alt fa-1x"></i>
                    </a>
                  </dt>
                  <dd>{element.definition}</dd>
                </div>
              );
            })}
          </dl>
        </section>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("node"));
