import crypto from "crypto"
import { TransactionEntity } from "generated"
import { Event, FixedAssetVec5, AssetId } from "./types"

export function tai64ToDate(tai64: bigint) {
    const dateStr = ((tai64 - BigInt(Math.pow(2, 62)) - BigInt(10)) * 1000n).toString()
    return new Date(+dateStr).toISOString()
}

export function generateIdFromEvent(event: Event) {
    const val = event.transactionId + ":" + event.time.toString()
    return crypto.createHash("sha256").update(val).digest("hex")
}

export function createTxIfNotExists(event: Event, context: any) {
    let id = generateIdFromEvent(event)
    let txEntity = context.TransactionEntity.get(id)
    if (txEntity) {
    }
}

export function fixedAssetVec5ToArray(vec: FixedAssetVec5): AssetId[] {
    switch (Number(vec.len)) {
        case 0:
            return []
        case 1:
            return [vec.item0]
        case 2:
            return [vec.item0, vec.item1]
        case 3:
            return [vec.item0, vec.item1, vec.item2]
        case 4:
            return [vec.item0, vec.item1, vec.item2, vec.item3]
        case 5:
            return [vec.item0, vec.item1, vec.item3, vec.item3, vec.item4]
        default:
            throw new Error("Invalid fixedAssetVec5")
    }
}

export function formatAccountToString(account: { value: string; is_contract: boolean }): string {
    return `${account.value}:${account.is_contract}`
}

export function formatSignedAmount(amount: { value: bigint; is_neg: boolean }) {
    return `${amount.is_neg ? "-" : ""}${amount.value.toString()}`
}
