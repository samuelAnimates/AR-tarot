"use strict";

const app = {
  "tarotDeckObj": {
                "1": {
                  "name": "The Fool",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Intoxication", "Extravagance", "Delusional"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Vanity","Carelessness","Apathy"]
                },
                "2": {
                  "name": "The Magician",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Disquiet","Disgrace","Distrust"]
                },
                "3": {
                  "name": "The High Priestess",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Wisdom", "Mystery", "Secrecy"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Superficial","Conceit","Vapid"]
                },
                "4": {
                  "name": "The Empress",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Fruitfulness","Nature","Provider"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Unraveling","Overwhelming","Indecision"]
                },
                "5": {
                  "name": "The Emperor",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Stability", "Power", "Authority"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Innocence","Immaturity","Confusion"]
                },
                "6": {
                  "name": "The Hierophant",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Servitude", "Tradition", "Hierarchy"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Anarchy","Subversion","Questioning"]
                },
                "7": {
                  "name": "The Lovers",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Respect", "Support", "Partnership"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Imbalance","Infidelity","Disagreements"]
                },
                "8": {
                  "name": "The Chariot",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Triumph", "Perseverance", "Conquest"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Defeat","Dispute","Aimlessness"]
                },
                "9": {
                  "name": "Strength",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Power", "Energy", "Action"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Abuse of power","Shakiness","Disgrace"]
                },
                "10": {
                  "name": "The Hermit",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Reflection", "Concealment", "Vigilance"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Disguise","Fear","Paranoia"]
                },
                "11": {
                  "name": "Wheel of Fortune",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Happenstance", "Development", "Fate"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "12": {
                  "name": "Justice",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "13": {
                  "name": "The Hanged Man",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "14": {
                  "name": "Death",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "15": {
                  "name": "Temperance",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "16": {
                  "name": "The Devil",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "17": {
                  "name": "The Tower",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "18": {
                  "name": "The Star",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "19": {
                  "name": "The Moon",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "20": {
                  "name": "The Sun",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "21": {
                  "name": "Judgement",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "22": {
                  "name": "The World",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "23": {
                  "name": "Ace of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "24": {
                  "name": "Two of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "25": {
                  "name": "Three of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "26": {
                  "name": "Four of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "27": {
                  "name": "Five of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "28": {
                  "name": "Six of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "29": {
                  "name": "Seven of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "30": {
                  "name": "Eight of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "31": {
                  "name": "Nine of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "32": {
                  "name": "Ten of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "33": {
                  "name": "Page of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, ",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "34": {
                  "name": "Knight of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "35": {
                  "name": "Queen of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "36": {
                  "name": "King of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "37": {
                  "name": "Ace of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "38": {
                  "name": "Two of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "39": {
                  "name": "Three of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "40": {
                  "name": "Four of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "41": {
                  "name": "Five of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "42": {
                  "name": "Six of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "43": {
                  "name": "Seven of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "44": {
                  "name": "Eight of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "45": {
                  "name": "Nine of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "46": {
                  "name": "Ten of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "47": {
                  "name": "Page of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, ",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "48": {
                  "name": "Knight of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "49": {
                  "name": "Queen of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "50": {
                  "name": "King of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "51": {
                  "name": "Ace of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "52": {
                  "name": "Two of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "53": {
                  "name": "Three of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "54": {
                  "name": "Four of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "55": {
                  "name": "Five of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "56": {
                  "name": "Six of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "57": {
                  "name": "Seven of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "58": {
                  "name": "Eight of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "59": {
                  "name": "Nine of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "60": {
                  "name": "Ten of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "61": {
                  "name": "Page of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, ",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "62": {
                  "name": "Knight of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "63": {
                  "name": "Queen of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "64": {
                  "name": "King of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Swords",
                  "suitKeywords": "Power, action, ideas, air",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "65": {
                  "name": "Ace of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "66": {
                  "name": "Two of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "67": {
                  "name": "Three of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "68": {
                  "name": "Four of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Pentacles",
                  "suitKeywords": "Finances, physical health, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "69": {
                  "name": "Five of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "70": {
                  "name": "Six of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "71": {
                  "name": "Seven of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "72": {
                  "name": "Eight of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "73": {
                  "name": "Nine of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "74": {
                  "name": "Ten of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "75": {
                  "name": "Page of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "Fresh eyes, excitement, new beginings",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "76": {
                  "name": "Knight of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "77": {
                  "name": "Queen of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, maturity",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "78": {
                  "name": "King of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseKeywords": ["Four","Five","Six"]
                }
  },

  //Draw a given number of cards from a deck of a given size. 
  "drawCardsFunc": (cardsInDeckNum, cardsToDrawNum)=>{
    let tempCardsArray = app.genRandomNumberArrayFunc(1, cardsInDeckNum, cardsToDrawNum);

    let finalCardsArray = tempCardsArray.map(cardNum =>{
      let isStandardBool = Math.floor(Math.random() * 2);
      if (isStandardBool===1){
        let newCard = {
          "name": app.tarotDeckObj[cardNum].name,
          "imagePath": app.tarotDeckObj[cardNum].imagePath,
          "keywords": app.tarotDeckObj[cardNum].keywords,
          "description": app.tarotDeckObj[cardNum].description,
          "value": app.tarotDeckObj[cardNum].value,
          "valueKeywords": app.tarotDeckObj[cardNum].valueKeywords,
          "suit": app.tarotDeckObj[cardNum].suit,
          "suitKeywords": app.tarotDeckObj[cardNum].suitKeywords
        };
        return newCard;
      }
      else {
        let newCard={
          "name": `${app.tarotDeckObj[cardNum].name}, Reversed`,
          "imagePath": app.tarotDeckObj[cardNum].imagePath,
          "keywords": app.tarotDeckObj[cardNum].reverseKeywords,
          "description": app.tarotDeckObj[cardNum].reverseDescription,
          "value": app.tarotDeckObj[cardNum].value,
          "valueKeywords": app.tarotDeckObj[cardNum].valueKeywords,
          "suit": app.tarotDeckObj[cardNum].suit,
          "suitKeywords": app.tarotDeckObj[cardNum].suitKeywords
        }
        return newCard;
      }
    });

    return finalCardsArray;
  },

  "drawnCardsArray": [],

  //Return an array of nNum unique random numbers between minNum (inclusive) and maxNum (inclusive).
  "genRandomNumberArrayFunc": (minNum, maxNum, nNum)=>{
    
    //Create an array of numbers 1 through maxNum, representing the cards in the deck. Then shuffle it.
    let orderedNumberArray = [];
    for(let i=minNum; i<=maxNum; i++){
      orderedNumberArray.push(i);
    }
    let randomNumberArray = app.shuffle(orderedNumberArray);

    //Shorten the array to the given length, representing the drawn cards from the shuffled deck
    return randomNumberArray.splice(maxNum - nNum);
  },

  //shuffle a given array
  "shuffle": (array)=>{
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
  }

};

$("#reading-button").click(function() {
  $("#display-deck").remove();
  $("#results-section").append(`<div class="background-image-fabric box-shadow-1px-neg2px-5px-29rgb text-center" id="fabric-backdrop"><h2>Results</h2></div>`)
  const drawnCards = app.drawCardsFunc(78,3);
  $("#fabric-backdrop").append(`
    <div class="clear-both">
      <h3>Past</h3>
      <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block float-left height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px top-6px width-230px z-1">
        <div class="background-image-floral border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
        </div>
      </div>
      <div class="float-left">
        ${drawnCards[0].name}
        <ol>
          <li>${drawnCards[0].keywords[0]}</li>
          <li>${drawnCards[0].keywords[1]}</li>
          <li>${drawnCards[0].keywords[2]}</li>
        </ol>
      </div>
    </div>`);
  $("#fabric-backdrop").append(`
    <div class="clear-both">
      <h3>Present</h3>
      <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block float-left height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px top-6px width-230px z-1">
        <div class="background-image-floral border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
        </div>
      </div>
      <div class="float-left">
        ${drawnCards[1].name}
        <ol>
          <li>${drawnCards[1].keywords[0]}</li>
          <li>${drawnCards[1].keywords[1]}</li>
          <li>${drawnCards[1].keywords[2]}</li>
        </ol>
      </div>
    </div>`);
  $("#fabric-backdrop").append(`
    <div class="clear-both">
      <h3>Future</h3>
      <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block float-left height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px top-6px width-230px z-1">
        <div class="background-image-floral border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
        </div>
      </div>
      <div class="float-left">
        ${drawnCards[2].name}
        <ol>
          <li>${drawnCards[2].keywords[0]}</li>
          <li>${drawnCards[2].keywords[1]}</li>
          <li>${drawnCards[2].keywords[2]}</li>
        </ol>
      </div>
    </div>`);
});
