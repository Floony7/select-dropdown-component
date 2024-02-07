import { useState } from "react";
import styles from "./select.module.css";
import { SelectOption } from "../App";

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  // onChange: (value: SelectOption | undefined) => void;
  onChange: React.Dispatch<React.SetStateAction<SelectOption | undefined>>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function clearOptions() {
    onChange(undefined);
    console.log("Clearing");
  }

  return (
    <section
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li key={option.label} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </section>
  );
};
