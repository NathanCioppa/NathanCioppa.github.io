
class ItemView extends HTMLElement {
    constructor() {
        super();
        
        ItemView.innerContent = this.innerHTML;
    }
    
    static innerContent;

    static itemAttributes = [
        'item-name', 'tooltip',
        'scaled-image', 'real-size-image',
        'rarity', 'item-type', 'damage', 'knockback', 'speed', 'defense', 'ammo',
        'dropped-by', 'href-dropped-by', 'dropped-by-extras',
        'crafting-station', 'href-crafting-station', 'crafting-recipe',
        'item-description'
    ]

    static get observedAttributes() {
        return this.itemAttributes;
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        if (ItemView.itemAttributes.includes(attributeName)) {
          this.render();
        }
    }

    render() {
        const itemName = this.getAttribute('item-name') || "";
        const tooltip = this.getAttribute('tooltip') || "";

        const scaledImage = this.getAttribute('scaled-image') || "";
        const realSizeImage = this.getAttribute('real-size-image') || "";

        const rarity = this.getAttribute('rarity') || "";
        const itemType = this.getAttribute('item-type') || "";
        const damage = this.getAttribute('damage') || "";
        const knockback = this.getAttribute('knockback') || "";
        const speed = this.getAttribute('speed') || "";
        const defense = this.getAttribute('defense') || "";
        const ammo = this.getAttribute('ammo') || "";

        const droppedBy = this.getAttribute('dropped-by') || "";
        const hrefDroppedBy = this.getAttribute('href-dropped-by') || "";
        const droppedByExtras = this.getAttribute('dropped-by-extras') || "";

        const craftingStation = this.getAttribute('crafting-station') || "";
        const hrefCraftingStation = this.getAttribute('href-crafting-station') || "";
        const craftingRecipe = this.getAttribute('crafting-recipe') || "";

        const itemDescription = this.getAttribute('item-description') || "";

        const innerContent = ItemView.innerContent || "";
        
        this.innerHTML = `
        <div class="flex-column-fit">
            <div class="flex-row">
                <div class="flex-column">
                    ${itemName || tooltip ? `
                    <div class="flex-column-fit item-title-div">
                        <span class="item-name">${itemName}</span>
                        <span class="item-tooltip">${tooltip}</span>
                    </div>
                    `: ``}
                    
                    <div class="item-images-container flex-row flex-center flex-grow-1">
                        <img class="item-image" src="${scaledImage}" alt="${scaledImage}">
                        <img class="item-image-actual-size item-image" src="${realSizeImage}" alt="${realSizeImage}" title="Actual size"> 
                    </div>
                </div>
                ${rarity || itemType || droppedBy || craftingStation || craftingRecipe ? `
                <div class="item-stats flex-column flex-grow-1">
                    <ul class="undecorated-list stats-list">
                        ${rarity ? `
                        <li>
                            Rarity:
                            <span class="item-property-label">${rarity}</span>
                        </li>
                        ` : ``}
                        
                        ${itemType ? `
                        <li>
                            Type:
                            <span class="item-property-label">${itemType}</span>
                        </li>
                        `: ``}

                        ${damage ? `
                        <li>
                            Damage:
                            <span class="item-property-label">${damage}</span>
                        </li>
                        `: ``}

                        ${speed ? `
                        <li>
                            Speed:
                            <span class="item-property-label">${speed}</span>
                        </li>
                        `: ``}

                        ${knockback ? `
                        <li>
                            Knockback:
                            <span class="item-property-label">${knockback}</span>
                        </li>
                        `: ``}

                        ${defense ? `
                        <li>
                            Defense:
                            <span class="item-property-label">${defense}</span>
                        </li>
                        `: ``}

                        ${ammo ? `
                        <li>
                            Ammo:
                            <span class="item-property-label">${ammo}</span>
                        </li>
                        `: ``}

                        ${droppedBy ? `
                        <li>
                            Dropped by:
                            <span class="item-property-label"><a ${hrefCraftingStation ? `target="_blank" rel="noopener noreferrer" href="${hrefDroppedBy}"`:""}>${droppedBy}</a>${droppedByExtras ? `,
                                <br>${droppedByExtras} `:``}
                            </span>
                        </li>
                        ` : ``}

                        ${craftingStation ? `
                        <li>
                            Crafted at:
                            <span class="item-property-label">
                                <a ${hrefCraftingStation ? `target="_blank" rel="noopener noreferrer" href="${hrefCraftingStation}"`:""}>${craftingStation}</a>
                            </span>
                        </li>
                        ` : ``}

                        ${craftingRecipe ? `
                        <li>
                            Recipe:
                            <span class="item-property-label">
                                ${craftingRecipe}
                            </span>
                        </li>
                        ` : ``}
                        
                    </ul>
                    <div class="stat-list-end-placeholder-container">
                        <img class="stat-list-end-placeholder-image" src="images/MomijiRabbitSemiTransparent.png">
                    </div>
                </div>
                ` : ``}
            </div>
            <div class="flex-column-fit">
                ${itemDescription ? `
                <p>${itemDescription}</p>
                `:``}
            </div>
            ${innerContent}
            <div class="item-view-ending-image"></div>
        </div>
        `;
    }
}

customElements.define('item-view', ItemView);