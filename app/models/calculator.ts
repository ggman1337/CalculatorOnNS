export class Calculator {
    private currentInput: string = '0';
    private previousInput: string = '';
    private operator: string = '';
    private waitingForNewInput: boolean = false;
    private lastButtonPressed: string = '';

    public handleButtonPress(buttonValue: string): string {
        this.lastButtonPressed = buttonValue;

        if (this.isNumber(buttonValue) || buttonValue === '.') {
            return this.handleNumberInput(buttonValue);
        } 
        else if (this.isOperator(buttonValue)) {
            return this.handleOperatorInput(buttonValue);
        } 
        else if (buttonValue === '=') {
            return this.calculateResult();
        } 
        else if (buttonValue === 'C') {
            return this.clear();
        } 
        else if (buttonValue === '±') {
            return this.toggleSign();
        } 
        else if (buttonValue === 'q') {
            return this.squareRoot();
        } 
        else if (buttonValue === '⌫') {
            return this.backspace();
        }
        return this.currentInput;
    }

    private isNumber(value: string): boolean {
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(value);
    }

    private isOperator(value: string): boolean {
        return ['+', '-', '×', '÷'].includes(value);
    }

    private handleNumberInput(number: string): string {
        if (this.waitingForNewInput) {
            this.currentInput = number;
            this.waitingForNewInput = false;
        } else {
            this.currentInput = this.currentInput === '0' ? number : this.currentInput + number;
        }
        return this.currentInput;
    }

    private handleOperatorInput(nextOperator: string): string {
        const inputValue = parseFloat(this.currentInput);

        if (this.previousInput && this.operator && !this.waitingForNewInput) {
            const currentValue = parseFloat(this.previousInput);
            const newValue = this.performCalculation(currentValue, inputValue);

            this.currentInput = String(newValue);
            this.previousInput = this.currentInput;
        } else {
            this.previousInput = this.currentInput;
        }

        this.waitingForNewInput = true;
        this.operator = nextOperator;
        return this.currentInput;
    }

    private calculateResult(): string {
        if (!this.operator || this.waitingForNewInput) {
            return this.currentInput;
        }

        const prevValue = parseFloat(this.previousInput);
        const currentValue = parseFloat(this.currentInput);

        if (this.operator === '÷' && currentValue === 0) {
            this.clear();
            return 'Ошибка: Деление на ноль';
        }

        try {
            const result = this.performCalculation(prevValue, currentValue);
            this.currentInput = String(result);
            this.previousInput = '';
            this.operator = '';
            this.waitingForNewInput = true;
            return this.currentInput;
        } catch (Error) {
            this.clear();
            return 'Ошибка'
        }
    }

    private performCalculation(prev: number, current: number): number {
        switch (this.operator) {
            case '+': return prev + current;
            case '-': return prev - current;
            case '×': return prev * current;
            case '÷': 
                if (current === 0) throw new Error('Деление на ноль');
                return prev / current;
            default: return current;
        }
    }

    private clear(): string {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = '';
        this.waitingForNewInput = false;
        return this.currentInput;
    }

    private squareRoot(): string {
        const currentValue = parseFloat(this.currentInput);
        if (currentValue < 0){
            this.clear();
            return 'Ошибка: Корень из отрицательного числа извлечь нельзя';
        }
        this.currentInput = String(Math.sqrt(currentValue));
        this.previousInput = '';
        this.operator = '';
        this.waitingForNewInput = true;
        return this.currentInput;
    }

    private toggleSign(): string {
        this.currentInput = String(-parseFloat(this.currentInput));
        return this.currentInput;
    }

    private backspace(): string {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        return this.currentInput;
    }

    public getLastButtonPressed(): string {
        return this.lastButtonPressed;
    }

    public getCurrentDisplay(): string {
        return this.currentInput;
    }
}