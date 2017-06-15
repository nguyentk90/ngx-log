import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from './log.service';

export * from './log.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class LogModule {
  static forRoot(env: string, productionConstant: string = 'production'): ModuleWithProviders {
    return {
      ngModule: LogModule,
      providers: [{ provide: LogService, useValue: new LogService(env, productionConstant) }]
    };
  }
}
