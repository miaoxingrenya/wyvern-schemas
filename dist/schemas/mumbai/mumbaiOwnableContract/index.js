"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// ---begin----2022年3月14日-lzg-------
const Web3 = require("web3");
const types_1 = require("../../../types");
// 更改名字
exports.mumbaiOwnableContractSchema = {
    version: 1,
    deploymentBlock: 0,
    // 更改名字
    name: 'mumbaiOwnableContract',
    // 更改描述
    description: 'Mumbai Ownable Smart Contract',
    // 图标没换，还是rinkeby的eth图标
    thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
    // 合约用的一个
    website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
    fields: [
        { name: 'Name', type: 'string', description: 'Contract Name' },
        { name: 'Address', type: 'address', description: 'Contract Address' },
    ],
    assetFromFields: (fields) => ({
        name: fields.Name,
        address: fields.Address,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            // 图标没换，还是rinkeby的eth图标
            thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
            title: 'Ownable Contract: "' + asset.name + '"',
            description: 'Ownable at address ' + asset.address,
            // 浏览器更换为mumbai测试网
            // 以下没有做更改
            url: 'https://mumbai.polygonscan.com/address/' + asset.address,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferOwnership',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: 'newOwner', type: 'address' },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'owner',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: a => a.address,
};
// ---end----2022年3月14日-lzg-------
// 原始代码
// import * as Web3 from 'web3';
// import {
//   FunctionInputKind,
//   FunctionOutputKind,
//   Schema,
//   StateMutability,
// } from '../../../types';
// export interface RinkebyOwnableContractType {
//   name?: string;
//   address: string;
// }
// export const rinkebyOwnableContractSchema: Schema<RinkebyOwnableContractType> = {
//   version: 1,
//   deploymentBlock: 0,
//   name: 'OwnableContract',
//   description: 'Rinkeby Ownable Smart Contract',
//   thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
//   website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
//   fields: [
//     {name: 'Name', type: 'string', description: 'Contract Name'},
//     {name: 'Address', type: 'address', description: 'Contract Address'},
//   ],
//   assetFromFields: (fields: any) => ({
//     name: fields.Name,
//     address: fields.Address,
//   }),
//   formatter:
//     async asset => {
//       return {
//         thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
//         title: 'Ownable Contract: "' + asset.name + '"',
//         description: 'Ownable at address ' + asset.address,
//         url: 'https://rinkeby.etherscan.io/address/' + asset.address,
//         properties: [],
//       };
//   },
//   functions: {
//     transfer: asset => ({
//       type: Web3.AbiType.Function,
//       name: 'transferOwnership',
//       payable: false,
//       constant: false,
//       stateMutability: StateMutability.Nonpayable,
//       target: asset.address,
//       inputs: [
//         {kind: FunctionInputKind.Replaceable, name: 'newOwner', type: 'address'},
//       ],
//       outputs: [],
//     }),
//     ownerOf: asset => ({
//       type: Web3.AbiType.Function,
//       name: 'owner',
//       payable: false,
//       constant: true,
//       stateMutability: StateMutability.View,
//       target: asset.address,
//       inputs: [],
//       outputs: [
//         {kind: FunctionOutputKind.Owner, name: 'owner', type: 'address'},
//       ],
//     }),
//     assetsOfOwnerByIndex: [],
//   },
//   events: {
//     transfer: [],
//   },
//   hash: a => a.address,
// };
//# sourceMappingURL=index.js.map