const useGetTheme = () => {
 let theme;
 if (localStorage.getItem("default-theme")) {
  theme = localStorage.getItem("default-theme");
 } else {
  theme = "material-palenight";
 }

 return theme;
};

export default useGetTheme;
