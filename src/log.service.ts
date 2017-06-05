import { Injectable } from '@angular/core';

enum LogType {
  Log,
  Info,
  Warn,
  Error
}

@Injectable()
export class LogService {

  constructor(private env: string) {

  }

  info(text: string, param?: any, force?: boolean) {
    this.showLog(LogType.Info, text, param, force);
  }

  error(text: string, param?: any, force?: boolean) {
    this.showLog(LogType.Error, text, param, force);
  }

  warn(text: string, param?: any, force?: boolean) {
    this.showLog(LogType.Warn, text, param, force);
  }

  log(text: string, param?: any, force?: boolean) {
    this.showLog(LogType.Log, text, param, force);
  }

  private showLog(type: LogType, text: string, param?: any, force?: boolean) {
    if (force) {
      this.console(type, text, param);
    } else {
      if (!this.isProduction()) {
        this.console(type, text, param);
      }
    }
  }

  private console(type: LogType, text: string, param?: string) {
    let log;

    switch (type) {
      case LogType.Log:
        log = console.log;
        break;

      case LogType.Info:
        log = console.info;
        break;

      case LogType.Warn:
        log = console.warn;
        break;

      case LogType.Error:
        log = console.error;
        break;
    }

    if (param) {
      log(text, param);
    } else {
      log(text);
    }
  }

  private isProduction(): boolean {
    return this.env === 'production';
  }
}
