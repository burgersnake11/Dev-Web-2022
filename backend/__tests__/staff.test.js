function validateEmail(emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}


describe('Bien une adresse email', () => {
    it('Doit être une email valide, comprennant un @, et un "."', () => {
        expect(validateEmail('lgc.carlier@gmail.com')).toEqual(true);
    });
});

