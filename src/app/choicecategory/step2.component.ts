import { Component, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'step2.component.html',
    styleUrls: ['choicecategory.component.css']
})

export class ChoiceCategoryStep2Component {
    model: any = {};
    loading = false;
    categores = [
        {
            id: '1',
            title: 'МЕХАНИЗМЫ И ТРАНСПОРТ',
            desc: '(авто, гусеничный, ж/д)',
        },
        {
            id: '2',
            title: 'СТРОИТЕЛЬСТВО',
            desc: '',
        },
        {
            id: '3',
            title: 'СВАРОЧНОЕ ПРОИЗВОДСТВО',
            desc: '',
        },
        {
            id: '4',
            title: 'ЭЛЕКТРОХОЗЯЙСТВО',
            desc: '(эксплуатация, ремонт)',
        },
        {
            id: '5',
            title: 'СЛУЖБА БЫТА',
            desc: '',
        },
        {
            id: '6',
            title: 'НЕФТЕГАЗОВЫЙ КОМПЛЕКС',
            desc: '(разведка, бурение, добыча, эксплуатация)',
        },
        {
            id: '7',
            title: 'МЕД. ПЕРСОНАЛ',
            desc: '',
        }


    ];
    categores_step2 = [
        {
            id: '1',
            idcat: '1',
            title: 'Руководители, ИТР, служащие',
            desc: '',
        },
        {
            id: '2',
            idcat: '1',
            title: 'Слесаря',
            desc: '',
        },
        {
            id: '3',
            idcat: '1',
            title: 'Водители',
            desc: '',
        },
        {
            id: '4',
            idcat: '1',
            title: 'Машинисты колёсной спец. техники',
            desc: '',
        },
        {
            id: '5',
            idcat: '1',
            title: 'Трактористы - машинисты',
            desc: '',
        },
        {
            id: '6',
            idcat: '1',
            title: 'Машинисты гусеничной спецтехники',
            desc: '',
        },
        {
            id: '7',
            idcat: '1',
            title: 'Машинисты ж/д транспорта',
            desc: '',
        },
        {
            id: '8',
            idcat: '1',
            title: 'Машинисты установок',
            desc: '(ДЭС, насосных и тп.)',
        },
        {
            id: '9',
            idcat: '2',
            title: 'Общестроительные работы',
            desc: '',
        },
        {
            id: '10',
            idcat: '2',
            title: 'Технология',
            desc: '',
        },
        {
            id: '11',
            idcat: '2',
            title: 'Электромонтаж',
            desc: '',
        },
        {
            id: '12',
            idcat: '3',
            title: 'Руководители, ИТР, служащие',
            desc: '',
        },
        {
            id: '13',
            idcat: '3',
            title: 'Рабочие профессии',
            desc: '',
        },
        {
            id: '14',
            idcat: '7',
            title: '7777777awefawef777777777777777777',
            desc: '',
        },
        {
            id: '15',
            idcat: '7',
            title: '777777777777777777asfawe7777777',
            desc: '',
        },
        {
            id: '16',
            idcat: '7',
            title: '77777777aswef77777777777777777',
            desc: '',
        },
        {
            id: '17',
            idcat: '7',
            title: '77777asFCASWEF77777777777777777777',
            desc: '',
        },
        {
            id: '18',
            idcat: '7',
            title: '77777ADAS77777777777777777777',
            desc: '',
        },
        {
            id: '19',
            idcat: '7',
            title: '7777777777777sdvcwdasc777777777777',
            desc: '',
        },
        {
            id: '20',
            idcat: '7',
            title: '7777777777777dgbgf777777777777',
            desc: '',
        },
        {
            id: '21',
            idcat: '7',
            title: '77777777777777777',
            desc: '',
        },
        {
            id: '21',
            idcat: '7',
            title: '77777777777777777',
            desc: '',
        }
    ];
    private id: number;
    private subscription: Subscription;
    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router
    ) {

        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    goHome() {
        this.router.navigate(['/choicecategory']);
    }
    goStep2() {
        this.router.navigate(['/step2/']);
    }
}

