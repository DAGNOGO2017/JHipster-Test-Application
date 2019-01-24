import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterTestApplicationRegionModule } from './region/region.module';
import { JHipsterTestApplicationCountryModule } from './country/country.module';
import { JHipsterTestApplicationLocationModule } from './location/location.module';
import { JHipsterTestApplicationDepartmentModule } from './department/department.module';
import { JHipsterTestApplicationTaskModule } from './task/task.module';
import { JHipsterTestApplicationEmployeeModule } from './employee/employee.module';
import { JHipsterTestApplicationJobModule } from './job/job.module';
import { JHipsterTestApplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JHipsterTestApplicationRegionModule,
        JHipsterTestApplicationCountryModule,
        JHipsterTestApplicationLocationModule,
        JHipsterTestApplicationDepartmentModule,
        JHipsterTestApplicationTaskModule,
        JHipsterTestApplicationEmployeeModule,
        JHipsterTestApplicationJobModule,
        JHipsterTestApplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterTestApplicationEntityModule {}
