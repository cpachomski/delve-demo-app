import React from "react";
import Select from "react-select";
import ReactJson from "react-json-view";
import { useDelve } from "./useDelve";
import { selectOptions, selectStyles, selectTheme } from "./config/select";

import "./App.css";

function App() {
  const { error, loading, schema, setEndpoint } = useDelve(
    selectOptions[0].endpoint
  );

  return (
    <div className="App">
      <h1>Delve</h1>
      <h4>Delve returns a useful data model of your GraphQL Schema.</h4>
      <img
        alt="npm version"
        src="https://img.shields.io/npm/v/@pachomski/delve.svg?style=flat-square"
      />
      <img
        alt="minified file size"
        src="https://img.shields.io/bundlephobia/minzip/@pachomski/delve.svg?style=flat-square"
      />
      <a
        className="github-button"
        href="https://github.com/cpachomski/delve"
        data-show-count="true"
        aria-label="Star cpachomski/delve on GitHub"
      >
        Star
      </a>
      <p>Select a GraphQL Schema to introspect</p>
      <form>
        <Select
          defaultValue={selectOptions[0]}
          isSearchable={false}
          options={selectOptions}
          styles={selectStyles}
          theme={selectTheme}
          onChange={e => setEndpoint(e.endpoint)}
        />
      </form>
      <div className="json">
        {schema && !loading ? (
          <ReactJson
            collapsed
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
            src={!error ? schema : {}}
            theme="monokai"
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
