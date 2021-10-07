import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Input from "./components/Input/Input";
import "./App.scss";
function App() {
  return (
    <div>
      <h1>Welcome to designer</h1>
      <Button type="social" socialType="google">
        Login with Google
      </Button>
      <Button type="social" socialType="facebook">
        Login with Facebook
      </Button>
      <Button>Log in</Button>
      <Input type="text" placeholder="E-mail" />
      <Input type="password" placeholder="Password" />
      <label className="labelCheckbox">
        <Checkbox />
        Remember me
      </label>
    </div>
  );
}

export default App;
