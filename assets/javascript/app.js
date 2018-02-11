"use strict";

const app = {
  //object containing each card in the Waite-Smith Tarot deck
  "tarotDeckObj": {
                "1": {
                  //Card Name for display
                  "name": "The Fool",
                  "imagePath": "./assets/images/cards/card_majorFool.png",
                  //Card meaning keywords for the upright orientation
                  "keywords": ["Intoxication", "Extravagance", "Delusional"],
                  //More detailed card meaning for the upright orientation
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A young man in short, luxurious robe stands in ecstasy at the edge of a cliff. He holds a atchel attached to a stick in his right hand, resting on his right shoulder. In his left hand he holds a white rose. He looks up at the sky, avoiding the sight of the steep drop below him. A small, excited dog stands beside him.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  //More detailed card meaning for the upside-down orientation
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  //Card meaning keywords for the upside-down orientation
                  "reverseKeywords": ["Vanity","Carelessness","Apathy"]
                },
                "2": {
                  "name": "The Magician",
                  "imagePath": "./assets/images/cards/card_majorMagician.png",
                  "keywords": ["Subtlety", "Skill", "Will"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A youthful figure in the robe of a magician, standing proudly with a confident smile. Floating above his head is an infinity sign. Around his waist is a belt that looks like a serpent eating its own tail. The magician's right hand is raised, holding a wand that looks like a double-ended lit candle. His left hand is pointing down to the earth. On the table in front of the Magician are the symbols of the four Tarot suits: pentacle, wand, sword, and cup. Beneath the tables are planted roses and lilies.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Disquiet","Disgrace","Distrust"]
                },
                "3": {
                  "name": "The High Priestess",
                  "imagePath": "./assets/images/cards/card_majorHighPriestess.png",
                  "keywords": ["Wisdom", "Mystery", "Secrecy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "The high priestess sits in a large throne, with a back covered in a palm leaf and pomegranate pattern. She is seated between the white and black pillars, inscribed with a J and B, respectively. She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her chest. The scroll in her hands is inscribed with the word Tora.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Superficiality","Conceit","Vapid"]
                },
                "4": {
                  "name": "The Empress",
                  "imagePath": "./assets/images/cards/card_majorEmpress.png",
                  "keywords": ["Fruitfulness","Nature","Provider"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "The empress sits on a throne filled with bilows and luxurious blankets. Her crown is made of 12 six-pointed stars. The shield by her feet is shaped like a heart and has the symbol of Venus inscribed on it. Her right hand is raised, holding a short scepter with a globe on the end. Her left hand rests on her lap. She sits in a lush forest, with a stream running behind her and a crop of wheat growing in front of her.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Unraveling","Overwhelming","Indecision"]
                },
                "5": {
                  "name": "The Emperor",
                  "imagePath": "./assets/images/cards/card_majorEmperor.png",
                  "keywords": ["Stability", "Power", "Authority"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "The emperor sits on a large throne with ram's head sculptures on each corner. He sits with his arms planted firmly on the armrests. In his right hand he holds a scepter in the shape of the 'ankh' Egyptian hieroglyph. In his left he holds a  golden globe. He is clad in armor, with robes on top. His long gray beard hang over his shawl. His throne sits in front of a large rock formation.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Innocence","Immaturity","Confusion"]
                },
                "6": {
                  "name": "The Hierophant",
                  "imagePath": "./assets/images/cards/card_majorHierophant.png",
                  "keywords": ["Servitude", "Tradition", "Hierarchy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "The hierophant wears a triple crown on his head, and ecclesiastic robes over his body. He is seated on a stone throne between two stone pillars. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives an ecclesiastical sign with his thumb and first two fingers. At his feet are two crossed keys and two bald monks kneeling before him.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Anarchy","Subversion","Questioning"]
                },
                "7": {
                  "name": "The Lovers",
                  "imagePath": "./assets/images/cards/card_majorLovers.png",
                  "keywords": ["Respect", "Support", "Partnership"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "The noon soon shines brightly in the background, and a winged angel appears in a cloud below it. In the foreground are two naked human figures, reminiscent of Adam and Eve. Behind the man is a plan bearing 12 fruits, and behind the woman is a sturdier fruit-bearing tree, with a snake coiled around it.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Imbalance","Infidelity","Disagreement"]
                },
                "8": {
                  "name": "The Chariot",
                  "imagePath": "./assets/images/cards/card_majorChariot.png",
                  "keywords": ["Triumph", "Perseverance", "Conquest"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A royal figure clad in armor stands in the basket of a chariot. His crown is topped with an eight-pointed star, his armor has a crescent moon on each shoulder, and in his right hand he gently holds a scepter shaped like a long candle. A black sphynx and a white sphynx sit in front of his chariot, and a cloth filled with six-pointed stars drapes on top. A wealthy citadel stands in the background, behind a fortress wall, lush greenery, and a body of water.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Defeat","Dispute","Aimlessness"]
                },
                "9": {
                  "name": "Strength",
                  "imagePath": "./assets/images/cards/card_majorStrength.png",
                  "keywords": ["Power", "Energy", "Action"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A giant woman in a long frock is taming a giant lion that looks the size of a dog next to her. Her hair has many plants growing out of it, an infinity symbol floats above her head, and she wears a belt made of roses. She bends down to pet the lion and close its mouth as they dwarf the mountainous landscape around them.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Abuse of power","Shakiness","Disgrace"]
                },
                "10": {
                  "name": "The Hermit",
                  "imagePath": "./assets/images/cards/card_majorHermit.png",
                  "keywords": ["Reflection", "Concealment", "Vigilance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A bearded, cloaked figure stands in profile on a rocky, desolate landscape. In his right hand he raises a glowing lantern. In his left hand he holds a tall staff.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Disguise","Fear","Paranoia"]
                },
                "11": {
                  "name": "Wheel of Fortune",
                  "imagePath": "./assets/images/cards/card_majorWheelOfFortune.png",
                  "keywords": ["Happenstance", "Development", "Fate"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A wheel with many symbols from different cultures floats in the middle of a cloudy sky. On top of it sits a sphynx, to the left of it floats a serpent, and a jackal floats below it. In the four corners of the cards are the four living beings of Ezekiel, clockwise from top left: an angel, an eagle, a winged lion, and a winged ox.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Uncovering","Denial","Powerlessness"]
                },
                "12": {
                  "name": "Justice",
                  "imagePath": "./assets/images/cards/card_majorJustice.png",
                  "keywords": ["Equity", "Righteousness", "Truth"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A cloaked person sits on a short throne, situated between two pillars with cloth draped between them. The figure wears a simple golden crown and raises a sword in their left hand. From their left hand hangs an empty scale.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Inequity","Bigotry","Indifference"]
                },
                "13": {
                  "name": "The Hanged Man",
                  "imagePath": "./assets/images/cards/card_majorHangedMan.png",
                  "keywords": ["Suspension", "Sacrifice", "Blessing in disguise"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A man with a halo of light around his head hangs upside-down from a t-shaped cross that is sprouting leaves. He is tied to the cross by a rope on his right foot, while he crosses his left leg underneath the right and and wears a facial expression of entrancement.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Self-Victimization","Self-hate","Fear of change"]
                },
                "14": {
                  "name": "Death",
                  "imagePath": "./assets/images/cards/card_majorDeath.png",
                  "keywords": ["Evolution", "Rebirth", "Overhaul"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A skeleton dressed in black armor rides a white horse while carrying a black flag emblazoned with the Mystic Rose. The horse walks over the body of a king, approaching an ecclesiastic figure, a maiden, and a child pleading with it. In the background, a bright sun is at the horizon between two stone pillars on a cliff.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Lethargy","Sleepwalking","Status quo"]
                },
                "15": {
                  "name": "Temperance",
                  "imagePath": "./assets/images/cards/card_majorTemperance.png",
                  "keywords": ["One", "Two", "Three"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A winged angel floats gently above a lake, with the sign of the sun upon his forehead and a triangle inscribed in a square embroidered on the chest of his robe. His right foot is dipped into the water and his left foot rests gently upon a rock. He is pouring water from a cup in his left hand into a cup in his right. Behind him lies a walking path leading up into a mountain range, with a bright shining crown above the peaks.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "16": {
                  "name": "The Devil",
                  "imagePath": "./assets/images/cards/card_majorDevil.png",
                  "keywords": ["Prisoner", "Addiction", "Debt"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "The devil is represented as a man with the head of a horned goat, talons at the end of his legs, and bat wings sprouting from his back. His right hand is raised while his left hand is turned down, similar to the sign of blessing the Hierophant gives in his card. He is perched on top of a dark altar, with a horned, tailed man and a horned, tailed woman chained to a ring on its front side.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Awareness","Healthy choices","Freedom"]
                },
                "17": {
                  "name": "The Tower",
                  "imagePath": "./assets/images/cards/card_majorTower.png",
                  "keywords": ["Calamity", "Distress", "Misery"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A tall stone tower stands on top of a cliff in the middle of a dark storm. Its crown is falling off. It is being struck by lightning. It is on fire, and a new blaze is starting at its top, where the lightning has struck. TWo figures are seen falling in front of it, one being chased by flame.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Oncoming storm","Attempted escape","Stalling"]
                },
                "18": {
                  "name": "The Star",
                  "imagePath": "./assets/images/cards/card_majorStar.png",
                  "keywords": ["Hope", "Bright prospects", "Irrigation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A large, radiant eight-pointed star shines in the sky wih 7 smaller eight-pointed stars around it. A giant nude female figure is one one knee, pouring water from a ewer in her right hand into a lake and pouring water from a ewer in her left onto the earth, forming rivers leading into the lake.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Drain","Boredom","Chores"]
                },
                "19": {
                  "name": "The Moon",
                  "imagePath": "./assets/images/cards/card_majorMoon.png",
                  "keywords": ["Hidden threats", "Darkness", "Discernment"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A bright moon shines in the sky, surrounded by 32 rays of light. In its center is a crescent outlined with the face of a man in profile. There are two monoliths in the background, with a winding path running betwen them from mountains in the distance to pond in the foreground. A dog to the left of thow path howls at the moon, a wolf to the right of the path growls at the moon, and a lobster crawls out of the body of water at the end of the path.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Error","Distress","Fightor-flight response"]
                },
                "20": {
                  "name": "The Sun",
                  "imagePath": "./assets/images/cards/card_majorSun.png",
                  "keywords": ["Fortune", "Energy", "Life"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A small child wearing a flower crown holds a red banner while riding a white horse. Behind them is a stone wall with sunflwoers towering behind it. In the sky shines a large sun with a human face, surrounded by 11 pointed rays and 10 wavy rays.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Doubt","Sadness","Negative outlook"]
                },
                "21": {
                  "name": "Judgement",
                  "imagePath": "./assets/images/cards/card_majorJudgement.png",
                  "keywords": ["Transformation", "Change of position", "Aftermath"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A great angel sounds a trumpet, encompassed by clouds. The dead rise from their coffins below and raise their hands up toawrd the angel.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Deliberation","Blurred perception","Cold feet"]
                },
                "22": {
                  "name": "The World",
                  "imagePath": "./assets/images/cards/card_majorWorld.png",
                  "keywords": ["Perfection", "Completed voyage", "Success"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "A bude figure floats in the middle of a large oval wreath. She is draped with a long cloth and holds a wand in each hand, shaped like candles with flames at either end. There is a face floating in a cloud at each of the card's corners, clockwise from top left: a man, an eagle, a lion, and an ox.",
                  "value": "",
                  "valueKeywords": "",
                  "suit": "Major Arcana",
                  "suitKeywords": "Trump cards, important stages",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Stagnation","Gaps","Unfinished business"]
                },
                "23": {
                  "name": "Ace of Wands",
                  "imagePath": "./assets/images/cards/card_wandsAce.png",
                  "keywords": ["Creation", "Invention", "Birth"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Fall","Ruin","Clouded joy"]
                },
                "24": {
                  "name": "Two of Wands",
                  "imagePath": "./assets/images/cards/card_wands02.png",
                  "keywords": ["Contemplation", "Dominion", "Comparison"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Awe","Fear","Reverance"]
                },
                "25": {
                  "name": "Three of Wands",
                  "imagePath": "./assets/images/cards/card_wands03.png",
                  "keywords": ["Enterprise", "Trade", "Cooperation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Interruptions","Delays","Setbacks"]
                },
                "26": {
                  "name": "Four of Wands",
                  "imagePath": "./assets/images/cards/card_wands04.png",
                  "keywords": ["Safe haven", "Support", "Work-life balance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Miscommunication","Bad Blood","Hostility"]
                },
                "27": {
                  "name": "Five of Wands",
                  "imagePath": "./assets/images/cards/card_wands05.png",
                  "keywords": ["Competition", "Rat race", "Imitation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Settling","Conflict avoidance","Bargaining"]
                },
                "28": {
                  "name": "Six of Wands",
                  "imagePath": "./assets/images/cards/card_wands06.png",
                  "keywords": ["Victory","Hope", "Good news"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Apprehension","Imbalance","Threat"]
                },
                "29": {
                  "name": "Seven of Wands",
                  "imagePath": "./assets/images/cards/card_wands07.png",
                  "keywords": ["Deliberations", "Negotiations", "Competition"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Anxiety","Conundrum","Distress"]
                },
                "30": {
                  "name": "Eight of Wands",
                  "imagePath": "./assets/images/cards/card_wands08.png",
                  "keywords": ["Motion", "Forward momentum", "High speed"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Internal conflict","Stalled flight","Hesitation"]
                },
                "31": {
                  "name": "Nine of Wands",
                  "imagePath": "./assets/images/cards/card_wands09.png",
                  "keywords": ["Strength", "Stamina", "Defense"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Adversity","Collapse","Catch-22"]
                },
                "32": {
                  "name": "Ten of Wands",
                  "imagePath": "./assets/images/cards/card_wands10.png",
                  "keywords": ["Gains", "Burdens", "Hard-won success"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Micromanagement","Martyrdom","Spite"]
                },
                "33": {
                  "name": "Page of Wands",
                  "imagePath": "./assets/images/cards/card_wandsPage.png",
                  "keywords": ["Unbridled ambition", "Creative spark", "Experimentation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, spark",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Instability","Indecision","Disappointment"]
                },
                "34": {
                  "name": "Knight of Wands",
                  "imagePath": "./assets/images/cards/card_wandsKnight.png",
                  "keywords": ["Flight", "Departure", "Three"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Interruption","Five","Six"]
                },
                "35": {
                  "name": "Queen of Wands",
                  "imagePath": "./assets/images/cards/card_wandsQueen.png",
                  "keywords": ["Self-sustainment", "Self-confidence", "Self-reliance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, finesse",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Four","Five","Six"]
                },
                "36": {
                  "name": "King of Wands",
                  "imagePath": "./assets/images/cards/card_wandsKing.png",
                  "keywords": ["Leadership","Vision","Direction"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Wands",
                  "suitKeywords": "Passion, creativity, ambition",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Domineering","Severe","Cutthroat"]
                },
                "37": {
                  "name": "Ace of Cups",
                  "imagePath": "./assets/images/cards/card_cupsAce.png",
                  "keywords": ["Opportunity", "Budding relationship", "Forthrightness"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Weak link","Vulnerability","Repression"]
                },
                "38": {
                  "name": "Two of Cups",
                  "imagePath": "./assets/images/cards/card_cups02.png",
                  "keywords": ["Cooperation", "Union", "Sympathy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Hidden intentions","Pettiness","Missed signals"]
                },
                "39": {
                  "name": "Three of Cups",
                  "imagePath": "./assets/images/cards/card_cups03.png",
                  "keywords": ["Kinship", "Support", "Collective"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Bullying","Odd one out","Exclusion"]
                },
                "40": {
                  "name": "Four of Cups",
                  "imagePath": "./assets/images/cards/card_cups04.png",
                  "keywords": ["Weariness", "Disgust", "Aversion"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Novelty","Fresh perspective","New relations"]
                },
                "41": {
                  "name": "Five of Cups",
                  "imagePath": "./assets/images/cards/card_cups05.png",
                  "keywords": ["Loss", "Bitterness", "Grief"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Lessons learned","Recovery","Return"]
                },
                "42": {
                  "name": "Six of Cups",
                  "imagePath": "./assets/images/cards/card_cups06.png",
                  "keywords": ["Memories", "Nostalgia", "Findsight"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Disappearance","Deletion","Fading image"]
                },
                "43": {
                  "name": "Seven of Cups",
                  "imagePath": "./assets/images/cards/card_cups07.png",
                  "keywords": ["Imagination", "Fantasy", "Loss of reality"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Determination","Dreams","Goals"]
                },
                "44": {
                  "name": "Eight of Cups",
                  "imagePath": "./assets/images/cards/card_cups08.png",
                  "keywords": ["Lightened load", "Cleanse", "Liquidation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Great Loss","Emptiness","Abandonment"]
                },
                "45": {
                  "name": "Nine of Cups",
                  "imagePath": "./assets/images/cards/card_cups09.png",
                  "keywords": ["Satisfaction", "Assurance", "Contentment"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Overkill","Greed","Selfishness"]
                },
                "46": {
                  "name": "Ten of Cups",
                  "imagePath": "./assets/images/cards/card_cups10.png",
                  "keywords": ["Happiness", "Fulfillment", "Storybook ending"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["False heart","Settling","Surrender"]
                },
                "47": {
                  "name": "Page of Cups",
                  "imagePath": "./assets/images/cards/card_cupsPage.png",
                  "keywords": ["Message", "Signal", "News"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Page",
                  "valueKeywords": "New energy, new beginnings, spark",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["False alarm","Misinterpretation","False start"]
                },
                "48": {
                  "name": "Knight of Cups",
                  "imagePath": "./assets/images/cards/card_cupsKnight.png",
                  "keywords": ["Proposition", "Enticement", "Invitation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Swindler","Scammer","Fraud"]
                },
                "49": {
                  "name": "Queen of Cups",
                  "imagePath": "./assets/images/cards/card_cupsQueen.png",
                  "keywords": ["Emotional intelligence","Comfort","Sympathy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, finesse",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Manipulation","Extraction","Blackmail"]
                },
                "50": {
                  "name": "King of Cups",
                  "imagePath": "./assets/images/cards/card_cupsKing.png",
                  "keywords": ["Stability", "Peace", "Self-repair"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Cups",
                  "suitKeywords": "Feelings, Emotional Issues, Relationships, Water",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Instability","Distrust","Fragility"]
                },
                "51": {
                  "name": "Ace of Swords",
                  "imagePath": "./assets/images/cards/card_swordsAce.png",
                  "keywords": ["Triumph", "Conquest", "Victory"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords02.png",
                  "keywords": ["Guarded exchanges", "Reservations", "Hesitation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords03.png",
                  "keywords": ["Pain", "Attack", "Double-crossing"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords04.png",
                  "keywords": ["Retreat", "Solitude", "Meditation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords05.png",
                  "keywords": ["Loss", "Destruction", "Dishonor"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords06.png",
                  "keywords": ["Journey", "Leadership", "Guidance"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords07.png",
                  "keywords": ["Ill-advised scheme", "Ignorance", "Hot mess"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords08.png",
                  "keywords": ["Limits", "Shackles", "Restraints"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords09.png",
                  "keywords": ["Sorrow", "Desolation", "Isolation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swords10.png",
                  "keywords": ["Mob mentality", "Attacks", "Betrayal"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swordsPage.png",
                  "keywords": ["Alertness", "Excitement", "Energy"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swordsKnight.png",
                  "keywords": ["War", "Resistance", "Defence"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swordsQueen.png",
                  "keywords": ["Logic", "Intelligence", "Wisdom"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_swordsKing.png",
                  "keywords": ["Dogma", "Standards", "Traditional success"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
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
                  "imagePath": "./assets/images/cards/card_pentaclesAce.png",
                  "keywords": ["New opportunity", "Reasonable expectations", "Initial investment"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Ace",
                  "valueKeywords": "New Beginnings, opportunity, starting point",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Missed chance","Misspent opportunity","Squandering"]
                },
                "66": {
                  "name": "Two of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles02.png",
                  "keywords": ["Multitasking", "Joy in work", "Stimulation"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Two",
                  "valueKeywords": "Harmony, balance, duality",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Loss of control","Faking it","Pretending"]
                },
                "67": {
                  "name": "Three of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles03.png",
                  "keywords": ["Admiration", "Recognition", "Skill"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Three",
                  "valueKeywords": "Connection, growth, creation",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Laziness","Pettiness","Trifling"]
                },
                "68": {
                  "name": "Four of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles04.png",
                  "keywords": ["Self-protection", "Holding fast", "Risk aversion"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Four",
                  "valueKeywords": "Stability, structure, foundation",
                  "suit": "Pentacles",
                  "suitKeywords": "Finances, physical health, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Delaying the inevitable","Clinging to the past","Delusion"]
                },
                "69": {
                  "name": "Five of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles05.png",
                  "keywords": ["Loss", "Poverty", "Hard times"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Five",
                  "valueKeywords": "Challenge, adventure, unpredictability",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Solidarity","Camaraderie","Teamwork"]
                },
                "70": {
                  "name": "Six of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles06.png",
                  "keywords": ["Gifts", "Charity", "Attention"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Six",
                  "valueKeywords": "Equality, beauty, union",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Condescension","Self-important","Arrogance"]
                },
                "71": {
                  "name": "Seven of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles07.png",
                  "keywords": ["Fruits of one's labor", "Harvest", "Payoff"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Seven",
                  "valueKeywords": "Evolution, change, processing",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Dissatisfaction","Yearning","Unreasonable expectations"]
                },
                "72": {
                  "name": "Eight of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles08.png",
                  "keywords": ["Employment", "Skill", "Hard work"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Eight",
                  "valueKeywords": "Cycles, reconstruction, reiteration",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Vanity","Posessiveness","Empty ambition"]
                },
                "73": {
                  "name": "Nine of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles09.png",
                  "keywords": ["Safety", "Financial success", "Splendor"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Nine",
                  "valueKeywords": "Gratification, realization, recognition",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Voided project","Unrecognized work","Bad faith"]
                },
                "74": {
                  "name": "Ten of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentacles10.png",
                  "keywords": ["Riches", "Gains", "Household wealth"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Ten",
                  "valueKeywords": "Culmination, perfection, resolution",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Loss","Robbery","Gambling"]
                },
                "75": {
                  "name": "Page of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentaclesPage.png",
                  "keywords": ["Discovery", "New opportunity", "New venture"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Page",
                  "valueKeywords": "Fresh eyes, excitement, new beginings",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Self-indulgence","Bender","Distraction"]
                },
                "76": {
                  "name": "Knight of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentaclesKnight.png",
                  "keywords": ["Responsibility", "Steadfastness", "Integrity"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Knight",
                  "valueKeywords": "Extremes, changes, actions",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Stagnation","Idleness","Hibernation"]
                },
                "77": {
                  "name": "Queen of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentaclesQueen.png",
                  "keywords": ["Security", "Generosity", "Magnificence"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "Queen",
                  "valueKeywords": "Mastery, understanding, maturity",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
                  "reverseMeaning": "In the reverse orientation, this card ... [coming soon]",
                  "reverseKeywords": ["Greed","Cutting corners","Insecurity"]
                },
                "78": {
                  "name": "King of Pentacles",
                  "imagePath": "./assets/images/cards/card_pentaclesKing.png",
                  "keywords": ["Financial stability", "Self-control", "Executed plans"],
                  "meaning": "This card begs the questio... [coming soon]",
                  "description": "[coming soon]",
                  "value": "King",
                  "valueKeywords": "Order, responsibility, command",
                  "suit": "Pentacles",
                  "suitKeywords": "Earthly comforts, material goods, earth",
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
          "suitKeywords": app.tarotDeckObj[cardNum].suitKeywords,
          "rotation": "0"
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
          "suitKeywords": app.tarotDeckObj[cardNum].suitKeywords,
          "rotation": "180"
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

  //display a 2D tarot reading on the page
  "display2DReadingFunc": (cardsArrayToDisplay)=>{
    $("main").append(`
    <section class="clear-both font-roboto-slab">  
      <div class="background-image-fabric box-shadow-1px-neg2px-5px-29rgb min-width-270px padding-top-2em position-realtive text-center" id="fabric-backdrop">
        <h2 class="font-size-1p75em font-special-elite">Results</h2>
      </div>
    </section>`
    );
    
    //Display a section that explains how to interpret the reading
    $("main").prepend(`
      <!-- This section explains how to interpret the reading -->
      <section class="padding-bottom-2em">
        <div class="border-torn box-shadow-1px-neg2px-5px-29rgb margin-auto" id="explanation-section">
            <div class="background-0-87-72 background-image-lined-paper color-242-242-207 padding-bottom-1em padding-left-2em padding-top-2em">
                <h2 class="font-size-1p75em font-special-elite padding-right-2em">How to interpret the cards:</h2>
                <div class="font-roboto-slab font-size-p9em line-height-1p3em padding-right-1em">
                    <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit</p>
                </div>
            </div>
        </div>
      </section>`
    );
  
    app.displayCardsInDivFunc(cardsArrayToDisplay);

  },

  "displayCardsInDivFunc": (cardsArray)=>{
    if (cardsArray.length === 3){
      //Display a div containing the relevant info for each card in a reading, in the #fabric-backdrop div
      $("#fabric-backdrop").append(cardsArray.map(card => {return `
        <!-- This div holds all of the reading information for each card -->
        <div class="clear-both padding-bottom-2em padding-top-1em">
          <!-- This div contains the card role in the reading, and card meaning keywords -->
          <div class="background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite margin-auto max-width-16em min-width-5em padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em text-center width-75pc">
            <div class="border-stitched border-radius-10px padding-left-p25em padding-right-p25em padding-top-p5em">
              <h3><span class="text-underline">${card.role}</span>: <span class="font-size-p8em">${card.name}.</span></h3>
              <div class="font-size-p5em line-height-1p3em padding-bottom-p5em padding-top-p5em">
                <span class="text-underline">Keywords</span>: ${card.keywords.map(keyword => {return `<span class="display-inline-block font-size-p9em">&nbsp;${keyword}</span>`})}.
              </div>
            </div>
          </div>
        <!-- This div holds the card, the illustration description, and meaning -->
          <div class="clear-both padding-top-1em">
            <div>
              <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px top-6px width-230px z-1">
                  <div class="border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
                    <img class="height-340px width-190px rotate-${card.rotation}deg" src="${card.imagePath}" alt="'${card.name}' illustration by Pamela Colman Smith" aria-describedby="${card.role}-card-description">
                  </div>
              </div>
            </div>
            <div class="padding-left-1p5em padding-right-1p5em padding-top-1em">
              <div class="background-248-248-248 background-image-white-paper box-shadow-0-neg2px-2px-43rgb-p3a font-size-p8em line-height-1p3em padding-bottom-p5em padding-left-1p5em padding-right-1p5em padding-top-1em">
                <p id="${card.role}-card-description"><span class="text-underline">Illustration description</span>: <span class="font-size-p9em">${card.description}</span></p>
                <p class="padding-top-p5em">${card.meaning}</p>
              </div>
            </div>
          </div>
        </div>`
      }))
    };
  },

  //Display keywords in AR
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

  "resetPageFunc": ()=>{
    
    //clear the drawnCardsArray
    app.drawnCardsArray = [];

    //Insert header (title) into the body of the page
    $("#body-container").prepend(`
      <header class="background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-2p75em font-special-elite margin-auto max-width-10em min-width-5em padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em text-center width-75pc">
        <div class="border-stitched border-radius-10px padding-top-p5em">
            <h1>AR-TAROT</h1>
        </div>
      </header>`
    );
    
    //Insert intro content into the main section of the page
    $("main").prepend(`
      <!-- This section explains the point of this web app -->
      <section class="border-torn box-shadow-1px-neg2px-5px-29rgb float-left one-half-responsive-container" id="intro-section">
          <div class="background-0-87-72 background-image-lined-paper color-242-242-207 padding-bottom-1em padding-left-2em padding-top-2em">
              <h2 class="font-size-1p75em font-special-elite padding-right-2em">What is AR-TAROT?</h2>
              <div class="font-roboto-slab font-size-p9em line-height-1p3em padding-right-1em">
                  <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit</p>
              </div>
          </div>
      </section>
      <!-- This section holds a display deck and the buttons to retrieve a reading -->
      <section class="float-left padding-left-1p5em padding-right-1p5em one-half-responsive-container" id="display-deck">
          <div class="background-image-fabric box-shadow-1px-neg2px-5px-29rgb min-width-270px padding-bottom-1em padding-top-1p5em">
              <div class="background-28-92-81 border-color-0-62-51 border-radius-10px border-width-1px box-shadow-1px-neg2px-5px-29rgb display-block height-380px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px position-relative width-230px z-1">
                  <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-neg2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px position-absolute rotate-1 top-3px width-230px z-neg1">
                  </div>
                  <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-6px position-absolute rotate-neg3 top-10px width-230px z-neg2">
                  </div>
                  <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px position-absolute top-6px width-230px z-1">
                      <div class="background-image-floral border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
                      </div>
                  </div>
              </div>
              <div class="padding-top-1p5em text-center">
                <button class="background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p5em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="start-reading-button">  
                  Get a reading.
                </button>
              </div>
          </div>
      </section>`);

      //Insert footer (credits) into body of the page
      $("#body-container").append(`
        <footer class="clear-both font-size-p8em margin-auto padding-top-2em width-75pc">
          <div class="border-torn box-shadow-1px-neg2px-5px-29rgb">
              <div class="background-0-87-72 background-image-lined-paper color-242-242-207 padding-bottom-p25em padding-left-2em padding-top-p25em">
                  <div class="font-roboto-slab font-size-p8em line-height-1p3em padding-right-1em">
                      <p>
                          Card interpretations and descriptions adapted from "The Pictorial Key to the Tarot" by AE Waite, with illustrations by Pamela Colman Smith. Credit to John B. Hare at <a href="http://www.sacred-texts.com">www.sacred-texts.com</a> for digitizing and archiving the source material.Background patterns edited from Subtle Patterns at <a href="https://www.toptal.com/designers/subtlepatterns/">www.toptal.com</a>.
                      </p>
                  </div>
              </div>
          </div>
        </footer>`
    );

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

// Initialize the page when the document has loaded
$( document ).ready(function() {

  //Set the page to its initial state
  app.resetPageFunc();

  //Start the tarot reading
  $("#start-reading-button").click(function() {
  
    //Remove the intro elements from the page and display the tarot reading results
    $("#intro-section").remove();
    $("#display-deck").remove();

    //Display the topic choices for this reading
    $("main").append(`
      <div class="margin-auto text-center">
        <div class="clear-both padding-bottom-p5em padding-top-p5em text-center">
          <div class="display-inline-block padding-left-p25em padding-right-p25em">  
            <button class="JS-reading-topic-button background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="Career">
              Career.
            </button>
          </div>
          <div class="display-inline-block padding-left-p25em padding-right-p25em">
            <button class="JS-reading-topic-button background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="Romance">
              Romance.
            </button>
          </div>
        </div>
        <div class="clear-both padding-bottom-p5em padding-top-p5em text-center">
          <div class="display-inline-block padding-left-p25em padding-right-p25em">  
            <button class="JS-reading-topic-button background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="Friendship">
              Friendship.
            </button>
          </div>
          <div class="display-inline-block padding-left-p25em padding-right-p25em">
            <button class="JS-reading-topic-button background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="Family">
              Family.
            </button>
          </div>
        </div>
        <div class="clear-both padding-bottom-p5em padding-top-p5em text-center">
          <div class="display-inline-block padding-left-p25em padding-right-p25em">  
            <button class="JS-reading-topic-button background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="Self">
              Self.
            </button>
          </div>
          <div class="display-inline-block padding-left-p25em padding-right-p25em">
            <button class="JS-reading-topic-button background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p75em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="Community">
              Community.
            </button>
          </div>
        </div>
      </div>`
    );

  });

  //Prepare the reading for display. Let users choose whether they want their reading in AR or directly on the screen.
  $("body").delegate(".JS-reading-topic-button", "click", function(){
    
    //Draw the tarot cards for a 3-card reading from a 78-card deck
    //If you want to change the type of reading or switch out the deck for one of a different size, this is where I've hard-coded numbers
    app.drawnCardsArray = app.drawCardsFunc(78,3);


    $("main").html(`
      <!-- This section holds a display deck and the buttons to retrieve a reading -->
      <section class="margin-auto padding-left-1p5em padding-right-1p5em" id="display-deck">
        <div class="background-image-fabric box-shadow-1px-neg2px-5px-29rgb min-width-270px padding-bottom-1em padding-top-1p5em">
          <div class="padding-left-1p5em padding-right-1p5em padding-top-1em">
            <div class="padding-bottom-p5em">
              <div class="padding-left-1p5em padding-right-1p5em padding-top-1em">
                <div class="background-248-248-248 background-image-white-paper box-shadow-0-neg2px-2px-43rgb-p3a font-size-p8em line-height-1p3em padding-bottom-p5em padding-left-1p5em padding-right-1p5em padding-top-1em">
                  <p class="padding-top-p5em">
                    For 15 seconds, reflect on a problem you're trying to solve or goal you're trying to achieve in the area of ${this.id}. Then continue to on this page to receive a Tarot reading that will help you examine the ways you may already be shaping the outcome.
                  </p>
                </div>
              </div>
            </div>
            <div class="background-28-92-81 border-color-0-62-51 border-radius-10px border-width-1px box-shadow-1px-neg2px-5px-29rgb display-block height-380px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px position-relative width-230px z-1">
                <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-neg2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px position-absolute rotate-1 top-3px width-230px z-neg1">
                </div>
                <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-6px position-absolute rotate-neg3 top-10px width-230px z-neg2">
                </div>
                <div class="background-28-92-81 border-color-0-62-51-p1 border-radius-10px border-style-solid border-width-1px box-shadow-0-neg2px-2px-43rgb display-block height-380px left-2px margin-auto padding-bottom-15px padding-left-15px padding-right-15px padding-top-15px position-absolute top-6px width-230px z-1">
                    <div class="background-image-floral border-color-0-62-51 border-style-double border-width-5px height-350px width-200px">
                    </div>
                </div>
            </div>
            <div class="padding-bottom-1em padding-top-2em">
              <div class="padding-left-1p5em padding-right-1p5em padding-top-1em">
                <div class="background-248-248-248 background-image-white-paper box-shadow-0-neg2px-2px-43rgb-p3a font-size-p8em line-height-1p3em padding-bottom-p5em padding-left-1p5em padding-right-1p5em padding-top-1em">
                  <p class="padding-top-p5em">
                    Can you currently use a cell phone camera or webcam, as well as <a href target="_blank" src="https://commons.wikimedia.org/wiki/File%3AHiro_marker_ARjs.png">a standard paper Hiro placemarker</a> for an augmented-reality tarot reading?
                  </p>
                </div>
                <div class="padding-top-p5em text-center">
                  <div class="display-inline-block padding-right-1em">
                    <button class="background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p5em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="ar-button">  
                      Yes.
                    </button>
                  </div>
                  <div class="display-inline-block padding-left-1em">
                    <button class="background-image-cardboard border-radius-10px box-shadow-1px-neg3px-7px-29rgb font-size-1p5em font-special-elite line-height-1p3em margin-auto padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center" id="display-reading-button">  
                      No.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    )
  });

  //Generate a tarot reading on the page
  $("body").delegate("#display-reading-button", "click", function(){
  
    //Clear main section of page
    $("main").html("");

    //Display a reading with a given number of cards on the page
    app.display2DReadingFunc(app.drawnCardsArray);

  });
  
  //Generate an AR tarot reading
  $("body").delegate("#ar-button", "click", function(){
    //Draw the tarot cards for a 3-card reading from a 78-card deck
    const drawnCards = app.drawCardsFunc(78,3);
    
    //Style the body of the html for a fullscreen view with no scrollbars
    $("body").css( {
      "margin": "0px",
      "overflow": "hidden"
    } );
    
    //Remove the header and footer to preserve an uninterrupted full-screen display
    $("header").remove();
    $("footer").remove();
  
    //Embed a-frame into the page to display AR Reading for a 3-card reading
    $("main").html(`
      <a-scene arjs>
        <a-assets>
          <img id="past-image" src="https://raw.githubusercontent.com/smendez92/AR-tarot/master/${drawnCards[0].imagePath.slice(1)}"/>
          <img id="present-image" src="https://raw.githubusercontent.com/smendez92/AR-tarot/master/${drawnCards[1].imagePath.slice(1)}"/>
          <img id="future-image" src="https://raw.githubusercontent.com/smendez92/AR-tarot/master/${drawnCards[2].imagePath.slice(1)}"/>
        </a-assets>
        <a-marker-camera preset="hiro">
          <a-entity position="-1 0 0">
            <!-- Using the asset management system. -->
              <a-image width=".6" height="1.05" src="#past-image" rotation="${drawnCards[0].rotation} 0 0"></a-image>
              <a-text align="center" anchor="center" value="Past" position="0 1.05 0"></a-text>
              <a-entity geometry="primitive: plane; width: .6; height: .3" material="color: rgb(0,87,72)" align="center" anchor="center" text="color: rgb(242,242,207); align: center; value: ${drawnCards[0].name}; wrapCount:16" position="0 .7 0"></a-entity>
          </a-entity>
          <a-entity position="0 0 0">
            <!-- Using the asset management system. -->
              <a-image width=".6" height="1.05" src="#present-image" rotation="${drawnCards[1].rotation} 0 0"></a-image>
              <a-text align="center" anchor="center" value="Present" position="0 1.05 0"></a-text>
              <a-entity geometry="primitive: plane; width: .6; height: .3" material="color: rgb(0,87,72)" align="center" anchor="center" text="color: rgb(242,242,207); align: center; value: ${drawnCards[1].name}; wrapCount:16" position="0 .7 0"></a-entity>
            </a-entity>
          <a-entity position="1 0 0">
              <!-- Using the asset management system. -->
              <a-image width=".6" height="1.05" src="#future-image" rotation="${drawnCards[0].rotation} 0 0"></a-image>
              <a-text align="center" anchor="center" value="Future" position="0 1.05 0"></a-text>
              <a-entity geometry="primitive: plane; width: .6; height: .3" material="color: rgb(0,87,72)" align="center" anchor="center" text="color: rgb(242,242,207); align: center; value: ${drawnCards[2].name}; wrapCount:16" position="0 .7 0"></a-entity>
          </a-entity>
        </a-marker-camera>
      </a-scene>
      
      <!-- Create a button that will allow us to move onto the 2d reading from the AR display -->

      <!-- Make sure we still have access to our JS-->
      <script src="./assets/javascript/app.js"></script>`
    );
  });
});

