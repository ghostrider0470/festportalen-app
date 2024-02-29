import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {useState} from "react";

const FilterSidebar = () => {
    const json = [
        {
            "regionId": 42,
            "regionName": "Agder",
            "counties": [
                {
                    "countyId": 4217,
                    "countyName": "Åmli"
                },
                {
                    "countyId": 4203,
                    "countyName": "Arendal"
                },
                {
                    "countyId": 4224,
                    "countyName": "Åseral"
                },
                {
                    "countyId": 4216,
                    "countyName": "Birkenes"
                },
                {
                    "countyId": 4220,
                    "countyName": "Bygland"
                },
                {
                    "countyId": 4222,
                    "countyName": "Bykle"
                },
                {
                    "countyId": 4219,
                    "countyName": "Evje og Hornnes"
                },
                {
                    "countyId": 4206,
                    "countyName": "Farsund"
                },
                {
                    "countyId": 4207,
                    "countyName": "Flekkefjord"
                },
                {
                    "countyId": 4214,
                    "countyName": "Froland"
                },
                {
                    "countyId": 4211,
                    "countyName": "Gjerstad"
                },
                {
                    "countyId": 4202,
                    "countyName": "Grimstad"
                },
                {
                    "countyId": 4226,
                    "countyName": "Hægebostad"
                },
                {
                    "countyId": 4218,
                    "countyName": "Iveland"
                },
                {
                    "countyId": 4204,
                    "countyName": "Kristiansand"
                },
                {
                    "countyId": 4227,
                    "countyName": "Kvinesdal"
                },
                {
                    "countyId": 4215,
                    "countyName": "Lillesand"
                },
                {
                    "countyId": 4205,
                    "countyName": "Lindesnes"
                },
                {
                    "countyId": 4225,
                    "countyName": "Lyngdal"
                },
                {
                    "countyId": 4201,
                    "countyName": "Risør"
                },
                {
                    "countyId": 4228,
                    "countyName": "Sirdal"
                },
                {
                    "countyId": 4213,
                    "countyName": "Tvedestrand"
                },
                {
                    "countyId": 4221,
                    "countyName": "Valle"
                },
                {
                    "countyId": 4212,
                    "countyName": "Vegårshei"
                },
                {
                    "countyId": 4223,
                    "countyName": "Vennesla"
                }
            ]
        },
        {
            "regionId": 34,
            "regionName": "Innlandet",
            "counties": [
                {
                    "countyId": 3428,
                    "countyName": "Alvdal"
                },
                {
                    "countyId": 3422,
                    "countyName": "Åmot"
                },
                {
                    "countyId": 3418,
                    "countyName": "Åsnes"
                },
                {
                    "countyId": 3431,
                    "countyName": "Dovre"
                },
                {
                    "countyId": 3416,
                    "countyName": "Eidskog"
                },
                {
                    "countyId": 3420,
                    "countyName": "Elverum"
                },
                {
                    "countyId": 3425,
                    "countyName": "Engerdal"
                },
                {
                    "countyId": 3450,
                    "countyName": "Etnedal"
                },
                {
                    "countyId": 3429,
                    "countyName": "Folldal"
                },
                {
                    "countyId": 3441,
                    "countyName": "Gausdal"
                },
                {
                    "countyId": 3407,
                    "countyName": "Gjøvik"
                },
                {
                    "countyId": 3446,
                    "countyName": "Gran"
                },
                {
                    "countyId": 3417,
                    "countyName": "Grue"
                },
                {
                    "countyId": 3403,
                    "countyName": "Hamar"
                },
                {
                    "countyId": 3401,
                    "countyName": "Kongsvinger"
                },
                {
                    "countyId": 3432,
                    "countyName": "Lesja"
                },
                {
                    "countyId": 3405,
                    "countyName": "Lillehammer"
                },
                {
                    "countyId": 3434,
                    "countyName": "Lom"
                },
                {
                    "countyId": 3412,
                    "countyName": "Løten"
                },
                {
                    "countyId": 3451,
                    "countyName": "Nord-Aurdal"
                },
                {
                    "countyId": 3436,
                    "countyName": "Nord-Fron"
                },
                {
                    "countyId": 3414,
                    "countyName": "Nord-Odal"
                },
                {
                    "countyId": 3448,
                    "countyName": "Nordre Land"
                },
                {
                    "countyId": 3430,
                    "countyName": "Os"
                },
                {
                    "countyId": 3442,
                    "countyName": "Østre Toten"
                },
                {
                    "countyId": 3440,
                    "countyName": "Øyer"
                },
                {
                    "countyId": 3453,
                    "countyName": "Øystre Slidre"
                },
                {
                    "countyId": 3424,
                    "countyName": "Rendalen"
                },
                {
                    "countyId": 3439,
                    "countyName": "Ringebu"
                },
                {
                    "countyId": 3411,
                    "countyName": "Ringsaker"
                },
                {
                    "countyId": 3437,
                    "countyName": "Sel"
                },
                {
                    "countyId": 3433,
                    "countyName": "Skjåk"
                },
                {
                    "countyId": 3447,
                    "countyName": "Søndre Land"
                },
                {
                    "countyId": 3449,
                    "countyName": "Sør-Aurdal"
                },
                {
                    "countyId": 3438,
                    "countyName": "Sør-Fron"
                },
                {
                    "countyId": 3415,
                    "countyName": "Sør-Odal"
                },
                {
                    "countyId": 3413,
                    "countyName": "Stange"
                },
                {
                    "countyId": 3423,
                    "countyName": "Stor-Elvdal"
                },
                {
                    "countyId": 3426,
                    "countyName": "Tolga"
                },
                {
                    "countyId": 3421,
                    "countyName": "Trysil"
                },
                {
                    "countyId": 3427,
                    "countyName": "Tynset"
                },
                {
                    "countyId": 3435,
                    "countyName": "Vågå"
                },
                {
                    "countyId": 3419,
                    "countyName": "Våler"
                },
                {
                    "countyId": 3454,
                    "countyName": "Vang"
                },
                {
                    "countyId": 3452,
                    "countyName": "Vestre Slidre"
                },
                {
                    "countyId": 3443,
                    "countyName": "Vestre Toten"
                }
            ]
        },
        {
            "regionId": 15,
            "regionName": "Møre og Romsdal",
            "counties": [
                {
                    "countyId": 1507,
                    "countyName": "Ålesund"
                },
                {
                    "countyId": 1547,
                    "countyName": "Aukra"
                },
                {
                    "countyId": 1576,
                    "countyName": "Aure"
                },
                {
                    "countyId": 1554,
                    "countyName": "Averøy"
                },
                {
                    "countyId": 1578,
                    "countyName": "Fjord"
                },
                {
                    "countyId": 1532,
                    "countyName": "Giske"
                },
                {
                    "countyId": 1557,
                    "countyName": "Gjemnes"
                },
                {
                    "countyId": 1517,
                    "countyName": "Hareid"
                },
                {
                    "countyId": 1515,
                    "countyName": "Herøy"
                },
                {
                    "countyId": 1579,
                    "countyName": "Hustadvika"
                },
                {
                    "countyId": 1505,
                    "countyName": "Kristiansund"
                },
                {
                    "countyId": 1506,
                    "countyName": "Molde"
                },
                {
                    "countyId": 1520,
                    "countyName": "Ørsta"
                },
                {
                    "countyId": 1539,
                    "countyName": "Rauma"
                },
                {
                    "countyId": 1514,
                    "countyName": "Sande"
                },
                {
                    "countyId": 1573,
                    "countyName": "Smøla"
                },
                {
                    "countyId": 1525,
                    "countyName": "Stranda"
                },
                {
                    "countyId": 1531,
                    "countyName": "Sula"
                },
                {
                    "countyId": 1563,
                    "countyName": "Sunndal"
                },
                {
                    "countyId": 1566,
                    "countyName": "Surnadal"
                },
                {
                    "countyId": 1528,
                    "countyName": "Sykkylven"
                },
                {
                    "countyId": 1560,
                    "countyName": "Tingvoll"
                },
                {
                    "countyId": 1516,
                    "countyName": "Ulstein"
                },
                {
                    "countyId": 1511,
                    "countyName": "Vanylven"
                },
                {
                    "countyId": 1535,
                    "countyName": "Vestnes"
                },
                {
                    "countyId": 1577,
                    "countyName": "Volda"
                }
            ]
        },
        {
            "regionId": 18,
            "regionName": "Nordland",
            "counties": [
                {
                    "countyId": 1826,
                    "countyName": "Aarborte - Hattfjelldal"
                },
                {
                    "countyId": 1820,
                    "countyName": "Alstahaug"
                },
                {
                    "countyId": 1871,
                    "countyName": "Andøy"
                },
                {
                    "countyId": 1839,
                    "countyName": "Beiarn"
                },
                {
                    "countyId": 1811,
                    "countyName": "Bindal"
                },
                {
                    "countyId": 1867,
                    "countyName": "Bø"
                },
                {
                    "countyId": 1804,
                    "countyName": "Bodø"
                },
                {
                    "countyId": 1813,
                    "countyName": "Brønnøy"
                },
                {
                    "countyId": 1827,
                    "countyName": "Dønna"
                },
                {
                    "countyId": 1853,
                    "countyName": "Evenes - Evenášši"
                },
                {
                    "countyId": 1841,
                    "countyName": "Fauske - Fuossko"
                },
                {
                    "countyId": 1859,
                    "countyName": "Flakstad"
                },
                {
                    "countyId": 1838,
                    "countyName": "Gildeskål"
                },
                {
                    "countyId": 1825,
                    "countyName": "Grane"
                },
                {
                    "countyId": 1875,
                    "countyName": "Hábmer - Hamarøy"
                },
                {
                    "countyId": 1866,
                    "countyName": "Hadsel"
                },
                {
                    "countyId": 1832,
                    "countyName": "Hemnes"
                },
                {
                    "countyId": 1818,
                    "countyName": "Herøy"
                },
                {
                    "countyId": 1822,
                    "countyName": "Leirfjord"
                },
                {
                    "countyId": 1851,
                    "countyName": "Lødingen"
                },
                {
                    "countyId": 1834,
                    "countyName": "Lurøy"
                },
                {
                    "countyId": 1837,
                    "countyName": "Meløy"
                },
                {
                    "countyId": 1874,
                    "countyName": "Moskenes"
                },
                {
                    "countyId": 1806,
                    "countyName": "Narvik"
                },
                {
                    "countyId": 1828,
                    "countyName": "Nesna"
                },
                {
                    "countyId": 1868,
                    "countyName": "Øksnes"
                },
                {
                    "countyId": 1833,
                    "countyName": "Rana"
                },
                {
                    "countyId": 1836,
                    "countyName": "Rødøy"
                },
                {
                    "countyId": 1856,
                    "countyName": "Røst"
                },
                {
                    "countyId": 1840,
                    "countyName": "Saltdal"
                },
                {
                    "countyId": 1812,
                    "countyName": "Sømna"
                },
                {
                    "countyId": 1845,
                    "countyName": "Sørfold"
                },
                {
                    "countyId": 1870,
                    "countyName": "Sortland - Suortá"
                },
                {
                    "countyId": 1848,
                    "countyName": "Steigen"
                },
                {
                    "countyId": 1835,
                    "countyName": "Træna"
                },
                {
                    "countyId": 1857,
                    "countyName": "Værøy"
                },
                {
                    "countyId": 1865,
                    "countyName": "Vågan"
                },
                {
                    "countyId": 1824,
                    "countyName": "Vefsn"
                },
                {
                    "countyId": 1815,
                    "countyName": "Vega"
                },
                {
                    "countyId": 1860,
                    "countyName": "Vestvågøy"
                },
                {
                    "countyId": 1816,
                    "countyName": "Vevelstad"
                }
            ]
        },
        {
            "regionId": 3,
            "regionName": "Oslo",
            "counties": [
                {
                    "countyId": 301,
                    "countyName": "Oslo"
                }
            ]
        },
        {
            "regionId": 11,
            "regionName": "Rogaland",
            "counties": [
                {
                    "countyId": 1114,
                    "countyName": "Bjerkreim"
                },
                {
                    "countyId": 1145,
                    "countyName": "Bokn"
                },
                {
                    "countyId": 1101,
                    "countyName": "Eigersund"
                },
                {
                    "countyId": 1122,
                    "countyName": "Gjesdal"
                },
                {
                    "countyId": 1119,
                    "countyName": "Hå"
                },
                {
                    "countyId": 1106,
                    "countyName": "Haugesund"
                },
                {
                    "countyId": 1133,
                    "countyName": "Hjelmeland"
                },
                {
                    "countyId": 1149,
                    "countyName": "Karmøy"
                },
                {
                    "countyId": 1120,
                    "countyName": "Klepp"
                },
                {
                    "countyId": 1144,
                    "countyName": "Kvitsøy"
                },
                {
                    "countyId": 1112,
                    "countyName": "Lund"
                },
                {
                    "countyId": 1127,
                    "countyName": "Randaberg"
                },
                {
                    "countyId": 1108,
                    "countyName": "Sandnes"
                },
                {
                    "countyId": 1135,
                    "countyName": "Sauda"
                },
                {
                    "countyId": 1111,
                    "countyName": "Sokndal"
                },
                {
                    "countyId": 1124,
                    "countyName": "Sola"
                },
                {
                    "countyId": 1103,
                    "countyName": "Stavanger"
                },
                {
                    "countyId": 1130,
                    "countyName": "Strand"
                },
                {
                    "countyId": 1134,
                    "countyName": "Suldal"
                },
                {
                    "countyId": 1121,
                    "countyName": "Time"
                },
                {
                    "countyId": 1146,
                    "countyName": "Tysvær"
                },
                {
                    "countyId": 1151,
                    "countyName": "Utsira"
                },
                {
                    "countyId": 1160,
                    "countyName": "Vindafjord"
                }
            ]
        },
        {
            "regionId": 54,
            "regionName": "Troms og Finnmark",
            "counties": [
                {
                    "countyId": 5403,
                    "countyName": "Alta"
                },
                {
                    "countyId": 5422,
                    "countyName": "Balsfjord"
                },
                {
                    "countyId": 5416,
                    "countyName": "Bardu"
                },
                {
                    "countyId": 5443,
                    "countyName": "Båtsfjord"
                },
                {
                    "countyId": 5440,
                    "countyName": "Berlevåg"
                },
                {
                    "countyId": 5441,
                    "countyName": "Deatnu - Tana"
                },
                {
                    "countyId": 5420,
                    "countyName": "Dyrøy"
                },
                {
                    "countyId": 5426,
                    "countyName": "Gáivuotna - Kåfjord - Kaivuono"
                },
                {
                    "countyId": 5439,
                    "countyName": "Gamvik"
                },
                {
                    "countyId": 5414,
                    "countyName": "Gratangen"
                },
                {
                    "countyId": 5430,
                    "countyName": "Guovdageaidnu - Kautokeino"
                },
                {
                    "countyId": 5406,
                    "countyName": "Hammerfest - Hámmerfeasta"
                },
                {
                    "countyId": 5402,
                    "countyName": "Harstad - Hárstták"
                },
                {
                    "countyId": 5433,
                    "countyName": "Hasvik"
                },
                {
                    "countyId": 5413,
                    "countyName": "Ibestad"
                },
                {
                    "countyId": 5437,
                    "countyName": "Kárášjohka - Karasjok"
                },
                {
                    "countyId": 5423,
                    "countyName": "Karlsøy"
                },
                {
                    "countyId": 5411,
                    "countyName": "Kvæfjord"
                },
                {
                    "countyId": 5429,
                    "countyName": "Kvænangen"
                },
                {
                    "countyId": 5438,
                    "countyName": "Lebesby"
                },
                {
                    "countyId": 5415,
                    "countyName": "Loabák - Lavangen"
                },
                {
                    "countyId": 5432,
                    "countyName": "Loppa"
                },
                {
                    "countyId": 5424,
                    "countyName": "Lyngen"
                },
                {
                    "countyId": 5418,
                    "countyName": "Målselv"
                },
                {
                    "countyId": 5434,
                    "countyName": "Måsøy"
                },
                {
                    "countyId": 5435,
                    "countyName": "Nordkapp"
                },
                {
                    "countyId": 5428,
                    "countyName": "Nordreisa - Ráisa - Raisi"
                },
                {
                    "countyId": 5436,
                    "countyName": "Porsanger - Porsáŋgu - Porsanki"
                },
                {
                    "countyId": 5417,
                    "countyName": "Salangen"
                },
                {
                    "countyId": 5421,
                    "countyName": "Senja"
                },
                {
                    "countyId": 5427,
                    "countyName": "Skjervøy"
                },
                {
                    "countyId": 5444,
                    "countyName": "Sør-Varanger"
                },
                {
                    "countyId": 5419,
                    "countyName": "Sørreisa"
                },
                {
                    "countyId": 5425,
                    "countyName": "Storfjord - Omasvuotna - Omasvuono"
                },
                {
                    "countyId": 5412,
                    "countyName": "Tjeldsund - Dielddanuorri"
                },
                {
                    "countyId": 5401,
                    "countyName": "Tromsø"
                },
                {
                    "countyId": 5442,
                    "countyName": "Unjárga - Nesseby"
                },
                {
                    "countyId": 5405,
                    "countyName": "Vadsø"
                },
                {
                    "countyId": 5404,
                    "countyName": "Vardø"
                }
            ]
        },
        {
            "regionId": 50,
            "regionName": "Trøndelag",
            "counties": [
                {
                    "countyId": 5058,
                    "countyName": "Åfjord"
                },
                {
                    "countyId": 5049,
                    "countyName": "Flatanger"
                },
                {
                    "countyId": 5036,
                    "countyName": "Frosta"
                },
                {
                    "countyId": 5014,
                    "countyName": "Frøya"
                },
                {
                    "countyId": 5045,
                    "countyName": "Grong"
                },
                {
                    "countyId": 5055,
                    "countyName": "Heim"
                },
                {
                    "countyId": 5056,
                    "countyName": "Hitra"
                },
                {
                    "countyId": 5026,
                    "countyName": "Holtålen"
                },
                {
                    "countyId": 5046,
                    "countyName": "Høylandet"
                },
                {
                    "countyId": 5053,
                    "countyName": "Inderøy"
                },
                {
                    "countyId": 5054,
                    "countyName": "Indre Fosen"
                },
                {
                    "countyId": 5052,
                    "countyName": "Leka"
                },
                {
                    "countyId": 5037,
                    "countyName": "Levanger"
                },
                {
                    "countyId": 5042,
                    "countyName": "Lierne"
                },
                {
                    "countyId": 5031,
                    "countyName": "Malvik"
                },
                {
                    "countyId": 5028,
                    "countyName": "Melhus"
                },
                {
                    "countyId": 5034,
                    "countyName": "Meråker"
                },
                {
                    "countyId": 5027,
                    "countyName": "Midtre Gauldal"
                },
                {
                    "countyId": 5060,
                    "countyName": "Nærøysund"
                },
                {
                    "countyId": 5007,
                    "countyName": "Namsos - Nåavmesjenjaelmie"
                },
                {
                    "countyId": 5044,
                    "countyName": "Namsskogan"
                },
                {
                    "countyId": 5021,
                    "countyName": "Oppdal"
                },
                {
                    "countyId": 5059,
                    "countyName": "Orkland"
                },
                {
                    "countyId": 5057,
                    "countyName": "Ørland"
                },
                {
                    "countyId": 5020,
                    "countyName": "Osen"
                },
                {
                    "countyId": 5047,
                    "countyName": "Overhalla"
                },
                {
                    "countyId": 5043,
                    "countyName": "Raarvihke - Røyrvik"
                },
                {
                    "countyId": 5022,
                    "countyName": "Rennebu"
                },
                {
                    "countyId": 5061,
                    "countyName": "Rindal"
                },
                {
                    "countyId": 5025,
                    "countyName": "Røros"
                },
                {
                    "countyId": 5032,
                    "countyName": "Selbu"
                },
                {
                    "countyId": 5029,
                    "countyName": "Skaun"
                },
                {
                    "countyId": 5041,
                    "countyName": "Snåase - Snåsa"
                },
                {
                    "countyId": 5006,
                    "countyName": "Steinkjer"
                },
                {
                    "countyId": 5035,
                    "countyName": "Stjørdal"
                },
                {
                    "countyId": 5001,
                    "countyName": "Trondheim"
                },
                {
                    "countyId": 5033,
                    "countyName": "Tydal"
                },
                {
                    "countyId": 5038,
                    "countyName": "Verdal"
                }
            ]
        },
        {
            "regionId": 38,
            "regionName": "Vestfold og Telemark",
            "counties": [
                {
                    "countyId": 3813,
                    "countyName": "Bamble"
                },
                {
                    "countyId": 3815,
                    "countyName": "Drangedal"
                },
                {
                    "countyId": 3811,
                    "countyName": "Færder"
                },
                {
                    "countyId": 3823,
                    "countyName": "Fyresdal"
                },
                {
                    "countyId": 3819,
                    "countyName": "Hjartdal"
                },
                {
                    "countyId": 3802,
                    "countyName": "Holmestrand"
                },
                {
                    "countyId": 3801,
                    "countyName": "Horten"
                },
                {
                    "countyId": 3814,
                    "countyName": "Kragerø"
                },
                {
                    "countyId": 3821,
                    "countyName": "Kviteseid"
                },
                {
                    "countyId": 3805,
                    "countyName": "Larvik"
                },
                {
                    "countyId": 3817,
                    "countyName": "Midt-Telemark"
                },
                {
                    "countyId": 3822,
                    "countyName": "Nissedal"
                },
                {
                    "countyId": 3816,
                    "countyName": "Nome"
                },
                {
                    "countyId": 3808,
                    "countyName": "Notodden"
                },
                {
                    "countyId": 3806,
                    "countyName": "Porsgrunn"
                },
                {
                    "countyId": 3804,
                    "countyName": "Sandefjord"
                },
                {
                    "countyId": 3820,
                    "countyName": "Seljord"
                },
                {
                    "countyId": 3812,
                    "countyName": "Siljan"
                },
                {
                    "countyId": 3807,
                    "countyName": "Skien"
                },
                {
                    "countyId": 3818,
                    "countyName": "Tinn"
                },
                {
                    "countyId": 3824,
                    "countyName": "Tokke"
                },
                {
                    "countyId": 3803,
                    "countyName": "Tønsberg"
                },
                {
                    "countyId": 3825,
                    "countyName": "Vinje"
                }
            ]
        },
        {
            "regionId": 46,
            "regionName": "Vestland",
            "counties": [
                {
                    "countyId": 4631,
                    "countyName": "Alver"
                },
                {
                    "countyId": 4643,
                    "countyName": "Årdal"
                },
                {
                    "countyId": 4627,
                    "countyName": "Askøy"
                },
                {
                    "countyId": 4645,
                    "countyName": "Askvoll"
                },
                {
                    "countyId": 4641,
                    "countyName": "Aurland"
                },
                {
                    "countyId": 4625,
                    "countyName": "Austevoll"
                },
                {
                    "countyId": 4632,
                    "countyName": "Austrheim"
                },
                {
                    "countyId": 4601,
                    "countyName": "Bergen"
                },
                {
                    "countyId": 4624,
                    "countyName": "Bjørnafjorden"
                },
                {
                    "countyId": 4613,
                    "countyName": "Bømlo"
                },
                {
                    "countyId": 4648,
                    "countyName": "Bremanger"
                },
                {
                    "countyId": 4619,
                    "countyName": "Eidfjord"
                },
                {
                    "countyId": 4611,
                    "countyName": "Etne"
                },
                {
                    "countyId": 4633,
                    "countyName": "Fedje"
                },
                {
                    "countyId": 4615,
                    "countyName": "Fitjar"
                },
                {
                    "countyId": 4646,
                    "countyName": "Fjaler"
                },
                {
                    "countyId": 4650,
                    "countyName": "Gloppen"
                },
                {
                    "countyId": 4635,
                    "countyName": "Gulen"
                },
                {
                    "countyId": 4638,
                    "countyName": "Høyanger"
                },
                {
                    "countyId": 4637,
                    "countyName": "Hyllestad"
                },
                {
                    "countyId": 4602,
                    "countyName": "Kinn"
                },
                {
                    "countyId": 4622,
                    "countyName": "Kvam"
                },
                {
                    "countyId": 4617,
                    "countyName": "Kvinnherad"
                },
                {
                    "countyId": 4642,
                    "countyName": "Lærdal"
                },
                {
                    "countyId": 4644,
                    "countyName": "Luster"
                },
                {
                    "countyId": 4634,
                    "countyName": "Masfjorden"
                },
                {
                    "countyId": 4629,
                    "countyName": "Modalen"
                },
                {
                    "countyId": 4630,
                    "countyName": "Osterøy"
                },
                {
                    "countyId": 4626,
                    "countyName": "Øygarden"
                },
                {
                    "countyId": 4623,
                    "countyName": "Samnanger"
                },
                {
                    "countyId": 4640,
                    "countyName": "Sogndal"
                },
                {
                    "countyId": 4636,
                    "countyName": "Solund"
                },
                {
                    "countyId": 4649,
                    "countyName": "Stad"
                },
                {
                    "countyId": 4614,
                    "countyName": "Stord"
                },
                {
                    "countyId": 4651,
                    "countyName": "Stryn"
                },
                {
                    "countyId": 4647,
                    "countyName": "Sunnfjord"
                },
                {
                    "countyId": 4612,
                    "countyName": "Sveio"
                },
                {
                    "countyId": 4616,
                    "countyName": "Tysnes"
                },
                {
                    "countyId": 4618,
                    "countyName": "Ullensvang"
                },
                {
                    "countyId": 4620,
                    "countyName": "Ulvik"
                },
                {
                    "countyId": 4628,
                    "countyName": "Vaksdal"
                },
                {
                    "countyId": 4639,
                    "countyName": "Vik"
                },
                {
                    "countyId": 4621,
                    "countyName": "Voss"
                }
            ]
        },
        {
            "regionId": 30,
            "regionName": "Viken",
            "counties": [
                {
                    "countyId": 3043,
                    "countyName": "Ål"
                },
                {
                    "countyId": 3012,
                    "countyName": "Aremark"
                },
                {
                    "countyId": 3021,
                    "countyName": "Ås"
                },
                {
                    "countyId": 3025,
                    "countyName": "Asker"
                },
                {
                    "countyId": 3026,
                    "countyName": "Aurskog-Høland"
                },
                {
                    "countyId": 3024,
                    "countyName": "Bærum"
                },
                {
                    "countyId": 3005,
                    "countyName": "Drammen"
                },
                {
                    "countyId": 3035,
                    "countyName": "Eidsvoll"
                },
                {
                    "countyId": 3028,
                    "countyName": "Enebakk"
                },
                {
                    "countyId": 3039,
                    "countyName": "Flå"
                },
                {
                    "countyId": 3050,
                    "countyName": "Flesberg"
                },
                {
                    "countyId": 3004,
                    "countyName": "Fredrikstad"
                },
                {
                    "countyId": 3022,
                    "countyName": "Frogn"
                },
                {
                    "countyId": 3032,
                    "countyName": "Gjerdrum"
                },
                {
                    "countyId": 3041,
                    "countyName": "Gol"
                },
                {
                    "countyId": 3001,
                    "countyName": "Halden"
                },
                {
                    "countyId": 3042,
                    "countyName": "Hemsedal"
                },
                {
                    "countyId": 3044,
                    "countyName": "Hol"
                },
                {
                    "countyId": 3038,
                    "countyName": "Hole"
                },
                {
                    "countyId": 3037,
                    "countyName": "Hurdal"
                },
                {
                    "countyId": 3011,
                    "countyName": "Hvaler"
                },
                {
                    "countyId": 3014,
                    "countyName": "Indre Østfold"
                },
                {
                    "countyId": 3053,
                    "countyName": "Jevnaker"
                },
                {
                    "countyId": 3006,
                    "countyName": "Kongsberg"
                },
                {
                    "countyId": 3046,
                    "countyName": "Krødsherad"
                },
                {
                    "countyId": 3049,
                    "countyName": "Lier"
                },
                {
                    "countyId": 3030,
                    "countyName": "Lillestrøm"
                },
                {
                    "countyId": 3029,
                    "countyName": "Lørenskog"
                },
                {
                    "countyId": 3054,
                    "countyName": "Lunner"
                },
                {
                    "countyId": 3013,
                    "countyName": "Marker"
                },
                {
                    "countyId": 3047,
                    "countyName": "Modum"
                },
                {
                    "countyId": 3002,
                    "countyName": "Moss"
                },
                {
                    "countyId": 3036,
                    "countyName": "Nannestad"
                },
                {
                    "countyId": 3034,
                    "countyName": "Nes"
                },
                {
                    "countyId": 3040,
                    "countyName": "Nesbyen"
                },
                {
                    "countyId": 3023,
                    "countyName": "Nesodden"
                },
                {
                    "countyId": 3031,
                    "countyName": "Nittedal"
                },
                {
                    "countyId": 3020,
                    "countyName": "Nordre Follo"
                },
                {
                    "countyId": 3052,
                    "countyName": "Nore og Uvdal"
                },
                {
                    "countyId": 3048,
                    "countyName": "Øvre Eiker"
                },
                {
                    "countyId": 3017,
                    "countyName": "Råde"
                },
                {
                    "countyId": 3027,
                    "countyName": "Rælingen"
                },
                {
                    "countyId": 3016,
                    "countyName": "Rakkestad"
                },
                {
                    "countyId": 3007,
                    "countyName": "Ringerike"
                },
                {
                    "countyId": 3051,
                    "countyName": "Rollag"
                },
                {
                    "countyId": 3003,
                    "countyName": "Sarpsborg"
                },
                {
                    "countyId": 3045,
                    "countyName": "Sigdal"
                },
                {
                    "countyId": 3015,
                    "countyName": "Skiptvet"
                },
                {
                    "countyId": 3033,
                    "countyName": "Ullensaker"
                },
                {
                    "countyId": 3018,
                    "countyName": "Våler"
                },
                {
                    "countyId": 3019,
                    "countyName": "Vestby"
                }
            ]
        }
    ];

    const [checkedState, setCheckedState] = useState(
        json.map(region => ({[region.regionId]: false}))
    );

    const handleCheckChange = (regionId) => {
        setCheckedState(prevState => prevState.map(item =>
            item[regionId] !== undefined
                ? {[regionId]: !item[regionId]}
                : item
        ));
    };

    const isRegionChecked = (regionId) => {
        const regionState = checkedState.find(item => item[regionId] !== undefined);
        return regionState ? regionState[regionId] : false;
    };

    return (
        <Box sx={{width: '50%'}}>
            <Typography variant='h5'>Locations</Typography>
            {json.map((region, index) => (
                <div key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => handleCheckChange(region.regionId)}
                            />
                        }
                        label={region.regionName}
                    />
                    {isRegionChecked(region.regionId) && region.counties.map((county, index) => (
                        <div key={index} style={{marginLeft: '20px'}}>
                            <FormControlLabel
                                control={<Checkbox/>}
                                label={county.countyName}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </Box>
    );
};

export default FilterSidebar;