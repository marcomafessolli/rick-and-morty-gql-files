[@marcomafessolli/rick-and-morty-gql-files](README.md) / Exports

# @marcomafessolli/rick-and-morty-gql-files

## Table of contents

### Type aliases

- [Character](modules.md#character)
- [CharacterFieldsFragment](modules.md#characterfieldsfragment)
- [Characters](modules.md#characters)
- [Episode](modules.md#episode)
- [EpisodeFieldsFragment](modules.md#episodefieldsfragment)
- [Episodes](modules.md#episodes)
- [Exact](modules.md#exact)
- [FilterCharacter](modules.md#filtercharacter)
- [FilterEpisode](modules.md#filterepisode)
- [FilterLocation](modules.md#filterlocation)
- [Info](modules.md#info)
- [InfoFieldsFragment](modules.md#infofieldsfragment)
- [InputMaybe](modules.md#inputmaybe)
- [Location](modules.md#location)
- [LocationFieldsFragment](modules.md#locationfieldsfragment)
- [Locations](modules.md#locations)
- [MakeMaybe](modules.md#makemaybe)
- [MakeOptional](modules.md#makeoptional)
- [Maybe](modules.md#maybe)
- [Query](modules.md#query)
- [QueryCharacter](modules.md#querycharacter)
- [QueryCharacterArgs](modules.md#querycharacterargs)
- [QueryCharacterVariables](modules.md#querycharactervariables)
- [QueryCharacters](modules.md#querycharacters)
- [QueryCharactersArgs](modules.md#querycharactersargs)
- [QueryCharactersByIds](modules.md#querycharactersbyids)
- [QueryCharactersByIdsArgs](modules.md#querycharactersbyidsargs)
- [QueryCharactersByIdsVariables](modules.md#querycharactersbyidsvariables)
- [QueryCharactersVariables](modules.md#querycharactersvariables)
- [QueryEpisode](modules.md#queryepisode)
- [QueryEpisodeArgs](modules.md#queryepisodeargs)
- [QueryEpisodeVariables](modules.md#queryepisodevariables)
- [QueryEpisodes](modules.md#queryepisodes)
- [QueryEpisodesArgs](modules.md#queryepisodesargs)
- [QueryEpisodesByIds](modules.md#queryepisodesbyids)
- [QueryEpisodesByIdsArgs](modules.md#queryepisodesbyidsargs)
- [QueryEpisodesByIdsVariables](modules.md#queryepisodesbyidsvariables)
- [QueryEpisodesVariables](modules.md#queryepisodesvariables)
- [QueryLocation](modules.md#querylocation)
- [QueryLocationArgs](modules.md#querylocationargs)
- [QueryLocationVariables](modules.md#querylocationvariables)
- [QueryLocations](modules.md#querylocations)
- [QueryLocationsArgs](modules.md#querylocationsargs)
- [QueryLocationsByIds](modules.md#querylocationsbyids)
- [QueryLocationsByIdsArgs](modules.md#querylocationsbyidsargs)
- [QueryLocationsByIdsVariables](modules.md#querylocationsbyidsvariables)
- [QueryLocationsVariables](modules.md#querylocationsvariables)
- [Requester](modules.md#requester)
- [Scalars](modules.md#scalars)
- [Sdk](modules.md#sdk)

### Variables

- [CharacterFieldsFragment](modules.md#characterfieldsfragment)
- [EpisodeFieldsFragment](modules.md#episodefieldsfragment)
- [InfoFieldsFragment](modules.md#infofieldsfragment)
- [LocationFieldsFragment](modules.md#locationfieldsfragment)
- [QueryCharacterDocument](modules.md#querycharacterdocument)
- [QueryCharactersByIdsDocument](modules.md#querycharactersbyidsdocument)
- [QueryCharactersDocument](modules.md#querycharactersdocument)
- [QueryEpisodeDocument](modules.md#queryepisodedocument)
- [QueryEpisodesByIdsDocument](modules.md#queryepisodesbyidsdocument)
- [QueryEpisodesDocument](modules.md#queryepisodesdocument)
- [QueryLocationDocument](modules.md#querylocationdocument)
- [QueryLocationsByIdsDocument](modules.md#querylocationsbyidsdocument)
- [QueryLocationsDocument](modules.md#querylocationsdocument)

### Functions

- [getSdk](modules.md#getsdk)

## Type aliases

### Character

Ƭ **Character**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Character"`` |
| `created?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `episode` | [`Maybe`](modules.md#maybe)<[`Episode`](modules.md#episode)\>[] |
| `gender?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `id?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"ID"``]\> |
| `image?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `location?` | [`Maybe`](modules.md#maybe)<[`Location`](modules.md#location)\> |
| `name?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `origin?` | [`Maybe`](modules.md#maybe)<[`Location`](modules.md#location)\> |
| `species?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `status?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `type?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |

#### Defined in

[index.ts:17](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L17)

___

### CharacterFieldsFragment

Ƭ **CharacterFieldsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Character"`` |
| `created?` | `string` \| ``null`` |
| `gender?` | `string` \| ``null`` |
| `id?` | `string` \| ``null`` |
| `image?` | `string` \| ``null`` |
| `name?` | `string` \| ``null`` |
| `species?` | `string` \| ``null`` |
| `status?` | `string` \| ``null`` |
| `type?` | `string` \| ``null`` |

#### Defined in

[index.ts:224](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L224)

___

### Characters

Ƭ **Characters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Characters"`` |
| `info?` | [`Maybe`](modules.md#maybe)<[`Info`](modules.md#info)\> |
| `results?` | [`Maybe`](modules.md#maybe)<[`Maybe`](modules.md#maybe)<[`Character`](modules.md#character)\>[]\> |

#### Defined in

[index.ts:32](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L32)

___

### Episode

Ƭ **Episode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Episode"`` |
| `air_date?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `characters` | [`Maybe`](modules.md#maybe)<[`Character`](modules.md#character)\>[] |
| `created?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `episode?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `id?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"ID"``]\> |
| `name?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |

#### Defined in

[index.ts:38](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L38)

___

### EpisodeFieldsFragment

Ƭ **EpisodeFieldsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Episode"`` |
| `air_date?` | `string` \| ``null`` |
| `created?` | `string` \| ``null`` |
| `episode?` | `string` \| ``null`` |
| `id?` | `string` \| ``null`` |
| `name?` | `string` \| ``null`` |

#### Defined in

[index.ts:226](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L226)

___

### Episodes

Ƭ **Episodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Episodes"`` |
| `info?` | [`Maybe`](modules.md#maybe)<[`Info`](modules.md#info)\> |
| `results?` | [`Maybe`](modules.md#maybe)<[`Maybe`](modules.md#maybe)<[`Episode`](modules.md#episode)\>[]\> |

#### Defined in

[index.ts:48](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L48)

___

### Exact

Ƭ **Exact**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

[index.ts:5](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L5)

___

### FilterCharacter

Ƭ **FilterCharacter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gender?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `name?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `species?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `status?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `type?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |

#### Defined in

[index.ts:54](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L54)

___

### FilterEpisode

Ƭ **FilterEpisode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `episode?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `name?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |

#### Defined in

[index.ts:62](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L62)

___

### FilterLocation

Ƭ **FilterLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dimension?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `name?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `type?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |

#### Defined in

[index.ts:67](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L67)

___

### Info

Ƭ **Info**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Info"`` |
| `count?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |
| `next?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |
| `pages?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |
| `prev?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |

#### Defined in

[index.ts:73](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L73)

___

### InfoFieldsFragment

Ƭ **InfoFieldsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Info"`` |
| `count?` | `number` \| ``null`` |
| `next?` | `number` \| ``null`` |
| `pages?` | `number` \| ``null`` |
| `prev?` | `number` \| ``null`` |

#### Defined in

[index.ts:230](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L230)

___

### InputMaybe

Ƭ **InputMaybe**<`T`\>: [`Maybe`](modules.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[index.ts:4](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L4)

___

### Location

Ƭ **Location**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Location"`` |
| `created?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `dimension?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `id?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"ID"``]\> |
| `name?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |
| `residents` | [`Maybe`](modules.md#maybe)<[`Character`](modules.md#character)\>[] |
| `type?` | [`Maybe`](modules.md#maybe)<[`Scalars`](modules.md#scalars)[``"String"``]\> |

#### Defined in

[index.ts:81](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L81)

___

### LocationFieldsFragment

Ƭ **LocationFieldsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Location"`` |
| `created?` | `string` \| ``null`` |
| `dimension?` | `string` \| ``null`` |
| `id?` | `string` \| ``null`` |
| `name?` | `string` \| ``null`` |
| `type?` | `string` \| ``null`` |

#### Defined in

[index.ts:228](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L228)

___

### Locations

Ƭ **Locations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Locations"`` |
| `info?` | [`Maybe`](modules.md#maybe)<[`Info`](modules.md#info)\> |
| `results?` | [`Maybe`](modules.md#maybe)<[`Maybe`](modules.md#maybe)<[`Location`](modules.md#location)\>[]\> |

#### Defined in

[index.ts:91](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L91)

___

### MakeMaybe

Ƭ **MakeMaybe**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [SubKey in K]: Maybe<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[index.ts:7](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L7)

___

### MakeOptional

Ƭ **MakeOptional**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [SubKey in K]?: Maybe<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[index.ts:6](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L6)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[index.ts:3](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L3)

___

### Query

Ƭ **Query**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `character?` | [`Maybe`](modules.md#maybe)<[`Character`](modules.md#character)\> |
| `characters?` | [`Maybe`](modules.md#maybe)<[`Characters`](modules.md#characters)\> |
| `charactersByIds?` | [`Maybe`](modules.md#maybe)<[`Maybe`](modules.md#maybe)<[`Character`](modules.md#character)\>[]\> |
| `episode?` | [`Maybe`](modules.md#maybe)<[`Episode`](modules.md#episode)\> |
| `episodes?` | [`Maybe`](modules.md#maybe)<[`Episodes`](modules.md#episodes)\> |
| `episodesByIds?` | [`Maybe`](modules.md#maybe)<[`Maybe`](modules.md#maybe)<[`Episode`](modules.md#episode)\>[]\> |
| `location?` | [`Maybe`](modules.md#maybe)<[`Location`](modules.md#location)\> |
| `locations?` | [`Maybe`](modules.md#maybe)<[`Locations`](modules.md#locations)\> |
| `locationsByIds?` | [`Maybe`](modules.md#maybe)<[`Maybe`](modules.md#maybe)<[`Location`](modules.md#location)\>[]\> |

#### Defined in

[index.ts:97](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L97)

___

### QueryCharacter

Ƭ **QueryCharacter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `character?` | { `__typename?`: ``"Character"`` ; `created?`: `string` \| ``null`` ; `gender?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `image?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `species?`: `string` \| ``null`` ; `status?`: `string` \| ``null`` ; `type?`: `string` \| ``null``  } \| ``null`` |

#### Defined in

[index.ts:163](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L163)

___

### QueryCharacterArgs

Ƭ **QueryCharacterArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](modules.md#scalars)[``"ID"``] |

#### Defined in

[index.ts:111](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L111)

___

### QueryCharacterVariables

Ƭ **QueryCharacterVariables**: [`Exact`](modules.md#exact)<{ `id`: [`Scalars`](modules.md#scalars)[``"ID"``]  }\>

#### Defined in

[index.ts:158](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L158)

___

### QueryCharacters

Ƭ **QueryCharacters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `characters?` | { `__typename?`: ``"Characters"`` ; `info?`: { `__typename?`: ``"Info"`` ; `count?`: `number` \| ``null`` ; `next?`: `number` \| ``null`` ; `pages?`: `number` \| ``null`` ; `prev?`: `number` \| ``null``  } \| ``null`` ; `results?`: ({ `__typename?`: ``"Character"`` ; `created?`: `string` \| ``null`` ; `gender?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `image?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `species?`: `string` \| ``null`` ; `status?`: `string` \| ``null`` ; `type?`: `string` \| ``null``  } \| ``null`` \| `undefined`)[] \| ``null``  } \| ``null`` |

#### Defined in

[index.ts:171](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L171)

___

### QueryCharactersArgs

Ƭ **QueryCharactersArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter?` | [`InputMaybe`](modules.md#inputmaybe)<[`FilterCharacter`](modules.md#filtercharacter)\> |
| `page?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |

#### Defined in

[index.ts:116](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L116)

___

### QueryCharactersByIds

Ƭ **QueryCharactersByIds**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `charactersByIds?` | ({ `__typename?`: ``"Character"`` ; `created?`: `string` \| ``null`` ; `gender?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `image?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `species?`: `string` \| ``null`` ; `status?`: `string` \| ``null`` ; `type?`: `string` \| ``null``  } \| ``null`` \| `undefined`)[] \| ``null`` |

#### Defined in

[index.ts:178](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L178)

___

### QueryCharactersByIdsArgs

Ƭ **QueryCharactersByIdsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ids` | [`Scalars`](modules.md#scalars)[``"ID"``][] |

#### Defined in

[index.ts:122](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L122)

___

### QueryCharactersByIdsVariables

Ƭ **QueryCharactersByIdsVariables**: [`Exact`](modules.md#exact)<{ `ids`: [`Scalars`](modules.md#scalars)[``"ID"``][] \| [`Scalars`](modules.md#scalars)[``"ID"``]  }\>

#### Defined in

[index.ts:173](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L173)

___

### QueryCharactersVariables

Ƭ **QueryCharactersVariables**: [`Exact`](modules.md#exact)<{ `filter?`: [`InputMaybe`](modules.md#inputmaybe)<[`FilterCharacter`](modules.md#filtercharacter)\> ; `page?`: [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\>  }\>

#### Defined in

[index.ts:165](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L165)

___

### QueryEpisode

Ƭ **QueryEpisode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `episode?` | { `__typename?`: ``"Episode"`` ; `air_date?`: `string` \| ``null`` ; `created?`: `string` \| ``null`` ; `episode?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `name?`: `string` \| ``null``  } \| ``null`` |

#### Defined in

[index.ts:207](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L207)

___

### QueryEpisodeArgs

Ƭ **QueryEpisodeArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](modules.md#scalars)[``"ID"``] |

#### Defined in

[index.ts:127](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L127)

___

### QueryEpisodeVariables

Ƭ **QueryEpisodeVariables**: [`Exact`](modules.md#exact)<{ `id`: [`Scalars`](modules.md#scalars)[``"ID"``]  }\>

#### Defined in

[index.ts:202](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L202)

___

### QueryEpisodes

Ƭ **QueryEpisodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `episodes?` | { `__typename?`: ``"Episodes"`` ; `info?`: { `__typename?`: ``"Info"`` ; `count?`: `number` \| ``null`` ; `next?`: `number` \| ``null`` ; `pages?`: `number` \| ``null`` ; `prev?`: `number` \| ``null``  } \| ``null`` ; `results?`: ({ `__typename?`: ``"Episode"`` ; `air_date?`: `string` \| ``null`` ; `created?`: `string` \| ``null`` ; `episode?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `name?`: `string` \| ``null``  } \| ``null`` \| `undefined`)[] \| ``null``  } \| ``null`` |

#### Defined in

[index.ts:215](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L215)

___

### QueryEpisodesArgs

Ƭ **QueryEpisodesArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter?` | [`InputMaybe`](modules.md#inputmaybe)<[`FilterEpisode`](modules.md#filterepisode)\> |
| `page?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |

#### Defined in

[index.ts:132](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L132)

___

### QueryEpisodesByIds

Ƭ **QueryEpisodesByIds**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `episodesByIds?` | ({ `__typename?`: ``"Episode"`` ; `air_date?`: `string` \| ``null`` ; `created?`: `string` \| ``null`` ; `episode?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `name?`: `string` \| ``null``  } \| ``null`` \| `undefined`)[] \| ``null`` |

#### Defined in

[index.ts:222](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L222)

___

### QueryEpisodesByIdsArgs

Ƭ **QueryEpisodesByIdsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ids` | [`Scalars`](modules.md#scalars)[``"ID"``][] |

#### Defined in

[index.ts:138](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L138)

___

### QueryEpisodesByIdsVariables

Ƭ **QueryEpisodesByIdsVariables**: [`Exact`](modules.md#exact)<{ `ids`: [`Scalars`](modules.md#scalars)[``"ID"``][] \| [`Scalars`](modules.md#scalars)[``"ID"``]  }\>

#### Defined in

[index.ts:217](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L217)

___

### QueryEpisodesVariables

Ƭ **QueryEpisodesVariables**: [`Exact`](modules.md#exact)<{ `filter?`: [`InputMaybe`](modules.md#inputmaybe)<[`FilterEpisode`](modules.md#filterepisode)\> ; `page?`: [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\>  }\>

#### Defined in

[index.ts:209](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L209)

___

### QueryLocation

Ƭ **QueryLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `location?` | { `__typename?`: ``"Location"`` ; `created?`: `string` \| ``null`` ; `dimension?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `type?`: `string` \| ``null``  } \| ``null`` |

#### Defined in

[index.ts:185](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L185)

___

### QueryLocationArgs

Ƭ **QueryLocationArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](modules.md#scalars)[``"ID"``] |

#### Defined in

[index.ts:143](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L143)

___

### QueryLocationVariables

Ƭ **QueryLocationVariables**: [`Exact`](modules.md#exact)<{ `id`: [`Scalars`](modules.md#scalars)[``"ID"``]  }\>

#### Defined in

[index.ts:180](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L180)

___

### QueryLocations

Ƭ **QueryLocations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `locations?` | { `__typename?`: ``"Locations"`` ; `info?`: { `__typename?`: ``"Info"`` ; `count?`: `number` \| ``null`` ; `next?`: `number` \| ``null`` ; `pages?`: `number` \| ``null`` ; `prev?`: `number` \| ``null``  } \| ``null`` ; `results?`: ({ `__typename?`: ``"Location"`` ; `created?`: `string` \| ``null`` ; `dimension?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `type?`: `string` \| ``null``  } \| ``null`` \| `undefined`)[] \| ``null``  } \| ``null`` |

#### Defined in

[index.ts:193](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L193)

___

### QueryLocationsArgs

Ƭ **QueryLocationsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter?` | [`InputMaybe`](modules.md#inputmaybe)<[`FilterLocation`](modules.md#filterlocation)\> |
| `page?` | [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\> |

#### Defined in

[index.ts:148](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L148)

___

### QueryLocationsByIds

Ƭ **QueryLocationsByIds**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `locationsByIds?` | ({ `__typename?`: ``"Location"`` ; `created?`: `string` \| ``null`` ; `dimension?`: `string` \| ``null`` ; `id?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `type?`: `string` \| ``null``  } \| ``null`` \| `undefined`)[] \| ``null`` |

#### Defined in

[index.ts:200](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L200)

___

### QueryLocationsByIdsArgs

Ƭ **QueryLocationsByIdsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ids` | [`Scalars`](modules.md#scalars)[``"ID"``][] |

#### Defined in

[index.ts:154](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L154)

___

### QueryLocationsByIdsVariables

Ƭ **QueryLocationsByIdsVariables**: [`Exact`](modules.md#exact)<{ `ids`: [`Scalars`](modules.md#scalars)[``"ID"``][] \| [`Scalars`](modules.md#scalars)[``"ID"``]  }\>

#### Defined in

[index.ts:195](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L195)

___

### QueryLocationsVariables

Ƭ **QueryLocationsVariables**: [`Exact`](modules.md#exact)<{ `filter?`: [`InputMaybe`](modules.md#inputmaybe)<[`FilterLocation`](modules.md#filterlocation)\> ; `page?`: [`InputMaybe`](modules.md#inputmaybe)<[`Scalars`](modules.md#scalars)[``"Int"``]\>  }\>

#### Defined in

[index.ts:187](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L187)

___

### Requester

Ƭ **Requester**<`C`\>: <R, V\>(`doc`: `DocumentNode`, `vars?`: `V`, `options?`: `C`) => `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | {} |

#### Type declaration

▸ <`R`, `V`\>(`doc`, `vars?`, `options?`): `Promise`<`R`\>

##### Type parameters

| Name |
| :------ |
| `R` |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `DocumentNode` |
| `vars?` | `V` |
| `options?` | `C` |

##### Returns

`Promise`<`R`\>

#### Defined in

[index.ts:351](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L351)

___

### Scalars

Ƭ **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Boolean` | `boolean` |
| `Float` | `number` |
| `ID` | `string` |
| `Int` | `number` |
| `String` | `string` |

#### Defined in

[index.ts:9](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L9)

___

### Sdk

Ƭ **Sdk**: `ReturnType`<typeof [`getSdk`](modules.md#getsdk)\>

#### Defined in

[index.ts:383](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L383)

## Variables

### CharacterFieldsFragment

• **CharacterFieldsFragment**: `DocumentNode`

#### Defined in

[index.ts:232](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L232)

___

### EpisodeFieldsFragment

• **EpisodeFieldsFragment**: `DocumentNode`

#### Defined in

[index.ts:244](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L244)

___

### InfoFieldsFragment

• **InfoFieldsFragment**: `DocumentNode`

#### Defined in

[index.ts:262](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L262)

___

### LocationFieldsFragment

• **LocationFieldsFragment**: `DocumentNode`

#### Defined in

[index.ts:253](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L253)

___

### QueryCharacterDocument

• **QueryCharacterDocument**: `DocumentNode`

#### Defined in

[index.ts:270](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L270)

___

### QueryCharactersByIdsDocument

• **QueryCharactersByIdsDocument**: `DocumentNode`

#### Defined in

[index.ts:290](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L290)

___

### QueryCharactersDocument

• **QueryCharactersDocument**: `DocumentNode`

#### Defined in

[index.ts:277](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L277)

___

### QueryEpisodeDocument

• **QueryEpisodeDocument**: `DocumentNode`

#### Defined in

[index.ts:324](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L324)

___

### QueryEpisodesByIdsDocument

• **QueryEpisodesByIdsDocument**: `DocumentNode`

#### Defined in

[index.ts:344](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L344)

___

### QueryEpisodesDocument

• **QueryEpisodesDocument**: `DocumentNode`

#### Defined in

[index.ts:331](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L331)

___

### QueryLocationDocument

• **QueryLocationDocument**: `DocumentNode`

#### Defined in

[index.ts:297](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L297)

___

### QueryLocationsByIdsDocument

• **QueryLocationsByIdsDocument**: `DocumentNode`

#### Defined in

[index.ts:317](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L317)

___

### QueryLocationsDocument

• **QueryLocationsDocument**: `DocumentNode`

#### Defined in

[index.ts:304](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L304)

## Functions

### getSdk

▸ **getSdk**<`C`\>(`requester`): `Object`

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requester` | [`Requester`](modules.md#requester)<`C`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `QueryCharacter` | (`variables`: [`Exact`](modules.md#exact)<{ `id`: `string`  }\>, `options?`: `C`) => `Promise`<[`QueryCharacter`](modules.md#querycharacter)\> |
| `QueryCharacters` | (`variables?`: [`Exact`](modules.md#exact)<{ `filter?`: [`InputMaybe`](modules.md#inputmaybe)<[`FilterCharacter`](modules.md#filtercharacter)\> ; `page?`: [`InputMaybe`](modules.md#inputmaybe)<`number`\>  }\>, `options?`: `C`) => `Promise`<[`QueryCharacters`](modules.md#querycharacters)\> |
| `QueryCharactersByIds` | (`variables`: [`Exact`](modules.md#exact)<{ `ids`: `string` \| `string`[]  }\>, `options?`: `C`) => `Promise`<[`QueryCharactersByIds`](modules.md#querycharactersbyids)\> |
| `QueryEpisode` | (`variables`: [`Exact`](modules.md#exact)<{ `id`: `string`  }\>, `options?`: `C`) => `Promise`<[`QueryEpisode`](modules.md#queryepisode)\> |
| `QueryEpisodes` | (`variables?`: [`Exact`](modules.md#exact)<{ `filter?`: [`InputMaybe`](modules.md#inputmaybe)<[`FilterEpisode`](modules.md#filterepisode)\> ; `page?`: [`InputMaybe`](modules.md#inputmaybe)<`number`\>  }\>, `options?`: `C`) => `Promise`<[`QueryEpisodes`](modules.md#queryepisodes)\> |
| `QueryEpisodesByIds` | (`variables`: [`Exact`](modules.md#exact)<{ `ids`: `string` \| `string`[]  }\>, `options?`: `C`) => `Promise`<[`QueryEpisodesByIds`](modules.md#queryepisodesbyids)\> |
| `QueryLocation` | (`variables`: [`Exact`](modules.md#exact)<{ `id`: `string`  }\>, `options?`: `C`) => `Promise`<[`QueryLocation`](modules.md#querylocation)\> |
| `QueryLocations` | (`variables?`: [`Exact`](modules.md#exact)<{ `filter?`: [`InputMaybe`](modules.md#inputmaybe)<[`FilterLocation`](modules.md#filterlocation)\> ; `page?`: [`InputMaybe`](modules.md#inputmaybe)<`number`\>  }\>, `options?`: `C`) => `Promise`<[`QueryLocations`](modules.md#querylocations)\> |
| `QueryLocationsByIds` | (`variables`: [`Exact`](modules.md#exact)<{ `ids`: `string` \| `string`[]  }\>, `options?`: `C`) => `Promise`<[`QueryLocationsByIds`](modules.md#querylocationsbyids)\> |

#### Defined in

[index.ts:352](https://github.com/marcomafessolli/rick-and-morty-gql-files/blob/fa7423e/src/generated/index.ts#L352)
