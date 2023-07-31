function calculadora (opc, numero1, numero2) {

   switch (opc) {
        case 1: 
            return numero1 + numero2;
            break;
        case 2: 
            return numero1 - numero2;
            break;   
        case 3: 
            return numero1 * numero2;
            break;
        case 4: 
            return numero1 / numero2;
            break;
        default:
            console.log ("Opcao invalida!");
            break;   
    }
    
}
console.log (calculadora ());
