import settingsComponents from "../components/settingComponents";
import Info from "../components/infoarea";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SettingsContainer = () => {
 const notify = (val) => toast(`Changed to ${val}`);

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

 // TODO: Make a global handle function to store and set the values
 const changeThemeHandler = (value) => {
  // Saving to local storage
  localStorage.setItem("default-theme", value);
  notify(value);
 };

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
   </settingsComponents.Container>
   <ToastContainer
    theme="dark"
   />
  </div>
 );
};

export default SettingsContainer;
