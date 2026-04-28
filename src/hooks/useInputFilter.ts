import { useCallback } from "react";
import {
  handleNumericKeyDown,
  handleLetterKeyDown,
  handleMixedKeyDown,
} from "@/utils/inputFilters";

type InputFilterType = "numeric" | "letter" | "mixed";

interface UseInputFilterOptions {
  type?: InputFilterType;
  allowNumbers?: boolean;
  allowLetters?: boolean;
  allowSpaces?: boolean;
  extraAllowed?: string[];
}

export function useInputFilter(options: UseInputFilterOptions = {}) {
  const { type = "mixed", allowNumbers = true, allowLetters = true, allowSpaces = false, extraAllowed = [] } = options;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (type) {
        case "numeric":
          handleNumericKeyDown(e);
          break;
        case "letter":
          handleLetterKeyDown(e);
          break;
        case "mixed":
        default:
          handleMixedKeyDown(e, { allowNumbers, allowLetters, allowSpaces, extraAllowed });
          break;
      }
    },
    [type, allowNumbers, allowLetters, allowSpaces, extraAllowed]
  );

  return { handleKeyDown };
}

export function useNumericInput() {
  return useInputFilter({ type: "numeric" });
}

export function useLetterInput() {
  return useInputFilter({ type: "letter" });
}