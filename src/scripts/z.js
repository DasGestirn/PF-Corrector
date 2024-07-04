//CLASSE Z E OPERAÇÕES

import { create, all } from 'mathjs';
const math = create(all, {});

export class Z {
    constructor(real = 0, imaginario = 0) {
        this.z = math.complex(Number(real), Number(imaginario))
        this.real = real
        this.imaginario = imaginario
        this.angulo = Number((this.z.arg() * 180) / Math.PI)
        this.modulo = Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginario, 2));
    }

    static calcAngulo(real, imaginario) {

        const a = math.complex(Number(real), Number(imaginario));

        const ang = ((a.arg() * 180) / Math.PI)

        return ang;
    }

    static calcReal(modulo, angulo) {
        const real = modulo * Math.cos(angulo * (Math.PI / 180));
        return real;
    }

    static calcImag(modulo, angulo) {
        const imaginario = modulo * Math.sin(angulo * (Math.PI / 180));
        return imaginario;
    }

    static calcModulo(real, imaginario) {
        const m = Math.sqrt(Math.pow(real, 2) + Math.pow(imaginario, 2));
        return m;
    }

    paralMod(obj) {
        return (this.modulo * obj.modulo) / Z.calcModulo((this.real + obj.real), (this.imaginario + obj.imaginario));
    }

    paralAng(obj) {
        return (this.angulo + obj.angulo) - Z.calcAngulo((this.real + obj.real), (this.imaginario + obj.imaginario));
    }

    toString() {
        return `{real=${this.real}, imaginario=${this.imaginario}, modulo=${this.modulo}, angulo=${this.angulo}}`;
    }
}