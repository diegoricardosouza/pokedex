import React, { useCallback, useEffect, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import ContainerInterna from 'components/ContainerInterna'
import { AbilitiesProps, StatsProps } from 'templates/Pokemon'
import { FirstLetterUppercase } from 'utils/utils'
import * as S from './styles'
import Link from 'next/link'

export type TabDetailsProps = {
  name: string
  specie: string
  height: string
  weight: string
  abilities: AbilitiesProps[]
  stats: StatsProps
}

type PokemonEvolvesProps = {
  name: string
  level: number
  image?: string
  number?: string
}

type EvolvesProps = {
  species: {
    name: string
  }
  evolution_details: [{ min_level: number }]
  evolves_to: EvolvesProps[]
}

const TabDetails = ({
  name,
  specie,
  height,
  weight,
  abilities,
  stats
}: TabDetailsProps) => {
  const [pokemonsFamily, setPokemonsFamily] = useState<PokemonEvolvesProps[]>(
    []
  )
  const [evolvesPokemon, setEvolvesPokemon] = useState<PokemonEvolvesProps[]>(
    []
  )

  const total =
    stats?.speed +
    stats?.hp +
    stats?.attack +
    stats?.defense +
    stats?.specialAttack +
    stats?.specialDefense

  const percent = total / 6

  const handleNameSpecies = useCallback(
    ({
      species,
      evolves_to,
      evolution_details
    }: EvolvesProps): PokemonEvolvesProps[] => {
      let namesPokemons: PokemonEvolvesProps[] = [
        {
          name: species.name,
          level: 0
        }
      ]

      if (evolution_details.length)
        namesPokemons[0].level = evolution_details[0].min_level

      evolves_to.forEach((evolves: EvolvesProps) => {
        namesPokemons = namesPokemons.concat(handleNameSpecies(evolves))
      })

      return namesPokemons
    },
    []
  )

  useEffect(() => {
    const pokemonData = async () => {
      try {
        if (name) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${name}`
          )

          const body = await response.json()
          const url = body.evolution_chain.url.split('v2')[1]

          const reponseSpecies = await fetch(`https://pokeapi.co/api/v2${url}`)
          const bodySpecies = await reponseSpecies.json()

          const species = handleNameSpecies(bodySpecies.chain)
          setPokemonsFamily(species)
        }
      } catch (error) {
        console.log(error)
      }
    }

    pokemonData()
  }, [name, handleNameSpecies])

  useEffect(() => {
    try {
      if (pokemonsFamily.length) {
        const pokemonEvolvesData = async () => {
          pokemonsFamily.map(async (p, index) => {
            const urls = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${p.name}`
            )
            const { id, sprites } = await urls.json()

            const data = {
              ...pokemonsFamily[index],
              number: `#${'000'.substr(id.toString().length)}${id}`,
              image: sprites.other['official-artwork'].front_default as string
            }

            setEvolvesPokemon((prevState) => [...prevState, data])
          })
        }

        pokemonEvolvesData()
      }
    } catch (error) {
      console.log(error)
    }
  }, [pokemonsFamily])

  // const newEvolvesPokemon = Array.from(
  //   evolvesPokemon
  //     .reduce((map, obj) => map.set(obj.name, obj), new Map())
  //     .values()
  // )

  // const a = evolvesPokemon.filter(
  //   (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
  // )

  // console.log(a)

  return (
    <ContainerInterna>
      <S.Wrapper>
        <S.Tabs defaultValue="tab1" orientation="vertical">
          <S.TabsList aria-label="tabs example">
            <S.TabsTrigger value="tab1">About</S.TabsTrigger>
            <S.TabsTrigger value="tab2">Base Stats</S.TabsTrigger>
            <S.TabsTrigger value="tab3">Evolution</S.TabsTrigger>
          </S.TabsList>

          <Tabs.Content value="tab1">
            <S.WrapperContent>
              <S.Item>
                <S.ItemTitle>Species</S.ItemTitle>
                <S.ItemContent>{specie}</S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Height</S.ItemTitle>
                <S.ItemContent>{height}</S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Weight</S.ItemTitle>
                <S.ItemContent>{weight}</S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Abilities</S.ItemTitle>
                <S.ItemContent>
                  {abilities &&
                    abilities.map((abilitie, index) =>
                      index !== 0
                        ? ', ' + FirstLetterUppercase(abilitie?.ability.name)
                        : FirstLetterUppercase(abilitie?.ability.name)
                    )}
                </S.ItemContent>
              </S.Item>
            </S.WrapperContent>
          </Tabs.Content>

          <Tabs.Content value="tab2">
            <S.WrapperContent>
              <S.Item>
                <S.ItemTitle>HP</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{stats?.hp}</S.WrapperItem>

                    <S.Status percent={stats?.hp} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Attack</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{stats?.attack}</S.WrapperItem>

                    <S.Status percent={stats?.attack} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Defense</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{stats?.defense}</S.WrapperItem>

                    <S.Status percent={stats?.defense} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Sp. Atk</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{stats?.specialAttack}</S.WrapperItem>

                    <S.Status percent={stats?.specialAttack} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Sp. Def</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{stats?.specialDefense}</S.WrapperItem>

                    <S.Status percent={stats?.specialDefense} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Speed</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{stats?.speed}</S.WrapperItem>

                    <S.Status percent={stats?.speed} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>

              <S.Item>
                <S.ItemTitle>Total</S.ItemTitle>
                <S.ItemContent>
                  <S.WrapperItemContent>
                    <S.WrapperItem>{total}</S.WrapperItem>

                    <S.Status percent={percent} />
                  </S.WrapperItemContent>
                </S.ItemContent>
              </S.Item>
            </S.WrapperContent>
          </Tabs.Content>

          <Tabs.Content value="tab3">
            <S.WrapperContent>
              <S.TitleEvolves>Evolution Chain</S.TitleEvolves>

              <S.WrapperEvolves>
                {evolvesPokemon.length ? (
                  evolvesPokemon
                    .filter(
                      (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
                    )
                    .map((evolves, index) => (
                      <React.Fragment key={index}>
                        {index !== 0 && (
                          <S.EvolvesLevel>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p>Lvl {evolves.level || 'null'}</p>
                          </S.EvolvesLevel>
                        )}

                        <S.EvolvesItemContent>
                          <Link href={`/pokemon/${evolves.name}`}>
                            <a>
                              <img
                                src={evolves.image}
                                alt={`Imagem do pokémon ${evolves.name}`}
                              />
                            </a>
                          </Link>

                          <S.EvolvesName>
                            {FirstLetterUppercase(evolves.name)}
                          </S.EvolvesName>
                        </S.EvolvesItemContent>
                      </React.Fragment>
                    ))
                ) : (
                  <h1 style={{ textAlign: 'center' }}>Carregando...</h1>
                )}
              </S.WrapperEvolves>
            </S.WrapperContent>
          </Tabs.Content>
        </S.Tabs>
      </S.Wrapper>
    </ContainerInterna>
  )
}

export default TabDetails
