/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { ItemStore } from './item-store';

import '!style-loader!css-loader!./item-list.component.css';

export class ItemListComponent {

    static CONFIG = {
        bindings: {
            itemType: '<wtItemType'
        },
        controller: ItemListComponent,
        template: `
<ul
    ng-dragover="$event.preventDefault()"
    ng-drop="$ctrl.onDrop({event: $event})">
    <li
        draggable="true"
        ng-dragstart="$ctrl.onDragStart({event: $event, item: item})"
        ng-repeat="item in $ctrl.getItemList()">
        {{ item.name }}    
    </li>
</ul>
`
    };

    itemType: string;

    constructor(private _itemStore: ItemStore) {
    }

    getItemList() {
        return this._itemStore.getItemList()
            .filter((item) => item.type === this.itemType);
    }

    onDragStart({event, item}) {
        event.dataTransfer.setData('text', item.id);
    }

    onDrop({event}) {

        const itemId = event.dataTransfer.getData('text');

        this._itemStore.updateItem({
            itemId: itemId,
            itemData: {
                type: this.itemType
            }
        });

    }

}
