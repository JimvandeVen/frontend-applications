module.exports = {
  type: [
    {
      name: "Algemeen",
      selects: [
        {
          name: "Geslacht",
          options: [
            {
              coefficients: "GESLACHT Mannen",
              caseategorie: "Geslacht",
              name: "Man",
              gewicht: -0.12611
            },
            {
              coefficients: "GESLACHT Vrouwen",
              categorie: "Geslacht",
              name: "Vrouw",
              gewicht: 0
            }
          ]
        },
        {
          name: "Leeftijd moeder bij geboorte",
          options: [
            {
              "coefficients": "Leeftijd moederbij _geboorte_cat 0 tot 20 jaar",
              "Categorie": "Leeftijd moeder",
              "name": "Jonger dan 20 jaar",
              "gewicht": 0.45150
            },
            {
              "coefficients": "Leeftijd moederbij _geboorte_cat 20 tot 25 jaar",
              "categorie": "Leeftijd moeder",
              "name": "20 tot 25 jaar",
              "gewicht": 0.10852
            },
            {
              "coefficients": "Leeftijd moederbij _geboorte_cat 25 tot 30 jaar",
              "categorie": "Leeftijd moeder",
              "name": "25 tot 30 jaar",
              "gewicht": -0.08841
            },
            {
              "coefficients": "Leeftijd moederbij _geboorte_cat 30 tot 35 jaar",
              "categorie": "Leeftijd moeder",
              "name": "30 tot 35 jaar",
              "gewicht": -0
            },
            {
              "coefficients": "Leeftijd moederbij _geboorte_cat 35 tot 40 jaar",
              "categorie": "Leeftijd moeder",
              "name": "35 tot 40 jaar",
              "gewicht": 0.23988
            },
            {
              "coefficients": "Leeftijd moederbij _geboorte_cat ouder dan 40 jaar",
              "categorie": "Leeftijd moeder",
              "name": "40 jaar en ouder",
              "gewicht": -0.11153
            }
          ]
        },
        {
          name: "Leeftijd vader bij geboorte",
          options: [
            {
              "coefficients": "Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar",
              "Categorie": "Leeftijd vader",
              "name": "Jonger dan 25 jaar",
              "gewicht": -0.00587
            },
            {
              "coefficients": "Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar",
              "categorie": "Leeftijd vader",
              "name": "25 tot 30 jaar",
              "gewicht": 0.03107
            },
            {
              "coefficients": "Leeftijd vaderbij _geboorte_cat 30 tot 35 jaar",
              "categorie": "Leeftijd vader",
              "name": "30 tot 35 jaar",
              "gewicht": -0
            },
            {
              "coefficients": "Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar",
              "categorie": "Leeftijd vader",
              "name": "35 tot 40 jaar",
              "gewicht": -0.21624
            },
            {
              "coefficients": "Leeftijd vaderbij _geboorte_cat ouder dan 40 jaar",
              "categorie": "Leeftijd vader",
              "name": "40 jaar en ouder",
              "gewicht": -0.32645
            }
          ]
        },
        {
          name: "Herkomst ouders",
          options: [
            {
              "cefficients": "Herkomst ouders: Beide ouders Nederlands",
              "categorie": "Herkomst",
              "name": "Beide ouders Nederlands",
              "gewicht": 0
            },
            {
              "coefficients": "Herkomst ouders: Beide ouders niet Nederlands",
              "categorie": "Herkomst",
              "name": "Beide ouders niet Nederlands",
              "gewicht": 0.16972
            },
            {
              "coefficients": "Herkomst ouders: Een van de ouders Nederlands en de andere niet Nederlands",
              "categorie": "Herkomst",
              "name": "Een van de ouders Nederlands en de andere niet Nederlands",
              "gewicht": -0.08943
            }
          ]
        }
      ]
    },
    {
      name: "Werk & Opleiding",
      selects: [
        {
          name: "Soort onderwijs van het kind",
          options: [
            {
              "coefficients": "SPECIAAL_Onderwijs Niet-regulier onderwijs",
              "categorie": "Soort onderwijs",
              "name": "Niet-regulier onderwijs",
              "gewicht": -0.33031
            },
            {
              "coefficients": "SPECIAAL_Onderwijs Geen onderwijsdata bekend",
              "categorie": "Soort onderwijs",
              "name": "Onderwijs onbekend",
              "gewicht": -0.76957
            },
            {
              "coefficients": "",
              "categorie": "Soort onderwijs",
              "name": "Regulier Onderwijs",
              "gewicht": 0
            }
          ]
        },
        {
          name: "Verandering in het voortgezet onderwijsniveau",
          options: [
            {
              "coefficients": "Onderwijsverandering afschalen",
              "categorie": "Verandering onderwijs niveau",
              "name": "Opschalen of gelijk blijvend",
              "gewicht": 0
            },
            {
              "coefficients": "Onderwijsverandering afschalen",
              "categorie": "Verandering onderwijs niveau",
              "name": "Afschalen",
              "gewicht": 0.58732
            },
            {
              "coefficients": "Onderwijsverandering onbekend",
              "categorie": "Verandering onderwijs niveau",
              "name": "Onbekend",
              "gewicht": -1.11682
            }
          ]
        },
        {
          name: "Voortijdig schoolverlater",
          options: [
            {
              "coefficients": "VSV Niet van toepassing",
              "categorie": "Voortijdig schoolverlaten",
              "name": "Door in onderwijs",
              "gewicht": 0
            },
            {
              "coefficients": "VSV Niet van toepassing",
              "categorie": "Voortijdig schoolverlaten",
              "name": "Niet van toepassing",
              "gewicht": 0.38736
            },
            {
              "coefficients": "VSV Geen data over VSV bekend",
              "categorie": "Voortijdig schoolverlaten",
              "name": "Onbekend",
              "gewicht": 0.80564
            },
            {
              "coefficients": "VSV Geen vsv: uit onderwijs met startkwalificatie",
              "categorie": "Voortijdig schoolverlaten",
              "name": "Uit onderwijs met startkwalificatie",
              "gewicht": -13.64193
            },
            {
              "coefficients": "VSV Voortijdig schoolverlater (vsv)",
              "categorie": "Voortijdig schoolverlaten",
              "name": "Voortijdig schoolverlaten",
              "gewicht": 0.34684
            }
          ]
        },
        {
          name: "Hoogst behaalde onderwijsniveau vader",
          options: [
            {
              "coefficients": "Hoogst behaalde diploma vader Geen onderwijsdata bekend",
              "categorie": "Hoogst behaalde diploma vader",
              "name": "Onderwijs onbekend",
              "gewicht": 0.88464
            },
            {
              "coefficients": "Hoogst behaalde diploma vader Vmbo-b/k, mbo 1 en mbo 2",
              "categorie": "Hoogst behaalde diploma vader",
              "name": "Vmbo b/k, mbo 1 en mbo 2",
              "gewicht": -0.21630
            },
            {
              "coefficients": "Hoogst behaalde diploma vader Vmbo-g/t, mbo 3 en mbo 4",
              "categorie": "Hoogst behaalde diploma vader",
              "name": "Vmbo g/t, mbo 2 en mbo 3",
              "gewicht": 0.67119
            },
            {
              "coefficients": "Hoogst behaalde diploma vader Havo onderbouw, Havo bovenbouw, Hbo bachelor, Hbo master",
              "categorie": "Hoogst behaalde diploma vader",
              "name": "Havo onderbouw, Havo bovenbouw, Hbo bachelor, Hbo master",
              "gewicht": 0
            },
            {
              "coefficients": "Hoogst behaalde diploma vader Vwo en Wo-bachelor en Wo-master",
              "categorie": "Hoogst behaalde diploma vader",
              "name": "Vwo, Wo bachelor en Wo master",
              "gewicht": -12.08995
            }
          ]
        },
        {
          name: "Hoogst behaalde onderwijsniveau moeder",
          options:[
            {
              "coefficients": "Hoogst behaalde diploma moeder Geen onderwijsdata bekend",
              "categorie": "Hoogst behaalde diploma moeder",
              "name": "Onderwijs onbekend",
              "gewicht": 0.03655
            },
            {
              "coefficients": "Hoogst behaalde diploma moeder Vmbo-b/k, mbo 1 en mbo 2",
              "categorie": "Hoogst behaalde diploma moeder",
              "name": "Vmbo b/k, mbo 1 en mbo 2",
              "gewicht": 0.15936
            },
            {
              "coefficients": "Hoogst behaalde diploma moeder Vmbo-g/t, mbo 3 en mbo 4",
              "categorie": "Hoogst behaalde diploma moeder",
              "name": "Vmbo g/t, mbo 2 en mbo 3",
              "gewicht": 0.03334
            },
            {
              "coefficients": "Hoogst behaalde diploma moeder Havo onderbouw, Havo bovenbouw, Hbo bachelor, Hbo master",
              "categorie": "Hoogst behaalde diploma moeder",
              "name": "Havo onderbouw, Havo bovenbouw, Hbo bachelor, Hbo master",
              "gewicht": 0
            },
            {
              "coefficients": "Hoogst behaalde diploma moeder Vwo en Wo-bachelor en Wo-master",
              "categorie": "Hoogst behaalde diploma moeder",
              "name": "Vwo, Wo bachelor en Wo master",
              "gewicht": -13.03162
            }
          ]
        }
      ]
    },
    {
      name: "Huisvesting",
      selects: [
        {
          name: "Soort woning",
          options: [
            {
              "coefficients": "Soort woning eigen woning",
              "categorie": "Soort woning",
              "name": "Eigen woning",
              "gewicht": 0
            },
            {
              "coefficients": "Soort woning Huurwoning, met huurtoeslag",
              "categorie": "Soort woning",
              "name": "Huurwoning met huurtoeslag",
              "gewicht": 0.38401
            },
            {
              "coefficients": "Soort woning Huurwoning, zonder huurtoeslag",
              "categorie": "Soort woning",
              "name": "Huurwoning zonder huurtoeslag",
              "gewicht": 0.40420
            },
            {
              "coefficients": "Soort woning onbekend",
              "categorie": "Soort woning",
              "name": "Onbekend",
              "gewicht": 2.40126
            }
          ]
        },
        {
          name: "type huishouden",
          options: [
            {
              "coefficients": "Type huishouden: Eenouderhuishouden",
              "categorie": "Type huishouden",
              "name": "Eenouderhuishouden",
              "gewicht": 0.49608
            },
            {
              "coefficients": "Type huishouden: Gehuwd paar met kinderen",
              "categorie": "Type huishouden",
              "name": "Gehuwd paar met kinderen",
              "gewicht": 0
            },
            {
              "coefficients": "Type huishouden: Eenpersoonshuishouden",
              "categorie": "Type huishouden",
              "name": "Eenpersoonshuishouden",
              "gewicht": 1.71859
            },
            {
              "coefficients": "Type huishouden: Gehuwd paar zonder kinderen",
              "categorie": "Type huishouden",
              "name": "Gehuwd paar zonder kinderen",
              "gewicht": 1.06108
            },
            {
              "coefficients": "Type huishouden: Institutioneel huishouden",
              "categorie": "Type huishouden",
              "name": "Institutioneel huishouden",
              "gewicht": 1.92321
            },
            {
              "coefficients": "Type huishouden: Niet-gehuwd paar met kinderen",
              "categorie": "Type huishouden",
              "name": "Niet-gehuwd paar met kinderen",
              "gewicht": 0.32694
            },
            {
              "coefficients": "Type huishouden:Niet-gehuwd paar zonder kinderen",
              "categorie": "Type huishouden",
              "name": "Niet-gehuwd paar zonder kinderen",
              "gewicht": -14.15530
            },
            {
              "coefficients": "Type huishouden: Onbekend",
              "categorie": "Type huishouden",
              "name": "Onbekend huishouden",
              "gewicht": -13.81002
            },
            {
              "coefficients": "Type huishouden: Overig huishouden",
              "categorie": "Type huishouden",
              "name": "Overig huishouden",
              "gewicht": 0.91365
            }
          ]
        }
      ]
    },
    {
      name: "Huiselijke relaties",
      selects:[
        {
          name: "Ouders gescheiden",
          options: [
            {
              "coefficients": "Geen scheiding",
              "categorie": "Gescheiden ouders",
              "name": "Nee",
              "gewicht": 0
            },
            {
              "coefficients": "Scheiding",
              "categorie": "Gescheiden ouders",
              "name": "Ja",
              "gewicht": 0.27683
            }
          ]
        }
      ]
    },
    {
      name: "Geestelijke gezondheid",
      selects:[
        {
          name: "Als slachtoffer bekend bij slachtofferhulp",
          options: [
            {
              "coefficients": "Slachtoffer Nee",
              "categorie": "Slachtoffer",
              "name": "Nee",
              "gewicht": 0
            },
            {
              "coefficients": "Slachtoffer Ja",
              "categorie": "Slachtoffer",
              "name": "Ja",
              "gewicht": 0.23639
            }
          ]
        }
      ]
    },
    {
      name: "Justitie",
      selects:[
        {
          name: "Kind in het verleden verdacht geweest van een delict",
          options: [
            {
              "coefficients": "Verdenking misdrijf KIND Nee",
              "categorie": "Kind verdacht",
              "name": "Nee",
              "gewicht": 0
            },
            {
              "coefficients": "Verdenking misdrijf KIND Ja",
              "categorie": "Kind verdacht",
              "name": "Ja",
              "gewicht": 0.94738
            }
          ]
        },
        {
          name: "Kind in aanraking geweest met bureau HALT voor een delict",
          options: [
            {
              "coefficients": "HALTDELICT Ja",
              "categorie": "Halt delict",
              "name": "Nee",
              "gewicht": 0
            },
            {
              "coefficients": "HALTDELICT Ja",
              "categorie": "Halt delict",
              "name": "Ja",
              "gewicht": 0.36448
            }
          ]
        },
        {
          name: "Vader of moeder verdacht van delict in het verleden",
          options: [
            {
              "coefficients": "Verdenking misdrijf Vader of moeder Nee",
              "categorie": "Vader of moeder verdacht",
              "name": "Nee",
              "gewicht": 0
            },
            {
              "coefficients": "Verdenking misdrijf Vader of moeder Ja",
              "nategorie": "Vader of moeder verdacht",
              "name": "Ja",
              "gewicht": 0.50027
            }
          ]
        }
      ]
    }
  ]
};
