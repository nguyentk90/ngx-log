import { ConfigService } from './config.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from './log.service';

export * from './log.service';

export function fatoryConfig(isProduction: boolean): ConfigService {
  return {
    isProduction: isProduction
  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
    LogService
  ]
})
export class LogModule {
  static forRoot(isProduction: boolean): ModuleWithProviders {
    return {
      ngModule: LogModule,
      providers: [{ provide: ConfigService, useValue: fatoryConfig(isProduction) }]
    };
  }
}
