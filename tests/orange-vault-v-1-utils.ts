import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Action,
  Approval,
  BurnAndCollectFees,
  Transfer
} from "../generated/OrangeVaultV1/OrangeVaultV1"

export function createActionEvent(
  actionType: i32,
  caller: Address,
  collateralAmount0: BigInt,
  debtAmount1: BigInt,
  liquidityAmount0: BigInt,
  liquidityAmount1: BigInt,
  accruedFees0: BigInt,
  accruedFees1: BigInt,
  vaultAmount0: BigInt,
  vaultAmount1: BigInt,
  totalAssets: BigInt,
  totalSupply: BigInt
): Action {
  let actionEvent = changetype<Action>(newMockEvent())

  actionEvent.parameters = new Array()

  actionEvent.parameters.push(
    new ethereum.EventParam(
      "actionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(actionType))
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralAmount0",
      ethereum.Value.fromUnsignedBigInt(collateralAmount0)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "debtAmount1",
      ethereum.Value.fromUnsignedBigInt(debtAmount1)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityAmount0",
      ethereum.Value.fromUnsignedBigInt(liquidityAmount0)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityAmount1",
      ethereum.Value.fromUnsignedBigInt(liquidityAmount1)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "accruedFees0",
      ethereum.Value.fromUnsignedBigInt(accruedFees0)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "accruedFees1",
      ethereum.Value.fromUnsignedBigInt(accruedFees1)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAmount0",
      ethereum.Value.fromUnsignedBigInt(vaultAmount0)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAmount1",
      ethereum.Value.fromUnsignedBigInt(vaultAmount1)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "totalAssets",
      ethereum.Value.fromUnsignedBigInt(totalAssets)
    )
  )
  actionEvent.parameters.push(
    new ethereum.EventParam(
      "totalSupply",
      ethereum.Value.fromUnsignedBigInt(totalSupply)
    )
  )

  return actionEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return approvalEvent
}

export function createBurnAndCollectFeesEvent(
  burn0: BigInt,
  burn1: BigInt,
  fee0: BigInt,
  fee1: BigInt
): BurnAndCollectFees {
  let burnAndCollectFeesEvent = changetype<BurnAndCollectFees>(newMockEvent())

  burnAndCollectFeesEvent.parameters = new Array()

  burnAndCollectFeesEvent.parameters.push(
    new ethereum.EventParam("burn0", ethereum.Value.fromUnsignedBigInt(burn0))
  )
  burnAndCollectFeesEvent.parameters.push(
    new ethereum.EventParam("burn1", ethereum.Value.fromUnsignedBigInt(burn1))
  )
  burnAndCollectFeesEvent.parameters.push(
    new ethereum.EventParam("fee0", ethereum.Value.fromUnsignedBigInt(fee0))
  )
  burnAndCollectFeesEvent.parameters.push(
    new ethereum.EventParam("fee1", ethereum.Value.fromUnsignedBigInt(fee1))
  )

  return burnAndCollectFeesEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEvent
}
