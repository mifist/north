import { Component, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';



import { DataService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'step3.component.html',
    styleUrls: ['choicecategory.component.css']
})

export class ChoiceCategoryStep3Component {
    categores = [];
    categores_step2 = []
    categores_step30 = [];
    categores_step3 = [];

    private id: number;
    private subscription: Subscription;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private dataService: DataService,
        private _location: Location
    ){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit() {
        this.categores = this.dataService.GetСategores();
        this.categores_step2 = this.dataService.GetСategores_step2();
        let categores_step3loc = this.dataService.GetСategores_step3();
        this.categores_step30 = this.dataService.GetСategores_step3();
        for (var item of categores_step3loc) {
            this.categores_step3.push((<any>Object).assign({}, item));  
        }
        //alert(this.dataService.GetFlagskipstep2()); 

        //this.categores_step3 = (<any>Object).assign({}, this.categores_step30);  
        //this.categores_step3 = this.categores_step30.map(x => {...x});
        //var newObj = {...obj, z: 3, y: 4 };
        //var copy = Object.assign({}, obj);
    } 

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    goHome() {
        this.router.navigate(['/choicecategory']);
    }

    onclickcheck() {
        for (let Item of this.categores_step3) {
            if (Item.tmodel) {
                console.log(Item.id + ' ' + Item.tmodel);
            }
        }
    }

    trackByIndex(index: number, value: number) {
       // console.log("ngFor");
       // console.log(index);
       // console.log(value);
        return index;
    }

    onbtnbckclick() {
        if (this.dataService.GetFlagskipstep2()) {
            this._location.back();
            this.dataService.SetFlagskipstep2(true)
        }

        this._location.back();
    }

}

