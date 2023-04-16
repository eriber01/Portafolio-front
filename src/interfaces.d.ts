export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export interface StateData {
  state: State;
  onChange: (path: string, value: string | boolean) => void;
}

export interface State {
  openMenu: boolean;
  viewActive: string;
}
