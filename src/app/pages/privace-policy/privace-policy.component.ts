import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';
import { PrivacyPolicyMainComponent } from '../../components/privacy-policy-main/privacy-policy-main.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-privace-policy',
  standalone: true,
  imports: [RouterModule,NavComponent,PrivacyPolicyMainComponent,FooterComponent],
  templateUrl: './privace-policy.component.html',
  styleUrl: './privace-policy.component.css'
})
export class PrivacePolicyComponent {

}
