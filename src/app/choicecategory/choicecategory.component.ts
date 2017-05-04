import { Component } from '@angular/core';
import { DataService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'choicecategory.component.html',
    styleUrls: ['choicecategory.component.css']
})

export class ChoiceCategoryComponent {
    categores = [];



    constructor(
        private dataService: DataService
    ) { }


    ngOnInit() {
        this.categores = this.dataService.GetСategores();
    }    


}

