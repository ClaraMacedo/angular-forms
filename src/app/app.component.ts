import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    novo: Vingador = new Vingador(0, '', ''); //utilizando o construtor
    // instanciar no cadastrarconfi
    ultimo_id = 5;
    editando = false;

    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        if(!this.editando){
            const novoId: number = ++this.ultimo_id;
            this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa));        
            this.novo = new Vingador(0, '', '');
        }
        else{
            this.novo = new Vingador(0, '', '');
            this.editando = false;
        }
    
        //funcionando com objetos
    }
    encontrar(id: number): number{
        //console.log("excluindo...", id);
        let indice = -1;
        for (let i=0; i< this.vingadores.length; i++){
            if(this.vingadores[i].id == id){
                indice = i;
                //i= this.vingadores.length;
                break;
            }
        }
        return indice;
    }
    excluir(id: number): void{
        //console.log("excluindo...", id);
        const indice= this.encontrar(id);
        if(indice != -1){
            //delete this.vingadores[id];
            this.vingadores.splice(indice, 1);
            this.novo = new Vingador(0, '', '');
        }
        //this.vingadores.splice.indexOf(this.selecionado);
    }

    editar(id: number): void{
        const indice = this.encontrar(id);

        if(indice !== -1){
            this.novo = this.vingadores[indice];
            this.editando = true;
        }
    }
    
}
