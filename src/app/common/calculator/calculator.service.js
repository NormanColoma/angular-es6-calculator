export class CalculatorService {
    constructor() {
        this.lines = [];
    }

    addLine(line){
        this.lines.push(line);
        return this.lines;
    }

    calculateTotal(iva, base) {
        const total = Math.round(base * (1+iva/100));
        return total;
    }

    calculateBase(iva, total) {
        const base =  Math.round(total / (1+iva/100));
        return base;
    }
}
