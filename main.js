import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello</span>
        <span>world</span>
        <div>
          {this.children}
          {true}
        </div>
      </div>
    );
  }
}
let a = (
  <MyComponent name="a" id="ida">
    <div>小伙子</div>
  </MyComponent>
);

ToyReact.render(a, document.body);