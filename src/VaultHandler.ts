import {
    ClosePositionEntity,
    CollectMarginFeeEntity,
    DecreasePositionEntity,
    IncreasePositionEntity,
    LiquidatePositionEntity,
    SwapEntity,
    UpdatePositionEntity,
    VaultContract,
} from "generated"
import { formatAccountToString, formatSignedAmount, generateIdFromEvent } from "./utils"

VaultContract.IncreasePosition.loader(({ event, context }) => {})
VaultContract.IncreasePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const increasePositionEntity = {
        id,
        key: data.key,
        account: formatAccountToString(data.account),
        collateralToken: data.collateral_asset.bits,
        indexToken: data.index_asset.bits,
        collateralDelta: data.collateral_delta,
        sizeDelta: data.size_delta,
        isLong: data.is_long,
        price: data.price,
        fee: data.fee,

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as IncreasePositionEntity

    context.IncreasePosition.set(increasePositionEntity)
})

VaultContract.DecreasePosition.loader(({ event, context }) => {})
VaultContract.DecreasePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const createDecreasePositionEntity = {
        id,
        key: data.key,
        account: formatAccountToString(data.account),
        collateralToken: data.collateral_asset.bits,
        indexToken: data.index_asset.bits,
        collateralDelta: data.collateral_delta,
        sizeDelta: data.size_delta,
        isLong: data.is_long,
        price: data.price,
        fee: data.fee,

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as DecreasePositionEntity

    context.DecreasePosition.set(createDecreasePositionEntity)
})

VaultContract.UpdatePosition.loader(({ event, context }) => {})
VaultContract.UpdatePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const createUpdatePositionEntity = {
        id,
        key: data.key,
        size: data.size,
        collateral: data.collateral,
        averagePrice: data.average_price,
        entryFundingRate: data.entry_funding_rate,
        reserveAmount: data.reserve_amount,
        realisedPnl: formatSignedAmount(data.realized_pnl),

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as UpdatePositionEntity

    context.UpdatePosition.set(createUpdatePositionEntity)
})

VaultContract.ClosePosition.loader(({ event, context }) => {})
VaultContract.ClosePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const createClosePositionEntity = {
        id,
        key: data.key,
        size: data.size,
        collateral: data.collateral,
        averagePrice: data.average_price,
        entryFundingRate: data.entry_funding_rate,
        reserveAmount: data.reserve_amount,
        realisedPnl: formatSignedAmount(data.realized_pnl),

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as ClosePositionEntity

    context.ClosePosition.set(createClosePositionEntity)
})

VaultContract.LiquidatePosition.loader(({ event, context }) => {})
VaultContract.LiquidatePosition.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const createLiquidatePositionEntity = {
        id,
        key: data.key,
        account: formatAccountToString(data.account),
        collateralToken: data.collateral_asset.bits,
        indexToken: data.index_asset.bits,
        isLong: data.is_long,
        size: data.size,
        collateral: data.collateral,
        reserveAmount: data.reserve_amount,
        realisedPnl: formatSignedAmount(data.realized_pnl),
        markPrice: data.mark_price,

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as LiquidatePositionEntity

    context.LiquidatePosition.set(createLiquidatePositionEntity)
})

VaultContract.CollectMarginFees.loader(({ event, context }) => {})
VaultContract.CollectMarginFees.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const createCollectMarginFeesEntity = {
        token: data.asset.bits,
        feeTokens: data.fee_assets,
        feeUsd: data.fee_usd,

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as CollectMarginFeeEntity

    context.CollectMarginFee.set(createCollectMarginFeesEntity)
})

VaultContract.Swap.loader(({ event, context }) => {})
VaultContract.Swap.handler(({ event, context }) => {
    const id = generateIdFromEvent(event)

    const data = event.data
    const createSwapEntity = {
        account: formatAccountToString(data.account),
        tokenIn: data.asset_in.bits,
        tokenOut: data.asset_out.bits,
        amountIn: data.amount_in,
        amountOut: data.amount_out,
        amountOutAfterFees: data.amount_out_after_fees,
        feeBasisPoints: data.fee_basis_points,

        // this doesn't refer to the "transactionId", but rather the "id" of the Transaction entity object
        transaction_id: event.transactionId,
        timestamp: event.time,
    } as SwapEntity

    context.Swap.set(createSwapEntity)
})
