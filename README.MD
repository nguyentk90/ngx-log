[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/ngx-log.svg)](http://badge.fury.io/js/ngx-log)

# ngx-log
> Angular Log Service Library, automatically hide console log on Production

## Installation

To install this library, run:

```bash
$ npm install ngx-log --save
```

## Usage

Functions:

```typescript
infor(text: string, param?: any, force?: boolean)
warn(text: string, param?: any, force?: boolean)
error(text: string, param?: any, force?: boolean)
log(text: string, param?: any, force?: boolean)
```

From your Angular `AppModule`:

```typescript
LogModule.forRoot(isProduction: boolean);
```

Sample import snippet
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ngx-log library
import { LogModule } from 'ngx-log';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import LogModule 
    // process.env.NODE_ENV should be defined on your Webpack (production/development/test)
    LogModule.forRoot(process.env.NODE_ENV === 'production')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use it in your components, directives and pipes of your Angular application:

```typescript
import { LogService } from 'ngx-log';

@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private logService: LogService) {
    
  }

  ngOnInit() {
    // this will not show on Production mode
    // but we can force show on Production by add
    // this.logService.info('App component init!', null, true);
    this.logService.info('App component init!');
  }
}
```

## License

MIT © [Tran Khanh Nguyen](https://nguyentr.com)
