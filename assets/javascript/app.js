"use strict";

const app = {
  //object containing each card in the Waite-Smith Tarot deck
  "tarotDeckObj": {
                "1": {
                  //Card Name for display
                  "name": "The Fool",
                  "imagePath": "./assets/images/cards/",
                  //Card meaning keywords for the upright orientation
                  "keywords": ["Intoxication", "Extravagance", "Delusional"],
                  //More detailed card meaning for the upright orientation
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  //More detailed card meaning for the upside-down orientation
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  //Card meaning keywords for the upside-down orientation
                  "reverseKeywords": ["Vanity","Carelessness","Apathy"]
                },
                "2": {
                  "name": "The Magician",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Subtlety", "Skill", "Will"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Disquiet","Disgrace","Distrust"]
                },
                "3": {
                  "name": "The High Priestess",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Wisdom", "Mystery", "Secrecy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Superficiality","Conceit","Vapid"]
                },
                "4": {
                  "name": "The Empress",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Fruitfulness","Nature","Provider"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Unraveling","Overwhelming","Indecision"]
                },
                "5": {
                  "name": "The Emperor",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Stability", "Power", "Authority"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Innocence","Immaturity","Confusion"]
                },
                "6": {
                  "name": "The Hierophant",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Servitude", "Tradition", "Hierarchy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Anarchy","Subversion","Questioning"]
                },
                "7": {
                  "name": "The Lovers",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Respect", "Support", "Partnership"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Imbalance","Infidelity","Disagreement"]
                },
                "8": {
                  "name": "The Chariot",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Triumph", "Perseverance", "Conquest"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Defeat","Dispute","Aimlessness"]
                },
                "9": {
                  "name": "Strength",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Power", "Energy", "Action"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Abuse of power","Shakiness","Disgrace"]
                },
                "10": {
                  "name": "The Hermit",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Reflection", "Concealment", "Vigilance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Disguise","Fear","Paranoia"]
                },
                "11": {
                  "name": "Wheel of Fortune",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Happenstance", "Development", "Fate"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Uncovering","Denial","Powerlessness"]
                },
                "12": {
                  "name": "Justice",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Equity", "Righteousness", "Truth"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Inequity","Bigotry","Indifference"]
                },
                "13": {
                  "name": "The Hanged Man",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Suspension", "Sacrifice", "Blessing in disguise"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Self-Victimization","Self-hate","Fear of change"]
                },
                "14": {
                  "name": "Death",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Evolution", "Rebirth", "Overhaul"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Lethargy","Sleepwalking","Status quo"]
                },
                "15": {
                  "name": "Temperance",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["One", "Two", "Three"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "16": {
                  "name": "The Devil",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Prisoner", "Addiction", "Debt"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Awareness","Healthy choices","Freedom"]
                },
                "17": {
                  "name": "The Tower",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Calamity", "Distress", "Misery"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Oncoming storm","Attempted escape","Stalling"]
                },
                "18": {
                  "name": "The Star",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Hope", "Bright prospects", "Irrigation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Drain","Boredom","Chores"]
                },
                "19": {
                  "name": "The Moon",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Hidden threats", "Darkness", "Discernment"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Error","Distress","Fightor-flight response"]
                },
                "20": {
                  "name": "The Sun",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Fortune", "Energy", "Life"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Doubt","Sadness","Negative outlook"]
                },
                "21": {
                  "name": "Judgement",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Transformation", "Change of position", "Aftermath"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Deliberation","Blurred perception","Cold feet"]
                },
                "22": {
                  "name": "The World",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Perfection", "Completed voyage", "Success"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Stagnation","Gaps","Unfinished business"]
                },
                "23": {
                  "name": "Ace of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Creation", "Invention", "Birth"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Fall","Ruin","Clouded joy"]
                },
                "24": {
                  "name": "Two of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Contemplation", "Dominion", "Comparison"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Awe","Fear","Reverance"]
                },
                "25": {
                  "name": "Three of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Enterprise", "Trade", "Cooperation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Interruptions","Delays","Setbacks"]
                },
                "26": {
                  "name": "Four of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Safe haven", "Support", "Work-life balance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Miscommunication","Bad Blood","Hostility"]
                },
                "27": {
                  "name": "Five of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Competition", "Rat race", "Imitation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Settling","Conflict avoidance","Bargaining"]
                },
                "28": {
                  "name": "Six of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Victory","Hope", "Good news"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Apprehension","Imbalance","Threat"]
                },
                "29": {
                  "name": "Seven of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Deliberations", "Negotiations", "Competition"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Anxiety","Conundrum","Distress"]
                },
                "30": {
                  "name": "Eight of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Motion", "Forward momentum", "High speed"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Internal conflict","Stalled flight","Hesitation"]
                },
                "31": {
                  "name": "Nine of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Strength", "Stamina", "Defense"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Adversity","Collapse","Catch-22"]
                },
                "32": {
                  "name": "Ten of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Gains", "Burdens", "Hard-won success"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Micromanagement","Martyrdom","Spite"]
                },
                "33": {
                  "name": "Page of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Unbridled ambition", "Creative spark", "Experimentation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, spark",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Instability","Indecision","Disappointment"]
                },
                "34": {
                  "name": "Knight of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Flight", "Departure", "Three"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Interruption","Five","Six"]
                },
                "35": {
                  "name": "Queen of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Self-sustainment", "Self-confidence", "Self-reliance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, finesse",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "36": {
                  "name": "King of Wands",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Leadership","Vision","Direction"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Domineering","Severe","Cutthroat"]
                },
                "37": {
                  "name": "Ace of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Opportunity", "Budding relationship", "Forthrightness"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Weak link","Vulnerability","Repression"]
                },
                "38": {
                  "name": "Two of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Cooperation", "Union", "Sympathy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Hidden intentions","Pettiness","Missed signals"]
                },
                "39": {
                  "name": "Three of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Kinship", "Support", "Collective"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Bullying","Odd one out","Exclusion"]
                },
                "40": {
                  "name": "Four of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Weariness", "Disgust", "Aversion"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Novelty","Fresh perspective","New relations"]
                },
                "41": {
                  "name": "Five of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Loss", "Bitterness", "Grief"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Lessons learned","Recovery","Return"]
                },
                "42": {
                  "name": "Six of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Memories", "Nostalgia", "Findsight"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Disappearance","Deletion","Fading image"]
                },
                "43": {
                  "name": "Seven of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Imagination", "Fantasy", "Loss of reality"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Determination","Dreams","Goals"]
                },
                "44": {
                  "name": "Eight of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Lightened load", "Cleanse", "Liquidation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Great Loss","Emptiness","Abandonment"]
                },
                "45": {
                  "name": "Nine of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Satisfaction", "Assurance", "Contentment"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Overkill","Greed","Selfishness"]
                },
                "46": {
                  "name": "Ten of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Happiness", "Fulfillment", "Storybook ending"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["False heart","Settling","Surrender"]
                },
                "47": {
                  "name": "Page of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Message", "Signal", "News"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, spark",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["False alarm","Misinterpretation","False start"]
                },
                "48": {
                  "name": "Knight of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Proposition", "Enticement", "Invitation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Swindler","Scammer","Fraud"]
                },
                "49": {
                  "name": "Queen of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Emotional intelligence","Comfort","Sympathy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, finesse",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Manipulation","Extraction","Blackmail"]
                },
                "50": {
                  "name": "King of Cups",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Stability", "Peace", "Self-repair"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Instability","Distrust","Fragility"]
                },
                "51": {
                  "name": "Ace of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Triumph", "Conquest", "Victory"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Devastation","Brutality","Theft"]
                },
                "52": {
                  "name": "Two of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Guarded exchanges", "Reservations", "Hesitation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Unease","Paranoia","Edginess"]
                },
                "53": {
                  "name": "Three of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Pain", "Attack", "Double-crossing"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Distraction","Diversion","Suppression"]
                },
                "54": {
                  "name": "Four of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Retreat", "Solitude", "Meditation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Preoccupation","Unrest","Jitters"]
                },
                "55": {
                  "name": "Five of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Loss", "Destruction", "Dishonor"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "56": {
                  "name": "Six of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Journey", "Leadership", "Guidance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Anchor","Grounding","Burden"]
                },
                "57": {
                  "name": "Seven of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Ill-advised scheme", "Ignorance", "Hot mess"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Advice","Instruction","Education"]
                },
                "58": {
                  "name": "Eight of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Limits", "Shackles", "Restraints"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Broken chains","Liberty","Expanded horizons"]
                },
                "59": {
                  "name": "Nine of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Sorrow", "Desolation", "Isolation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Recovery","Rising above","Readjustment"]
                },
                "60": {
                  "name": "Ten of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Mob mentality", "Attacks", "Betrayal"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Beating a dead horse","Overkill","Ruthlessness"]
                },
                "61": {
                  "name": "Page of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Alertness", "Excitement", "Energy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, spark",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Haste","Impulsiveness","Over-eagerness"]
                },
                "62": {
                  "name": "Knight of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["War", "Resistance", "Defence"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Offensive maneuver","Preemptive attack","Offense"]
                },
                "63": {
                  "name": "Queen of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Logic", "Intelligence", "Wisdom"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, finesse",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Detachment","Brutality","Callousness"]
                },
                "64": {
                  "name": "King of Swords",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Dogma", "Standards", "Traditional success"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Swords",
                  "suitKeywords": "Mental power, action, ideas, air",
                  "reverseDescription": "ulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Imposition","Unfair expectations","Iron fist"]
                },
                "65": {
                  "name": "Ace of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["New opportunity", "Reasonable expectations", "Initial investment"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Missed chance","Misspent opportunity","Squandering"]
                },
                "66": {
                  "name": "Two of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Multitasking", "Joy in work", "Stimulation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Loss of control","Faking it","Pretending"]
                },
                "67": {
                  "name": "Three of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Admiration", "Recognition", "Skill"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Laziness","Pettiness","Trifling"]
                },
                "68": {
                  "name": "Four of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Self-protection", "Holding fast", "Risk aversion"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Pentacles",
                  "suitKeywords": "Finances, physical health, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Delaying the inevitable","Clinging to the past","Delusion"]
                },
                "69": {
                  "name": "Five of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Loss", "Poverty", "Hard times"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Solidarity","Camaraderie","Teamwork"]
                },
                "70": {
                  "name": "Six of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Gifts", "Charity", "Attention"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Condescension","Self-important","Arrogance"]
                },
                "71": {
                  "name": "Seven of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Fruits of one's labor", "Harvest", "Payoff"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Dissatisfaction","Yearning","Unreasonable expectations"]
                },
                "72": {
                  "name": "Eight of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Employment", "Skill", "Hard work"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Vanity","Posessiveness","Empty ambition"]
                },
                "73": {
                  "name": "Nine of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Safety", "Financial success", "Splendor"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Voided project","Unrecognized work","Bad faith"]
                },
                "74": {
                  "name": "Ten of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Riches", "Gains", "Household wealth"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Loss","Robbery","Gambling"]
                },
                "75": {
                  "name": "Page of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Discovery", "New opportunity", "New venture"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Page",
                  "valueKeywords": "Fresh eyes, excitement, new beginings",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Self-indulgence","Bender","Distraction"]
                },
                "76": {
                  "name": "Knight of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Responsibility", "Steadfastness", "Integrity"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Stagnation","Idleness","Hibernation"]
                },
                "77": {
                  "name": "Queen of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Security", "Generosity", "Magnificence"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, maturity",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Greed","Cutting corners","Insecurity"]
                },
                "78": {
                  "name": "King of Pentacles",
                  "imagePath": "./assets/images/cards/",
                  "keywords": ["Financial stability", "Self-control", "Executed plans"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseDescription": "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Reckless spending","Living beyond means","Delusions of grandeur"]
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
          "meaning": app.tarotDeckObj[cardNum].meaning,
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
          "description": app.tarotDeckObj[cardNum].description,
          "meaning": app.tarotDeckObj[cardNum].reverseMeaning,
          "value": app.tarotDeckObj[cardNum].value,
          "valueKeywords": app.tarotDeckObj[cardNum].valueKeywords,
          "suit": app.tarotDeckObj[cardNum].suit,
          "suitKeywords": app.tarotDeckObj[cardNum].suitKeywords
        }
        return newCard;
      }
    });

    //add roles for readings with given card numbers
    if (finalCardsArray.length === 3){
      finalCardsArray[0].role="Past";
      finalCardsArray[1].role="Present";
      finalCardsArray[2].role="Future";
    }

    return finalCardsArray;
  },

  "displayCardKeywordsFunc": (keywordsArray)=>{
    keywordsArray.map(keyword => {`<li>${keyword}</li>`});
  },

  //Array that will hold the cards drawn
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
  $("#intro-section").remove();
  $("#display-deck").remove();
  $("#results-section").append(`<section class="background-image-fabric box-shadow-1px-neg2px-5px-29rgb min-width-270px position-realtive text-center" id="fabric-backdrop"><h2 class="font-size-1p75em font-special-elite">Results</h2></section>`)
  const drawnCards = app.drawCardsFunc(78,3);
  
  $("main").prepend(`
    <!-- This section explains how to interpret the reading -->
    <section class="padding-bottom-2em">
      <div class="border-torn box-shadow-1px-neg2px-5px-29rgb margin-auto width-75pc" id="explanation-section">
          <div class="background-0-87-72 background-image-lined-paper color-242-242-207 padding-bottom-1em padding-left-2em padding-top-2em">
              <h2 class="font-size-1p75em font-special-elite padding-right-2em">How to interpret the cards:</h2>
              <div class="font-roboto-slab font-size-p9em line-height-1p3em padding-right-1em">
                  <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit</p>
              </div>
          </div>
      </div>
    </section>
  `);

  $("#fabric-backdrop").append(drawnCards.map(card => {return `
    <div class="clear-both padding-top-2em">
      <div class="background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite margin-auto max-width-16em min-width-5em padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em text-center width-75pc">
        <div class="border-stitched border-radius-10px padding-top-p5em">
          <h3>${card.role}:<p class="font-size-p8em">${card.name}.<p></h3>
          <div class="font-size-p5em padding-top-p5em">
            Keywords: ${card.keywords.map(keyword => {return `<span class="display-inline-block">&nbsp;${keyword}</span>`})}.
          </div>
        </div>
      </div>
      <div class="clear-both">
        <div>
          <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px top-6px width-230px z-1">
              <div class="border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
                <img src="${card.imagePath}" alt="'${card.name}' illustration by Pamela Colman Smith" aria-describedby="${card.role}-card-description">
              </div>
          </div>
        </div>
        <div class="font-size-p8em line-height-1p3em padding-left-1p5em padding-right-1p5em">
          <p id="${card.role}-card-description">${card.description}</p>
          <p>${card.meaning}</p>
        </div>
      </div>
    </div>
  `}));
});
