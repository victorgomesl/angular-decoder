import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoCompartilhadoService } from '../../services/texto-compartilhado/texto-compartilhado.component';

@Component({
  selector: 'app-botoes-acao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botoes-acao.component.html',
  styleUrls: ['./botoes-acao.component.css'],
})
export class BotoesAcaoComponent implements OnInit {
  private textoDigitado: string = '';
  public textoProcessado: boolean = true;
  public exibirMensagemProcessado: boolean = false;

  constructor(private textoService: TextoCompartilhadoService) {}

  ngOnInit() {
    this.textoService.textoAtual.subscribe((texto) => {
      this.textoDigitado = texto;
      this.textoProcessado = !texto.trim();
      this.exibirMensagemProcessado = false;
    });
  }

  criptografarTexto() {
    if (!this.textoProcessado) {
      const textoCriptografado = this.criptografar(this.textoDigitado);
      this.textoService.atualizarTexto(textoCriptografado);
      this.textoService.definirVisibilidadeTexto(true);
      this.textoService.definirEstadoTexto('Criptografado');
      this.textoProcessado = true;
      this.exibirMensagemProcessado = true;
    }
  }

  descriptografarTexto() {
    if (!this.textoProcessado) {
      const textoDescriptografado = this.descriptografar(this.textoDigitado);
      this.textoService.atualizarTexto(textoDescriptografado);
      this.textoService.definirVisibilidadeTexto(true);
      this.textoService.definirEstadoTexto('Descriptografado');
      this.textoProcessado = true;
      this.exibirMensagemProcessado = true;
    }
  }

  private criptografar(texto: string): string {
    return texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }

  private descriptografar(texto: string): string {
    return texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  }
}
