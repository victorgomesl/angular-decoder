import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TextoCompartilhadoService {
  private textoSource = new BehaviorSubject<string>('');
  private mostrarTextoSource = new BehaviorSubject<boolean>(false);
  private textoProcessadoSource = new BehaviorSubject<boolean>(false);
  private estadoTextoSource = new BehaviorSubject<'Criptografado' | 'Descriptografado' | ''>('');

  textoAtual = this.textoSource.asObservable();
  mostrarTextoAtual = this.mostrarTextoSource.asObservable();
  textoProcessadoAtual = this.textoProcessadoSource.asObservable();
  estadoTextoAtual = this.estadoTextoSource.asObservable();

  constructor() {}

  atualizarTexto(texto: string) {
    console.log('Texto atualizado:', texto);
    this.textoSource.next(texto);
  }

  definirVisibilidadeTexto(mostrar: boolean) {
    this.mostrarTextoSource.next(mostrar);
  }

  resetarProcessamentoTexto() {
    this.mostrarTextoSource.next(false);
    this.textoProcessadoSource.next(false);
    this.estadoTextoSource.next('');
  }

  definirTextoProcessado(processado: boolean) {
    this.textoProcessadoSource.next(processado);
  }

  definirEstadoTexto(estado: 'Criptografado' | 'Descriptografado') {
    this.estadoTextoSource.next(estado);
  }
}
