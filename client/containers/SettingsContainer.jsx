import { useEffect, useState } from "react";
import settingsComponents from "../components/settingComponents";
import Info from "../components/infoarea";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SettingsContainer = () => {
 const [linenumber, setLineNumber] = useState(true);
 const notify = (setting, val) => toast(`Changed ${setting} to ${val}`);

 useEffect(() => {
  if (localStorage.getItem("linenumber")) {
   setLineNumber(JSON.parse(localStorage.getItem("linenumber")));
  }
 }, []);

 const colorthemearray = [
  { value: "hopscotch", label: "hopscotch" },
  { value: "material-palenight", label: "material-palenight" },
  { value: "gruvbox-dark", label: "gruvbox-dark" },
  { value: "material", label: "material" },
  { value: "the-matrix", label: "the-matrix" },
  { value: "dracula", label: "dracula" },
  { value: "darcula", label: "darcula" },
  { value: "solarized", label: "solarized" },
 ];

 const changeThemeHandler = (value) => {
  localStorage.setItem("default-theme", value);
  notify("default-theme", value);
 };

 const handleClick = () => {
  setLineNumber((prev) => !prev);
  notify("linenumber", !linenumber);
 };

 useEffect(() => {
  localStorage.setItem("linenumber", linenumber);
 }, [linenumber]);

 return (
  <div>
   <settingsComponents.Container>
    <Info.MonoTitle>Settings</Info.MonoTitle>
    <settingsComponents.FlexContainer>
     <Info.Text>Select the colorscheme for the editor :</Info.Text>
     <Select
      name="colortheme-selection"
      menuPlacement="auto"
      menuPosition="fixed"
      defaultValue={colorthemearray[1]}
      options={colorthemearray}
      onChange={({ value }) => changeThemeHandler(value)}
     />
    </settingsComponents.FlexContainer>
    <settingsComponents.FlexContainer>
     <Info.Text>Toggle Line Numbers :</Info.Text>
     <settingsComponents.Button
      text={linenumber}
      onClick={handleClick}
     />
    </settingsComponents.FlexContainer>
   </settingsComponents.Container>
   <ToastContainer
    theme="dark"
   />
  </div>
 );
};

export default SettingsContainer;
