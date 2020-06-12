import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class DemoMaterialModule {}
