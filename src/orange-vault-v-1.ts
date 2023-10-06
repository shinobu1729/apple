import {
  Action as ActionEvent,
  Approval as ApprovalEvent,
  BurnAndCollectFees as BurnAndCollectFeesEvent,
  Transfer as TransferEvent,
} from "../generated/OrangeVaultV1/OrangeVaultV1";
import { Action, Approval, BurnAndCollectFees, Transfer, GlobalState } from "../generated/schema";

export function handleAction(event: ActionEvent): void {
  let entity = new Action(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.actionType = event.params.actionType;
  entity.caller = event.params.caller;
  entity.collateralAmount0 = event.params.collateralAmount0;
  entity.debtAmount1 = event.params.debtAmount1;
  entity.liquidityAmount0 = event.params.liquidityAmount0;
  entity.liquidityAmount1 = event.params.liquidityAmount1;
  entity.accruedFees0 = event.params.accruedFees0;
  entity.accruedFees1 = event.params.accruedFees1;
  entity.vaultAmount0 = event.params.vaultAmount0;
  entity.vaultAmount1 = event.params.vaultAmount1;
  entity.totalAssets = event.params.totalAssets;
  entity.totalSupply = event.params.totalSupply;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let globalState = GlobalState.load("current");

  if (globalState == null) {
    globalState = new GlobalState("current");
    globalState.currentTick = 0;
    globalState.totalAsset = 0;
    globalState.totalAsset = 0;
  }

  globalState.totalAsset = event.params.totalAssets;

  globalState.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBurnAndCollectFees(event: BurnAndCollectFeesEvent): void {
  let entity = new BurnAndCollectFees(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.burn0 = event.params.burn0;
  entity.burn1 = event.params.burn1;
  entity.fee0 = event.params.fee0;
  entity.fee1 = event.params.fee1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
