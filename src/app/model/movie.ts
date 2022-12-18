import { Title } from "@angular/platform-browser";

export interface Movie {
    dates: DateConstructor;
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}

export interface ResultsEntity {
    name: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids?: (number)[] | null;
    id: null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}