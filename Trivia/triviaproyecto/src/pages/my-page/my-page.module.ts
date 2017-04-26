import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyPage } from './my-page';

@NgModule({
  declarations: [
    MyPage,
  ],
  imports: [
    IonicModule.forChild(MyPage),
  ],
  exports: [
    MyPage
  ]
})
export class MyPageModule {}
