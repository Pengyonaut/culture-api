const expess = require("express");
const router = expess.Router();


const greekMythology = [
    {
        "name": "The Creation of the World",
        "description": "The myth of how the world and the gods came into existence, with Chaos as the starting point.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Greek_creation_myths",
        "id": 0
    },
    {
        "name": "The Titanomachy",
        "description": "The battle between the Titans and the Olympian gods for control of the cosmos.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Titanomachy",
        "id": 1
    },
    {
        "name": "Prometheus and the Theft of Fire",
        "description": "Prometheus's act of stealing fire from the gods to benefit humanity and his punishment.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Prometheus",
        "id": 2
    },
    {
        "name": "Pandora's Box",
        "description": "The story of how Pandora's curiosity led to the release of all the world's evils.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Pandora%27s_box",
        "id": 3
    },
    {
        "name": "The Story of Persephone",
        "description": "The tale of how Hades abducted Persephone and her eventual return to the surface.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Persephone",
        "id": 4
    },
    {
        "name": "The Labors of Heracles (Hercules)",
        "description": "Heracles' twelve legendary tasks, which he completed to atone for his deeds.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Labours_of_Hercules",
        "id": 5
    },
    {
        "name": "The Trojan War",
        "description": "The epic conflict between the Greeks and Trojans, featuring heroes like Achilles and Hector.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Trojan_War",
        "id": 6
    },
    {
        "name": "The Odyssey",
        "description": "Odysseus' long journey home after the Trojan War, filled with adventures and trials.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Odyssey",
        "id": 7
    },
    {
        "name": "The Minotaur and the Labyrinth",
        "description": "The story of King Minos, the Minotaur, and the labyrinth built by Daedalus.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Minotaur",
        "id": 8
    },
    {
        "name": "The Labors of Theseus",
        "description": "The heroic deeds of Theseus, including the slaying of the Minotaur.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Theseus",
        "id": 9
    },
    {
        "name": "The Judgment of Paris",
        "description": "The tale of the golden apple and Paris's choice, which led to the Trojan War.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Judgment_of_Paris",
        "id": 10
    },
    {
        "name": "The Sirens and the Odyssey",
        "description": "How Odysseus and his crew faced the enchanting but dangerous Sirens on their voyage.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Siren",
        "id": 11
    },
    {
        "name": "The Tale of Icarus and Daedalus",
        "description": "The flight of Icarus and his tragic fall after ignoring his father's warnings.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Icarus",
        "id": 12
    },
    {
        "name": "The Judgment of Solomon",
        "description": "King Solomon's wise decision in the case of two women claiming to be the mother of a baby.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Judgment_of_Solomon",
        "id": 13
    },
    {
        "name": "The Gorgon Medusa",
        "description": "The story of the Gorgon Medusa and her petrifying gaze, leading to her encounter with Perseus.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Medusa",
        "id": 14
    },
    {
        "name": "The Golden Fleece",
        "description": "The quest for the Golden Fleece undertaken by Jason and the Argonauts.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Golden_Fleece",
        "id": 15
    },
    {
        "name": "The Fall of Icarus",
        "description": "The tragic fall of Icarus into the sea after flying too close to the sun with wax wings.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Icarus",
        "id": 16
    },
    {
        "name": "The Judgment of King Midas",
        "description": "The story of King Midas, who wished for the golden touch and learned its drawbacks.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/King_Midas",
        "id": 17
    },
    {
        "name": "The Labors of Bellerophon",
        "description": "The heroic feats of Bellerophon, including the taming of the winged horse Pegasus.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Bellerophon",
        "id": 18
    },
    {
        "name": "The Quest for the Erymanthian Boar",
        "description": "One of the labors of Heracles, capturing the fierce Erymanthian Boar.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Erymanthian_Boar",
        "id": 19
    },
    {
        "id": 20,
        "name": "The Birth of Athena",
        "description": "The myth of how Athena, the goddess of wisdom, was born from the head of her father, Zeus.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Athena"
    },
    {
        "id": 21,
        "name": "The Labors of Perseus",
        "description": "The heroic feats of Perseus, including the slaying of Medusa and saving Andromeda.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Perseus"
    },
    {
        "id": 22,
        "name": "The Curse of Oedipus",
        "description": "The tragic tale of Oedipus, who unwittingly fulfills a prophecy that leads to his downfall.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Oedipus"
    },
    {
        "id": 23,
        "name": "The Wrath of Achilles",
        "description": "Achilles' anger and withdrawal from the Trojan War after the loss of Briseis.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Achilles"
    },
    {
        "id": 24,
        "name": "The Golden Apples of the Hesperides",
        "description": "The story of how Heracles retrieved the golden apples as one of his labors.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Hesperides"
    },
    {
        "id": 25,
        "name": "The Tragedy of Pygmalion and Galatea",
        "description": "The myth of Pygmalion, a sculptor who fell in love with a statue he created and brought it to life.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Pygmalion_and_Galatea"
    },
    {
        "id": 26,
        "name": "The Aegis of Zeus",
        "description": "The powerful shield or protective cloak that Zeus and Athena carried into battle.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Aegis"
    },
    {
        "id": 27,
        "name": "The Love of Eros and Psyche",
        "description": "The romantic tale of the love between Eros (Cupid) and Psyche, despite obstacles and challenges.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Eros_and_Psyche"
    },
    {
        "id": 28,
        "name": "The Judgement of Heracles and Atlas",
        "description": "The story of Heracles tricking Atlas into taking the weight of the heavens on his shoulders.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Atlas_(mythology)"
    },
    {
        "id": 29,
        "name": "The Fate of Sisyphus",
        "description": "Sisyphus's eternal punishment of rolling a boulder up a hill, only to have it roll back down.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Sisyphus"
    },
    {
        "id": 30,
        "name": "The Deeds of Cadmus",
        "description": "The adventures of Cadmus, including the founding of Thebes and the sowing of dragon's teeth.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Cadmus"
    },
    {
        "id": 31,
        "name": "The Flight of Boreas and Orithyia",
        "description": "The tale of Boreas, the North Wind, abducting Orithyia, a mortal woman.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Boreas_and_Orithyia"
    },
    {
        "id": 32,
        "name": "The Adventures of Atalanta",
        "description": "The story of Atalanta, a swift and skilled huntress, and her many adventures.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Atalanta"
    },
    {
        "id": 33,
        "name": "The Calydonian Boar Hunt",
        "description": "The heroic hunt for the Calydonian Boar led by Meleager and Atalanta.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Calydonian_Boar"
    },
    {
        "id": 34,
        "name": "The Capture of the Ceryneian Hind",
        "description": "Heracles' task of capturing the sacred hind with golden antlers as one of his labors.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Ceryneian_Hind"
    },
    {
        "id": 35,
        "name": "The Rescue of Andromeda",
        "description": "Perseus saving Andromeda from a sea monster and marrying her.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Andromeda_(mythology)"
    },
    {
        "id": 36,
        "name": "The Myth of Narcissus",
        "description": "The story of Narcissus, a youth who fell in love with his own reflection.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Narcissus_(mythology)"
    },
    {
        "id": 37,
        "name": "The Voyage of the Argo",
        "description": "The epic journey of the ship Argo and its crew, led by Jason, in search of the Golden Fleece.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Argonauts"
    },
    {
        "id": 38,
        "name": "The Quest for the Aegis",
        "description": "The search for the protective shield, the Aegis, that belonged to Zeus and later Athena.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Aegis"
    },
    {
        "id": 20,
        "name": "The Birth of Athena",
        "description": "The myth of how Athena, the goddess of wisdom, was born from the head of her father, Zeus.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Athena"
    },
    {
        "id": 21,
        "name": "The Labors of Perseus",
        "description": "The heroic feats of Perseus, including the slaying of Medusa and saving Andromeda.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Perseus"
    },
    {
        "id": 22,
        "name": "The Curse of Oedipus",
        "description": "The tragic tale of Oedipus, who unwittingly fulfills a prophecy that leads to his downfall.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Oedipus"
    },
    {
        "id": 23,
        "name": "The Wrath of Achilles",
        "description": "Achilles' anger and withdrawal from the Trojan War after the loss of Briseis.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Achilles"
    },
    {
        "id": 24,
        "name": "The Golden Apples of the Hesperides",
        "description": "The story of how Heracles retrieved the golden apples as one of his labors.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Hesperides"
    },
    {
        "id": 25,
        "name": "The Tragedy of Pygmalion and Galatea",
        "description": "The myth of Pygmalion, a sculptor who fell in love with a statue he created and brought it to life.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Pygmalion_and_Galatea"
    },
    {
        "id": 26,
        "name": "The Aegis of Zeus",
        "description": "The powerful shield or protective cloak that Zeus and Athena carried into battle.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Aegis"
    },
    {
        "id": 27,
        "name": "The Love of Eros and Psyche",
        "description": "The romantic tale of the love between Eros (Cupid) and Psyche, despite obstacles and challenges.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Eros_and_Psyche"
    },
    {
        "id": 28,
        "name": "The Judgement of Heracles and Atlas",
        "description": "The story of Heracles tricking Atlas into taking the weight of the heavens on his shoulders.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Atlas_(mythology)"
    },
    {
        "id": 29,
        "name": "The Fate of Sisyphus",
        "description": "Sisyphus's eternal punishment of rolling a boulder up a hill, only to have it roll back down.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Sisyphus"
    },
    {
        "id": 30,
        "name": "The Deeds of Cadmus",
        "description": "The adventures of Cadmus, including the founding of Thebes and the sowing of dragon's teeth.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Cadmus"
    },
    {
        "id": 31,
        "name": "The Flight of Boreas and Orithyia",
        "description": "The tale of Boreas, the North Wind, abducting Orithyia, a mortal woman.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Boreas_and_Orithyia"
    },
    {
        "id": 32,
        "name": "The Adventures of Atalanta",
        "description": "The story of Atalanta, a swift and skilled huntress, and her many adventures.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Atalanta"
    },
    {
        "id": 33,
        "name": "The Calydonian Boar Hunt",
        "description": "The heroic hunt for the Calydonian Boar led by Meleager and Atalanta.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Calydonian_Boar"
    },
    {
        "id": 34,
        "name": "The Capture of the Ceryneian Hind",
        "description": "Heracles' task of capturing the sacred hind with golden antlers as one of his labors.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Ceryneian_Hind"
    },
    {
        "id": 35,
        "name": "The Rescue of Andromeda",
        "description": "Perseus saving Andromeda from a sea monster and marrying her.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Andromeda_(mythology)"
    },
    {
        "id": 36,
        "name": "The Myth of Narcissus",
        "description": "The story of Narcissus, a youth who fell in love with his own reflection.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Narcissus_(mythology)"
    },
    {
        "id": 37,
        "name": "The Voyage of the Argo",
        "description": "The epic journey of the ship Argo and its crew, led by Jason, in search of the Golden Fleece.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Argonauts"
    },
    {
        "id": 38,
        "name": "The Quest for the Aegis",
        "description": "The search for the protective shield, the Aegis, that belonged to Zeus and later Athena.",
        "type": "greek",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Aegis"
    }
]



router.get("/greekMythology", (req, res) => {
    res.send(greekMythology);
});




router.get("/greekMythology/:id", (req, res) => {
    const factId = parseInt(req.params.id);
    const singleFact = greekMythology.find((item) => item.id === factId);

    if (!factId) {
        return res.status(404).json({ message: "Single fact data not found" });
    }
    res.json(singleFact);
});

module.exports = router;