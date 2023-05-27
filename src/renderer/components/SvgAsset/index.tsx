import { memo } from "react";

interface IProps {
  iconName:
    | "chevron-double-up"
    | "chevron-left"
    | "chevron-right"
    | "cog-8-tooth"
    | "heart-outline"
    | "heart"
    | "logo"
    | "lyric"
    | "magnifying-glass"
    | "minus"
    | "pause"
    | "play"
    | "playlist"
    | "repeat-song-1"
    | "repeat-song"
    | "shuffle"
    | "skip-left"
    | "skip-right"
    | "x-mark";
}
/**
 *
 * @param props
 * @returns
 */
function SvgAsset(props: IProps) {
  const Svg = require(`@/assets/icons/${props.iconName}.svg`);

  return <Svg.default></Svg.default>;
}

export default memo(SvgAsset, (prev, curr) => prev.iconName === curr.iconName);