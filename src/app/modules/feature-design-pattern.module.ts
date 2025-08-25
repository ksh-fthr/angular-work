import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignPatternBaseComponent } from '../component/design-pattern/design-pattern-base.component';
import { StatePatternClientComponent } from '../component/design-pattern/state/state-pattern-client.component';

const ROUTE_TABLE: Routes = [
    {
        path: 'design-pattern',
        component: DesignPatternBaseComponent,
        children: [{ path: 'state-pattern-client', component: StatePatternClientComponent }],
    },
];
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DesignPatternBaseComponent,
                children: [{ path: 'state-pattern-client', component: StatePatternClientComponent }],
            },
        ]),
        DesignPatternBaseComponent,
        StatePatternClientComponent,
    ],
    exports: [RouterModule],
})
export class FeatureDesignPatternModule {}
