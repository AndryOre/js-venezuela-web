export enum CardVariant {
  primary = 'primary',
  secondary = 'secondary',
  discord = 'discord',
  instagram = 'instagram',
  twitter = 'twitter',
  twitch = 'twitch',
  linkedin = 'linkedin',
}

export const Variants: Record<CardVariant, string> = {
  [CardVariant.primary]: 'bg-[#F7DF1E] text-black',
  [CardVariant.secondary]: 'bg-white/10 border border-white/20 backdrop-blur-sm text-white',
  [CardVariant.discord]: 'bg-gradient-to-b from-[#636DE0] to-[#3842B0] text-white',
  [CardVariant.instagram]: 'bg-gradient-to-b from-[#BB00AD] to-[#F1000B] text-white',
  [CardVariant.twitter]: 'bg-gradient-to-b from-black to-[#38393A] text-white',
  [CardVariant.twitch]: 'bg-gradient-to-b from-[#9147FF] to-[#6837B2] text-white',
  [CardVariant.linkedin]: 'bg-gradient-to-b from-[#0453A3] to-[#3473B2] text-white',
};
