import {padToEven} from 'ethjs-util';
import MinterDeclareCandidacyTxData from 'minterjs-tx/src/tx-data/declare-candidacy';
import {TX_TYPE_DECLARE_CANDIDACY} from 'minterjs-tx/src/tx-types';
import converter from 'minterjs-tx/src/converter';
import {formatCoin} from 'minterjs-tx/src/helpers';
import {toBuffer} from 'minterjs-util';

/**
 * @constructor
 * @param {string} privateKey
 * @param {string} address
 * @param {string} publicKey
 * @param {number} commission
 * @param {string} coinSymbol
 * @param {number} stake
 * @param {string} feeCoinSymbol
 * @param {string} [message]
 * @return {TxParams}
 */
export default function DeclareCandidacyTxParams({privateKey, address, publicKey, commission, coinSymbol, stake, feeCoinSymbol, message}) {
    const txData = new MinterDeclareCandidacyTxData({
        address: toBuffer(address),
        pubKey: toBuffer(publicKey),
        commission: `0x${padToEven(Number(commission).toString(16))}`,
        coin: formatCoin(coinSymbol),
        stake: `0x${converter.convert(stake, 'pip').toString(16)}`,
    });

    if (!feeCoinSymbol) {
        feeCoinSymbol = coinSymbol;
    }

    return {
        privateKey,
        message,
        gasCoin: feeCoinSymbol,
        txType: TX_TYPE_DECLARE_CANDIDACY,
        txData: txData.serialize(),
    };
}
