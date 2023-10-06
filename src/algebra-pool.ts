import { Collect as CollectEvent, Swap as SwapEvent } from "../generated/AlgebraPool/AlgebraPool";
import { Burn, Collect, GlobalState, Initialize, Swap } from "../generated/schema";

export function handleCollect(event: CollectEvent): void {
  if (event.params.owner.toHexString().toLowerCase() == "0x767901b7d185bb951c7da20cf55ae1f681953217") {
    let globalState = GlobalState.load("current");

    //calc feeAPR with tick, timestamp - lastTimeCollect, fee0&1, totalAsset
    let amount0 = event.params.amount0;
    let amount1 = event.params.amount1;
    let tick = globalState.currentTick;
    let totalAsset = globalState.totalAsset;

    globalState.lastTimeCollect = event.block.timestamp;
    globalState.save();
  }
}

export function handleSwap(event: SwapEvent): void {
  let globalState = GlobalState.load("current");

  if (globalState == null) {
    globalState = new GlobalState("current");
    globalState.currentTick = 0;
    globalState.totalAsset = 0;
  }

  globalState.currentTick = event.params.tick;

  globalState.save();
}
