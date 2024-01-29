import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoCompartilhadoService } from '../../services/texto-compartilhado/texto-compartilhado.component';

@Component({
  selector: 'app-card-direito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-direito.component.html',
  styleUrls: ['./card-direito.component.css']
})
export class CardDireitoComponent implements OnInit {
  textoCriptografado: string = '';
  mostrarTexto: boolean = false;
  estadoTexto: string = ''; 

  constructor(private textoService: TextoCompartilhadoService) {}

  ngOnInit() {
    this.textoService.textoAtual.subscribe(texto => {
      this.textoCriptografado = texto;
    });

    this.textoService.mostrarTextoAtual.subscribe(mostrar => {
      this.mostrarTexto = mostrar;
    });

    this.textoService.estadoTextoAtual.subscribe(estado => {
      this.estadoTexto = estado;
    });
  }

  copiarTexto() {
    navigator.clipboard.writeText(this.textoCriptografado).then(() => {
    }, (err) => {
      console.error('Falha ao copiar texto: ', err);
    });
  }

  get mensagemEstadoTexto(): string {
    return `Seu texto ${this.estadoTexto}:`;
  }
}
