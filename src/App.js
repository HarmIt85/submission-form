//import logo from './logo.svg';
import './App.css';
import InputField from './Components/TextField/InputField.js';
import RadioField from './Components/RadioField/RadioField';

function App() {
  return (
    <div>
        <InputField divClass="form-row" forField="firstName" labelText="First Name:" inputType="text" IdName="firstName" placeHolderText="First Name"/>
        <InputField divClass="form-row" forField="lastName" labelText="Last Name:" inputType="text" IdName="lastName" placeHolderText="Last Name"/>
        <InputField divClass="form-row" forField="email" labelText="Email:" inputType="email" IdName="email" placeHolderText="Email"/>
        <InputField divClass="form-row" forField="contact" labelText="Contact:" inputType="number" IdName="contact" placeHolderText="Enter Mobile Number"/>
        
        <RadioField divClass="form-row" forField="gender" labelText="Gender:"/>
    </div>
  );
}

export default App;
