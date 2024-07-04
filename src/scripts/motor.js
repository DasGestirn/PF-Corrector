//CLASSE DO MOTOR E OPERAÇÕES

import { Z } from "./z.js";

export class Motor {
    constructor(lig, vl, f, polos, nr, fpNovo, z1, z2, zXm, zRc) {
        this.vl = vl;
        this.van = lig ? (this.vl / Math.sqrt(3)) : this.vl;
        this.f = f;
        this.polos = polos;
        this.nr = nr;
        this.s = this.calcS();
        this.z1 = z1;
        this.z2 = new Z(z2.real / this.s, z2.imaginario);
        this.zXm = zXm;
        this.zRc = zRc;
        this.fpNovo = fpNovo;

        this.inicializarMotor();
    }

    calcS() {
        const ns = (120 * this.f) / this.polos;
        return (ns - this.nr) / ns;
    }

    inicializarMotor() {

        this.zp = new Z();
        this.zp.modulo = this.zXm.paralMod(this.zRc);
        this.zp.angulo = this.zXm.paralAng(this.zRc);
        this.zp.real = Z.calcReal(this.zp.modulo, this.zp.angulo);
        this.zp.imaginario = Z.calcImag(this.zp.modulo, this.zp.angulo);

        this.calcZeq();

        this.iModulo = this.van / this.zeqMod;
        this.iAngulo = -1 * this.zeqAng;
        this.sModulo = this.van * this.iModulo;
        this.sAngulo = -1 * this.iAngulo;

        this.p = Z.calcReal(this.sModulo, this.sAngulo);
        this.q = Z.calcImag(this.sModulo, this.sAngulo);
        this.fp = this.p / this.sModulo;

        this.sNovoMod = this.p / this.fpNovo;
        this.qNovo = Math.sqrt(Math.pow(this.sNovoMod, 2) - Math.pow(this.p, 2));
        this.qCap = -1 * (this.q - this.qNovo);
        this.xCap = Math.pow(Math.abs(this.van), 2) / this.qCap;
        this.cCap = 1 / (2 * Math.PI * this.f * Math.abs(this.xCap));

        this.calcZeqNovo();
        this.iNovaMod = this.van / this.zeqNovoMod;
        this.iNovaAng = -1 * this.zeqNovoAng;
        this.sNovoAng = this.zeqNovoAng;
    }

    calcZeq() {
        const realMod = this.z1.real + Z.calcReal(this.zp.paralMod(this.z2), this.zp.paralAng(this.z2));
        const imagMod = this.z1.imaginario + Z.calcImag(this.zp.paralMod(this.z2), this.zp.paralAng(this.z2));
        const realAng = this.z1.real + Z.calcReal(this.zp.paralMod(this.z2), this.zp.paralAng(this.z2));
        const imagAng = this.z1.imaginario + Z.calcImag(this.zp.paralMod(this.z2), this.zp.paralAng(this.z2));
        this.zeqMod = Z.calcModulo(realMod, imagMod);
        this.zeqAng = Z.calcAngulo(realAng, imagAng);
    }

    calcZeqNovo() {
        const xCap = new Z(0, this.xCap);
        const zeq = new Z(Z.calcReal(this.zeqMod, this.zeqAng), Z.calcImag(this.zeqMod, this.zeqAng));
        this.zeqNovoMod = zeq.paralMod(xCap);
        this.zeqNovoAng = zeq.paralAng(xCap);
    }

    toString() {
        return `Motor
        {
        ligação = ${this.vl === this.van ? 'delta' : 'estrela'};
        vl=${this.vl}, 
        van=${this.van},
         f=${this.f},
        polos=${this.polos},
        nr=${this.nr},
        s=${this.s},
        iModulo=${this.iModulo},
        iAngulo=${this.iAngulo},
        iNovaMod=${this.iNovaMod},
        iNovaAng=${this.iNovaAng}, 
        sModulo=${this.sModulo}, 
        sAngulo=${this.sAngulo}, 
        sNovoMod=${this.sNovoMod}, 
        sNovoAng=${this.sNovoAng}, 
        p=${this.p}, 
        q=${this.q}, 
        qNovo=${this.qNovo}, 
        z1=${this.z1}, 
        z2=${this.z2}, 
        zXm=${this.zXm}, 
        zRc=${this.zRc}, 
        zp=${this.zp}, 
        zeqAng=${this.zeqAng}, 
        zeqMod=${this.zeqMod}, 
        zeqNovoAng=${this.zeqNovoAng}, 
        zeqNovoMod=${this.zeqNovoMod}, 
        fp=${this.fp}, 
        fpNovo=${this.fpNovo}, 
        qCap=${this.qCap}, 
        xCap=${this.xCap}, 
        cCap=${this.cCap}}`;
    }
}