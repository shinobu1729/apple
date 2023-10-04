import {
  Burn as BurnEvent,
  Collect as CollectEvent,
  CommunityFee as CommunityFeeEvent,
  Fee as FeeEvent,
  Flash as FlashEvent,
  Incentive as IncentiveEvent,
  Initialize as InitializeEvent,
  LiquidityCooldown as LiquidityCooldownEvent,
  Mint as MintEvent,
  Swap as SwapEvent,
  TickSpacing as TickSpacingEvent
} from "../generated/AlgebraPool/AlgebraPool"
import {
  Burn,
  Collect,
  CommunityFee,
  Fee,
  Flash,
  Incentive,
  Initialize,
  LiquidityCooldown,
  Mint,
  Swap,
  TickSpacing
} from "../generated/schema"

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.bottomTick = event.params.bottomTick
  entity.topTick = event.params.topTick
  entity.liquidityAmount = event.params.liquidityAmount
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollect(event: CollectEvent): void {
  let entity = new Collect(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.recipient = event.params.recipient
  entity.bottomTick = event.params.bottomTick
  entity.topTick = event.params.topTick
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCommunityFee(event: CommunityFeeEvent): void {
  let entity = new CommunityFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.communityFee0New = event.params.communityFee0New
  entity.communityFee1New = event.params.communityFee1New

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFee(event: FeeEvent): void {
  let entity = new Fee(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.feeZto = event.params.feeZto
  entity.feeOtz = event.params.feeOtz

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlash(event: FlashEvent): void {
  let entity = new Flash(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.paid0 = event.params.paid0
  entity.paid1 = event.params.paid1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncentive(event: IncentiveEvent): void {
  let entity = new Incentive(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.virtualPoolAddress = event.params.virtualPoolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialize(event: InitializeEvent): void {
  let entity = new Initialize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.price = event.params.price
  entity.tick = event.params.tick

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityCooldown(event: LiquidityCooldownEvent): void {
  let entity = new LiquidityCooldown(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liquidityCooldown = event.params.liquidityCooldown

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.bottomTick = event.params.bottomTick
  entity.topTick = event.params.topTick
  entity.liquidityAmount = event.params.liquidityAmount
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.price = event.params.price
  entity.liquidity = event.params.liquidity
  entity.tick = event.params.tick

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTickSpacing(event: TickSpacingEvent): void {
  let entity = new TickSpacing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newTickSpacing = event.params.newTickSpacing

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
