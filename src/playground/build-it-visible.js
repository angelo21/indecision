const appRoot = document.getElementById("app");

let visibility = false;

const onToggle = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {visibility ? "Hide details" : "Show Details"}
      </button>
      {visibility && <p>Hey, these are some details you can now see</p>}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
}

render();