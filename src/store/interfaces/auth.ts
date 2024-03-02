export interface AuthRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface AuthState {
    succeeded: boolean;
    token: string | null;
    user: User | null;
}

export interface User {
    userId: string;
    personId: number;
    email: string;
    firstName: string;
    lastName: string;
    profileImage: string;
}