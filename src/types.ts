export type AssetId = {
    bits: string
}

export type FixedAssetVec5 = {
    item0: AssetId
    item1: AssetId
    item2: AssetId
    item3: AssetId
    item4: AssetId
    len: bigint
}

export type Event = {
    blockHeight: number
    chainId: number
    contractId: { value: string }
    data: any
    receiptIndex: number
    receiptType: any
    time: number
    transactionId: string
}
