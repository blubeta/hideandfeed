const depositFees = {
  Coinbase: {
    ccPercent: 0.0399,
    achPercent: 0.0149,
    coinPercent: 0.0
  }
};

let tradingFees = {
  Bittrex: {
    percent: 0.025
  }
};

const withdrawalFees = {
  Coinbase: {
    percent: 0.0149
  },
  Bittrex: {
    USDT: 0.00,
    BTC: 0.001,
    LTC: 0.01,
    DOGE: 2.0,
    VTC: 0.02,
    PPC: 0.02,
    FTC: 0.2,
    RDD: 2.0,
    NXT: 2.0,
    DASH: 0.002,
    POT: 0.002,
    BLK: 0.02,
    EMC2: 0.2,
    XMY: 0.2,
    AUR: 0.002,
    EFL: 0.2,
    GLD: 0.0002,
    SLR: 0.2,
    PTC: 0.002,
    GRS: 0.2,
    NLG: 0.2,
    RBY: 0.02,
    XWC: 0.2,
    MONA: 0.2,
    THC: 0.2,
    ENRG: 0.2,
    ERC: 0.2,
    VRC: 0.0002,
    CURE: 0.0002,
    XMR: 0.04,
    CLOAK: 0.02,
    START: 0.02,
    KORE: 0.02,
    XDN: 0.01,
    TRUST: 0.02,
    NAV: 0.2,
    XST: 0.02,
    BTCD: 0.02,
    VIA: 0.2,
    PINK: 0.2,
    IOC: 0.2,
    CANN: 0.2,
    SYS: 0.0002,
    NEOS: 0.02,
    DGB: 0.2,
    BURST: 2.0,
    EXCL: 0.2,
    SWIFT: 2.0,
    DOPE: 0.002,
    BLOCK: 0.02,
    ABY: 0.2,
    BYC: 0.02,
    XMG: 0.0002,
    BLITZ: 0.02,
    BAY: 0.2,
    FAIR: 0.02,
    SPR: 0.2,
    VTR: 0.02,
    XRP: 1.0,
    GAME: 0.2,
    COVAL: 200.0,
    NXS: 0.2,
    XCP: 0.2,
    BITB: 0.2,
    GEO: 0.002,
    FLDC: 150.0,
    GRC: 0.2,
    FLO: 0.2,
    NBT: 0.02,
    MUE: 0.02,
    XEM: 4.0,
    CLAM: 0.2,
    DMD: 0.002,
    GAM: 0.3,
    SPHR: 0.002,
    OK: 0.2,
    SNRG: 0.002,
    PKB: 0.02,
    CPC: 0.2,
    AEON: 0.1,
    ETH: 0.006,
    GCR: 0.02,
    TX: 0.02,
    BCY: 5.0,
    EXP: 0.01,
    INFX: 0.1,
    OMNI: 0.1,
    AMP: 5.0,
    AGRS: 5.0,
    XLM: 0.01,
    BTC: 0.001,
    CLUB: 0.02,
    VOX: 0.1,
    EMC: 0.02,
    FCT: 0.01,
    MAID: 2.0,
    EGC: 0.2,
    SLS: 0.002,
    RADS: 0.2,
    DCR: 0.03,
    BSD: 0.002,
    XVG: 0.2,
    PIVX: 0.02,
    XVC: 0.002,
    MEME: 0.02,
    STEEM: 0.01,
    "2GIVE": 0.01,
    LSK: 0.1,
    PDC: 5.0,
    BRK: 0.02,
    WAVES: 0.001,
    RISE: 0.1,
    LBC: 0.02,
    SBD: 0.01,
    BRX: 0.02,
    ETC: 0.01,
    STRAT: 0.2,
    UNB: 0.2,
    SYNX: 0.2,
    EBST: 0.1,
    VRM: 0.4,
    SEQ: 0.2,
    REP: 0.1,
    SHIFT: 0.01,
    ARDR: 2.0,
    XZC: 0.02,
    NEO: 0.025,
    ZEC: 0.005,
    ZCL: 0.002,
    IOP: 0.2,
    GOLOS: 0.01,
    UBQ: 0.01,
    KMD: 0.002,
    GBG: 0.01,
    SIB: 0.2,
    ION: 0.2,
    LMC: 0.2,
    QWARK: 0.1,
    CRW: 0.02,
    SWT: 1.8,
    MLN: 0.035,
    ARK: 0.1,
    DYN: 0.02,
    TKS: 0.1,
    MUSIC: 0.01,
    DTB: 5.0,
    INCNT: 0.1,
    GBYTE: 0.002,
    GNT: 9.0,
    NXC: 13.0,
    EDG: 3.5,
    LGD: 4.0,
    TRST: 7.0,
    WINGS: 4.0,
    RLC: 3.5,
    GNO: 0.02,
    GUP: 7.0,
    LUN: 0.15,
    APX: 0.1,
    HMQ: 16.0,
    ANT: 1.3,
    SC: 0.1,
    BAT: 10.0,
    ZEN: 0.002,
    "1ST": 4.5,
    QRL: 2.5,
    CRB: 8.0,
    PTOY: 14.0,
    MYST: 2.5,
    CFI: 27.0,
    BNT: 0.85,
    NMR: 0.15,
    SNT: 20.0,
    DCT: 0.1,
    XEL: 0.2,
    MCO: 0.5,
    ADT: 43.0,
    FUN: 49.0,
    PAY: 2.0,
    STORJ: 3.0,
    ADX: 3.0,
    OMG: 0.35,
    CVC: 8.0,
    PART: 0.1,
    QTUM: 0.01,
    BCC: 0.001,
    DNT: 29.0,
    ADA: 0.2,
    MANA: 36.0,
    SALT: 0.6,
    TIX: 5.0,
    RCN: 16.0,
    VIB: 13.0,
    MER: 0.1,
    POWR: 5.0,
    BTG: 0.001,
    ENG: 1.0,
    UKG: 5.0
  }
};

let fees = {
  depositFees: depositFees,
  withdrawalFees: withdrawalFees,
  tradingFees: tradingFees
};

export default fees;
