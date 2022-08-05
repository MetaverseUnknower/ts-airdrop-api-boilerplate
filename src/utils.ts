// allow requests from localhost
export const TESTS_ENABLED = true

// We want all signatures to be "current". We consider "current" to be the current time,
// with a 10 minute tolerance to account for network delays and possibly unsynched clocks
export const VALID_SIGNATURE_TOLERANCE_INTERVAL_MS = 10 * 1000 * 60

// number of parcels to use as margin of error when comparing coordinates
export const MARGIN_OF_ERROR = 2

// reject any request from these IPs
export const denyListedIPS = [
  `14.161.47.252`,
  `170.233.124.66`,
  `2001:818:db0f:7500:3576:469a:760a:8ded`,
  `85.158.181.20`,
  `185.39.220.232`,
  `178.250.10.230`,
  `185.39.220.156`,
]

export type Metadata = {
  origin?: string
  sceneId?: string
  parcel?: string
  tld?: string
  network?: string
  isGuest?: boolean
  realm: {
    domain?: string
    catalystName?: string
    layer?: string
    lighthouseVersion?: string
  }
}

export type PeerResponse = {
  ok: boolean
  peers: {
    id: string
    address: string
    lastPing: number
    parcel: [number, number]
    position: [number, number, number]
  }[]
}

export const itemsHelper = {
  colors: [
      "#cf2038, #9caa77",
      "#509943, #a1ce56",
      "#122246, #66CCE9",
      "#ef472b, #ab9a32",
      "#b68499, #89c1e7",
      "#c54827, #d12627",
      "#649948, #4e68b1",
      "#fdb935, #ce2027",
      "#51bdbb, #5b8859",
      "#ff3f3d, #6a8739",
      "#d835bc, #8f2544",
      "#e96863, #ea5988",
      "#ffb24c, #b0da9f",
      "#9d141a, #ffef41",
      "#c41612, #5f6bb2",
      "#354474, #ff7b00",
      "#7641cf, #cd0ea2",
      "#c41612, #5f6bb2",
      "#90438a, #f27a1c",
      "#467407, #9b7755",
      "#5baca0, #855a91",
      "#fde188, #f0521f",
      "#f690db, #f690db",
      "#b9d1e8, #4f80a4",
      "#df2f2f, #8a4884",
      "#f7b523, #d58126",
      "#e5f463, #ce4fbe",
  ],
  textures: ["8-Bit Tree", "Spherical Topiary", "Twisty Curvy Tree", "Earth", "Wind", "Fire", "Water", "Mountain", "Starfish", "Sand Dollar", "Seaweed", "Sea Urchin", "Koi"],
  styles: ["Anime", "Graffiti", "Water Color", "Wooden", "Stone", "Floral", "Splatter / Modern Art Painting", "Classic Oil Painting", "Expressionist Painting"],
  animals: ["Tiger", "Owl", "Octopus"]
};
