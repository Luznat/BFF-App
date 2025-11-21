declare module "@expo/vector-icons" {
  import { Component } from "react";
  import { TextProps, StyleProp, TextStyle } from "react-native";

  export interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
  }

  export class Feather extends Component<IconProps> {}
  export class Ionicons extends Component<IconProps> {}
  export class MaterialIcons extends Component<IconProps> {}
  export class FontAwesome extends Component<IconProps> {}
}
