export interface Gravatar {
    hash: string;
}

export interface Avatar {
    gravatar: Gravatar;
}

export interface AvatarResponse {
    avatar: Avatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}