import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Burn } from "../generated/schema"
import { Burn as BurnEvent } from "../generated/AlgebraPool/AlgebraPool"
import { handleBurn } from "../src/algebra-pool"
import { createBurnEvent } from "./algebra-pool-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let bottomTick = 123
    let topTick = 123
    let liquidityAmount = BigInt.fromI32(234)
    let amount0 = BigInt.fromI32(234)
    let amount1 = BigInt.fromI32(234)
    let newBurnEvent = createBurnEvent(
      owner,
      bottomTick,
      topTick,
      liquidityAmount,
      amount0,
      amount1
    )
    handleBurn(newBurnEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Burn created and stored", () => {
    assert.entityCount("Burn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bottomTick",
      "123"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "topTick",
      "123"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidityAmount",
      "234"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount0",
      "234"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount1",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
