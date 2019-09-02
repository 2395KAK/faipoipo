import { Subject } from 'rxjs';
import { RefTypeProduitService } from './ref-type-produit.service';

export class RefProduitService {

    refProduitsSubject = new Subject<any[]>();

    private refProduits = [
        {
            id: 1,
            name: 'Igname',
        },
        {
            id: 2,
            name: 'Riz'
        },
        {
            id: 3,
            name: 'Mayonnaise'
        }
    ];

    emitRefProduitSubject() {
        this.refProduitsSubject.next(this.refProduits.slice());
    }

    getRefProduitById(id: number) {
        const produit = this.refProduits.find(
            (s) => {
                return s.id === id;
            }
        );
        return produit;
    }

    addRefProduit(name: string) {

        const refProduitObject = {
            id: 0,
            name: ''
        };

        refProduitObject.name = name;
        refProduitObject.id = this.refProduits[(this.refProduits.length - 1)].id + 1;
        this.refProduits.push(refProduitObject);
        this.emitRefProduitSubject();
    }

}