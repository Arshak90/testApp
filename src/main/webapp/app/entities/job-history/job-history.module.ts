import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestAppSharedModule } from 'app/shared/shared.module';
import { JobHistoryComponent } from './job-history.component';
import { JobHistoryDetailComponent } from './job-history-detail.component';
import { JobHistoryUpdateComponent } from './job-history-update.component';
import { JobHistoryDeletePopupComponent, JobHistoryDeleteDialogComponent } from './job-history-delete-dialog.component';
import { jobHistoryRoute, jobHistoryPopupRoute } from './job-history.route';

const ENTITY_STATES = [...jobHistoryRoute, ...jobHistoryPopupRoute];

@NgModule({
  imports: [TestAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    JobHistoryComponent,
    JobHistoryDetailComponent,
    JobHistoryUpdateComponent,
    JobHistoryDeleteDialogComponent,
    JobHistoryDeletePopupComponent
  ],
  entryComponents: [JobHistoryDeleteDialogComponent]
})
export class TestAppJobHistoryModule {}
