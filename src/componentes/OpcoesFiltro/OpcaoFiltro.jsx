import React, { useState, useEffect } from "react";
import styles from "./OpcaoFiltro.module.css";
import "../../index.css";

const OpcaoFiltro = ({
  title,
  options,
  singleSelection = false,
  filterSelection,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [checkedOptions, setCheckedOptions] = useState(new Set());
  useEffect(() => {
    filterSelection(title, singleSelection ? selectedIndex : checkedOptions);
  }, [checkedOptions, selectedIndex]);

  const handleCheckboxChange = (index) => {
    if (singleSelection) {
      const newIndex = index === selectedIndex ? null : index;
      setSelectedIndex(newIndex);
      filterSelection(title, newIndex);
    } else {
      setCheckedOptions((prevChecked) => {
        const updatedChecked = new Set(prevChecked);
        if (updatedChecked.has(index)) {
          updatedChecked.delete(index);
        } else {
          updatedChecked.add(index);
        }

        if (updatedChecked.size === 0) {
          setCheckedOptions(new Set());
        }

        return updatedChecked;
      });
    }
  };

  return (
    <div className={styles["checkbox-group"]}>
      <h2>{title}</h2>
      {options.map((option, index) => (
        <div key={index} className={styles["checkbox-option"]}>
            <input
              type="checkbox"
              id={`${title}-${index}`}
              checked={
                singleSelection
                  ? selectedIndex === index
                  : checkedOptions.has(index)
              }
              onChange={() => handleCheckboxChange(index)}
            />
          <div className={styles.caixa}>
            <div className={styles.caixaopcao}>
              <label htmlFor={`${title}-${index}`}>{option}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpcaoFiltro;
