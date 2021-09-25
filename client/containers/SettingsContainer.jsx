import settingsComponents from "../components/settingComponents";
import Info from "../components/infoarea";

const SettingsContainer = () => {
  const colorthemearray = [
    "material",
    "material-palenight",
    "hopscotch",
    "gruvbox-dark",
  ];

  const uioptions = ["Minimal", "Normal", "Info"];

  return (
    <div>
      <settingsComponents.Container>
        <Info.MonoTitle>Settings </Info.MonoTitle>
        <settingsComponents.FlexContainer>
          <Info.Text>Select the colorscheme for the editor : </Info.Text>
          <settingsComponents.Select
            array={colorthemearray}
            selected={colorthemearray[1]}
          />
        </settingsComponents.FlexContainer>
        <settingsComponents.FlexContainer>
          <Info.Text>UI theme : </Info.Text>
          <settingsComponents.Select
            array={uioptions}
            selected={colorthemearray[1]}
          />
        </settingsComponents.FlexContainer>

        <settingsComponents.SaveButton />
      </settingsComponents.Container>
    </div>
  );
};

export default SettingsContainer;
