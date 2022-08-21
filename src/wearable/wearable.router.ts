import express, { Request, Response } from "express";
import { express as dclExpress, DecentralandSignatureData } from "decentraland-crypto-middleware";
import * as WearableService from "./wearable.service";
import { WearableClaim } from "./wearable.types";
import { VALID_SIGNATURE_TOLERANCE_INTERVAL_MS, Metadata } from "../security/utils";

export const wearableRouter = express.Router();

wearableRouter.post("/claim", 
dclExpress({ expiration: VALID_SIGNATURE_TOLERANCE_INTERVAL_MS }), 
async (req: Request & DecentralandSignatureData<Metadata>, res: Response) => {
  const artClaim: WearableClaim = {
    wallet: req.auth,
    clientIp: req.clientIp,
    contractAddress: req.body.contractAddress,
    tokenId: req.body.tokenId
  };

  try {
    const wearableClaim = await WearableService.sendWearable(artClaim);
    if (wearableClaim.success) {
      return res.status(200).send({ valid: true, msg: "Wearable minted!" });
    } else {
      return res.status(500).send({ valid: false, error: "Could not mint wearable due to a server error." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ valid: false, error: "Could not mint wearable due to a server error." });
  }
});
