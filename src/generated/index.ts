import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  __typename?: 'Character';
  created?: Maybe<Scalars['String']>;
  episode: Array<Maybe<Episode>>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  origin?: Maybe<Location>;
  species?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']>;
  characters: Array<Maybe<Character>>;
  created?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  created?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  residents: Array<Maybe<Character>>;
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryCharacterVariables = Exact<{
  id: Scalars['ID'];
}>;


export type QueryCharacter = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, status?: string | null | undefined, species?: string | null | undefined, type?: string | null | undefined, gender?: string | null | undefined, image?: string | null | undefined, created?: string | null | undefined } | null | undefined };

export type QueryCharactersVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterCharacter>;
}>;


export type QueryCharacters = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null | undefined, pages?: number | null | undefined, next?: number | null | undefined, prev?: number | null | undefined } | null | undefined, results?: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, status?: string | null | undefined, species?: string | null | undefined, type?: string | null | undefined, gender?: string | null | undefined, image?: string | null | undefined, created?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type QueryCharactersByIdsVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type QueryCharactersByIds = { __typename?: 'Query', charactersByIds?: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, status?: string | null | undefined, species?: string | null | undefined, type?: string | null | undefined, gender?: string | null | undefined, image?: string | null | undefined, created?: string | null | undefined } | null | undefined> | null | undefined };

export type QueryLocationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type QueryLocation = { __typename?: 'Query', location?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined, created?: string | null | undefined } | null | undefined };

export type QueryLocationsVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterLocation>;
}>;


export type QueryLocations = { __typename?: 'Query', locations?: { __typename?: 'Locations', info?: { __typename?: 'Info', count?: number | null | undefined, pages?: number | null | undefined, next?: number | null | undefined, prev?: number | null | undefined } | null | undefined, results?: Array<{ __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined, created?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type QueryLocationsByIdsVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type QueryLocationsByIds = { __typename?: 'Query', locationsByIds?: Array<{ __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined, created?: string | null | undefined } | null | undefined> | null | undefined };

export type QueryEpisodeVariables = Exact<{
  id: Scalars['ID'];
}>;


export type QueryEpisode = { __typename?: 'Query', episode?: { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined, created?: string | null | undefined } | null | undefined };

export type QueryEpisodesVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterEpisode>;
}>;


export type QueryEpisodes = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', info?: { __typename?: 'Info', count?: number | null | undefined, pages?: number | null | undefined, next?: number | null | undefined, prev?: number | null | undefined } | null | undefined, results?: Array<{ __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined, created?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type QueryEpisodesByIdsVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type QueryEpisodesByIds = { __typename?: 'Query', episodesByIds?: Array<{ __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined, created?: string | null | undefined } | null | undefined> | null | undefined };

export type CharacterFieldsFragment = { __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, status?: string | null | undefined, species?: string | null | undefined, type?: string | null | undefined, gender?: string | null | undefined, image?: string | null | undefined, created?: string | null | undefined };

export type EpisodeFieldsFragment = { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined, created?: string | null | undefined };

export type LocationFieldsFragment = { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined, created?: string | null | undefined };

export type InfoFieldsFragment = { __typename?: 'Info', count?: number | null | undefined, pages?: number | null | undefined, next?: number | null | undefined, prev?: number | null | undefined };

export const CharacterFieldsFragment = gql`
    fragment CharacterFieldsFragment on Character {
  id
  name
  status
  species
  type
  gender
  image
  created
}
    `;
export const EpisodeFieldsFragment = gql`
    fragment EpisodeFieldsFragment on Episode {
  id
  name
  air_date
  episode
  created
}
    `;
export const LocationFieldsFragment = gql`
    fragment LocationFieldsFragment on Location {
  id
  name
  type
  dimension
  created
}
    `;
export const InfoFieldsFragment = gql`
    fragment InfoFieldsFragment on Info {
  count
  pages
  next
  prev
}
    `;
export const QueryCharacterDocument = gql`
    query QueryCharacter($id: ID!) {
  character(id: $id) {
    ...CharacterFieldsFragment
  }
}
    ${CharacterFieldsFragment}`;
export const QueryCharactersDocument = gql`
    query QueryCharacters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      ...InfoFieldsFragment
    }
    results {
      ...CharacterFieldsFragment
    }
  }
}
    ${InfoFieldsFragment}
${CharacterFieldsFragment}`;
export const QueryCharactersByIdsDocument = gql`
    query QueryCharactersByIds($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    ...CharacterFieldsFragment
  }
}
    ${CharacterFieldsFragment}`;
export const QueryLocationDocument = gql`
    query QueryLocation($id: ID!) {
  location(id: $id) {
    ...LocationFieldsFragment
  }
}
    ${LocationFieldsFragment}`;
export const QueryLocationsDocument = gql`
    query QueryLocations($page: Int, $filter: FilterLocation) {
  locations(page: $page, filter: $filter) {
    info {
      ...InfoFieldsFragment
    }
    results {
      ...LocationFieldsFragment
    }
  }
}
    ${InfoFieldsFragment}
${LocationFieldsFragment}`;
export const QueryLocationsByIdsDocument = gql`
    query QueryLocationsByIds($ids: [ID!]!) {
  locationsByIds(ids: $ids) {
    ...LocationFieldsFragment
  }
}
    ${LocationFieldsFragment}`;
export const QueryEpisodeDocument = gql`
    query QueryEpisode($id: ID!) {
  episode(id: $id) {
    ...EpisodeFieldsFragment
  }
}
    ${EpisodeFieldsFragment}`;
export const QueryEpisodesDocument = gql`
    query QueryEpisodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    info {
      ...InfoFieldsFragment
    }
    results {
      ...EpisodeFieldsFragment
    }
  }
}
    ${InfoFieldsFragment}
${EpisodeFieldsFragment}`;
export const QueryEpisodesByIdsDocument = gql`
    query QueryEpisodesByIds($ids: [ID!]!) {
  episodesByIds(ids: $ids) {
    ...EpisodeFieldsFragment
  }
}
    ${EpisodeFieldsFragment}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    QueryCharacter(variables: QueryCharacterVariables, options?: C): Promise<QueryCharacter> {
      return requester<QueryCharacter, QueryCharacterVariables>(QueryCharacterDocument, variables, options);
    },
    QueryCharacters(variables?: QueryCharactersVariables, options?: C): Promise<QueryCharacters> {
      return requester<QueryCharacters, QueryCharactersVariables>(QueryCharactersDocument, variables, options);
    },
    QueryCharactersByIds(variables: QueryCharactersByIdsVariables, options?: C): Promise<QueryCharactersByIds> {
      return requester<QueryCharactersByIds, QueryCharactersByIdsVariables>(QueryCharactersByIdsDocument, variables, options);
    },
    QueryLocation(variables: QueryLocationVariables, options?: C): Promise<QueryLocation> {
      return requester<QueryLocation, QueryLocationVariables>(QueryLocationDocument, variables, options);
    },
    QueryLocations(variables?: QueryLocationsVariables, options?: C): Promise<QueryLocations> {
      return requester<QueryLocations, QueryLocationsVariables>(QueryLocationsDocument, variables, options);
    },
    QueryLocationsByIds(variables: QueryLocationsByIdsVariables, options?: C): Promise<QueryLocationsByIds> {
      return requester<QueryLocationsByIds, QueryLocationsByIdsVariables>(QueryLocationsByIdsDocument, variables, options);
    },
    QueryEpisode(variables: QueryEpisodeVariables, options?: C): Promise<QueryEpisode> {
      return requester<QueryEpisode, QueryEpisodeVariables>(QueryEpisodeDocument, variables, options);
    },
    QueryEpisodes(variables?: QueryEpisodesVariables, options?: C): Promise<QueryEpisodes> {
      return requester<QueryEpisodes, QueryEpisodesVariables>(QueryEpisodesDocument, variables, options);
    },
    QueryEpisodesByIds(variables: QueryEpisodesByIdsVariables, options?: C): Promise<QueryEpisodesByIds> {
      return requester<QueryEpisodesByIds, QueryEpisodesByIdsVariables>(QueryEpisodesByIdsDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
// Generated on 2021-12-17T02:42:05-03:00
