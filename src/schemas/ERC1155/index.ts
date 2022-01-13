import { AbiType } from 'ethereum-types';

import {
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../types';

export interface SemiFungibleTradeType {
  id: string;
  address: string;
  quantity: string;
}

export const ERC1155Schema: Schema<SemiFungibleTradeType> = {
  version: 1,
  deploymentBlock: 0, // Not indexed (for now; need asset-specific indexing strategy)
  name: 'ERC1155',
  description: 'Items conforming to the ERC1155 spec, using transferFrom.',
  thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
  website: 'https://github.com/ethereum/eips/issues/1155',
  fields: [
    {name: 'ID', type: 'uint256', description: 'Asset Token ID'},
    {name: 'Address', type: 'address', description: 'Asset Contract Address'},
    {name: 'Quantity', type: 'uint256', description: 'Quantity to transfer'},
  ],
  assetFromFields: (fields: any) => ({
    id: fields.ID,
    address: fields.Address,
    quantity: fields.Quantity,
  }),
  assetToFields: asset => ({
    ID: asset.id,
    Address: asset.address,
    Quantity: asset.quantity,
  }),
  formatter:
    async asset => {
      return {
        title: 'ERC1155 Asset: Token ID ' + asset.id + ' at ' + asset.address,
        description: 'Trading ' + asset.quantity.toString(),
        url: '',
        thumbnail: '',
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: AbiType.Function,
      name: 'safeTransferFrom',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_from', type: 'address'},
        {kind: FunctionInputKind.Replaceable, name: '_to', type: 'address'},
        {kind: FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id},
        {kind: FunctionInputKind.Count, name: '_value', type: 'uint256', value: asset.quantity},
        {kind: FunctionInputKind.Data, name: '_data', type: 'bytes', value: ''},
      ],
      outputs: [],
    }),
    countOf: asset => ({
      type: AbiType.Function,
      name: 'balanceOf',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_owner', type: 'address'},
        {kind: FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id},
      ],
      outputs: [
        {kind: FunctionOutputKind.Count, name: 'balance', type: 'uint'},
      ],
      assetFromOutputs: (outputs: any) => outputs.balance,
    }),
    assetsOfOwnerByIndex: [],
  },
  events: {
    transfer: [],
  },
  hash: asset => asset.address + '-' + asset.id,
};
