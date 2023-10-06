import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Action } from "../generated/schema"
import { Action as ActionEvent } from "../generated/OrangeVaultV1/OrangeVaultV1"
import { handleAction } from "../src/orange-vault-v-1"
import { createActionEvent } from "./orange-vault-v-1-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let actionType = 123
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let collateralAmount0 = BigInt.fromI32(234)
    let debtAmount1 = BigInt.fromI32(234)
    let liquidityAmount0 = BigInt.fromI32(234)
    let liquidityAmount1 = BigInt.fromI32(234)
    let accruedFees0 = BigInt.fromI32(234)
    let accruedFees1 = BigInt.fromI32(234)
    let vaultAmount0 = BigInt.fromI32(234)
    let vaultAmount1 = BigInt.fromI32(234)
    let totalAssets = BigInt.fromI32(234)
    let totalSupply = BigInt.fromI32(234)
    let newActionEvent = createActionEvent(
      actionType,
      caller,
      collateralAmount0,
      debtAmount1,
      liquidityAmount0,
      liquidityAmount1,
      accruedFees0,
      accruedFees1,
      vaultAmount0,
      vaultAmount1,
      totalAssets,
      totalSupply
    )
    handleAction(newActionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Action created and stored", () => {
    assert.entityCount("Action", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "actionType",
      "123"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collateralAmount0",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "debtAmount1",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidityAmount0",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidityAmount1",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "accruedFees0",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "accruedFees1",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vaultAmount0",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vaultAmount1",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalAssets",
      "234"
    )
    assert.fieldEquals(
      "Action",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalSupply",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
