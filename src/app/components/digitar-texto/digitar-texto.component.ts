import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextoCompartilhadoService } from '../../services/texto-compartilhado/texto-compartilhado.component';

@Component({
  selector: 'app-digitar-texto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './digitar-texto.component.html',
  styleUrls: ['./digitar-texto.component.css']
})
export class DigitarTextoComponent implements OnInit {
  private _textoDigitado: string = '';
  erro: string | null = null;
  textoProcessadoMensagem: string | null = null;

  constructor(private textoService: TextoCompartilhadoService) {}

  ngOnInit() {
    this.textoService.textoProcessadoAtual.subscribe((processado) => {
      this.textoProcessadoMensagem = processado
        ? 'Este texto já foi criptografado ou descriptografado.'
        : null;
    });
  }

  get textoDigitado(): string {
    return this._textoDigitado;
  }

  set textoDigitado(value: string) {
    const textoSemQuebras = value.replace(/\n/g, ' ');
    const textoFormatado = this.formatarTexto(textoSemQuebras);
    if (this.validarTexto(textoFormatado)) {
      this._textoDigitado = textoFormatado;
      this.erro = null;
      this.textoService.atualizarTexto(this._textoDigitado);
      this.textoService.resetarProcessamentoTexto();
    } else {
      this.erro = 'Por favor, digite apenas letras minúsculas e sem acento.';
    }
  }

  private validarTexto(texto: string): boolean {
    return /^[a-z\s]*$/.test(texto);
  }

  private formatarTexto(texto: string): string {
    return texto;
  }
}
