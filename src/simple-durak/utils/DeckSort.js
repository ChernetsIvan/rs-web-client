class DeckSort{
    //отсортировать входной массив карт по возрастанию isAsc=true
    //(убыванию-> isAsc=false)  по параметру 'power'
    static sortInputDeckByPower(inputDeck, isAsc){
        inputDeck.sort(function(a,b){
            if(isAsc){
                return a.power - b.power;
            }else{
                return b.power - a.power;
            }        
        });
    }
}

export default DeckSort;