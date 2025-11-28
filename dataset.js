const MONSTER_DATA_CSV = `
Family,Element,Name,Stars,HP,Atk,Def,Spd,ImageURL
Nina Williams,Light,Nina Williams,5,10545,725,714,105,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_ninawilliams_l.png
Hacker,Light,51LV3R,5,11850,626,725,100,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0146_1_4_51lv3r.png
Hacker,Wind,570RM,5,10050,845,626,100,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0146_1_3_570rm.png
Hacker,Fire,7R1X,5,11700,648,714,100,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0146_1_2_7r1x.png
Totemist,Water,Aaliyah,5,11205,615,780,99,https://summonerswarskyarena.info/wp-content/uploads/2021/11/unit_icon_0078_1_1.png
Druid,Water,Abellio,5,10545,692,747,102,https://summonerswarskyarena.info/wp-content/uploads/2018/09/abellio.png
Cannon Girl,Water,Abigail,4,9225,736,626,103,https://summonerswarskyarena.info/wp-content/uploads/2019/02/abigail.png
Sylphid,Wind,Acasis,4,11370,571,648,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Acasis_Icon.png
Beetle Guardian,Dark,Actaeon,5,10710,549,878,102,https://summonerswarskyarena.info/wp-content/uploads/2025/04/unit_icon_0177_0_5_actaeon2.png
Elven Ranger,Fire,Adrian,3,9060,659,549,101,https://summonerswarskyarena.info/wp-content/uploads/2015/11/Adrian-Fire.png
Pudding Princess,Water,Adriana,5,10710,736,692,111,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0099_1_1.png
Barbaric King,Water,Aegir,4,10215,725,571,103,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Aegir-Water.png
Fairy,Wind,Aeilene,2,7905,604,516,104,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Aeilene_Icon.png
Centaur Knight,Fire,Agirus,4,9225,769,593,104,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0193_1_2_Agrius_2.png
Bearman,Light,Ahman,3,10710,549,551,101,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Ahman_Icon.png
Desert Warrior,Light,Ahmed,4,11535,659,549,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0115_1_4.png
Ifrit,Wind,Akhamamir,5,11370,812,571,100,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Akhamamir-Wind.png
Succubus,Fire,Akia,4,10380,758,527,106,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Akia_Icon.png
Valkyrja,Light,Akroma,5,10710,681,747,116,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Akroma_Icon.png
Unicorn,Dark,Alexandra,5,12510,703,604,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Alexandra_Icon.png
Macaron Guard,Fire,Alice,5,9555,604,900,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0097_1_2.png
Polar Queen,Water,Alicia,5,9885,790,692,96,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Alicia-Water.png
Vagabond,Water,Allen,2,10050,461,516,98,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Allen_Icon.png
Altaïr,Light,Altaïr,5,9390,900,615,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0111_1_4.png
Magical Archer,Fire,Amanda,3,9060,790,417,105,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Cassandra_Icon.png
Anubis,Light,Amarna,4,9885,681,637,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Amarna-Light.png
Battle Angel,Water,Amber,5,10545,812,626,104,https://summonerswarskyarena.info/wp-content/uploads/2022/07/unit_icon_0087_1_1.png
Horus,Dark,Amduat,4,10380,648,637,102,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Amduat-Dark.png
Unicorn,Water,Amelia,5,12345,637,681,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Amelia_Icon.png
Occult Girl,Water,Anavel,5,10710,769,659,105,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Anavel_Icon.png
Magic Order Guardian,Water,Anders,5,9885,856,626,100,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0150_1_1_anders2.png
Inferno,Wind,Anduril,3,7080,823,516,98,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Anduril_Icon.png
Pudding Princess,Wind,Angela,5,11205,670,725,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0099_1_3.png
Cow Girl,Fire,Anne,3,8895,703,516,102,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Anne-Fire.png
Lich,Fire,Antares,4,9720,790,538,96,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Antares_Icon.png
Charger Shark,Water,Aqcus,3,9060,714,498,105,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Aqcus-Water.png
Brownie Magician,Wind,Aquila,4,9555,747,593,106,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Aquila-Wind.png
Nine-tailed Fox,Wind,Arang,4,9885,944,373,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Arang_Icon.png
Magic Order Enchantress,Light,Arcana,4,10380,670,615,103,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0152_1_4_arcana2.png
Magical Archer,Wind,Ardella,3,7575,845,461,105,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Ardella_Icon.png
Vampire,Wind,Argen,4,9555,790,549,99,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Argen_Icon.png
Succubus,Light,Aria,4,9390,747,604,106,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Aria_Icon.png
Pudding Princess,Light,Ariana,5,11040,659,747,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0099_1_4.png
Archangel,Water,Ariel,5,11850,604,747,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Ariel_Icon.png
Yeti,Light,Arkajan,2,8565,417,659,101,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Arkajan_Icon.png
Death Knight,Fire,Arnold,4,11700,604,593,101,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Arnold_Icon.png
Archangel,Light,Artamiel,5,11535,604,769,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Artamiel_Icon.png
Centaur Knight,Dark,Asbolus,4,9390,790,560,104,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0193_1_5_Asbolus_2.png
Sylph,Dark,Aschubel,4,11205,736,494,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Aschubel_Icon.png
Desert Warrior,Fire,Ashour,5,12180,725,604,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0115_1_2.png
Hell Lady,Light,Asima,5,10710,812,615,104,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Asima-Light.png
Magic Knight,Fire,Astar,4,8895,834,549,110,https://summonerswarskyarena.info/wp-content/uploads/2015/07/Astar-Fire.png
Mercenary Queen,Wind,Astrid,4,10050,648,659,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0117_1_3.png
Undine,Fire,Atenai,4,12510,527,615,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Atenai_Icon.png
Macaron Guard,Light,Audrey,5,9720,615,878,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0097_1_4.png
Gladiatrix,Light,Aurelia,4,9885,703,615,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0116_1_4.png
Anubis,Water,Avaris,4,9555,736,604,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Avaris-Water.png
Exorcist Association Hunter,Wind,Aya,5,12015,670,670,102,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0164_1_3_aya.png
Azure Dragon Swordsman,Water,Azure Dragon Swordsman,4,9720,758,571,103,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Azure-Dragon-SwordsmanWa.png
Azure Dragon Swordsman,Fire,Azure Dragon Swordsman,5,10545,856,582,103,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Azure-Dragon-SwordsmanF.png
Azure Dragon Swordsman,Light,Azure Dragon Swordsman,5,10215,867,593,103,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Azure-Dragon-SwordsmanL.png
Azure Dragon Swordsman,Dark,Azure Dragon Swordsman,4,10050,747,560,103,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Azure-Dragon-SwordsmanD.png
Azure Dragon Swordsman,Wind,Azure Dragon Swordsman,5,10380,878,571,103,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Azure-Dragon-SwordsmanWi.png
Beast Hunter,Light,Baekdu,3,9060,670,538,100,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Baekdu_Icon.png
Demon,Fire,Bael,5,10215,856,604,104,https://summonerswarskyarena.info/wp-content/uploads/2019/08/bael.png
Giant Warrior,Water,Bagir,3,8895,483,736,114,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Bagir_Icon.png
Boomerang Warrior,Light,Bailey,4,9060,758,615,101,https://summonerswarskyarena.info/wp-content/uploads/2018/03/bailey.png
Lightning Emperor,Fire,Baleygr,5,10215,790,670,102,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Baleygr_Icon.png
Beast Rider,Water,Barbara,5,9720,845,648,108,https://summonerswarskyarena.info/wp-content/uploads/2019/12/unit_icon_0054_0_0.png
Sylph,Fire,Baretta,4,11205,681,549,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Baretta_Icon.png
Pirate Captain,Wind,Barque,4,9885,769,549,108,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Barque-Wind.png
Battle Mammoth,Dark,Basalt,3,9885,439,714,99,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Basalt-Dark.png
Desert Queen,Water,Bastet,5,11850,637,714,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Bastet-Water.png
Bayek,Fire,Bayek,5,12180,725,604,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0110_1_2.png
Bayek,Water,Bayek,4,10050,714,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0110_1_1.png
Bayek,Wind,Bayek,5,12510,714,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0110_1_3.png
Bayek,Light,Bayek,4,11535,659,549,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0110_1_4.png
Bayek,Dark,Bayek,5,10875,747,670,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0110_1_5.png
Demon,Dark,Beelzebub,5,10050,878,593,104,https://summonerswarskyarena.info/wp-content/uploads/2019/08/beelzebub.png
Demon,Water,Belial,5,10545,823,615,104,https://summonerswarskyarena.info/wp-content/uploads/2019/08/belial.png
Chakram Dancer,Dark,Belita,4,8895,790,593,103,https://summonerswarskyarena.info/wp-content/uploads/2018/03/belita.png
Cannon Girl,Dark,Bella,5,9720,812,681,103,https://summonerswarskyarena.info/wp-content/uploads/2019/02/bella.png
Inugami,Light,Belladeon,3,9885,472,681,108,https://summonerswarskyarena.info/wp-content/uploads/2017/08/belladeon.png
Druid,Fire,Bellenus,5,10215,703,758,102,https://summonerswarskyarena.info/wp-content/uploads/2018/09/bellenus.png
Weapon Master,Light,Benedict,5,10050,845,626,102,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0080_1_4.png
Blade Dancer,Fire,Berenice,4,10875,703,549,105,https://summonerswarskyarena.info/wp-content/uploads/2020/11/berenice.png
Mercenary Queen,Light,Berghild,5,10050,867,604,118,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0117_1_4.png
Kobold Bomber,Dark,Bering,4,9225,790,571,101,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Bering-Dark.png
Shadow Claw,Fire,Bernadotte,5,10050,834,637,103,https://summonerswarskyarena.info/wp-content/uploads/2020/11/bernadotte.png
Griffon,Wind,Bernard,3,10380,417,703,111,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Bernard_Icon.png
Hell Lady,Water,Beth,5,10215,834,626,104,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Beth-Water.png
Magical Archer,Dark,Bethony,4,9060,922,450,120,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Bethony_Icon.png
Mermaid,Dark,Betta,4,11205,516,714,110,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Betta-Dark.png
Hypnomeow,Water,Birman,4,12180,615,549,115,https://summonerswarskyarena.info/wp-content/uploads/2022/05/unit_icon_0085_1_1.png
Black Tortoise Champion,Wind,Black Tortoise Champion,5,10380,626,823,99,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0183_1_3_Black-Tortoise-Champion.png
Devil Maiden,Fire,Bloodya,5,10050,845,626,101,https://summonerswarskyarena.info/wp-content/uploads/2023/08/unit_icon_0127_1_2.png
Lightning Emperor,Water,Bolverk,5,12180,725,604,102,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Bolverk_Icon.png
Hypnomeow,Dark,Bombay,4,11850,670,516,100,https://summonerswarskyarena.info/wp-content/uploads/2022/05/unit_icon_0085_1_5.png
Slayer,Water,Borgnine,5,12180,714,615,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/borgnine.png
Polar Queen,Fire,Brandia,5,10545,823,615,111,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Brandia-Fire.png
Elemental,Fire,Bremis,2,7740,637,494,107,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Bremis_Icon.png
Death Knight,Wind,Briand,4,12840,527,593,116,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Briand_Icon.png
Pirate Captain,Light,Brig,4,9390,790,560,108,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Brig-Light.png
Magic Order Swordsinger,Light,Brigitta,5,10380,845,604,106,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0151_1_4_brigitta2.png
Mercenary Queen,Water,Brita,5,10050,736,736,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0117_1_1.png
Frankenstein,Fire,Bulldozer,3,10050,527,615,98,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Bulldozer-Fire.png
Minotauros,Fire,Burentau,3,9720,615,549,99,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Burentau-Fire.png
Dokkaebi Lord,Wind,Byungchul,5,12840,714,571,96,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_1_3.png
Vampire,Dark,Cadiz,5,11205,856,538,99,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Cadiz_Icon.png
Garuda,Fire,Cahule,2,5595,659,615,93,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Cahule_Icon.png
Charger Shark,Dark,Calicus,3,9720,670,502,105,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Calicus-Dark.png
Pixie,Dark,Camaryn,2,7410,703,450,111,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Camaryn-Dark.png
Valkyrja,Water,Camilla,5,12015,714,626,101,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0014_0_2-1.png
Elemental,Dark,Camules,3,8565,747,494,122,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Camules_Icon.png
Sniper Mk.I,Wind,Carbine,4,8895,747,637,112,https://summonerswarskyarena.info/wp-content/uploads/2019/02/carbine.png
Sniper Mk.I,Fire,Carcano,4,9225,758,604,112,https://summonerswarskyarena.info/wp-content/uploads/2019/02/carcano.png
Weapon Master,Fire,Carlos,5,10215,823,637,102,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0080_1_2.png
Cyborg,Fire,Carmella,4,10050,747,560,104,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0145_0_2.png
Pirate Captain,Fire,Carrack,4,10545,823,450,108,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Carrack-Fire.png
Cow Girl,Dark,Cassie,3,8565,769,472,102,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Cassie-Dark.png
Poison Master,Dark,Cayde,4,9555,604,736,101,https://summonerswarskyarena.info/wp-content/uploads/2020/12/cayde.png
Arcane Weapon,Water,Cecilia,5,10710,823,604,99,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0192_1_1_Cecilia_2.png
Magic Order Elementalist,Dark,Celestara,5,10050,889,582,101,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0153_1_5_celestara2.png
Harp Magician,Light,Celia,5,11700,626,736,113,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Celia_Icon.png
Rune Blacksmith,Wind,Celine,4,11040,582,659,103,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0081_1_3.png
Amazon,Fire,Ceres,3,10050,801,348,102,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Ceres_Icon.png
Howl,Dark,Chacha,2,8400,549,540,99,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Chacha-Dark.png
Indra,Wind,Chakra,5,10215,867,593,106,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0118_1_3.png
Nine-tailed Fox,Light,Chamie,4,10380,747,538,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Chamie_Icon.png
Black Tea Bunny,Wind,Chamomile,4,9060,801,571,102,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0100_1_3.png
Beast Monk,Water,Chandra,5,13170,604,659,101,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Chandra-Water.png
Occult Girl,Wind,Charlotte,5,10380,845,604,105,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Charlotte_Icon.png
Sky Dancer,Wind,Chasun,4,11040,659,582,101,https://summonerswarskyarena.info/wp-content/uploads/2015/01/chasun.png
Art Master,Wind,Cheongpung,5,10545,867,571,102,https://summonerswarskyarena.info/wp-content/uploads/2020/06/cheongpung.png
Pixie,Light,Cheryl,2,8400,582,505,111,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Cheryl-Light.png
Howl,Wind,Chichi,2,7905,516,604,99,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Chichi-Wind.png
Jack-o'-lantern,Water,Chilling,4,9225,736,626,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Chilling-Water.png
Centaur Knight,Light,Chiron,4,9720,780,549,104,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0193_1_4_Chiron_2.png
Pioneer,Fire,Chiwu,5,12180,780,549,103,https://summonerswarskyarena.info/wp-content/uploads/2015/01/chiwu.png
Epikion Priest,Fire,Chloe,4,11700,549,648,111,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Chloe_Icon.png
Dragon Knight,Water,Chow,5,13005,681,593,100,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Chow-Water.png
Magical Archer,Light,Chris,4,10380,878,406,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Chris_Icon.png
Cannon Girl,Wind,Christina,5,10050,790,681,103,https://summonerswarskyarena.info/wp-content/uploads/2019/02/christina.png
Arcane Weapon,Light,Christine,5,12180,703,626,99,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0192_1_4_Christine_2.png
CHUN LI,Fire,CHUN-LI,4,10875,703,549,105,https://summonerswarskyarena.info/wp-content/uploads/2020/10/fire-chun-li.png
CHUN LI,Water,CHUN-LI,4,9885,790,527,105,https://summonerswarskyarena.info/wp-content/uploads/2020/10/water-chun-li.png
CHUN LI,Wind,CHUN-LI,4,9720,758,571,105,https://summonerswarskyarena.info/wp-content/uploads/2020/10/wind-chun-li-1.png
CHUN LI,Light,CHUN-LI,4,10050,769,538,120,https://summonerswarskyarena.info/wp-content/uploads/2020/10/light-chun-li.png
CHUN LI,Dark,CHUN-LI,4,10215,692,604,105,https://summonerswarskyarena.info/wp-content/uploads/2020/10/dark-chun-li.png
Mermaid,Wind,Cichlid,4,11535,648,560,110,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Cichlid-Wind.png
Ciri,Water,Ciri,5,9885,900,582,106,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0142_1_1.png
Ciri,Fire,Ciri,4,9720,801,527,106,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0142_1_2.png
Ciri,Wind,Ciri,5,10215,878,582,121,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0142_1_3.png
Ciri,Light,Ciri,5,10380,845,604,106,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0142_1_4.png
Ciri,Dark,Ciri,4,10050,790,516,106,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0142_1_5.png
Battle Angel,Fire,Claire,5,9885,900,582,104,https://summonerswarskyarena.info/wp-content/uploads/2022/07/unit_icon_0087_1_2.png
Pierret,Fire,Clara,4,11205,769,461,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Clara_Icon.png
Mage,Fire,Coco,5,10710,812,615,116,https://summonerswarskyarena.info/wp-content/uploads/2021/05/coco.png
Imp,Fire,Cogma,2,7740,648,483,115,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Cogma-Fire.png
Harpu,Fire,Colleen,2,10875,461,461,106,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Colleen_Icon.png
Death Knight,Light,Conrad,4,9720,769,560,101,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Conrad-Light.png
Living Armor,Wind,Copper,3,9555,483,692,98,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Copper_Icon.png
Blade Dancer,Wind,Cordelia,4,9720,758,571,105,https://summonerswarskyarena.info/wp-content/uploads/2020/11/cordelia.png
Sniper Mk.I,Water,Covenant,4,9390,780,571,97,https://summonerswarskyarena.info/wp-content/uploads/2019/02/covenant.png
Slayer,Light,Craig,5,12510,648,659,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/craig.png
Hell Lady,Dark,Craka,5,11535,769,604,104,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Craka-Dark.png
Frankenstein,Wind,Crane,3,9225,505,692,98,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Crane-Wind.png
Frankenstein,Dark,Crawler,3,9060,505,703,98,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Crawler-Dark.png
Arcane Weapon,Fire,Cynthia,5,11040,747,659,99,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0192_1_2Cynthia_2.png
Warbear,Water,Dagora,3,11850,417,604,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Dagora_Icon.png
Bearman,Wind,Dagorr,3,9885,692,461,101,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Dagorr_Icon.png
Elemental,Water,Daharenos,2,7080,758,418,107,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Daharenos_Icon.png
Arcane Weapon,Wind,Daisy,5,10215,845,615,114,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0192_1_3_Daisy_2.png
Dokkaebi Princess and Sapsaree,Dark,Damee and Sapsaree,4,10050,659,648,103,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_5.png
Sky Surfer,Light,Daniel,5,10380,801,648,105,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0076_1_4.png
Asura,Light,Danu,4,9720,812,516,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0119_1_4.png
Fairy King,Fire,Daphnis,5,9885,834,648,101,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0040_1_3.png
Vagabond,Light,Darion,3,10710,549,549,98,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Darion_Icon.png
Rune Blacksmith,Dark,Deborah,4,10050,703,604,103,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0081_1_5.png
Salamander,Dark,Decamaron,2,7575,516,626,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Decamaron_Icon.png
Undine,Wind,Delphoi,4,10875,549,703,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Delphoi_Icon.png
Drakan Warrior,Fire,Deragron,5,9720,878,615,101,https://summonerswarskyarena.info/wp-content/uploads/2024/10/unit_icon_0161_0_2_deragron2.png
Battle Angel,Dark,Destiny,5,10215,889,571,104,https://summonerswarskyarena.info/wp-content/uploads/2022/07/unit_icon_0087_1_5.png
Chakram Dancer,Light,Deva,4,9555,725,615,103,https://summonerswarskyarena.info/wp-content/uploads/2018/03/deva.png
Indra,Dark,Devaraja,5,12180,714,615,106,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0118_1_5.png
Lizardman,Dark,Devinodon,3,9060,593,615,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Devinodon-Dark.png
DHALSIM,Fire,DHALSIM,4,10875,637,615,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/wind-dhalsim.png
DHALSIM,Water,DHALSIM,4,9555,747,593,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/water-dhalsim.png
DHALSIM,Wind,DHALSIM,4,9060,769,604,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/wind-dhalsim.png
DHALSIM,Light,DHALSIM,4,10710,703,560,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/light-dhalsim.png
DHALSIM,Dark,DHALSIM,4,9555,604,736,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/dark-dhalsim.png
Unicorn,Wind,Diana,5,12840,681,604,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Diana_Icon.png
Death Knight,Dark,Dias,4,9885,637,681,101,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Dias_Icon.png
Exorcist Association Conjurer,Dark,Doburoku,5,10545,758,681,101,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0165_1_5_doburoku.png
Weapon Master,Wind,Dominic,5,10875,801,615,102,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0080_1_3.png
Penguin Knight,Light,Dona,3,9720,615,549,105,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Dona-Light.png
String Master,Light,Dongbaek,4,12015,505,670,107,https://summonerswarskyarena.info/wp-content/uploads/2020/06/dongbaek.png
Mage,Light,Dorothy,5,10710,834,593,101,https://summonerswarskyarena.info/wp-content/uploads/2021/05/dorothy.png
Striker,Fire,Douglas,5,9885,889,593,103,https://summonerswarskyarena.info/wp-content/uploads/2020/11/douglas.png
Onmyouji,Dark,Douman,5,12180,604,725,103,https://summonerswarskyarena.info/wp-content/uploads/2021/03/douman.png
Harg,Light,Dova,4,10710,615,648,105,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Dova-Light.png
Kobold Bomber,Light,Dover,4,8565,801,604,101,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Dover-Light.png
Brownie Magician,Fire,Draco,4,10050,659,648,106,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Draco-Fire.png
Sniper Mk.I,Dark,Dragunov,4,9060,790,582,97,https://summonerswarskyarena.info/wp-content/uploads/2019/02/dragunov.png
Drakan Warrior,Dark,Drakar,5,10215,845,615,101,https://summonerswarskyarena.info/wp-content/uploads/2024/10/2unit_icon_0161_0_5_drakar2.png
Frankenstein,Light,Driller,3,10215,494,637,98,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Driller-Light.png
Inferno,Dark,Drogan,3,8400,878,373,95,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Drogan_Icon.png
Horus,Fire,Duamutef,4,9390,626,725,102,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Duamutef-Fire.png
Jack-o'-lantern,Dark,Dusky,4,9060,801,571,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Dusky-Dark.png
Indra,Light,Dyeus,5,9885,900,582,106,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0118_1_4.png
Giant Warrior,Light,Einheri,4,9555,582,758,99,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Einheri_Icon.png
Minotauros,Wind,Eintau,3,10380,593,530,99,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Eintau_Icon.png
Vampire Lord,Dark,Eirgar,5,10050,834,637,99,https://summonerswarskyarena.info/wp-content/uploads/2019/06/unit_icon_0050_0_2.png
Eivor,Fire,Eivor,4,11700,670,527,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0107_1_2.png
Eivor,Water,Eivor,5,10050,736,736,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0107_1_1.png
Eivor,Wind,Eivor,4,10050,648,659,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0107_1_3.png
Eivor,Dark,Eivor,5,12180,736,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0107_1_5.png
Eivor,Light,Eivor,5,10050,867,604,118,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0107_1_4.png
Archangel,Wind,Eladriel,5,12015,626,714,115,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Eladriel_Icon.png
Unicorn,Light,Eleanor,5,12840,604,681,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Eleanor_Icon.png
Pudding Princess,Dark,Elena,5,10545,747,692,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0099_1_5.png
Gladiatrix,Wind,Eleni,5,9720,867,626,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0116_1_3.png
Polar Queen,Light,Elenoa,5,11040,692,714,111,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Elenoa-Light.png
Beetle Guardian,Wind,Elephas,5,11370,571,812,102,https://summonerswarskyarena.info/wp-content/uploads/2025/04/unit_icon_0177_0_1_elephas2.png
Arcane Weapon,Dark,Elise,5,10050,834,637,99,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0192_1_5_Elise_2.png
Cyborg,Wind,Eliza,4,9390,812,538,104,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0145_0_3.png
Totemist,Light,Ella,5,12180,659,670,99,https://summonerswarskyarena.info/wp-content/uploads/2021/11/unit_icon_0078_1_4.png
High Elemental,Water,Ellena,3,5925,812,604,103,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ellena_Icon.png
Amazon,Water,Ellin,3,9060,823,384,102,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Ellin_Icon.png
Serpent,Light,Elpuria,3,10545,538,580,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_3_0.png
Ifrit,Light,Elsharion,5,10545,780,659,100,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Elsharion-Light.png
Fairy,Water,Elucia,3,9060,626,582,104,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Elucia_Icon-1.png
Inferno,Light,Eludain,3,7740,867,428,95,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Eludain_Icon.png
Phoenix,Light,Eludia,5,9390,1054,461,99,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Eludia_Icon.png
Elven Ranger,Water,Eluin,3,8235,725,538,101,https://summonerswarskyarena.info/wp-content/uploads/2015/11/Eluin-Water.png
Cannon Girl,Light,Emily,4,9720,725,604,103,https://summonerswarskyarena.info/wp-content/uploads/2019/02/emily.png
Neostone Agent,Water,Emma,4,10215,626,670,104,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Emma-Water-N.png
Magic Order Elementalist,Fire,Enshia,5,10545,878,560,101,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0153_1_2_enshia2.png
Sylph,Light,Eredas,4,11535,703,505,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Eredas_Icon.png
Drakan Warrior,Wind,Ereshion,5,10380,604,845,101,https://summonerswarskyarena.info/wp-content/uploads/2024/10/unit_icon_0161_0_2_ereshion2.png
Serpent,Wind,Ermeda,3,11370,582,478,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_2_0.png
Elven Ranger,Wind,Erwin,3,8400,714,538,101,https://summonerswarskyarena.info/wp-content/uploads/2015/11/Erwin-Wind.png
Werewolf,Light,Eshir,3,12840,472,483,115,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Eshir_Icon.png
Espresso Cookie,Fire,Espresso Cookie,4,9390,812,538,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0090_1_2.png
Espresso Cookie,Water,Espresso Cookie,4,9885,790,527,116,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0090_1_1.png
Espresso Cookie,Light,Espresso Cookie,4,9720,790,538,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0090_1_4.png
Espresso Cookie,Wind,Espresso Cookie,4,9060,801,571,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0090_1_3.png
Espresso Cookie,Dark,Espresso Cookie,4,9225,801,560,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0090_1_5.png
Hell Lady,Wind,Ethna,5,10380,845,604,119,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Ethna-Wind.png
Dokkaebi Lord,Light,Euldong,5,12510,626,681,96,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_1_4.png
Dokkaebi Princess and Sapsaree,Light,Eunbee and Sapsaree,4,10710,549,714,103,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_4.png
Pierret,Light,Eva,4,10710,714,549,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Eva_Icon.png
Steel Commander,Dark,Evan,4,9390,812,538,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0114_1_5.png
Ezio,Fire,Ezio,5,9885,889,593,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0109_1_2.png
Ezio,Water,Ezio,5,9720,911,582,113,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0109_1_1.png
Ezio,Wind,Ezio,4,9225,801,560,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0109_1_3.png
Ezio,Light,Ezio,5,10380,878,571,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0109_1_4.png
Ezio,Dark,Ezio,4,9390,812,538,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0109_1_5.png
Imp Champion,Fire,Fairo,3,8565,703,538,102,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Fairo-Fire.png
Magical Archer,Light,Fami,3,8895,747,472,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Fami_Icon.png
Serpent,Fire,Fao,3,12015,549,461,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_1_0.png
Gladiatrix,Fire,Federica,5,9885,878,604,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0116_1_2.png
Death Knight,Water,Fedora,4,9885,659,659,101,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Fedora_Icon-1.png
Kung Fu Girl,Dark,Fei,4,10215,714,582,102,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Fei-Dark.png
Dryad,Light,Felleria,4,11700,549,648,104,https://summonerswarskyarena.info/wp-content/uploads/2018/09/Felleria_Icon.png
Panda Warrior,Wind,Feng Yan,5,10215,659,801,96,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Feng_Yan_Icon.png
Archangel,Dark,Fermion,5,10215,582,878,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Fermion_Icon.png
Joker,Light,Figaro,4,11700,703,494,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Figaro_Icon.png
Magic Order Swordsinger,Dark,Fiona,4,10050,790,516,106,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0151_1_5_fiona2.png
Fairy Queen,Light,Fran,3,10215,670,461,103,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Fran-Light.png
Dual Blade,Light,Frederic,5,9390,900,615,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0113_1_4.png
Sylphid,Fire,Fria,4,8565,769,637,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Fria_Icon.png
Drakan Warrior,Light,Fridrion,5,10545,615,823,101,https://summonerswarskyarena.info/wp-content/uploads/2024/10/unit_icon_0161_0_4_fridrion2.png
Pirate Captain,Dark,Frigate,4,11370,593,626,108,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Frigate-Dark.png
Lich,Wind,Fuco,4,10875,703,549,96,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Fuco_Icon.png
Choco Knight,Light,Fudge,4,9555,758,582,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0098_1_4.png
Onimusha,Wind,Fuuki,4,11370,703,516,100,https://summonerswarskyarena.info/wp-content/uploads/2021/02/fuuki.png
Imp,Water,Fynn,2,5265,736,560,111,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Fynn-Water.png
Pirate Captain,Water,Galleon,4,11535,714,494,108,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Galleon-Water.png
Hellhound,Wind,Gamir,2,6915,790,395,113,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Gamir_Icon.png
Choco Knight,Water,Ganache,4,9885,747,571,102,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0098_1_1.png
Beast Hunter,Water,Gangchun,3,8400,703,549,100,https://summonerswarskyarena.info/wp-content/uploads/2015/01/gangchun.png
Fairy King,Wind,Ganymede,5,10710,736,692,116,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Ganymede-Wind.png
Dokkaebi Lord,Dark,Gapsoo,5,12015,615,725,96,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_1_5.png
Ninja,Fire,Garo,4,8235,878,549,107,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Garo_Icon.png
Werewolf,Fire,Garoche,3,12015,516,494,115,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Garoche_Icon.png
Imp,Dark,Garok,2,7410,725,428,113,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Garok-Dark.png
Lightning Emperor,Light,Geldnir,5,11700,692,670,102,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Geldnir_Icon.png
Brownie Magician,Light,Gemini,4,9225,780,582,106,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Gemini-Light.png
Viking,Fire,Geoffrey,3,8565,571,670,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Geoffrey_Icon.png
Geralt,Water,Geralt,5,9885,856,626,100,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0141_1_1.png
Geralt,Fire,Geralt,5,9555,867,637,100,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0141_1_2.png
Geralt,Wind,Geralt,5,12180,758,571,100,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0141_1_3.png
Geralt,Light,Geralt,5,10380,834,615,100,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0141_1_4.png
Geralt,Dark,Geralt,5,12510,725,582,100,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0141_1_5.png
Oracle,Dark,Giana,5,10545,790,648,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Giana_Icon.png
Beetle Guardian,Water,Gideon,5,11040,560,845,102,https://summonerswarskyarena.info/wp-content/uploads/2025/04/unit_icon_0177_0_1_gideon2.png
Taoist,Water,Gildong,4,8730,845,549,104,https://summonerswarskyarena.info/wp-content/uploads/2015/01/gildong.png
Ninja,Light,Gin,4,9390,834,516,107,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Gin_Icon.png
Mystic Witch,Dark,Gina,3,9555,692,483,97,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Gina_Icon.png
GingerBrave,Wind,GingerBrave,5,9885,823,659,110,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0089_1_3.png
Exorcist Association Conjurer,Light,Ginjo,4,10215,670,626,101,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0165_1_4_ginjo.png
Onmyouji,Wind,Giou,5,11205,626,769,103,https://summonerswarskyarena.info/wp-content/uploads/2021/03/giou.png
Macaron Guard,Dark,Giselle,5,10050,659,812,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0097_1_5.png
Lizardman,Light,Glinodon,3,8730,604,626,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Glinodon-Light.png
Warbear,Dark,Gorgo,2,11205,351,549,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Gorgo_Icon.png
Battle Mammoth,Fire,Granite,3,11535,472,571,99,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Granite-Fire.png
Lich,Dark,Grego,4,12015,615,560,96,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Grego_Icon.png
Magic Order Elementalist,Light,Groa,5,11535,670,703,101,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0153_1_4_groa2.png
Dragon,Dark,Grogen,5,10380,801,648,98,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Grogen_Icon.png
Golem,Light,Groggo,3,10875,362,725,91,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Groggo_Icon-1.png
Tomb Warden,Wind,Gronn,4,11205,615,615,98,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0176_0_3_gronn2.png
Minotauros,Light,Grotau,3,10215,571,564,99,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Grotau_Icon.png
Bearman,Water,Gruda,3,11700,351,681,101,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Gruda_Icon.png
Phantom Thief,Dark,Guillaume,4,8895,900,483,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Guillaume_Icon.png
Taoist,Fire,Gunpyeong,3,8400,692,560,104,https://summonerswarskyarena.info/wp-content/uploads/2015/01/gunpyeong.png
Slayer,Dark,Gurkha,5,13005,637,637,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/gurkha.png
Exorcist Association Fighter,Light,Guy,4,9555,769,571,104,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0163_1_4_Guy.png
Gyomei Himejima,Wind,Gyomei Himejima,5,10380,626,823,99,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0171_1_3_Gyomei.png
Art Master,Water,Haegang,5,11040,747,659,102,https://summonerswarskyarena.info/wp-content/uploads/2020/06/haegang.png
Bearman,Dark,Haken,3,11205,461,614,101,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Haken_Icon.png
Lich,Light,Halphas,4,9720,648,681,96,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Halphas_Icon.png
Ninja,Dark,Han,5,12015,780,560,107,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Han_Icon.png
Cow Girl,Wind,Hannah,3,8400,725,527,117,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Hannah-Wind.png
Beast Hunter,Dark,Hanra,3,8730,747,483,100,https://summonerswarskyarena.info/wp-content/uploads/2015/01/hannam.png
Art Master,Light,Hanwul,5,10050,878,593,102,https://summonerswarskyarena.info/wp-content/uploads/2020/06/hanwul.png
Harp Magician,Fire,Harmonia,4,11040,571,670,98,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Harmonia_Icon.png
Exorcist Association Resolver,Fire,Hartmann,5,9885,856,626,106,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0166_1_2_hartmann.png
Exorcist Association Hunter,Light,Haruka,5,12180,626,703,102,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0164_1_3_haruka.png
Desert Queen,Wind,Hathor,5,11040,692,714,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Hathor-Wind.png
Exorcist Association Arbiter,Dark,Hayato,5,10875,801,615,104,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0162_1_5_hayato.png
Steel Commander,Wind,Hector,4,9225,801,560,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0114_1_3.png
Heihachi Mishima,Fire,Heihachi Mishima,5,11535,703,670,99,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_heihachimishima.png
Poison Master,Light,Hekerson,4,10710,703,560,101,https://summonerswarskyarena.info/wp-content/uploads/2020/12/hekerson.png
Unicorn,Fire,Helena,5,12510,692,615,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Helena_Icon.png
Harpy,Dark,Hellea,3,7575,801,505,104,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Hellea-Dark.png
Grim Reaper,Water,Hemos,3,8070,801,473,94,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Hemos_Icon.png
Magic Order Guardian,Wind,Henrik,5,12180,758,571,100,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0150_1_3_henrik2.png
Dryad,Water,Herne,4,10710,538,725,104,https://summonerswarskyarena.info/wp-content/uploads/2018/09/Herne_Icon.png
Lightning Emperor,Dark,Herteit,5,9555,845,659,101,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Herteit_Icon.png
Magic Order Enchantress,Wind,Hexarina,4,10875,659,593,103,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0152_1_3_hexarina2.png
Black Tea Bunny,Fire,Hibiscus,4,9390,812,538,102,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0100_1_2.png
Magic Order Enchantress,Dark,Hilda,5,10545,845,593,103,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0152_1_5_hilda2.png
Amazon,Wind,Hina,3,9225,845,355,102,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Hina_Icon.png
Martial Artist,Light,Hiro,3,10710,516,582,99,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Hiro-Light.png
Exorcist Association Conjurer,Water,Hiroyuki,4,10050,659,648,101,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0165_1_1_hiroyuki.png
Grim Reaper,Wind,Hiva,3,8895,758,461,94,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Hiva_Icon.png
Hollyberry Cookie,Fire,Hollyberry Cookie,5,9555,604,900,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0092_1_2.png
Hollyberry Cookie,Water,Hollyberry Cookie,5,10215,637,823,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0092_1_1.png
Hollyberry Cookie,Wind,Hollyberry Cookie,5,9885,648,834,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0092_1_3.png
Hollyberry Cookie,Light,Hollyberry Cookie,5,9720,615,878,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0092_1_4.png
Hollyberry Cookie,Dark,Hollyberry Cookie,5,10050,659,812,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0092_1_5.png
Homunculus,Fire,Homunculus,5,10215,823,637,101,https://summonerswarskyarena.info/wp-content/uploads/2017/04/fire-homunculus-awakened.jpg
Homunculus,Water,Homunculus,5,10380,878,571,101,https://summonerswarskyarena.info/wp-content/uploads/2017/03/Homunculus_Water_Icon_awakened.png
Homunculus,Wind,Homunculus,5,9555,845,659,101,https://summonerswarskyarena.info/wp-content/uploads/2017/04/wind-homunculus-awakened.jpg
Homunculus,Light,Homunculus,5,12345,626,692,101,https://summonerswarskyarena.info/wp-content/uploads/2017/07/light-homunculus-support-awakened.png
Homunculus,Dark,Homunculus,5,12345,692,626,101,https://summonerswarskyarena.info/wp-content/uploads/2017/07/dark-homunculus-support-awakened.png
Kung Fu Girl,Fire,Hong Hua,4,11370,648,571,102,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Hong-Hua-Fire.png
String Master,Fire,Hongyeon,4,11535,549,659,107,https://summonerswarskyarena.info/wp-content/uploads/2020/06/hongyeon.png
Barbaric King,Wind,Hraesvelg,4,10215,747,549,103,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Hraesvelg-Wind.png
Barbaric King,Dark,Hrungnir,4,10545,812,464,103,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Hrungnir-Dark.png
Drunken Master,Wind,Huan,3,8235,736,527,99,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Huan_Icon-1.png
Viking,Water,Huga,2,6255,758,481,97,https://summonerswarskyarena.info/wp-content/uploads/2016/11/Huga_Icon.png
Rakshasa,Fire,Hwa,4,9720,758,571,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Hwa_Icon.png
Taoist,Light,Hwadam,4,11535,637,571,104,https://summonerswarskyarena.info/wp-content/uploads/2015/01/hwadam.png
Sky Dancer,Fire,Hwahee,4,9555,769,571,101,https://summonerswarskyarena.info/wp-content/uploads/2015/01/hwahee.png
Hwoarang,Water,Hwoarang,5,10545,790,648,104,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_hwoarang_wa.png
Hwoarang,Fire,Hwoarang,4,9555,736,604,104,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_hwoarang_f.png
Hwoarang,Wind,Hwoarang,5,10710,769,659,104,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_hwoarang_wi.png
Hwoarang,Light,Hwoarang,5,10380,801,648,104,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_hwoarang_l.png
Hwoarang,Dark,Hwoarang,4,9720,714,615,104,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_hwoarang_d.png
Dryad,Dark,Hyanes,4,11040,604,637,104,https://summonerswarskyarena.info/wp-content/uploads/2018/09/Hyanes_Icon.png
Beetle Guardian,Light,Hyllus,5,10875,560,856,102,https://summonerswarskyarena.info/wp-content/uploads/2025/04/unit_icon_0177_0_1_hyllus2.png
Steel Commander,Light,Ian,5,10380,878,571,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0114_1_4.png
Sylphid,Dark,Icares,4,9885,790,527,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Icares_Icon.png
Inugami,Water,Icaru,3,9390,549,637,108,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Icaru_Icon.png
Undine,Light,Icasha,4,9225,615,747,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Icasha_Icon.png
Lizardman,Fire,Igmanodon,3,8730,582,648,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Igmanodon-Fire.png
Charger Shark,Fire,Ignicus,3,9885,637,516,105,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Ignicus-Fire.png
Neostone Agent,Light,Illianna,4,11040,538,703,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Illianna_Icon.png
Horus,Wind,Imesety,4,10050,681,626,102,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Imesety-Wind.png
Imp Champion,Light,Shaffron,3,8895,604,615,102,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Imp-Champion-Light.png
Inosuke Hashibira,Water,Inosuke Hashibira,5,10710,725,703,104,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0170_1_1_InosukeWa.png
Inosuke Hashibira,Fire,Inosuke Hashibira,5,10380,823,626,104,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0170_1_1_InosukeF.png
Inosuke Hashibira,Wind,Inosuke Hashibira,4,9885,769,549,104,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0170_1_1_InosukeWi.png
Inosuke Hashibira,Light,Inosuke Hashibira,5,9720,900,593,104,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0170_1_1_InosukeL.png
Inosuke Hashibira,Dark,Inosuke Hashibira,4,9555,780,560,104,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0170_1_1_InosukeD.png
Epikion Priest,Light,Iona,4,12675,516,615,111,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Iona_Icon.png
Devil Maiden,Water,Irène,5,11850,736,615,101,https://summonerswarskyarena.info/wp-content/uploads/2023/08/unit_icon_0127_1_1.png
Magic Knight,Light,Iris,4,9885,790,527,110,https://summonerswarskyarena.info/wp-content/uploads/2015/07/Iris-Light.png
Living Armor,Fire,Iron,3,9390,472,714,98,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Iron_Icon.png
Assassin,Dark,Isabelle,4,9390,823,527,102,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Isabelle-Dark.png
Succubus,Dark,Isael,4,9885,769,549,106,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Isael_Icon.png
Fairy,Fire,Iselia,3,8400,725,527,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Iselia_Icon.png
Elven Ranger,Dark,Isillen,4,8895,790,593,101,https://summonerswarskyarena.info/wp-content/uploads/2015/11/Isillen-Dark.png
Desert Queen,Light,Isis,5,11700,637,725,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Isis-Light.png
Anubis,Wind,Iunu,4,9225,736,626,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Iunu-Wind.png
Succubus,Water,Izaria,4,10050,747,560,106,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Izaria_Icon.png
Phoenix,Dark,Jaara,5,10215,1021,439,99,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Jaara_Icon.png
Exorcist Association Fighter,Dark,Jack,5,10050,867,604,104,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0163_1_5_Jack.png
Martial Artist,Dark,Jackie,3,8400,538,714,99,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Jackie-Dark.png
Sky Surfer,Dark,Jackson,5,11205,681,714,105,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0076_1_5.png
Macaron Guard,Wind,Jade,5,9885,648,834,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0097_1_3.png
Twin Angels,Dark,Jaduel and Aepiah,5,11370,725,659,102,https://summonerswarskyarena.info/wp-content/uploads/2023/12/unit_icon_0136_1_5.png
Dragon Knight,Light,Jager,5,12675,670,626,100,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Jager-Light.png
Bounty Hunter,Dark,Jamie,3,8400,703,552,110,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Jamie_Icon.png
Dragon,Wind,Jamire,5,10710,714,714,113,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Jamire_Icon.png
Viking,Dark,Janssen,3,11700,483,549,97,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Janssen_Icon.png
Viking,Light,Jansson,2,8400,472,615,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Jansson_Icon.png
Poison Master,Wind,Jarrett,4,9060,769,604,101,https://summonerswarskyarena.info/wp-content/uploads/2020/12/jarrett.png
Black Tea Bunny,Light,Jasmine,4,9720,790,538,102,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0100_1_4.png
Phantom Thief,Fire,Jean,4,9060,889,483,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Jean_Icon.png
Paladin,Light,Jeanne,5,12180,615,714,102,https://summonerswarskyarena.info/wp-content/uploads/2017/09/Jeanne_Icon.png
Art Master,Fire,Jeogun,5,10710,758,670,102,https://summonerswarskyarena.info/wp-content/uploads/2020/06/jeogun.png
Dokkaebi Lord,Water,Jeongnam,5,12180,736,593,111,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_1_1.png
Devil Maiden,Light,Jessica,5,10050,725,747,101,https://summonerswarskyarena.info/wp-content/uploads/2023/08/unit_icon_0127_1_4.png
Jin Kazama,Water,Jin Kazama,4,9720,725,604,103,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_jinkazama_wa.png
Jin Kazama,Fire,Jin Kazama,5,11700,714,648,103,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_jinkazama_f.png
Jin Kazama,Wind,Jin Kazama,5,10050,856,615,103,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_jinkazama_wi.png
Jin Kazama,Light,Jin Kazama,4,10215,659,637,103,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_jinkazama_l.png
Jin Kazama,Dark,Jin Kazama,5,10215,834,626,103,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_jinkazama_d.png
Magic Order Enchantress,Water,Johanna,5,10710,823,604,103,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0152_1_1_johanna2.png
Sky Surfer,Fire,John,5,10050,845,626,105,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0076_1_2.png
Joker,Fire,Jojo,4,9555,659,681,103,https://summonerswarskyarena.info/wp-content/uploads/2015/09/Jojo-Fire.png
Paladin,Water,Josephine,5,12345,659,659,102,https://summonerswarskyarena.info/wp-content/uploads/2017/09/Josephine_Icon.png
Vagabond,Dark,Jubelle,3,9885,494,659,113,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Jubelle_Icon.png
Vampire,Light,Julianne,5,12345,823,494,99,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Julianne_Icon.png
Pierret,Water,Julie,4,10545,834,439,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Julie_Icon.png
Phantom Thief,Wind,Julien,4,7740,944,516,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Julien_Icon.png
Werewolf,Dark,Jultan,3,11370,560,494,115,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Jultan_Icon.png
High Elemental,Dark,Jumaline,3,7245,867,461,104,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Jumaline_Icon-1.png
Samurai,Fire,Jun,4,8400,878,538,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Jun-Fire.png
Oracle,Fire,Juno,5,11370,703,681,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Juno_Icon.png
Exorcist Association Resolver,Water,Jürgen,5,10380,648,801,106,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0166_1_1_jurgen.png
Hacker,Water,K1D,5,11535,703,670,100,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0146_1_1_k1d.png
Harpy,Light,Kabilla,3,7410,780,538,120,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Kabilla-Light.png
Pixie,Water,Kacey,2,9225,549,483,111,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Kacey-Water.png
High Elemental,Fire,Kahli,3,6255,878,519,102,https://summonerswarskyarena.info/wp-content/uploads/2017/07/Kahli-1.png
Griffon,Water,Kahn,3,12840,351,604,111,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Kahn_Icon.png
Vagabond,Fire,Kai'en,3,10215,516,615,98,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kaien_Icon.png
Salamander,Water,Kaimann,2,7410,494,659,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kaimann_Icon.png
Samurai,Wind,Kaito,4,9060,867,505,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kaito-Wind.png
Onimusha,Fire,Kaki,4,8400,812,604,115,https://summonerswarskyarena.info/wp-content/uploads/2021/02/kaki.png
Gladiatrix,Water,Kalantatze,4,10380,670,615,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0116_1_1.png
Minotauros,Dark,Kamatau,3,10050,593,553,99,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kamatau-Dark.png
Nine-tailed Fox,Dark,Kamiya,4,8895,900,483,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Kamiya_Icon.png
Mummy,Dark,Karakum,3,10380,571,549,97,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Karakum-Dark.png
Neostone Fighter,Dark,Karl,4,9555,801,538,107,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Karl-Dark.png
Slayer,Fire,Karnal,5,13170,615,648,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/karnal.png
Twin Angels,Fire,Karuel and Lanoah,5,10215,769,692,102,https://summonerswarskyarena.info/wp-content/uploads/2023/12/unit_icon_0136_1_2.png
Striker,Wind,Kashmir,5,10215,845,615,103,https://summonerswarskyarena.info/wp-content/uploads/2020/11/kashmir.png
Kassandra,Fire,Kassandra,5,9885,878,604,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0108_1_2.png
Kassandra,Water,Kassandra,4,10380,670,615,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0108_1_1.png
Kassandra,Light,Kassandra,4,9885,703,615,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0108_1_4.png
Kassandra,Dark,Kassandra,5,9720,889,604,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0108_1_5.png
Kassandra,Wind,Kassandra,5,9720,867,626,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0108_1_3.png
Valkyrja,Wind,Katarina,5,11205,801,593,116,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Katarina_Icon.png
Samurai,Water,Kaz,4,8565,856,549,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kaz-Water.png
KEN,Fire,KEN,5,10050,834,637,103,https://summonerswarskyarena.info/wp-content/uploads/2020/09/fire-ken.png
Lizardman,Water,Kernodon,3,8565,571,670,103,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kernodon-Water.png
Anubis,Fire,Khmun,4,10710,615,648,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Khmun-Fire.png
Gladiatrix,Dark,Kiara,5,9720,889,604,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0116_1_5.png
Mage,Dark,Kiki,5,11205,747,648,101,https://summonerswarskyarena.info/wp-content/uploads/2021/05/kiki.webp
Onimusha,Light,Kinki,4,11040,714,527,100,https://summonerswarskyarena.info/wp-content/uploads/2021/02/kinki.png
Garuda,Water,Konamiya,2,11700,384,492,91,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Konamiya_Icon.png
Brownie Magician,Dark,Korona,4,10050,681,626,106,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Korona-Dark.png
Puppeteer,Light,Kovarci,5,11535,648,725,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0106_1_4.png
Salamander,Fire,Krakdon,3,8235,615,648,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Krakdon_Icon.png
Inugami,Dark,Kro,3,9060,626,582,108,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kro_Icon.png
Harg,Dark,Kroa,3,9390,560,626,120,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Kroa-Dark.png
Golem,Fire,Kugo,3,10545,384,725,89,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kugo_Icon.png
Golem,Water,Kuhn,3,10710,351,747,87,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kuhn_Icon-1.png
Yeti,Dark,Kumae,3,11205,494,571,101,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kumae_Icon.png
Beast Monk,Fire,Kumar,5,13005,593,681,101,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kumar-Fire.png
Penguin Knight,Dark,Kuna,3,10050,626,516,105,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Kuna-Dark.png
Yeti,Water,Kunda,2,10215,395,571,101,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kunda_Icon.png
Bearman,Fire,Kungen,3,12345,384,604,101,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Kungen_Icon.png
Gargoyle,Fire,Kunite,4,10050,483,823,93,https://summonerswarskyarena.info/wp-content/uploads/2019/08/kunite.png
Exorcist Association Conjurer,Wind,Kuroshu,5,11040,703,703,101,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0165_1_3_kuroshu.png
Poison Master,Water,Kyle,4,9555,747,593,101,https://summonerswarskyarena.info/wp-content/uploads/2020/12/kyle.png
Chimera,Wind,Lagmaron,5,11535,801,571,110,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Lagmaron_Icon.png
Dragon Knight,Fire,Laika,5,11040,834,571,100,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Laika-Fire.png
Oracle,Light,Laima,5,12015,714,626,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Laima_Icon.png
Howl,Fire,Lala,2,8235,549,549,99,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Lala-Fire.png
Specter Princess,Water,Lamiella,5,11370,692,692,100,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0175_0_1_lamiella2.png
Magic Knight,Dark,Lanett,4,10050,615,692,95,https://summonerswarskyarena.info/wp-content/uploads/2015/07/Lanett-Dark.png
Magic Knight,Water,Lapis,4,9885,736,582,95,https://summonerswarskyarena.info/wp-content/uploads/2015/07/Lapis-Water.png
Blade Dancer,Water,Lariel,4,9885,790,527,105,https://summonerswarskyarena.info/wp-content/uploads/2020/11/lariel.png
Magic Order Guardian,Light,Lars,5,10380,834,615,100,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0150_1_4_lars2.png
Black Tea Bunny,Dark,Lavender,4,9225,801,560,102,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0100_1_5.png
Devil Maiden,Wind,Layla,5,10875,801,615,101,https://summonerswarskyarena.info/wp-content/uploads/2023/08/unit_icon_0127_1_3.png
Blade Dancer,Light,Leah,4,10050,769,538,120,https://summonerswarskyarena.info/wp-content/uploads/2020/11/leah.png
Dragon Knight,Wind,Leo,5,11850,714,637,100,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Leo-Wind.png
Paladin,Dark,Leona,5,10710,626,801,102,https://summonerswarskyarena.info/wp-content/uploads/2017/09/leona.png
Assassin,Fire,Lexy,4,8895,801,582,117,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Lexy-Fire.png
Weapon Master,Water,Liam,5,9390,900,615,102,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0080_1_1.png
Joker,Dark,Liebli,4,8235,878,549,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Liebli_Icon.png
Vampire,Water,Liesel,4,11535,670,538,99,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Liesel_Icon.png
Devil Maiden,Dark,Liliana,5,10710,878,549,101,https://summonerswarskyarena.info/wp-content/uploads/2023/08/unit_icon_0127_1_5.png
Mystic Witch,Light,Linda,3,8895,714,505,97,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Linda_Icon.png
Garuda,Wind,Lindermen,2,7905,483,637,91,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Lindermen_Icon.png
Kung Fu Girl,Wind,Ling Ling,4,8895,758,626,102,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Ling-Ling-Wind.png
Steel Commander,Water,Lionel,5,9720,911,582,113,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0114_1_1.png
Neostone Agent,Fire,Lisa,4,11535,714,494,104,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Lisa-Fire-New.png
Kung Fu Girl,Light,Liu Mei,4,10710,626,637,102,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Liu-Mei-Light.png
Martial Artist,Wind,Lo,3,9390,659,527,114,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Lo-Wind.png
Neostone Fighter,Wind,Logan,4,9720,725,604,107,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Logan-Wind.png
Imp Champion,Dark,Loque,3,8070,747,527,102,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Loque-Dark.png
Occult Girl,Light,Lora,5,11850,692,659,120,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Lora_Icon.png
Cow Girl,Light,Loren,3,9225,681,516,102,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Loren-Light.png
Cyborg,Water,Lorenza,4,9555,758,582,104,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0145_1_1_lorenza.png
Phantom Thief,Light,Louis,4,10380,604,681,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Louis_Icon.png
Paladin,Wind,Louise,5,11700,593,769,102,https://summonerswarskyarena.info/wp-content/uploads/2017/09/Louise_Icon.png
Martial Artist,Water,Luan,3,8400,604,648,99,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Luan-Water.png
Neostone Fighter,Light,Lucas,4,9885,780,538,107,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Lucas-Light.png
Harpy,Fire,Lucasha,3,6915,889,463,103,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Lucasha-Fire.png
Pudding Princess,Fire,Lucia,5,10875,681,736,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0099_1_2.png
Cyborg,Light,Lucia,4,9885,769,549,104,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0145_1_4_lucia.png
Elven Ranger,Light,Lucien,3,8895,692,528,101,https://summonerswarskyarena.info/wp-content/uploads/2015/11/Lucien-Light.png
Demon,Light,Lucifer,5,11700,725,637,104,https://summonerswarskyarena.info/wp-content/uploads/2019/08/lucifer.png
Dice Magician,Fire,Ludo,4,9060,769,604,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Ludo_Icon.png
Phantom Thief,Water,Luer,4,10710,659,604,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Luer_Icon.png
Salamander,Wind,Lukan,2,7245,582,582,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Lukan_Icon.png
Howl,Water,Lulu,2,8730,527,538,99,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Lulu-Water.png
Magic Order Elementalist,Water,Lumina,4,10710,604,659,101,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0153_1_1_lumina2.png
Sylphid,Water,Lumirecia,4,12840,439,681,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Lumirecia_Icon.png
Pierret,Dark,Luna,4,8235,878,549,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Luna_Icon.png
Magic Knight,Wind,Lupinus,4,10875,670,582,95,https://summonerswarskyarena.info/wp-content/uploads/2015/07/Lupinus-Wind.png
Warbear,Light,Lusha,3,11370,340,714,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Lusha_Icon.png
Joker,Wind,Lushen,4,9225,900,461,103,https://summonerswarskyarena.info/wp-content/uploads/2015/09/Lushen-Wind.png
Polar Queen,Dark,Lydia,5,10545,790,648,96,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Lydia-Dark.png
Amazon,Light,Lyn,3,10380,790,329,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Lyn_Icon.png
M.BISON,Fire,M.BISON,5,13170,615,648,101,https://summonerswarskyarena.info/wp-content/uploads/2020/10/fire-m-bison.png
M.BISON,Water,M.BISON,5,12180,714,615,101,https://summonerswarskyarena.info/wp-content/uploads/2020/10/water-m-bison.png
M.BISON,Wind,M.BISON,5,11850,747,604,101,https://summonerswarskyarena.info/wp-content/uploads/2020/10/wind-m-bison.png
M.BISON,Light,M.BISON,5,12510,648,659,101,https://summonerswarskyarena.info/wp-content/uploads/2020/10/light-m-bison1.png
M.BISON,Dark,M.BISON,5,13005,637,637,101,https://summonerswarskyarena.info/wp-content/uploads/2020/10/dark-m-bison.png
Rune Blacksmith,Light,Madeleine,4,10215,593,703,103,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0081_1_4.png
Madeleine Cookie,Dark,Madeleine Cookie,4,11205,670,560,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0091_1_5.png
Madeleine Cookie,Fire,Madeleine Cookie,4,9720,736,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0091_1_2.png
Madeleine Cookie,Water,Madeleine Cookie,4,9885,747,571,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0091_1_1.png
Madeleine Cookie,Wind,Madeleine Cookie,4,10710,659,604,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0091_1_3.png
Madeleine Cookie,Light,Madeleine Cookie,4,9555,758,582,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0091_1_4.png
Golem,Dark,Maggi,3,9885,384,769,104,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_4_2.png
Sniper Mk.I,Light,Magnum,4,9060,769,604,97,https://summonerswarskyarena.info/wp-content/uploads/2019/02/magnum.png
Magic Order Guardian,Fire,Magnus,5,9555,867,637,100,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0150_1_2_magnus2.png
Kobold Bomber,Water,Malaka,4,8565,812,593,101,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Malaka-Water.png
Gargoyle,Wind,Malite,4,9225,527,834,93,https://summonerswarskyarena.info/wp-content/uploads/2019/08/malite.png
Sea Emperor,Dark,Manannan,5,10215,856,604,101,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Manannan-Dark.png
Macaron Guard,Water,Manon,5,10215,637,823,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0097_1_1.png
Serpent,Dark,Mantura,3,9885,604,549,100,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_4_0.png
Hypnomeow,Fire,Manx,4,12345,626,527,100,https://summonerswarskyarena.info/wp-content/uploads/2022/05/unit_icon_0085_1_2.png
Drunken Master,Water,Mao,3,8400,714,538,99,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Mao-Water.png
Amazon,Dark,Mara,3,7740,911,384,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Mara_Icon.png
Battle Mammoth,Light,Marble,3,11205,505,560,99,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Marble-Light.png
Exorcist Association Fighter,Water,Mark,5,10215,834,626,104,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0166_1_5_mark.png
Boomerang Warrior,Dark,Martina,4,8895,780,604,101,https://summonerswarskyarena.info/wp-content/uploads/2018/03/martina.png
Boomerang Warrior,Fire,Maruna,4,9225,747,615,101,https://summonerswarskyarena.info/wp-content/uploads/2018/03/maruna.png
Beast Rider,Fire,Masha,5,10710,801,626,123,https://summonerswarskyarena.info/wp-content/uploads/2019/12/unit_icon_0054_1_0.png
Penguin Knight,Wind,Mav,3,10215,637,494,105,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Mav-Wind.png
Weapon Master,Dark,Maximilian,5,9555,922,582,102,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0080_1_5.png
Totemist,Dark,Maya,5,11535,714,659,99,https://summonerswarskyarena.info/wp-content/uploads/2021/11/unit_icon_0078_1_5.png
Asura,Water,Mayasura,4,10215,747,549,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0119_1_1.png
Mystic Witch,Water,Megan,3,9885,582,571,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Megan_Icon.png
Megumi Fushiguro,Water,Megumi Fushiguro,4,10050,659,648,101,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0157_1_1_Megumi-Fushiguro_Water.png
Megumi Fushiguro,Fire,Megumi Fushiguro,5,10710,736,692,101,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0157_1_2_Megumi-Fushiguro_Fire.png
Megumi Fushiguro,Wind,Megumi Fushiguro,5,11040,703,703,101,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0157_1_3_Megumi-Fushiguro_Wind.png
Megumi Fushiguro,Light,Megumi Fushiguro,4,10215,670,626,101,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0157_1_4_Megumi-Fushiguro_Light.png
Megumi Fushiguro,Dark,Megumi Fushiguro,5,10545,758,681,101,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0157_1_5_Megumi-Fushiguro_Dark.png
Martial Cat,Fire,Mei,3,10380,626,494,104,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Mei_Icon.png
Monkey King,Fire,Mei Hou Wang,5,10545,692,747,116,https://summonerswarskyarena.info/wp-content/uploads/2015/09/Mei_Hou_Wang_Icon.png
Chakram Dancer,Wind,Melissa,4,9060,769,604,103,https://summonerswarskyarena.info/wp-content/uploads/2018/03/melissa.png
Dryad,Wind,Mellia,4,10710,615,648,104,https://summonerswarskyarena.info/wp-content/uploads/2018/09/Mellia_Icon.png
Demon,Wind,Mephisto,5,11535,714,659,104,https://summonerswarskyarena.info/wp-content/uploads/2019/08/mephisto.png
Panda Warrior,Dark,Mi Ying,5,10380,801,648,111,https://summonerswarskyarena.info/wp-content/uploads/2016/05/Mi-Ying-Dark.png
Epikion Priest,Wind,Michelle,3,11205,549,516,96,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Michelle_Icon.png
Sylphid,Light,Mihael,4,11850,593,593,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Mihael_Icon.png
Martial Cat,Dark,Miho,3,9060,703,505,119,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Miho_Icon.png
Sky Dancer,Water,Mihyang,4,11205,670,560,101,https://summonerswarskyarena.info/wp-content/uploads/2015/01/mihyang.png
Undine,Water,Mikene,4,11040,560,681,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Mikene_Icon.png
Sky Surfer,Water,Miles,5,11370,692,692,105,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0076_1_1.png
Barbaric King,Light,Mimirr,4,10380,703,582,103,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Mimirr-Light.png
Martial Cat,Water,Mina,3,7905,790,494,119,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Mina_Icon.png
Shadowcaster,Water,Minato,5,9720,889,604,105,https://summonerswarskyarena.info/wp-content/uploads/2022/04/unit_icon_0086_1_1.png
Dokkaebi Princess and Sapsaree,Water,Minji and Sapsaree,4,10875,582,670,103,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_1.png
Rune Blacksmith,Fire,Miriam,4,10875,604,648,103,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0081_1_2.png
String Master,Dark,Mirinae,4,11370,615,604,107,https://summonerswarskyarena.info/wp-content/uploads/2020/06/mirinae.png
Twin Angels,Light,Miruel and Graciah,5,10380,780,670,102,https://summonerswarskyarena.info/wp-content/uploads/2023/12/unit_icon_0136_1_4.png
Jack-o'-lantern,Light,Misty,4,9390,758,593,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Misty-Light.png
Exorcist Association Hunter,Water,Mizuki,5,10545,780,659,102,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0164_1_1_mizuki.png
Panda Warrior,Water,Mo Long,5,12675,648,648,96,https://summonerswarskyarena.info/wp-content/uploads/2016/05/Mo-Long-Water.png
Mermaid,Light,Molly,4,11205,494,736,95,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Molly-Light.png
Mage,Wind,Momo,5,10545,801,637,101,https://summonerswarskyarena.info/wp-content/uploads/2021/05/momo.webp
Dice Magician,Dark,Monte,4,9885,659,659,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Monte_Icon.png
Dokkaebi Lord,Fire,Moogwang,5,12675,637,659,96,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_1_2.png
Art Master,Dark,Mookwol,5,11370,769,615,117,https://summonerswarskyarena.info/wp-content/uploads/2020/06/mookwol.png
Striker,Water,Moore,5,11040,801,604,103,https://summonerswarskyarena.info/wp-content/uploads/2020/11/moore.png
High Elemental,Wind,Moria,3,5595,933,505,105,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Moria_Icon.png
Tomb Warden,Water,Mork,4,11700,604,593,98,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0176_0_1_mork2.png
Dice Magician,Wind,Morris,4,9885,692,626,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Morris_Icon.png
Specter Princess,Light,Mortera,5,10875,703,714,100,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0175_0_4_Mortera2.png
Hacker,Dark,N1X,5,11205,637,758,100,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0146_1_5_n1x.png
Penguin Knight,Fire,Naki,3,11700,560,472,105,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Naki-Fire.png
Mummy,Wind,Namib,3,10380,549,571,97,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Namib-Wind.png
Mage,Water,Nana,5,11370,758,626,116,https://summonerswarskyarena.info/wp-content/uploads/2021/05/nana.png
Beast Hunter,Fire,Nangrim,3,8565,725,516,100,https://summonerswarskyarena.info/wp-content/uploads/2015/01/nangrim.png
Martial Cat,Wind,Naomi,3,8895,681,538,119,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Naomi_Icon-1.png
Beast Rider,Light,Narsha,5,10215,834,626,108,https://summonerswarskyarena.info/wp-content/uploads/2019/12/unit_icon_0054_3_0.png
Assassin,Light,Natalie,4,9225,845,516,102,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Natalie-Light.png
Fairy,Light,Neal,3,10545,681,433,101,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Neal_Icon.png
Hypnomeow,Wind,Nebelung,4,12015,571,604,100,https://summonerswarskyarena.info/wp-content/uploads/2022/05/unit_icon_0085_1_3.png
Desert Queen,Dark,Nephthys,5,11370,725,659,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Nephthys-Dark.png
Nezuko Kamado,Water,Nezuko Kamado,5,12180,626,703,101,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_NezukoWa.png
Nezuko Kamado,Fire,Nezuko Kamado,5,10875,714,703,101,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_NezukoF.png
Nezuko Kamado,Wind,Nezuko Kamado,4,10215,659,637,101,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_NezukoWi.png
Nezuko Kamado,Light,Nezuko Kamado,4,9390,801,549,101,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_NezukoL.png
Nezuko Kamado,Dark,Nezuko Kamado,5,11040,692,714,101,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_NezukoD.png
Living Armor,Water,Nickel,3,9060,516,692,98,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Nickel_Icon.png
Occult Girl,Dark,Nicki,5,10215,812,648,105,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Nicki_Icon.png
Pioneer,Light,Nigong,5,12840,670,615,103,https://summonerswarskyarena.info/wp-content/uploads/2015/01/nigong.png
Nina Williams,Water,Nina Williams,5,10875,736,681,105,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_ninawilliams_wa.png
Nina Williams,Fire,Nina Williams,4,9885,758,560,105,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_ninawilliams_f.png
Nina Williams,Wind,Nina Williams,4,10050,736,571,105,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_ninawilliams_wi.png
Nina Williams,Dark,Nina Williams,5,11040,714,692,105,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_ninawilliams_d.png
Dryad,Fire,Nisha,4,11370,549,670,104,https://summonerswarskyarena.info/wp-content/uploads/2018/09/Nisha_Icon.png
Nobara Kugisaki,Water,Nobara Kugisaki,5,10545,780,659,102,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0156_1_1_Nobara-Kugisaki_Water.png
Nobara Kugisaki,Fire,Nobara Kugisaki,4,11370,604,615,102,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0156_1_2_Nobara-Kugisaki_Fire.png
Nobara Kugisaki,Wind,Nobara Kugisaki,5,12015,670,670,102,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0156_1_3_Nobara-Kugisaki_Wind.png
Nobara Kugisaki,Light,Nobara Kugisaki,5,12180,626,703,102,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0156_1_4_Nobara-Kugisaki_Light.png
Nobara Kugisaki,Dark,Nobara Kugisaki,4,9885,769,549,102,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0156_1_5_Nobara-Kugisaki_Dark.png
Magic Order Elementalist,Wind,Nobella,4,10545,604,670,101,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0153_1_3_nobella2.png
Totemist,Fire,Nora,5,10875,769,648,99,https://summonerswarskyarena.info/wp-content/uploads/2021/11/unit_icon_0078_1_2.png
Mummy,Water,Nubia,3,10710,494,604,97,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Nubia-Water.png
Fairy King,Dark,Nyx,5,11535,681,692,101,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Nyx-Dark.png
Fairy King,Light,Oberon,5,10050,790,681,101,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Oberon-Light.png
Lightning Emperor,Wind,Odin,5,10215,747,714,102,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Odin_Icon.png
Sea Emperor,Fire,Okeanos,5,10710,769,659,101,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Okeanos-Fire.png
Sky Surfer,Wind,Oliver,5,10710,812,615,105,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0076_1_3.png
Neostone Agent,Wind,Olivia,4,10380,681,604,104,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Olivia-Wind-N.png
Battle Mammoth,Wind,Olivine,3,10050,461,681,99,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Olivine-Wind.png
Desert Warrior,Water,Omar,4,10050,714,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0115_1_1.png
Onimusha,Dark,Ongyouki,5,9885,878,604,115,https://summonerswarskyarena.info/wp-content/uploads/2021/02/ongyouki.png
Gargoyle,Dark,Onyx,4,9390,494,856,93,https://summonerswarskyarena.info/wp-content/uploads/2019/08/onyx.png
Paladin,Fire,Ophilia,5,12510,637,670,102,https://summonerswarskyarena.info/wp-content/uploads/2017/09/Ophilia_Icon.png
Brownie Magician,Water,Orion,4,10215,637,659,106,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Orion-Water.png
Ninja,Wind,Orochi,4,11535,769,439,107,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Orochi_Icon.png
Specter Princess,Wind,Orphina,5,10875,736,681,100,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0175_0_3_Orphina2.png
Rakshasa,Light,Pang,4,9885,736,582,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Pang_Icon.png
Indra,Water,Parjanya,5,9885,670,812,106,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0118_1_1.png
Druid,Dark,Pater,5,12015,681,659,102,https://summonerswarskyarena.info/wp-content/uploads/2018/09/pater.png
Steel Commander,Fire,Patrick,5,9885,889,593,98,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0114_1_2.png
Paul Phoenix,Water,Paul Phoenix,5,11850,703,648,102,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_paulphoenix_wa.png
Paul Phoenix,Fire,Paul Phoenix,5,12510,681,626,102,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_paulphoenix_f.png
Paul Phoenix,Wind,Paul Phoenix,5,12180,692,637,102,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_paulphoenix_wi.png
Paul Phoenix,Light,Paul Phoenix,4,11370,626,593,102,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_paulphoenix_l.png
Paul Phoenix,Dark,Paul Phoenix,4,11205,648,582,102,https://summonerswarskyarena.info/wp-content/uploads/2025/07/unit_icon_0186_1_1_paulphoenix_d.png
Choco Knight,Fire,Pavé,4,9720,736,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0098_1_2.png
Phoenix,Fire,Perna,5,12345,878,439,114,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Perna_Icon.png
Gargoyle,Light,Phenaka,4,9885,505,812,93,https://summonerswarskyarena.info/wp-content/uploads/2019/08/phenaka.png
Centaur Knight,Wind,Pholuis,4,9060,801,571,104,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0193_1_3_Pholus_2.png
Imp Champion,Wind,Pigma,3,9060,593,615,102,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Pigma_Icon-1.png
Mermaid,Fire,Platy,4,11205,604,626,95,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Platy-Fire.png
Sea Emperor,Light,Pontos,5,12345,604,714,101,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Pontos-Light.png
Sea Emperor,Water,Poseidon,5,10050,790,681,101,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Poseidon-Water.png
Oracle,Water,Praha,5,11040,692,714,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Praha_Icon.png
Choco Knight,Wind,Praline,4,10710,659,604,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0098_1_3.png
Harpy,Wind,Prilea,3,8235,736,527,105,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Prilea-Wind.png
Elemental,Light,Priz,3,8235,692,571,107,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Priz_Icon.png
Grim Reaper,Light,Prom,3,7905,911,373,94,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Prom_Icon.png
Fairy King,Water,Psamathe,5,9720,856,637,101,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Psamathe-Water.png
Pioneer,Wind,Pungbaek,5,12180,812,516,103,https://summonerswarskyarena.info/wp-content/uploads/2015/01/pungbaek.png
Pure Vanilla Cookie,Fire,Pure Vanilla Cookie,5,10875,681,736,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0093_1_2.png
Pure Vanilla Cookie,Water,Pure Vanilla Cookie,5,10710,736,692,111,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0093_1_1.png
Pure Vanilla Cookie,Wind,Pure Vanilla Cookie,5,11205,670,725,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0093_1_3.png
Pure Vanilla Cookie,Light,Pure Vanilla Cookie,5,11040,659,747,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0093_1_4.png
Pure Vanilla Cookie,Dark,Pure Vanilla Cookie,5,10545,747,692,96,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0093_1_5.png
Inferno,Water,Purian,3,7410,780,543,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Purian_Icon.png
Horus,Water,Qebehsenuef,4,10545,615,659,102,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Qebehsenuef-Water.png
Qilin Slasher,Water,Qilin Slasher,5,10050,845,626,106,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0181_1_1_Qilin-SlasherWa.png
Qilin Slasher,Fire,Qilin Slasher,4,9225,758,604,106,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0181_1_1_Qilin-SlasherF.png
Qilin Slasher,Wind,Qilin Slasher,5,9720,856,637,106,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0181_1_1_Qilin-SlasherWi.png
Qilin Slasher,Light,Qilin Slasher,4,8895,769,615,106,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0181_1_1_Qilin-SlasherL.png
Qilin Slasher,Dark,Qilin Slasher,5,9885,834,648,106,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0181_1_1_Qilin-SlasherD.png
Monkey King,Light,Qitian Dasheng,5,10710,714,714,114,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Qitian-Dasheng-Light.png
Harg,Fire,Racuni,3,9885,571,582,105,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Racuni-Fire.png
Dragon Knight,Dark,Ragdoll,5,11535,714,659,100,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Ragdoll-Dark.png
Golem,Wind,Ragion,3,10215,428,707,92,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ragion_Icon.png
Beast Monk,Dark,Rahul,5,12840,659,626,101,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Rahul-Dark.png
Yeti,Wind,Rakaja,2,8235,483,615,101,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Rakaja_Icon.png
Chimera,Fire,Rakan,5,11700,725,637,95,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Rakan_Icon.png
Hell Lady,Fire,Raki,5,10050,856,615,104,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Raki-Fire.png
Imp,Wind,Ralph,2,5595,790,483,113,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Ralph-Wind.png
Twin Angels,Water,Ramael and Judiah,5,11205,714,681,102,https://summonerswarskyarena.info/wp-content/uploads/2023/12/unit_icon_0136_1_1.png
Warbear,Wind,Ramagos,2,10545,384,560,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ramagos_Icon.png
Inugami,Wind,Ramahan,3,9555,472,703,108,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ramahan_Icon.png
Harpy,Water,Ramira,3,8565,736,505,105,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Ramira-Water.png
Tomb Warden,Light,Ramon,4,11370,571,648,98,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0176_0_4_ramon2.png
Rakshasa,Dark,Ran,4,10545,747,527,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Ran_Icon.png
Bounty Hunter,Fire,Randy,3,9060,626,582,110,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Randy_Icon.png
Inugami,Fire,Raoq,3,9060,681,527,108,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Raoq_Icon.png
Epikion Priest,Dark,Rasheed,3,10875,538,549,96,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Rasheed_Icon.png
Harg,Wind,Raviti,4,10545,527,747,120,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Raviti-Wind.png
Mystic Witch,Fire,Rebecca,3,9555,626,549,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Rebecca_Icon.png
Harg,Water,Remy,3,9555,505,670,105,https://summonerswarskyarena.info/wp-content/uploads/2016/02/Remy-Water.png
Shadowcaster,Fire,Ren,5,10545,845,593,120,https://summonerswarskyarena.info/wp-content/uploads/2022/04/unit_icon_0086_1_2.png
Dice Magician,Water,Reno,4,9060,780,593,102,https://summonerswarskyarena.info/wp-content/uploads/2016/11/Reno-water.png
Tomb Warden,Fire,Rex,4,11040,582,659,98,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0176_0_2_rex2.png
Magic Order Swordsinger,Fire,Reyka,4,9720,801,527,106,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0151_1_2_reyka2.png
Centaur Knight,Water,Rhoetus,4,9555,758,582,104,https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0193_1_1_Rhoetus_2.png
Occult Girl,Fire,Rica,5,10215,823,637,105,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Rica_Icon.png
Exorcist Association Fighter,Fire,Rick,5,9885,878,604,104,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0163_1_2_rick.png
Lich,Water,Rigel,4,10710,637,626,96,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Rigel_Icon.png
Magic Order Swordsinger,Water,Rigna,5,9885,900,582,106,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0151_1_1_rigna2.png
Totemist,Wind,Riley,5,11850,637,714,99,https://summonerswarskyarena.info/wp-content/uploads/2021/11/unit_icon_0078_1_3.png
Epikion Priest,Water,Rina,3,10710,439,659,96,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Rina_Icon.png
Beast Monk,Wind,Ritesh,5,13500,637,604,101,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Ritesh-Wind.png
Shadowcaster,Dark,Ritsu,5,10215,867,593,105,https://summonerswarskyarena.info/wp-content/uploads/2022/04/unit_icon_0086_1_5.png
Garuda,Dark,Rizak,2,7575,450,535,93,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Rizak_Icon.png
Cyborg,Dark,Roberta,4,9720,801,527,104,https://summonerswarskyarena.info/wp-content/uploads/2024/04/unit_icon_0145_1_5_roberta.png
ROBO,Light,ROBO-E65,4,11850,582,604,101,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0077_1_4.png
ROBO,Dark,ROBO-F29,4,9390,769,582,101,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0077_1_5.png
ROBO,Wind,ROBO-G92,4,9555,780,560,101,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0077_1_3.png
ROBO,Fire,ROBO-P27,4,10545,615,659,101,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0077_1_2.png
ROBO,Water,ROBO-R40,4,11370,604,615,101,https://summonerswarskyarena.info/wp-content/uploads/2021/08/unit_icon_0077_1_1.png
Bounty Hunter,Wind,Roger,3,8565,670,571,110,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Roger_Icon.png
Vagabond,Wind,Roid,2,10215,483,483,98,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Roid_Icon.png
Black Tea Bunny,Water,Rosemary,4,9885,790,527,116,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0100_1_1.png
Charger Shark,Light,Rumicus,3,9555,692,483,105,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Rumicus-Light.png
Neostone Fighter,Water,Ryan,4,10380,736,549,107,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Ryan-Water.png
Ryomen Sukuna,Dark,Ryomen Sukuna,5,10875,801,615,104,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0154_1_5_Ryomen-Sukuna.png
RYU,Fire,RYU,5,9885,889,593,103,https://summonerswarskyarena.info/wp-content/uploads/2020/09/fire-ryu.png
RYU,Water,RYU,5,11040,801,604,103,https://summonerswarskyarena.info/wp-content/uploads/2020/09/water-ryu.png
RYU,Wind,RYU,5,10215,845,615,103,https://summonerswarskyarena.info/wp-content/uploads/2020/09/wind-ryu.png
RYU,Light,RYU,5,10710,867,560,103,https://summonerswarskyarena.info/wp-content/uploads/2020/09/light-ryu.png
RYU,Dark,RYU,5,10875,823,593,103,https://summonerswarskyarena.info/wp-content/uploads/2020/09/dark-ryu.png
Boomerang Warrior,Water,Sabrina,4,9060,780,593,101,https://summonerswarskyarena.info/wp-content/uploads/2018/03/sabrina.png
Twin Angels,Wind,Sadiel and Zeryah,5,11040,703,703,102,https://summonerswarskyarena.info/wp-content/uploads/2023/12/unit_icon_0136_1_3.png
Slayer,Wind,Sagar,5,11850,747,604,101,https://summonerswarskyarena.info/wp-content/uploads/2020/11/sagar.png
Mummy,Light,Sahara,3,10875,472,619,97,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Sahara-Light.png
Desert Warrior,Dark,Salah,5,10875,747,670,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0115_1_5.png
Low Elemental,Wind,Samour,1,6420,582,406,100,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Samour_Icon.png
Grim Reaper,Fire,Sath,3,8565,823,417,94,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Sath_Icon.png
Satoru Gojo,Water,Satoru Gojo,5,10380,648,801,106,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0158_1_1_Satoru-Gojo_Water.png
Satoru Gojo,Fire,Satoru Gojo,5,9885,856,626,106,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0158_1_2_Satoru-Gojo_Fire.png
Satoru Gojo,Wind,Satoru Gojo,5,10050,659,812,106,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0158_1_3_Satoru-Gojo_Wind.png
Satoru Gojo,Light,Satoru Gojo,5,10215,637,823,106,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0158_1_4_Satoru-Gojo_Light.png
Satoru Gojo,Dark,Satoru Gojo,5,10545,812,626,106,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0158_1_5_Satoru-Gojo_Dark.png
Beast Rider,Wind,Savannah,5,10875,801,615,108,https://summonerswarskyarena.info/wp-content/uploads/2019/12/unit_icon_0054_2_0.png
Exorcist Association Hunter,Fire,Sayumi,4,11370,604,615,102,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0164_1_2_sayumi.png
Cannon Girl,Fire,Scarlett,4,9225,703,659,103,https://summonerswarskyarena.info/wp-content/uploads/2019/02/scarlett.png
Harpu,Wind,Seal,2,8070,615,494,108,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Seal_Icon.png
Exorcist Association Fighter,Wind,Sean,4,9060,790,582,104,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0163_1_3_sean.png
Oracle,Wind,Seara,5,10875,801,615,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Seara_Icon.png
Onmyouji,Light,Seimei,5,11370,648,736,103,https://summonerswarskyarena.info/wp-content/uploads/2021/03/seimei.png
Desert Queen,Fire,Sekhmet,5,11205,714,681,116,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Sekhmet-Fire.png
Succubus,Wind,Selena,4,9555,790,549,106,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Selena_Icon.png
Cow Girl,Water,Sera,3,8400,747,505,102,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Sera-Water.png
Harpu,Dark,Seren,3,8895,659,560,104,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Seren_Icon.png
Desert Warrior,Wind,Shahat,5,12510,714,593,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0115_1_3.png
Serpent,Water,Shailoq,3,9720,560,608,115,https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_0_0.png
Chakram Dancer,Fire,Shaina,4,9390,747,604,103,https://summonerswarskyarena.info/wp-content/uploads/2018/03/shaina.png
Werewolf,Wind,Shakan,3,8565,582,659,115,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Shakan_Icon.png
Griffon,Light,Shamann,3,11040,472,604,111,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Shamann_Icon.png
Hellhound,Light,Shamar,2,8235,725,373,111,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Shamar_Icon.png
Chimera,Light,Shan,5,10215,812,648,95,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Shan_Icon.png
Pixie,Wind,Shannon,2,8730,505,560,111,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Shannon-Wind.png
Salamander,Light,Sharman,2,8400,505,582,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Sharman_Icon.png
Magical Archer,Water,Sharron,3,8235,823,439,105,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Sharron_Icon.png
Beast Monk,Light,Shazam,5,12675,604,692,101,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Shazam-Light.png
Monkey King,Water,Shi Hou,5,9885,845,637,115,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Shi-Hou-Water.png
Nine-tailed Fox,Fire,Shihwa,4,9555,714,626,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Shihwa_Icon.png
Sylph,Wind,Shimitae,4,10215,834,461,106,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Shimitae_Icon.png
Onmyouji,Water,Shizuka,5,11040,659,747,103,https://summonerswarskyarena.info/wp-content/uploads/2021/03/shizuka.png
High Elemental,Light,Shren,3,10380,725,395,104,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Shren_Icon-1.png
Hellhound,Dark,Shumar,3,7575,834,472,113,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Shumar_Icon.png
Shadowcaster,Light,Shun,5,11370,758,626,105,https://summonerswarskyarena.info/wp-content/uploads/2022/04/unit_icon_0086_1_4.png
Howl,Light,Shushu,2,9060,450,593,99,https://summonerswarskyarena.info/wp-content/uploads/2016/08/Shushu-Light.png
Harpu,Light,Sia,3,9225,670,527,105,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Sia_Icon.png
Hypnomeow,Light,Siamese,4,12510,560,582,100,https://summonerswarskyarena.info/wp-content/uploads/2022/05/unit_icon_0085_1_4.png
Joker,Water,Sian,4,10545,834,439,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Sian_Icon.png
Hellhound,Fire,Sieq,2,6255,823,416,110,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Sieq_Icon.png
Samurai,Dark,Sige,4,8730,911,483,105,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Sige-Dark.png
Phoenix,Water,Sigmarus,5,9720,988,505,99,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Sigmarus_Icon.png
Exorcist Association Resolver,Dark,Sigmund,5,10545,812,626,106,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0166_1_5_sigmund.png
Mercenary Queen,Dark,Sigrid,5,12180,736,593,102,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0117_1_5.png
Mystic Witch,Wind,Silia,3,9060,681,527,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Silia_Icon.png
Living Armor,Light,Silver,3,9720,461,703,98,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Silver_Icon.png
Martial Artist,Fire,Sin,3,8400,593,659,99,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Sin-Fire.png
Harpu,Water,Sisroo,2,7245,582,582,106,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Sisroo_Icon.png
Giant Warrior,Wind,Skogul,4,11205,560,670,99,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Skogul_Icon.png
Puppeteer,Wind,Smicer,5,10050,834,637,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0106_1_3.png
Jack-o'-lantern,Fire,Smokey,4,9555,747,593,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Smokey-Fire.png
Nine-tailed Fox,Water,Soha,4,8235,878,549,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Soha-.png
Drakan Warrior,Water,Solvark,5,10050,604,867,101,https://summonerswarskyarena.info/wp-content/uploads/2024/10/unit_icon_0161_0_1_solvark2.png
Mercenary Queen,Fire,Solveig,4,11700,670,527,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0117_1_2.png
Monkey King,Dark,Son Zhang Lao,5,11040,637,604,118,https://summonerswarskyarena.info/wp-content/uploads/2015/07/Son_Zhang_Lao_Icon.png
String Master,Water,Songseol,4,11205,659,571,107,https://summonerswarskyarena.info/wp-content/uploads/2020/06/songseol.png
Battle Angel,Wind,Sonia,5,10215,867,593,119,https://summonerswarskyarena.info/wp-content/uploads/2022/07/unit_icon_0087_1_3.png
Harp Magician,Water,Sonnet,4,10710,604,659,98,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Sonnet_Icon.png
Mummy,Fire,Sonora,3,10215,538,593,97,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Sonora-Fire.png
Pierret,Wind,Sophia,4,9555,900,439,103,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Sophia_Icon.png
Fairy,Dark,Sorin,2,7740,615,516,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Sorin_Icon.png
Griffon,Fire,Spectra,3,9060,571,637,126,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Spectra_Icon.png
Assassin,Water,Stella,4,10545,790,483,102,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Stella-Water.png
Rakshasa,Water,Su,4,9885,769,549,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Su_Icon.png
Onimusha,Water,Suiki,4,9885,736,582,100,https://summonerswarskyarena.info/wp-content/uploads/2021/02/suiki.png
Beast Hunter,Wind,Suri,3,8895,714,506,100,https://summonerswarskyarena.info/wp-content/uploads/2015/01/suri.png
Barbaric King,Fire,Surtr,4,10050,801,505,103,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Surtr-Fire.png
Rune Blacksmith,Water,Susan,4,10545,670,604,103,https://summonerswarskyarena.info/wp-content/uploads/2022/01/unit_icon_0081_1_1.png
Ninja,Water,Susano,4,8070,911,527,107,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Susano_Icon.png
Neostone Agent,Dark,Sylvia,5,11040,692,714,104,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Sylvia-Dark-N.png
Dice Magician,Light,Tablo,4,10380,692,593,102,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Tablo_Icon.png
Inferno,Fire,Tagaros,3,7740,911,384,95,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Tagaros_Icon.png
Elemental,Wind,Taharus,2,6420,780,439,107,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Taharus_Icon.png
Battle Mammoth,Water,Talc,3,10875,516,576,99,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Talc-Water.png
Chakram Dancer,Water,Talia,4,9225,780,582,103,https://summonerswarskyarena.info/wp-content/uploads/2018/03/Talia_Icon.png
Striker,Light,Talisman,5,10710,867,560,103,https://summonerswarskyarena.info/wp-content/uploads/2020/11/talisman.png
Tanjiro Kamado,Water,Tanjiro Kamado,4,9720,758,571,103,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_TanjiroWa.png
Tanjiro Kamado,Fire,Tanjiro Kamado,5,10545,856,582,103,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_TanjiroF.png
Tanjiro Kamado,Wind,Tanjiro Kamado,5,10380,878,571,103,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_TanjiroWi.png
Tanjiro Kamado,Light,Tanjiro Kamado,5,10215,867,593,103,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_TanjiroL.png
Tanjiro Kamado,Dark,Tanjiro Kamado,4,10050,747,560,103,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0167_1_1_TanjiroD.png
Yeti,Fire,Tantra,2,8895,560,494,101,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Tantra_Icon.png
Assassin,Wind,Tanya,4,9390,747,604,102,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Tanya-Wind.png
Gargoyle,Water,Tanzaite,4,9555,538,801,93,https://summonerswarskyarena.info/wp-content/uploads/2019/08/tanzaite.png
Chimera,Water,Taor,5,9885,911,571,95,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Taor_Icon.png
Druid,Wind,Taranys,5,10215,626,834,102,https://summonerswarskyarena.info/wp-content/uploads/2018/09/taranys.png
Magic Order Enchantress,Fire,Tarnisha,5,11370,714,670,103,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0152_1_2_tarnisha2.png
Hellhound,Water,Tarq,2,8565,714,362,115,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Tarq_Icon.png
Imp,Light,Taru,2,7905,604,516,114,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Taru-Light.png
Pixie,Fire,Tatu,2,6750,736,461,111,https://summonerswarskyarena.info/wp-content/uploads/2016/07/Tatu-Fire.png
Kobold Bomber,Wind,Taurus,4,9225,790,571,101,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Taurus-Wind.png
Garuda,Light,Teon,3,9555,571,612,95,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Teon_Icon.png
Ifrit,Fire,Tesarion,5,11535,747,626,100,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Tesarion-Fire.png
Phoenix,Wind,Teshar,5,9555,1098,406,114,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Phoenix_Wind_Icon.png
Mermaid,Water,Tetra,4,10545,582,692,110,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Tetra-Water.png
Exorcist Association Conjurer,Fire,Tetsuya,5,10710,736,692,101,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0165_1_2_tetsuya.png
Anubis,Dark,Thebae,5,12675,692,604,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Thebae-Dark.png
Specter Princess,Fire,Theodora,5,10545,769,670,100,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0175_0_2_Theodora2.png
Ifrit,Water,Theomars,5,10875,823,593,100,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Theomars-Water.png
Lollipop Warrior,Wind,Thomas,5,9885,823,659,110,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0096_1_3.png
Grim Reaper,Dark,Thrain,3,10215,823,310,94,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Thrain_Icon.png
Panda Warrior,Light,Tian Lang,5,12345,681,637,96,https://summonerswarskyarena.info/wp-content/uploads/2016/05/Tian-Lang-Light.png
Polar Queen,Wind,Tiana,5,11850,725,626,96,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Tiana-Wind.png
Drunken Master,Light,Tien Qin,3,9060,659,549,99,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Tien_Qin_Icon.png
Low Elemental,Water,Tigresse,1,6750,582,450,100,https://summonerswarskyarena.info/wp-content/uploads/2016/11/Tigresse_Icon.png
Undine,Dark,Tilasha,4,10545,626,648,99,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Tilasha_Icon.png
Magic Order Swordsinger,Wind,Tirsa,5,10215,878,582,121,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0151_1_3_tirsa2.png
Beetle Guardian,Fire,Tityus,5,11205,571,823,102,https://summonerswarskyarena.info/wp-content/uploads/2025/04/unit_icon_0177_0_1_tityus2.png
Poison Master,Fire,Todd,4,10875,637,615,101,https://summonerswarskyarena.info/wp-content/uploads/2020/12/todd.png
Penguin Knight,Water,Toma,3,8895,703,516,105,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Toma-Water.png
Onmyouji,Fire,Tomoe,5,11535,615,758,103,https://summonerswarskyarena.info/wp-content/uploads/2021/03/tomoe.png
Samurai,Light,Tosi,4,8235,889,538,120,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Tosi-Light.png
Frankenstein,Water,Tractor,3,9225,516,681,98,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Tractor-Water.png
Giant Warrior,Dark,Trasar,4,11700,549,648,99,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Trasar_Icon.png
Neostone Fighter,Fire,Trevor,4,10050,780,527,107,https://summonerswarskyarena.info/wp-content/uploads/2015/08/Trevor-Fire.png
Harp Magician,Wind,Triana,4,11040,560,681,113,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Triana_Icon.png
Valkyrja,Dark,Trinity,5,11700,758,604,101,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Trinity_Icon.png
Triss,Water,Triss,4,10710,604,659,101,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0144_1_1.png
Triss,Fire,Triss,5,10545,878,560,101,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0144_1_2.png
Triss,Wind,Triss,4,10545,604,670,101,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0144_1_3.png
Triss,Light,Triss,5,11535,670,703,101,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0144_1_4.png
Triss,Dark,Triss,5,10050,889,582,101,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0144_1_5.png
Sea Emperor,Wind,Triton,5,10875,681,736,116,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Triton_Icon.png
Choco Knight,Dark,Truffle,4,11205,670,560,103,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0098_1_5.png
Sylph,Water,Tyron,4,10875,725,527,105,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Tyron_Icon.png
Warbear,Fire,Ursha,2,9885,549,439,102,https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ursha_Icon.png
Minotauros,Water,Urtau,3,10710,582,521,99,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Urtau-Water.png
Asura,Wind,Usha,4,9555,834,505,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0119_1_3.png
Druid,Light,Valantis,5,11535,703,670,102,https://summonerswarskyarena.info/wp-content/uploads/2018/09/valantis.png
Magic Order Guardian,Dark,Valdemar,5,12510,725,582,100,https://summonerswarskyarena.info/wp-content/uploads/2024/06/unit_icon_0150_1_5_valdemar2.png
Striker,Dark,Vancliffe,5,10875,823,593,103,https://summonerswarskyarena.info/wp-content/uploads/2020/11/vancliffe.png
Valkyrja,Fire,Vanessa,5,10875,703,714,101,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Vanessa_Icon.png
Asura,Fire,Varuna,4,8895,823,560,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0119_1_2.png
Griffon,Dark,Varus,3,11700,483,549,111,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Varus_Icon.png
Archangel,Fire,Velajuel,5,10050,681,790,100,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Velajuel_Icon.png
Specter Princess,Dark,Velaska,5,11535,670,703,100,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0175_0_5_Velaska2.png
Lizardman,Wind,Velfinodon,3,8895,560,659,103,https://summonerswarskyarena.info/wp-content/uploads/2014/11/Velfinodon-Wind.png
Indra,Fire,Vendhan,5,10050,812,659,106,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0118_1_2.png
Dragon,Water,Verad,5,11535,571,801,98,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Verad_Icon.png
Vampire,Fire,Verdehile,4,9885,812,505,99,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Verdehile_Icon.png
Blade Dancer,Dark,Vereesa,4,10215,692,604,105,https://summonerswarskyarena.info/wp-content/uploads/2020/11/vereesa.png
Vermilion Bird Dancer,Water,Vermilion Bird Dancer,5,12180,626,703,101,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Vermilion-Bird-DancerWa.png
Vermilion Bird Dancer,Fire,Vermilion Bird Dancer,5,10875,714,703,101,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Vermilion-Bird-DancerF.png
Vermilion Bird Dancer,Wind,Vermilion Bird Dancer,4,10215,659,637,101,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Vermilion-Bird-DancerWi.png
Vermilion Bird Dancer,Light,Vermilion Bird Dancer,4,9390,801,549,101,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Vermilion-Bird-DancerL.png
Vermilion Bird Dancer,Dark,Vermilion Bird Dancer,5,11040,692,714,101,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0179_1_1_Vermilion-Bird-DancerD.png
Ifrit,Dark,Veromos,5,10710,670,758,100,https://summonerswarskyarena.info/wp-content/uploads/2015/03/Veromos-Dark.png
Battle Angel,Light,Veronica,5,10545,823,615,104,https://summonerswarskyarena.info/wp-content/uploads/2022/07/unit_icon_0087_1_4.png
Giant Warrior,Fire,Vidurr,3,9060,505,703,99,https://summonerswarskyarena.info/wp-content/uploads/2018/10/Vidurr_Icon.png
Werewolf,Water,Vigor,3,11535,582,461,115,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Vigor_Icon.png
Exorcist Association Resolver,Wind,Vincent,5,10050,659,812,106,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0166_1_3_vincent.png
Harp Magician,Dark,Vivachel,5,12015,615,725,113,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Vivachel_Icon.png
Tomb Warden,Dark,Volg,4,11535,538,670,98,https://summonerswarskyarena.info/wp-content/uploads/2024/12/unit_icon_0176_0_5_volg2.png
Asura,Dark,Vritra,4,10875,659,593,101,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0119_1_5.png
Bounty Hunter,Light,Walkers,3,8895,637,582,110,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Walkers_Icon.png
Viking,Wind,Walter,2,10380,450,508,97,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Walter_Icon.png
Bounty Hunter,Water,Wayne,3,8565,648,593,110,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Wayne_Icon.png
Horus,Light,Wedjat,5,10710,637,790,102,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Wedjat-Light.png
Drunken Master,Dark,Wei Shin,3,7905,769,516,99,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Wei-Shin-Dark.png
Exorcist Association Resolver,Light,Werner,5,10215,637,801,106,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0166_1_1_werner.png
White Tiger Blade Master,Water,White Tiger Blade Master,5,10710,725,703,104,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0182_1_1_White-Tiger-Blade-MasterWa.png
White Tiger Blade Master,Fire,White Tiger Blade Master,5,10380,823,626,104,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0182_1_1_White-Tiger-Blade-MasterF.png
White Tiger Blade Master,Wind,White Tiger Blade Master,4,9885,769,549,104,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0182_1_1_White-Tiger-Blade-MasterWi.png
White Tiger Blade Master,Light,White Tiger Blade Master,5,9720,900,593,104,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0182_1_1_White-Tiger-Blade-MasterL.png
White Tiger Blade Master,Dark,White Tiger Blade Master,4,9555,780,560,104,https://summonerswarskyarena.info/wp-content/uploads/2025/05/unit_icon_0182_1_1_White-Tiger-Blade-MasterD.png
Jack-o'-lantern,Wind,Windy,4,9720,692,637,101,https://summonerswarskyarena.info/wp-content/uploads/2015/10/Windy-Wind.png
Sky Dancer,Dark,Wolyung,5,10710,823,604,101,https://summonerswarskyarena.info/wp-content/uploads/2015/01/wolyung.png
Taoist,Wind,Woochi,4,9225,670,692,104,https://summonerswarskyarena.info/wp-content/uploads/2015/01/woochi.png
Taoist,Dark,Woonhak,3,9885,637,516,104,https://summonerswarskyarena.info/wp-content/uploads/2015/01/woonhak.png
Pioneer,Dark,Woonsa,5,12015,703,637,118,https://summonerswarskyarena.info/wp-content/uploads/2015/01/woonsa.png
Pioneer,Water,Woosa,5,12015,659,681,118,https://summonerswarskyarena.info/wp-content/uploads/2015/01/woosa.png
Beast Rider,Dark,Xiana,5,10380,867,582,108,https://summonerswarskyarena.info/wp-content/uploads/2019/12/unit_icon_0054_4_0.png
Drunken Master,Fire,Xiao Chun,3,8565,747,494,99,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Xiao-Chun-Fire.png
Kung Fu Girl,Water,Xiao Lin,4,8730,736,659,102,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Xiao-Lin.png
Martial Cat,Light,Xiao Ling,3,11205,604,461,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Xiao_Ling_Icon.png
Monkey King,Wind,Xing Zhe,5,11700,703,659,117,https://summonerswarskyarena.info/wp-content/uploads/2014/10/Xing-Zhe-Wind.png
Panda Warrior,Fire,Xiong Fei,5,10545,615,823,96,https://summonerswarskyarena.info/wp-content/uploads/2016/05/Xiong-Fei-Fire.png
Imp Champion,Water,Yaku,3,8235,714,549,102,https://summonerswarskyarena.info/wp-content/uploads/2016/12/Yaku_Icon.png
Dokkaebi Princess and Sapsaree,Fire,Yeji and Sapsaree,4,9885,703,615,103,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_2.png
Rakshasa,Wind,Yen,4,10215,780,516,104,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Yen_Icon.png
Yennefer,Fire,Yennefer,5,11370,714,670,103,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0143_1_2.png
Yennefer,Wind,Yennefer,4,10875,659,593,103,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0143_1_3.png
Yennefer,Light,Yennefer,4,10380,670,615,103,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0143_1_4.png
Yennefer,Dark,Yennefer,5,10545,845,593,103,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0143_1_5.png
Yennefer,Water,Yennefer,5,10710,823,604,103,https://summonerswarskyarena.info/wp-content/uploads/2024/01/unit_icon_0143_1_1.png
Sky Dancer,Light,Yeonhong,5,11700,736,626,116,https://summonerswarskyarena.info/wp-content/uploads/2015/01/yeonhong.png
String Master,Wind,Yeonhwa,4,11040,538,703,107,https://summonerswarskyarena.info/wp-content/uploads/2020/06/yeonhwa.png
Yuji Itadori,Water,Yuji Itadori,5,10215,834,626,104,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0155_1_1_Yuji-Itadori_Water.png
Yuji Itadori,Fire,Yuji Itadori,5,9885,878,604,104,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0155_1_2_Yuji-Itadori_Fire.png
Yuji Itadori,Wind,Yuji Itadori,4,9060,790,582,104,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0155_1_3_Yuji-Itadori_Wind.png
Yuji Itadori,Light,Yuji Itadori,4,9555,769,571,104,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0155_1_4_Yuji-Itadori_Light.png
Yuji Itadori,Dark,Yuji Itadori,5,10050,867,604,104,https://summonerswarskyarena.info/wp-content/uploads/2024/07/unit_icon_0155_1_5_Yuji-Itadori_Dark.png
Exorcist Association Hunter,Dark,Yuko,4,9885,769,549,102,https://summonerswarskyarena.info/wp-content/uploads/2024/11/unit_icon_0164_1_5_yuko.png
Dokkaebi Princess and Sapsaree,Wind,Yuna and Sapsaree,4,10545,571,703,103,https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_3.png
Dragon,Fire,Zaiross,5,9720,911,582,98,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Zaiross_Icon.png
Shadowcaster,Wind,Zen,5,11535,714,659,105,https://summonerswarskyarena.info/wp-content/uploads/2022/04/unit_icon_0086_1_3.png
Puppeteer,Dark,Zenisek,5,11040,780,626,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0106_1_5.png
Zenitsu Agatsuma,Water,Zenitsu Agatsuma,5,10050,845,626,106,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0169_1_1_ZenitsuWa.png
Zenitsu Agatsuma,Fire,Zenitsu Agatsuma,4,9225,758,604,106,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0169_1_1_ZenitsuF.png
Zenitsu Agatsuma,Wind,Zenitsu Agatsuma,5,9720,856,637,106,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0169_1_1_ZenitsuWi.png
Zenitsu Agatsuma,Light,Zenitsu Agatsuma,4,8895,769,615,106,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0169_1_1_ZenitsuL.png
Zenitsu Agatsuma,Dark,Zenitsu Agatsuma,5,9885,834,648,106,https://summonerswarskyarena.info/wp-content/uploads/2025/01/unit_icon_0169_1_1_ZenitsuD.png
Boomerang Warrior,Wind,Zenobia,4,9390,769,582,101,https://summonerswarskyarena.info/wp-content/uploads/2018/03/zenobia.png
Charger Shark,Wind,Zephicus,3,10215,604,527,105,https://summonerswarskyarena.info/wp-content/uploads/2015/06/Zephicus-Wind.png
Dragon,Light,Zerath,5,15315,560,560,98,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Zerath_Icon.png
Chimera,Dark,Zeratu,5,10710,790,637,95,https://summonerswarskyarena.info/wp-content/uploads/2017/02/Zeratu_Icon.png
Puppeteer,Water,Zibala,5,10875,769,648,115,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0106_1_1.png
Kobold Bomber,Fire,Zibrolta,4,8895,823,560,101,https://summonerswarskyarena.info/wp-content/uploads/2014/12/Zibrolta-Fire.png
Puppeteer,Fire,Zima,5,9555,646,626,100,https://summonerswarskyarena.info/wp-content/uploads/2023/07/unit_icon_0106_1_2.png
Living Armor,Dark,Zinc,3,9885,483,670,98,https://summonerswarskyarena.info/wp-content/uploads/2017/01/Zinc_Icon.png
`
