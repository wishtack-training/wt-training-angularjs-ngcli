/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


export class ItemStore {

    _itemList;

    constructor() {
        this._itemList = [
            {
                id: '0',
                name: 'aaaaaaa',
                type: 'A'
            },
            {
                id: '1',
                name: 'bbbbbbb',
                type: 'B'
            },
            {
                id: '2',
                name: 'ccccccc',
                type: 'B'
            }
        ]
    }

    getItemList() {
        return this._itemList;
    }

    updateItem({itemId, itemData}) {

        this._itemList = this._itemList
            .map((item) => {

                if (item.id !== itemId) {
                    return item;
                }

                return Object.assign({}, item, itemData);

            });

        console.log(this._itemList);

    }

}
