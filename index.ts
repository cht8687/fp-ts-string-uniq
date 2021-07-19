import { uniq as arrayUniq } from "fp-ts/lib/Array";
import { Eq } from "fp-ts/string"

export const uniq = arrayUniq(Eq)
