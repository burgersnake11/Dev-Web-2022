
function calculerAge(date_naissance){
    const date_ajd = new Date();
    let annee_patro;
    let diff;
    let age_enfant;

    if (date_ajd.getMonth() + 1 < 9){
      annee_patro = date_ajd.getFullYear() - 1;
      annee_patro = annee_patro.toString() + "-09-01";
      annee_patro = new Date(annee_patro);
      date_naissance = new Date(date_naissance);
      diff = annee_patro.getTime() - date_naissance.getTime();
      age_enfant = diff / (1000 * 3600 * 24 * 365);
      return Math.floor(age_enfant)
    }else{
      annee_patro = date_ajd.getFullYear();
      annee_patro = annee_patro.toString() + "-09-01";
      annee_patro = new Date(annee_patro);
      date_naissance = new Date(date_naissance);
      diff = annee_patro.getTime() - date_naissance.getTime();
      age_enfant = diff / (1000 * 3600 * 24 * 365);
      return Math.floor(age_enfant)
    }
}

function creerid(date_naissance){
    let age_enfant = calculerAge(date_naissance);
    let id_groupe;
    if(age_enfant < 5 || age_enfant > 18){
      id_groupe = 5
      return id_groupe
    }
    else if(5 <= age_enfant && age_enfant <= 6){
      id_groupe = 0
      return id_groupe
    }
    else if(age_enfant > 6 && age_enfant <= 8){
      id_groupe = 1
      return id_groupe
    }
    else if(age_enfant > 8 && age_enfant <= 12){
      id_groupe = 2
      return id_groupe
    }
    else if(age_enfant > 12 && age_enfant <= 14){
      id_groupe = 3
      return id_groupe
    }
    else if(age_enfant > 14 && age_enfant <= 18){
      id_groupe = 4
      return id_groupe
    } 
}

describe('Âge', () => {
    it("retourne l'âge qu'avait l'enfant en début d'année patro", () => {
        expect(calculerAge('2005-08-09')).toEqual(16);
    });
    it("retourne l'âge qu'avait l'enfant en début d'année patro", () => {
        expect(calculerAge('2015-01-11')).toEqual(6);
    });
    it("retourne l'id groupe de l'enfant en fonction de son âge", () => {
        expect(creerid('2005-08-09')).toEqual(4)
    });
    it("retourne l'id groupe de l'enfant en fonction de son âge", () => {
        expect(creerid('2015-01-11')).toEqual(0)
    })
});
