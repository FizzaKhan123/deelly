import React from "react";
import FlagsSelect from "react-flags-select";

const CountrySelector = () => {
  const [selected, setSelected] = React.useState("US");

  return (
    <div className="min-w-44">
      <FlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
         // Add your custom class
      />
    
    </div>
  );
};

export default CountrySelector;
