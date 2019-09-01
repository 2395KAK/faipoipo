import { Subject } from 'rxjs';

export class ProduitService {

    produitsSubject = new Subject<any[]>();

    private produits = [
        {
            id: 1,
            name: 'Igname',
            nb: 50
        },
        {
            id: 2,
            name: 'Riz',
            nb: 13
        },
        {
            id: 3,
            name: 'Mayo',
            nb: 5
        }
    ];

    emitProduitSubject() {
        this.produitsSubject.next(this.produits.slice());
    }

    addOneAll() {
        for (let produit of this.produits) {
            produit.nb = produit.nb + 1;
        }
        this.emitProduitSubject();
    }

    removeOneAll() {
        for (let produit of this.produits) {
            produit.nb = produit.nb - 1;
        }
        this.emitProduitSubject();
    }

    addOne(i: number) {
        this.produits[i].nb = this.produits[i].nb + 1;
        this.emitProduitSubject();
    }

    removeOne(i: number) {
        this.produits[i].nb = this.produits[i].nb - 1;
        this.emitProduitSubject();
    }

    getProduitById(id: number) {
        const produit = this.produits.find(
            (s) => {
                return s.id === id;
            }
        );
        return produit;
    }

    addProduit(name: string, nb: number) {

        const produitObject = {
            id: 0,
            name: '',
            nb: 0
        };

        produitObject.name = name;
        produitObject.nb = nb;
        produitObject.id = this.produits[(this.produits.length - 1)].id + 1;
        this.produits.push(produitObject);
        this.emitProduitSubject();
    }

}