import { uniq } from './'
import { pipe } from 'fp-ts/lib/pipeable'
import * as assert from 'assert'


const uniqTestResult = pipe(
    ["123", "123", "234", "234"],
    uniq
)


assert.deepStrictEqual(uniqTestResult, ["123", "234"])
