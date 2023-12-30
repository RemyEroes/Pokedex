import json
# 0 Importer le json depuis le pdf puis le lire

with open('/Users/remyeroes/Desktop/École/EPSI/SN2/COURS/ReactJS/Pokedex/Pokedex/src/data/pokemon_names_new_new.json', 'r') as file:
    pokemons = json.load(file)
   
# 1 Trier les joueurs selon leur points d'elo et stocker dans une variable sorted_players..
# sorted_players= sorted(players, key=lambda x: x["elo_points"])

# with open('/Users/remyeroes/Desktop/École/EPSI/SN2/COURS/python/système_suisse/code_python /sorted_players.json', 'w') as f:
#     json.dump(sorted_players, f , indent=2)

# # 2 Structurer les données en listant les confrontations : (1-4) (2-5) (3-6)
# with open('/Users/remyeroes/Desktop/École/EPSI/SN2/COURS/python/système_suisse/code_python /sorted_players.json', 'r') as file:
#     sorted_players = json.load(file)
    
# number_players = len(sorted_players) ## 6 players
# ## si nombre de joueurs impaires
# if number_players % 2 != 0:
#     print(f"ERREUR: le nombre de joueurs ({number_players}) est impaire. Impossible de créer deux groupes égaux.")
#     exit
    
# group_S1 = sorted_players[0:int(number_players/2)] ## de 0 à 3
# group_S2 = sorted_players[int((number_players/2)):int(number_players+1)] ## de 4 à 6

# versus_template = {}

# for i in range(0,int((number_players/2))):
#     match = [group_S1[i],group_S2[i]]
#     versus_template[f"match_{i+1}"] = match
   
for pokemon in pokemons:
    
        if ('generation' in pokemon) and ('image' in pokemon) and ('image_shiny' in pokemon) and ('height' in pokemon) and ('weight' in pokemon) and ('stats' in pokemon) and ('types' in pokemon) and ('evolvedFrom' in pokemon) and ('evolvesTo' in pokemon):
            del pokemon['generation']
            del pokemon['image']
            del pokemon['image_shiny']
            del pokemon['height']
            del pokemon['weight']

            del pokemon['stats']
            del pokemon['types']
            del pokemon['evolvedFrom']
            del pokemon['evolvesTo']

        # 3 Générer le fichier json versus.json listant les confrontations
        with open('/Users/remyeroes/Desktop/École/EPSI/SN2/COURS/ReactJS/Pokedex/Pokedex/src/data/pokemon_names_new_new.json', 'w') as f:
            json.dump(pokemons, f , indent=2)
