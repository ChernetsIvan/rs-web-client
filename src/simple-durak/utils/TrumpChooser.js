class TrumpChooser{
    
    //Возвращает козырную масть (не карту!) для будущей игры
    static chooseSuitForTrumpCardInFuture(cardSuits){
        let randIndex = Math.random() * (cardSuits.length-1);
        randIndex = Math.round(randIndex);
        return cardSuits[randIndex];
    }
}

export default TrumpChooser;