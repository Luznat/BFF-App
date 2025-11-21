import React from "react";
import { View } from "react-native";
import Svg, { G, Polygon } from "react-native-svg";

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 120,
  height = 120,
  color = "#1D1D1B",
}) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 1080 1080">
        <G>
          <Polygon
            points="99.27,425.82 96.46,560.92 171.67,697.39 204.17,705.18 420.36,740.84 394.7,661.23"
            fill={color}
          />
          <Polygon
            points="292.12,972.98 310.5,956.81 447.06,823.64 444.96,817.13 184.45,912.46 221.13,963.32"
            fill={color}
          />
          <Polygon
            points="220.23,871.87 245,864.62 245,864.63 437.55,794.15 429.47,769.06 112.82,716.79 138.8,810.16"
            fill={color}
          />
          <Polygon
            points="174.99,444.69 213.37,479.36 390.96,620.83 446.48,548.71 185.58,53.22 135.17,218.9"
            fill={color}
          />
          <Polygon
            points="635.07,817.13 632.97,823.64 769.79,957.08 769.79,957.08 787.91,972.98 858.89,963.32 895.56,912.46"
            fill={color}
          />
          <Polygon
            points="650.56,769.05 642.47,794.15 835.44,864.75 859.78,871.87 941.21,810.16 967.22,716.79"
            fill={color}
          />
          <Polygon
            points="980.74,425.82 685.32,661.23 659.65,740.84 876.44,705.06 908.34,697.39 983.54,560.92"
            fill={color}
          />
          <Polygon
            points="440.36,610.03 540.03,739.59 639.64,610.03 540.03,480.41"
            fill={color}
          />
          <Polygon
            points="689.11,620.78 867.04,479.03 905,444.69 944.85,218.9 894.42,53.22 633.53,548.69"
            fill={color}
          />
          <Polygon
            points="665.18,638.46 658.3,629.51 540.03,783.31 421.7,629.5 414.81,638.46 540.03,1026.78"
            fill={color}
          />
        </G>
      </Svg>
    </View>
  );
};
