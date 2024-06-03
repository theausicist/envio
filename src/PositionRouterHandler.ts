import { CreateDecreasePositionEntity, CreateIncreasePositionEntity, PositionRouterContract } from "generated"
import { fixedAssetVec5ToArray, formatAccountToString, generateIdFromEvent } from "./utils"

PositionRouterContract.CreateIncreasePosition.loader(({ event, context }) => {})
PositionRouterContract.CreateIncreasePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const path = fixedAssetVec5ToArray(data.path)
    const createIncreasePositionEntity = {
        id,
        account: formatAccountToString(data.account),
        collateralToken: path[path.length - 1].bits,
        indexToken: data.index_asset.bits,
        sizeDelta: data.size_delta,
        amountIn: data.amount_in,
        isLong: data.is_long,
        acceptablePrice: data.acceptable_price,
        executionFee: data.execution_fee,
        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity ob
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as CreateIncreasePositionEntity

    context.CreateIncreasePosition.set(createIncreasePositionEntity)
})

PositionRouterContract.CreateDecreasePosition.loader(({ event, context }) => {})
PositionRouterContract.CreateDecreasePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const path = fixedAssetVec5ToArray(data.path)
    const createDecreasePositionEntity = {
        id,
        account: formatAccountToString(data.account),
        collateralToken: path[path.length - 1].bits,
        indexToken: data.index_asset.bits,
        sizeDelta: data.size_delta,
        isLong: data.is_long,
        acceptablePrice: data.acceptable_price,
        executionFee: data.execution_fee,
        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity ob
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as CreateDecreasePositionEntity

    context.CreateDecreasePosition.set(createDecreasePositionEntity)
})
