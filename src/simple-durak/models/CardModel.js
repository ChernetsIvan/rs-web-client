class CardModel{
    constructor(id, size, suit, power, onCardClick, bootStrapColClass, hidden){
        this.id = id;
        this.size = size;
        this.suit = suit;
        this.power = power;
        this.onCardClick = onCardClick;
        this.bootStrapColClass = bootStrapColClass;
        this.hidden = hidden;
    }
}

export default CardModel;