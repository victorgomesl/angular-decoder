import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { DigitarTextoComponent } from '../../components/digitar-texto/digitar-texto.component';
import { CardDireitoComponent } from '../../components/card-direito/card-direito.component';
import { BotoesAcaoComponent } from '../../components/botoes-acao/botoes-acao.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LogoComponent,
    DigitarTextoComponent,
    BotoesAcaoComponent,
    CardDireitoComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
