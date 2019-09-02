import { Subject } from 'rxjs';

export class RefTypeProduitService {

    refTypeProduitsSubject = new Subject<any[]>();

    private refTypeProduits = [
        {
            id: 1,
            name: 'Condiment'
        },
        {
            id: 2,
            name: 'Epice'
        },
        {
            id: 3,
            name: 'Légume'
        }
    ];

    emitRefTypeProduitSubject() {
        this.refTypeProduitsSubject.next(this.refTypeProduits.slice());
    }

    getRefTypeProduitById(id: number) {
        const produit = this.refTypeProduits.find(
            (s) => {
                return s.id === id;
            }
        );
        return produit;
    }

    addRefTypeProduit(name: string) {

        const refTypeProduitObject = {
            id: 0,
            name: ''
        };

        refTypeProduitObject.name = name;
        refTypeProduitObject.id = this.refTypeProduits[(this.refTypeProduits.length - 1)].id + 1;
        this.refTypeProduits.push(refTypeProduitObject);
        this.emitRefTypeProduitSubject();
    }

}