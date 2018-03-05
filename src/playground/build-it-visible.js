// const appRoot = document.getElementById("app");

// let visibility = false;

// const onToggle = () => {
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>
//         {visibility ? "Hide details" : "Show Details"}
//       </button>
//       {visibility && <p>Hey, these are some details you can now see</p>}
//     </div>
//   );
//   ReactDOM.render(jsx, appRoot);
// }

// render();


class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
     toggle: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>{this.state.toggle ? "Hide Details" : "Show Details"}</button>
          {this.state.toggle && <p>Hey, these are some details you can now see
          </p>}
      </div>
    )
  }
}


ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));