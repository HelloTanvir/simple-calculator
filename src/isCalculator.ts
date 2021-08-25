export interface IsCalculator {
  previousOperandTextElement: Element | null;
  currentOperandTextElement: Element | null;
  currentOperand: string | undefined;
  previousOperand: string | undefined;
  operation: string | undefined;

  clear(): void;
  delete(): void;
  appendNumber(number: string | number): void;
  chooseOperation(operation: string): void;
  compute(): void;
  getDisplayNumber(number: string | number): string;
  updateDisplay(): void;
  reverse(): void;
}
