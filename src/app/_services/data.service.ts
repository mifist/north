import { Injectable } from '@angular/core';
/*
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User } from '../_models/index';
*/

import { Categores } from './categores';

@Injectable()
export class DataService {
    model: any = {};
    flagskipstep2 = false;

    constructor(private cat: Categores
        /*private http: Http, private config: AppConfig*/) { }

    SendModelPart1(m: any) {
        this.model = m;
        console.log(this.model);
    }

    GetModelPart1() {
        return this.model;
    }

    GetСategores() {
        return this.cat.categores;
    }

    GetСategores_step2() {
        return this.cat.categores_step2;
    }

    GetСategores_step3() {
        return this.cat.categores_step3;
    }

    GetFlagskipstep2() {
        return this.flagskipstep2;
    }

    SetFlagskipstep2(flag: boolean) {
        this.flagskipstep2 = flag;
    }


}