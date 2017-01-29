export class CalculatorService {
    constructor() {
        this.lines = [];
        this.id = 0;
    }

    addLine(line){
        this.lines.push(line);
        return this.lines;
    }

    calculateBase(iva, total) {
        const base =  Math.round(total / (1+iva/100));
        return base;
    }

    calculateTotal(iva, base) {
        const total = Math.round(base * (1+iva/100));
        return total;
    }

    generateId() {
        this.id++;
        return this.id;
    }

    removeLine(id) {
        const index = this.lines.filter(line => line.id === id);
        this.lines.splice(index, 1);
        return this.lines;    
    }
}
