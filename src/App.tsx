import { useState } from "react";

import { Select } from "./components/select";
import styles from "./app.module.css";

export type SelectOption = {
  label: string;
  value: number | string;
};

const options = [
  { label: "Item One", value: 1 },
  { label: "Item Two", value: 2 },
  { label: "Item Three", value: 3 },
  { label: "Item Four", value: 4 },
  { label: "Item Five", value: 5 },
];
function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  console.log(value);
  return (
    <main className={styles.wrapper}>
      <section>
        <Select
          options={options}
          value={value}
          onChange={(opt) => setValue(opt)}
        />
      </section>
    </main>
  );
}

export default App;
