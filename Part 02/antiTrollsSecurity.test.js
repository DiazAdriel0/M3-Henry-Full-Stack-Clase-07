const antiTrollsSecurity = require('./antiTrollsSecurity');

describe('PARTE 02', () => {
   describe('Seguridad Anti Trolls', () => {
      it('Debe devolver el mismo string pero habiendo eliminado todas las vocales', () => {
         expect(antiTrollsSecurity('This website is for losers LOL!')).toBe(
            'Ths wbst s fr lsrs LL!'
         );
         expect(antiTrollsSecurity('What are you, a communist?')).toBe(
            'Wht r y,  cmmnst?'
         );
         expect(antiTrollsSecurity("Hola mundo ")).toBe("Hl mnd ")
      });
      it("Debe convertir todos los caracteres en * cuando no hay espacios", () => {
         expect(antiTrollsSecurity("PruebaDeConversion")).toBe("******************")
      })
      it("Debe invertir el string cuando hay un solo espacio", () =>{
         expect(antiTrollsSecurity("Hola mundo")).toBe("odnum aloH")
         //Para este caso debería borrar las vocales en lugar de unvertir el string
         expect(antiTrollsSecurity("Hola mundo ")).not.toBe(" odnum aloH")
      })
      it("Debe devolver un string vacío cuando el string recibido tenga mas de 100 carateres", ()=>{
         expect(antiTrollsSecurity("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"))
         .toBe("")
      })
   });
});
