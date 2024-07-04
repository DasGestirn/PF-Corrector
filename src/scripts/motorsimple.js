//CLASSE DO MOTOR E OPERAÇÕES PARA A CORREÇÃO SIMPLES

export class MotorSimple {

    constructor(vl, s, f, fpn, fpm) {
        this.vl = vl;
        this.sModulo = s * 1000;
        this.f = f;
        this.fpNovo = fpn;
        this.fpMed = fpm;
        this.p = (this.fpMed) * (this.sModulo);
        this.sNovoMod = (this.p) / (this.fpNovo);
        this.iModulo = this.sModulo / this.vl;
        this.iNovaMod = this.sNovoMod / this.vl;
        this.q = Math.sqrt(((this.sModulo ** 2) - (this.p ** 2)));
        this.qNovo = this.p * Math.tan(Math.acos(this.fpNovo));
        this.qCap = this.q - this.qNovo;
        this.xCap = (this.vl) ** 2 / this.qCap;
        this.cCap = 1 / (2 * Math.PI * this.f * this.xCap);
    }
}