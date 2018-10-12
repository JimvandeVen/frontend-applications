module.exports = {
  type: [
    {
      name: "algemeen",
      selects: [
        {
          name: "Geslacht",
          options: [
            {
              coefficients: "GESLACHT Mannen",
              caseategorie: "Geslacht",
              name: "Man",
              gewicht: "-0,12611"
            },
            {
              coefficients: "GESLACHT Vrouwen",
              categorie: "Geslacht",
              name: "Vrouw",
              gewicht: "0"
            }
          ]
        }
      ]
    },
    {
      name: "Werk & Opleiding",
      selects: [
        {
          name: "Soort Onderwijs van het kind",
          options: [
            {
              "coefficients": "SPECIAAL_Onderwijs Niet-regulier onderwijs",
              "categorie": "Soort onderwijs",
              "name": "Niet-regulier onderwijs",
              "gewicht": "-0,33031"
            },
            {
              "coefficients": "SPECIAAL_Onderwijs Geen onderwijsdata bekend",
              "categorie": "Soort onderwijs",
              "name": "Onderwijs onbekend",
              "gewicht": "-0,76957"
            },
            {
              "coefficients": "",
              "categorie": "Soort onderwijs",
              "name": "Regulier Onderwijs",
              "gewicht": "0"
            }
          ]
        }
      ]
    }
  ]
};
