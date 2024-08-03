export interface GeneralI {
    userData: UserData;
    snackBar: SnackBarI;
    theme: Theme;
  }
  
  export interface Theme {
    mode:string;
  }
  export interface UserData {
    tokenType: string;
    expiresIn: number;
    token: string;
    isAuthenticated: boolean;
  }
  
  export interface SnackBarI {
    severity: string;
    message: string;
    open: boolean;
  }
  