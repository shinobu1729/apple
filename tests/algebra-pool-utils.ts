import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/AlgebraPool/AlgebraPool"

export function createBurnEvent(
  owner: Address,
  bottomTick: i32,
  topTick: i32,
  liquidityAmount: BigInt,
  amount0: BigInt,
  amount1: BigInt
): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("bottomTick", ethereum.Value.fromI32(bottomTick))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("topTick", ethereum.Value.fromI32(topTick))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityAmount",
      ethereum.Value.fromUnsignedBigInt(liquidityAmount)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )

  return burnEvent
}

export function createCollectEvent(
  owner: Address,
  recipient: Address,
  bottomTick: i32,
  topTick: i32,
  amount0: BigInt,
  amount1: BigInt
): Collect {
  let collectEvent = changetype<Collect>(newMockEvent())

  collectEvent.parameters = new Array()

  collectEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  collectEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  collectEvent.parameters.push(
    new ethereum.EventParam("bottomTick", ethereum.Value.fromI32(bottomTick))
  )
  collectEvent.parameters.push(
    new ethereum.EventParam("topTick", ethereum.Value.fromI32(topTick))
  )
  collectEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  collectEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )

  return collectEvent
}

export function createCommunityFeeEvent(
  communityFee0New: i32,
  communityFee1New: i32
): CommunityFee {
  let communityFeeEvent = changetype<CommunityFee>(newMockEvent())

  communityFeeEvent.parameters = new Array()

  communityFeeEvent.parameters.push(
    new ethereum.EventParam(
      "communityFee0New",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(communityFee0New))
    )
  )
  communityFeeEvent.parameters.push(
    new ethereum.EventParam(
      "communityFee1New",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(communityFee1New))
    )
  )

  return communityFeeEvent
}

export function createFeeEvent(feeZto: i32, feeOtz: i32): Fee {
  let feeEvent = changetype<Fee>(newMockEvent())

  feeEvent.parameters = new Array()

  feeEvent.parameters.push(
    new ethereum.EventParam(
      "feeZto",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(feeZto))
    )
  )
  feeEvent.parameters.push(
    new ethereum.EventParam(
      "feeOtz",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(feeOtz))
    )
  )

  return feeEvent
}

export function createFlashEvent(
  sender: Address,
  recipient: Address,
  amount0: BigInt,
  amount1: BigInt,
  paid0: BigInt,
  paid1: BigInt
): Flash {
  let flashEvent = changetype<Flash>(newMockEvent())

  flashEvent.parameters = new Array()

  flashEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  flashEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  flashEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  flashEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )
  flashEvent.parameters.push(
    new ethereum.EventParam("paid0", ethereum.Value.fromUnsignedBigInt(paid0))
  )
  flashEvent.parameters.push(
    new ethereum.EventParam("paid1", ethereum.Value.fromUnsignedBigInt(paid1))
  )

  return flashEvent
}

export function createIncentiveEvent(virtualPoolAddress: Address): Incentive {
  let incentiveEvent = changetype<Incentive>(newMockEvent())

  incentiveEvent.parameters = new Array()

  incentiveEvent.parameters.push(
    new ethereum.EventParam(
      "virtualPoolAddress",
      ethereum.Value.fromAddress(virtualPoolAddress)
    )
  )

  return incentiveEvent
}

export function createInitializeEvent(price: BigInt, tick: i32): Initialize {
  let initializeEvent = changetype<Initialize>(newMockEvent())

  initializeEvent.parameters = new Array()

  initializeEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("tick", ethereum.Value.fromI32(tick))
  )

  return initializeEvent
}

export function createLiquidityCooldownEvent(
  liquidityCooldown: BigInt
): LiquidityCooldown {
  let liquidityCooldownEvent = changetype<LiquidityCooldown>(newMockEvent())

  liquidityCooldownEvent.parameters = new Array()

  liquidityCooldownEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityCooldown",
      ethereum.Value.fromUnsignedBigInt(liquidityCooldown)
    )
  )

  return liquidityCooldownEvent
}

export function createMintEvent(
  sender: Address,
  owner: Address,
  bottomTick: i32,
  topTick: i32,
  liquidityAmount: BigInt,
  amount0: BigInt,
  amount1: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("bottomTick", ethereum.Value.fromI32(bottomTick))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("topTick", ethereum.Value.fromI32(topTick))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityAmount",
      ethereum.Value.fromUnsignedBigInt(liquidityAmount)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )

  return mintEvent
}

export function createSwapEvent(
  sender: Address,
  recipient: Address,
  amount0: BigInt,
  amount1: BigInt,
  price: BigInt,
  liquidity: BigInt,
  tick: i32
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("amount0", ethereum.Value.fromSignedBigInt(amount0))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("amount1", ethereum.Value.fromSignedBigInt(amount1))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tick", ethereum.Value.fromI32(tick))
  )

  return swapEvent
}

export function createTickSpacingEvent(newTickSpacing: i32): TickSpacing {
  let tickSpacingEvent = changetype<TickSpacing>(newMockEvent())

  tickSpacingEvent.parameters = new Array()

  tickSpacingEvent.parameters.push(
    new ethereum.EventParam(
      "newTickSpacing",
      ethereum.Value.fromI32(newTickSpacing)
    )
  )

  return tickSpacingEvent
}
