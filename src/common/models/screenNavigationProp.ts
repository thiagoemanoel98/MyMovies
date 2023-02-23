export interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
  goBack: () => void;
}
