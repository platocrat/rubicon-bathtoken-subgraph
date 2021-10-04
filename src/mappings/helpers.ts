import { Address } from "@graphprotocol/graph-ts";
import { BathToken } from "../../generated/BathToken/BathToken";
import {
  BathToken as BathTokenSchema
} from "../../generated/schema";
import { Upgraded } from "../../generated/BathToken/TransparentUpgradeableProxy";


export let zeroAddress = '0x0000000000000000000000000000000000000000'


export function createBathToken(
  _bathTokenAddress: Address,
  event: Upgraded
): BathTokenSchema {
  let bathToken: BathTokenSchema,
    contract = BathToken.bind(_bathTokenAddress)

  let timeOfInit = event.block.timestamp

  bathToken = new BathTokenSchema(_bathTokenAddress.toHexString())

  bathToken.id = _bathTokenAddress.toHexString()
  bathToken.timeOfInit = timeOfInit

  return bathToken as BathTokenSchema
}