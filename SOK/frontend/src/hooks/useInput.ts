import { useEffect, useState } from "react";
import { IValidations, useValidation } from "./useValidation";

export const useInput = (
  initialValue: string,
  validations: IValidations,
  local?: { key: string }
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  useEffect(() => {
    if (local) {
      const localValue = localStorage.getItem(local.key);
      if (localValue) {
        setValue(localValue);
      }
    }
  }, []);

  const onChange = (e: any) => {
    if (local) {
      localStorage.setItem(local.key, e.target.value);
    }
    setValue(e.target.value);
  };
  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
