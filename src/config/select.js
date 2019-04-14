export const selectOptions = [
  {
    label: "Spotify",
    endpoint: "https://spotify-graphql-server.herokuapp.com/graphql"
  },
  { label: "Countries", endpoint: "https://countries.trevorblades.com/" }
];

export const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "rgb(39, 40, 34)",
    primary25: "#dedede",
    neutral0: "rgb(39, 40, 34)",
    primary50: "hsl(0,0%,40%)"
  }
});

export const selectStyles = {
  control: provided => ({
    ...provided,
    borderColor: "rgb(39, 40, 34)"
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: "hsl(0,0%,30%)"
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "hsl(0,0%,90%)"
  }),
  option: (provided, state) => ({
    ...provided,
    color: "hsl(0,0%,90%)",
    backgroundColor: state.isSelected ? "rgb(39, 40, 34)" : "hsl(0,0%,30%)"
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "hsl(0,0%,90%)"
  })
};
